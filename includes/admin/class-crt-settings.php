<?php
namespace CRT;

if ( ! defined( 'ABSPATH' ) ) exit;

final class Admin_Settings {

	public function register() : void {
		register_setting( 'crt_settings_group', CRT_OPT_KEY, [
			'type' => 'array',
			'sanitize_callback' => [ $this, 'sanitize' ],
			'default' => Plugin::defaults(),
		] );

		// GENERAL
		add_settings_section('crt_sec_general', '', '__return_false', 'crt_page_general');

		add_settings_field('enabled', __('Enable plugin','content-reading-time'), [ $this, 'toggle' ], 'crt_page_general', 'crt_sec_general', ['key'=>'enabled']);
		add_settings_field('position', __('Display position','content-reading-time'), [ $this, 'position' ], 'crt_page_general', 'crt_sec_general');
		add_settings_field('post_types', __('Post types','content-reading-time'), [ $this, 'post_types' ], 'crt_page_general', 'crt_sec_general');
		add_settings_field('template', __('Output template','content-reading-time'), [ $this, 'template' ], 'crt_page_general', 'crt_sec_general');
		add_settings_field('show_icon', __('Show clock icon','content-reading-time'), [ $this, 'toggle' ], 'crt_page_general', 'crt_sec_general', ['key'=>'show_icon']);

		// READ TIME
		add_settings_section('crt_sec_read', '', '__return_false', 'crt_page_readtime');
		add_settings_field('wpm', __('Words per minute','content-reading-time'), [ $this, 'number' ], 'crt_page_readtime', 'crt_sec_read', ['key'=>'wpm', 'min'=>60, 'max'=>1000]);
		add_settings_field('image_seconds', __('Extra seconds per image','content-reading-time'), [ $this, 'number' ], 'crt_page_readtime', 'crt_sec_read', ['key'=>'image_seconds', 'min'=>0, 'max'=>60]);
		add_settings_field('prefix_text', __('Prefix text','content-reading-time'), [ $this, 'text' ], 'crt_page_readtime', 'crt_sec_read', ['key'=>'prefix_text']);
		add_settings_field('min_label', __('Minutes label','content-reading-time'), [ $this, 'text' ], 'crt_page_readtime', 'crt_sec_read', ['key'=>'min_label']);

		// PROGRESS
		add_settings_section('crt_sec_progress', '', '__return_false', 'crt_page_progress');
		add_settings_field('progress_enabled', __('Enable progress bar','content-reading-time'), [ $this, 'toggle' ], 'crt_page_progress', 'crt_sec_progress', ['key'=>'progress_enabled']);
		add_settings_field('progress_height', __('Bar height (px)','content-reading-time'), [ $this, 'number' ], 'crt_page_progress', 'crt_sec_progress', ['key'=>'progress_height','min'=>1,'max'=>16]);
		add_settings_field('progress_color', __('Bar color','content-reading-time'), [ $this, 'color' ], 'crt_page_progress', 'crt_sec_progress', ['key'=>'progress_color']);
		add_settings_field('progress_bg', __('Background color','content-reading-time'), [ $this, 'color' ], 'crt_page_progress', 'crt_sec_progress', ['key'=>'progress_bg']);

		// STARTER
		add_settings_section('crt_sec_starter', '', function(){
			echo '<p>'.esc_html__('Use the shortcode [crt_read_time] to display reading time manually. Choose "Manual" in General > Display position if you don’t want automatic injection.','content-reading-time').'</p>';
		}, 'crt_page_starter');
	}

	/* ---------- Renderers ---------- */

	private function opt( string $key ) {
		$opts = Plugin::get_settings();
		return $opts[ $key ] ?? Plugin::defaults()[ $key ] ?? null;
	}

	public function toggle( array $args ) {
		$key = $args['key'];
		$val = (int) $this->opt($key);
		echo '<label><input type="checkbox" name="'.CRT_OPT_KEY.'['.$key.']" value="1" '.checked(1,$val,false).'> '.__('Enabled','content-reading-time').'</label>';
	}

	public function position() {
		$key = 'position';
		$val = esc_attr( $this->opt($key) );
		$choices = ['before'=>__('Before content','content-reading-time'),'after'=>__('After content','content-reading-time'),'manual'=>__('Manual (shortcode)','content-reading-time')];
		echo '<select name="'.CRT_OPT_KEY.'['.$key.']">';
		foreach ($choices as $k=>$label){
			echo '<option value="'.$k.'" '.selected($val,$k,false).'>'.esc_html($label).'</option>';
		}
		echo '</select>';
	}

