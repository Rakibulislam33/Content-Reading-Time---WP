<?php
/**
 * Plugin Name: RI CFP Plugin
 * Description: A simple contact form plugin for WordPress.
 * Version: 1.0.0
 * Author: Rakibul Islam
 * Author URI: https://rakibulislam33.github.io/
 * License: GPL v2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: ri-cfp
 * Domain Path: /languages
 * 
 * @package ri-cfp  
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Define plugin constants.
define( 'RI_CFP_VERSION', '1.0.0' );
define( 'RI_CFP_PATH', plugin_dir_path( __FILE__ ) );
define( 'RI_CFP_URL', plugin_dir_url( __FILE__ ) );

// Autoload classes.
spl_autoload_register( 'ri_cfp_autoload' );

/**
 * Autoloader for plugin classes.
 *
 * @param string $class The class name to load.
 */
function ri_cfp_autoload( $class ) {
	$prefix = 'RI_CFP_';

	// Does the class use the namespace prefix?
	if ( 0 !== strncmp( $prefix, $class, strlen( $prefix ) ) ) {
		return;
	}

	// Get the relative class name.
	$relative_class = substr( $class, strlen( $prefix ) );

	// Replace underscores with hyphens in the relative class name, and convert to lowercase.
	$file_part = str_replace( '_', '-', strtolower( $relative_class ) );

	$file = RI_CFP_PATH . 'includes/class-' . $file_part . '.php';

	if ( file_exists( $file ) ) {
		require_once $file;
	}
}

// For activation, it's safer to include the file directly as autoloading can be unreliable during activation.
require_once RI_CFP_PATH . 'includes/class-activator.php';
register_activation_hook( __FILE__, array( 'RI_CFP_Activator', 'activate' ) );

// Initialize the plugin.
add_action( 'plugins_loaded', 'ri_cfp_init' );

/**
 * Initializes the plugin.
 */
function ri_cfp_init() {
	// Instantiate core classes.
	new RI_CFP_Form_Handler();
	$admin_page   = new RI_CFP_Admin_Page();
	new RI_CFP_Ajax_Handler();
	$contact_form = new RI_CFP_Contact_Form(); // Instantiate the form class

	// Enqueue scripts and styles.
	add_action( 'wp_enqueue_scripts', array( $contact_form, 'enqueue_scripts' ) );
	add_action( 'admin_enqueue_scripts', array( $admin_page, 'enqueue_admin_scripts' ) );
}
