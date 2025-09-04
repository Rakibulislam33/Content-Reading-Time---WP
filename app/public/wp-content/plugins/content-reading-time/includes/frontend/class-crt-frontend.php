<?php
namespace CRT;

if ( ! defined( 'ABSPATH' ) ) exit;

final class Frontend {

	private array $settings;

	public function __construct() {
		$this->settings = Plugin::get_settings();

		// Don't add any hooks if the plugin is globally disabled.
		if ( empty( $this->settings['enabled'] ) ) {
			return;
		}

		add_action( 'wp_enqueue_scripts', [ $this, 'enqueue_assets' ] );
		add_filter( 'the_content', [ $this, 'inject_into_content' ], 20 );
		add_action( 'init', [ $this, 'register_shortcode' ] );
	}

	public function enqueue_assets() : void {
		// Only load assets if we are on a supported post type.
		if ( ! $this->is_supported_post_type() ) {
			return;
		}

		// Enqueue base styles for the reading time text.
		wp_enqueue_style( 'crt-frontend', CRT_URL . 'assets/css/frontend.css', [], CRT_VER );

		// Enqueue progress bar script if it's enabled.
		if ( ! empty( $this->settings['progress_enabled'] ) ) {
			wp_enqueue_script( 'crt-frontend', CRT_URL . 'assets/js/frontend.js', [], CRT_VER, true );
			add_action( 'wp_footer', [ $this, 'add_progress_bar_html' ] );
		}
	}

	/** Auto inject into content if enabled/position matches & post type allowed */
	public function inject_into_content( $content ) {
		if ( 'manual' === $this->settings['position'] || ! $this->is_supported_post_type() ) {
			return $content;
		}

		$html = $this->render_markup( get_post() );

		if ( 'before' === $this->settings['position'] ) {
			return $html . $content;
		} elseif ( 'after' === $this->settings['position'] ) {
			return $content . $html;
		}

		return $content;
	}

	public function register_shortcode() : void {
		add_shortcode( 'crt_read_time', function() {
			return $this->render_markup( get_post() );
		});
	}

	private function render_markup( \WP_Post $post ) : string {
		$seconds = $this->estimate_seconds( $post );
		$minutes = max( 1, (int) round( $seconds / 60 ) );

		$time_str = (string) $minutes; // “3”
		$template = (string) $this->settings['template'];

		$out = strtr( $template, [
			'{{prefix}}'    => esc_html( $this->settings['prefix_text'] ),
			'{{time}}'      => esc_html( $time_str ),
			'{{min_label}}' => esc_html( $this->settings['min_label'] ),
		] );

		$icon = ! empty( $this->settings['show_icon'] ) ? '<span class="crt-icon" aria-hidden="true">⏱</span> ' : '';
		return '<div class="crt-wrap">'.$icon.$out.'</div>';
	}

	/** Reading time: words / wpm + image time */
	private function estimate_seconds( \WP_Post $post ) : int {
		$wpm    = max( 60, (int) $this->settings['wpm'] );
		$images = substr_count( (string) $post->post_content, '<img ' );

		$text   = wp_strip_all_tags( $post->post_content );
		$words  = str_word_count( $text );

		$secs_from_words = (int) floor( ( $words / $wpm ) * 60 );
		$secs_from_imgs  = (int) $images * max( 0, (int) $this->settings['image_seconds'] );

		return max( 10, $secs_from_words + $secs_from_imgs );
	}

	/**
	 * Adds the progress bar element and dynamic styles to the footer.
	 */
	public function add_progress_bar_html() : void {
		$height = (int) $this->settings['progress_height'];
		$color = esc_attr( $this->settings['progress_color'] );
		$bg_color = esc_attr( $this->settings['progress_bg'] );

		// Output two sibling divs for the progress bar. This is more robust against theme style conflicts than a nested structure.
		// The container provides the background track.
		// Output the progress bar container.
		echo sprintf(
			'<div class="crt-progress-bar-container" style="position:fixed;top:0;left:0;width:100%%;height:%dpx;background-color:%s;z-index:99998;"></div>',
			esc_attr( $height ),
			esc_attr( $bg_color )
		);

		// Output the progress bar itself.
		echo sprintf(
			'<div class="crt-progress-bar" style="position:fixed;top:0;left:0;width:0;height:%dpx;background-color:%s;z-index:99999;"></div>',
			esc_attr( $height ),
			esc_attr( $color )
		);
	
	}

	/** Checks if the current view is a singular post of a supported type. */
	private function is_supported_post_type() : bool {
		return is_singular( $this->settings['post_types'] );
	}
}
