<?php
// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Your_Plugin_Ajax_Handler {

	public function __construct() {
		add_action( 'wp_ajax_your_plugin_submit_form', array( $this, 'submit_form_callback' ) );
		add_action( 'wp_ajax_nopriv_your_plugin_submit_form', array( $this, 'submit_form_callback' ) ); // For non-logged-in users
	}

	public function submit_form_callback() {
		check_ajax_referer( 'your_plugin_nonce', 'nonce' );

		$name    = sanitize_text_field( $_POST['name'] );
		$email   = sanitize_email( $_POST['email'] );
		$message = sanitize_textarea_field( $_POST['message'] );

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

		if ( ! empty( $errors ) ) {
			wp_send_json_error( $errors );
		}

		global $wpdb;
		$table_name = $wpdb->prefix . 'your_contact_form_data';

		$result = $wpdb->insert(
			$table_name,
			array(
				'time'    => current_time( 'mysql' ),
				'name'    => $name,
				'email'   => $email,
				'message' => $message,
			),
			array( '%s', '%s', '%s', '%s' )
		);

		if ( $result ) {
			wp_send_json_success( 'Thank you for your submission!' );
		} else {
			wp_send_json_error( 'There was an error submitting your form.  Please try again.' );
		}

		wp_die();
	}
}
