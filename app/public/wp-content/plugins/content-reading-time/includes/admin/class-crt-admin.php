<?php
namespace CRT;

if ( ! defined( 'ABSPATH' ) ) exit;

final class Admin {
	public function __construct() {
		add_action( 'admin_menu', [ $this, 'register_menu' ] );
		add_action( 'admin_enqueue_scripts', [ $this, 'enqueue_assets' ] );
	}

	public function register_menu() : void {
		add_menu_page(
			__('Content Reading Time','content-reading-time'),
			__('Reading Time','content-reading-time'),
			'manage_options',
			'content-reading-time',
			[ $this, 'render_page' ],
			'dashicons-clock',
			65
		);
	}

	public function enqueue_assets( string $hook_suffix ) : void {
		// Only load assets on our plugin's admin page.
		// The hook_suffix for a top-level menu page is 'toplevel_page_{menu_slug}'.
		if ( 'toplevel_page_content-reading-time' !== $hook_suffix ) {
			return;
		}

		// Enqueue custom admin styles.
		wp_enqueue_style( 'crt-admin', CRT_URL . 'assets/css/admin.css', array(), CRT_VER );

		// Enqueue the WordPress color picker styles, which are a dependency for the script.
		wp_enqueue_style( 'wp-color-picker' );

		// Enqueue our custom admin script.
		wp_enqueue_script(
			'crt-admin-script',
			CRT_URL . 'assets/js/admin.js',
			[ 'jquery', 'wp-color-picker' ],
			CRT_VER,
			true
		);
	}

	public function render_page() : void {
		if ( ! current_user_can( 'manage_options' ) ) return;

		$nonce_action = 'crt-tabs-navigation';
		$nonce_name   = '_crt_tabs_nonce';

		// Verify nonce if a tab is set, otherwise default to 'general'.
		if ( isset( $_GET['tab'] ) ) {
			check_admin_referer( $nonce_action, $nonce_name );
			$active = sanitize_key( $_GET['tab'] );
		} else {
			$active = 'general';
		}

		$tabs = [
			'general'  => __('General Settings','content-reading-time'),
			'readtime' => __('Read Time','content-reading-time'),
			'progress' => __('Progress Bar','content-reading-time'),
			'starter' => __( 'Getting Started', 'content-reading-time' ),
		];

        echo '<div class="wrap"><h1>' . esc_html__( 'Content Reading Time', 'content-reading-time' ) . '</h1>';
        echo '<h2 class="nav-tab-wrapper" style="margin-top:20px;">';

        foreach ( $tabs as $k => $label ) {
			$url   = wp_nonce_url( admin_url( 'admin.php?page=content-reading-time&tab=' . $k ), $nonce_action, $nonce_name );
            $class = 'nav-tab' . ( $active === $k ? ' nav-tab-active' : '' );
            printf(
                '<a class="%1$s" href="%2$s">%3$s</a>',
                esc_attr( $class ),
                esc_url( $url ),
                esc_html( $label )
            );
        }

        echo '</h2>';

        echo '<form method="post" action="options.php">';
        settings_fields( 'crt_settings_group' );
        echo '<input type="hidden" name="crt_active_tab" value="' . esc_attr( $active ) . '">';

        switch ( $active ) {
            case 'readtime':
                do_settings_sections( 'crt_page_readtime' );
                break;

            case 'progress':
                do_settings_sections( 'crt_page_progress' );
                break;

            case 'starter':
                do_settings_sections( 'crt_page_starter' );
                break;

            default:
                do_settings_sections( 'crt_page_general' );
        }

        submit_button();
		echo '</form></div>';
	}
}