	public function post_types() {
		$key='post_types'; $vals = (array) $this->opt($key);
		$all = get_post_types(['public'=>true],'objects');
		foreach ($all as $pt) {
			echo '<label style="display:inline-block;margin-right:12px;"><input type="checkbox" name="'.CRT_OPT_KEY.'['.$key.'][]" value="'.esc_attr($pt->name).'" '.checked(in_array($pt->name,$vals,true),true,false).'> '.esc_html($pt->labels->singular_name).'</label>';
		}
	}

	public function template() {
		$key='template'; $val = esc_textarea( (string) $this->opt($key) );
		echo '<textarea name="'.CRT_OPT_KEY.'['.$key.']" rows="3" style="width:480px;">'.$val.'</textarea>';
		echo '<p class="description">'.esc_html__('Tokens: {{prefix}}, {{time}}, {{min_label}}','content-reading-time').'</p>';
	}

	public function number( array $args ) {
		$key=$args['key']; $val = (int) $this->opt($key);
		$min=$args['min']??0; $max=$args['max']??9999;
		echo '<input type="number" min="'.$min.'" max="'.$max.'" name="'.CRT_OPT_KEY.'['.$key.']" value="'.esc_attr($val).'" />';
	}

	public function text( array $args ) {
		$key=$args['key']; $val = esc_attr( (string) $this->opt($key) );
		echo '<input type="text" name="'.CRT_OPT_KEY.'['.$key.']" value="'.$val.'" class="regular-text" />';
	}

	public function color( array $args ) {
		$key=$args['key']; $val = esc_attr( (string) $this->opt($key) );
		$default = esc_attr( Plugin::defaults()[ $key ] ?? '' );

		// The 'data-default-color' attribute adds a "Default" button to the color picker.
		echo '<input type="text" class="crt-color" name="'.CRT_OPT_KEY.'['.$key.']" value="'.$val.'" data-default-color="' . $default . '" />';
	}

	/**
	 * Sanitizes a color value.
	 *
	 * @param string $color The color string to sanitize.
	 * @return string The sanitized color string, or an empty string if invalid.
	 */
	private function sanitize_color( string $color ) : string {
		if ( empty( $color ) ) {
			return '';
		}

		// If it's a hex color, validate it.
		if ( 1 === preg_match( '/^#([a-f0-9]{3}){1,2}$/i', $color ) ) {
			return $color;
		}

		// If it's an rgb or rgba color, validate it.
		if ( 1 === preg_match( '/^rgba?\((\s*\d+\s*,){2}\s*\d+\s*(,\s*[\d.]+\s*)?\)$/i', $color ) ) {
			return $color;
		}

		return '';
	}

	/* ---------- Sanitizer ---------- */
	public function sanitize( $input ) : array {
		$in = (array) $input;
		$out = Plugin::get_settings(); // Load existing settings
		$active_tab = isset( $_POST['crt_active_tab'] ) ? sanitize_key( $_POST['crt_active_tab'] ) : 'general';

		switch ( $active_tab ) {
			case 'general':
				$out['enabled']    = ! empty( $in['enabled'] ) ? 1 : 0;
				$out['position']   = in_array( $in['position'] ?? 'before', ['before', 'after', 'manual'], true ) ? $in['position'] : 'before';
				$out['post_types'] = array_values( array_intersect( array_keys( get_post_types(['public' => true]) ), (array) ( $in['post_types'] ?? [] ) ) );
				$out['template']   = wp_kses_post( $in['template'] ?? Plugin::defaults()['template'] );
				$out['show_icon']  = ! empty( $in['show_icon'] ) ? 1 : 0;
				break;

			case 'readtime':
				$out['wpm']           = max( 60, min( 1000, (int) ( $in['wpm'] ?? 200 ) ) );
				$out['image_seconds'] = max( 0, min( 60, (int) ( $in['image_seconds'] ?? 10 ) ) );
				$out['min_label']     = sanitize_text_field( $in['min_label'] ?? 'min read' );
				$out['prefix_text']   = sanitize_text_field( $in['prefix_text'] ?? 'Reading Time:' );
				break;

			case 'progress':
				$out['progress_enabled'] = ! empty( $in['progress_enabled'] ) ? 1 : 0;
				$out['progress_height']  = max( 1, min( 16, (int) ( $in['progress_height'] ?? 4 ) ) );
				$progress_color = $this->sanitize_color( $in['progress_color'] ?? '' );
				$out['progress_color'] = $progress_color ?: Plugin::defaults()['progress_color'];

				$progress_bg = $this->sanitize_color( $in['progress_bg'] ?? '' );
				$out['progress_bg'] = $progress_bg ?: Plugin::defaults()['progress_bg'];
				break;
		}

		return $out;
	}
}
