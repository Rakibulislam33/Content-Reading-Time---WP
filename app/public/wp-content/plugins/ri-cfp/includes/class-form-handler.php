<?php
// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Your_Plugin_Form_Handler {

	public function __construct() {
		add_action( 'wp_head', array( $this, 'process_form' ) );
	}

	public function process_form() {
		if ( isset( $_POST['your_plugin_form_submitted'] ) ) {
			// Sanitize data.
			$name    = sanitize_text_field( $_POST['your_name'] );
			$email   = sanitize_email( $_POST['your_email'] );
			$message = sanitize_textarea_field( $_POST['your_message'] );

			// Validate data (example).
			$errors = array();
			if ( empty( $name ) ) {
				$errors[] = 'Name is required.';
			}
			if ( ! is_email( $email ) ) {
				$errors[] = 'Invalid email format.';
			}
			if ( empty( $message ) ) {
				$errors[] = 'Message is required.';
			}

			if ( empty( $errors ) ) {
				global $wpdb;
				$table_name = $wpdb->prefix . 'your_contact_form_data';

				$wpdb->insert(
					$table_name,
					array(
						'time'    => current_time( 'mysql' ),
						'name'    => $name,
						'email'   => $email,
						'message' => $message,
					),
					array( '%s', '%s', '%s', '%s' )
				);

				// Optionally, send an email or display a success message.
				echo '<p>Thank you for your submission!</p>';
			} else {
				// Display errors.
				echo '<ul class="your-plugin-errors">';
				foreach ( $errors as $error ) {
					echo '<li>' . esc_html( $error ) . '</li>';
				}
				echo '</ul>';
			}
		}
	}
}
