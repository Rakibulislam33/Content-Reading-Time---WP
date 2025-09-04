<?php
// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Your_Plugin_Admin_Page {

	public function __construct() {
		add_action( 'admin_menu', array( $this, 'admin_menu' ) );
	}

  public function enqueue_admin_scripts( $hook ) {
    if ( 'toplevel_page_your-plugin' !== $hook ) {
        return;
    }
    wp_enqueue_style( 'your-plugin-admin-style', YOUR_PLUGIN_URL . 'css/admin-style.css' );
}

	public function admin_menu() {
		add_menu_page(
			'Contact Form Data',
			'Contact Form',
			'manage_options',
			'your-plugin',
			array( $this, 'admin_page' ),
			'dashicons-email-alt'
		);
	}

	public function admin_page() {
		global $wpdb;
		$table_name = $wpdb->prefix . 'your_contact_form_data';
		$results    = $wpdb->get_results( "SELECT * FROM $table_name", OBJECT );

		echo '<div class="wrap">';
		echo '<h1>Contact Form Submissions</h1>';

		echo '<table class="wp-list-table widefat fixed striped">';
		echo '<thead><tr><th>Name</th><th>Email</th><th>Message</th><th>Time</th></tr></thead>';
		echo '<tbody>';

		if ( $results ) {
			foreach ( $results as $result ) {
				echo '<tr>';
				echo '<td>' . esc_html( $result->name ) . '</td>';
				echo '<td>' . esc_html( $result->email ) . '</td>';
				echo '<td>' . esc_html( $result->message ) . '</td>';
				echo '<td>' . esc_html( $result->time ) . '</td>';
				echo '</tr>';
			}
		} else {
			echo '<tr><td colspan="4">No submissions yet.</td></tr>';
		}

		echo '</tbody></table>';
		echo '</div>';
	}
}
