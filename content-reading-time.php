<?php
/**
 * Plugin Name: Content Reading Time - WP
 * Description: Elegant, customizable reading-time and progress bar for your posts & pages. Shortcode + automatic placement + OOP architecture.
 * Version:     1.0.0
 * Author:      Rakibul Islam
 * Author URI:  https://rakibulislam33.github.io/
 * Text Domain: content-reading-time
 * License:     GPL v2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Plugin URI:  https://rakibulislam33.github.io/
 * Domain Path: /languages
 */

if ( ! defined( 'ABSPATH' ) )  exit;

define( 'CRT_FILE', __FILE__ );
define( 'CRT_PATH', plugin_dir_path( __FILE__ ) );
define( 'CRT_URL',  plugin_dir_url( __FILE__ ) );
define( 'CRT_VER',  '1.0.0' );
define( 'CRT_OPT_KEY', 'crt_settings' ); // single option storing all settings

require_once CRT_PATH . 'includes/class-crt-plugin.php';
require_once CRT_PATH . 'includes/admin/class-crt-admin.php';
require_once CRT_PATH . 'includes/admin/class-crt-settings.php';
require_once CRT_PATH . 'includes/class-crt-loader.php';
require_once CRT_PATH . 'includes/frontend/class-crt-frontend.php';

// Activation: set defaults
register_activation_hook( __FILE__, function () {
	$defaults = \CRT\Plugin::defaults();
	if ( ! get_option( CRT_OPT_KEY ) ) {
		add_option( CRT_OPT_KEY, $defaults );
	}
});

// Deactivation: nothing destructive (keeps settings)
// Uninstall.php will remove options if user deletes plugin

// Boot
add_action( 'plugins_loaded', function () {
	load_plugin_textdomain( 'content-reading-time', false, dirname( plugin_basename( __FILE__ ) ) . '/languages' );

	// Initialize Frontend logic.
	// This requires the Frontend class to have a constructor that adds its own hooks.
	new \CRT\Frontend();

	// Initialize Admin logic only if we are in the admin area.
	if ( is_admin() ) {
		// Handles the admin menu page and enqueuing assets.
		new \CRT\Admin();
		// Handles registering all the settings fields.
		$settings = new \CRT\Admin_Settings();
		add_action( 'admin_init', [ $settings, 'register' ] );
	}
});
