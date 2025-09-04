<?php
// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Your_Plugin_Activator {

	public static function activate() {
		global $wpdb;
		$table_name = $wpdb->prefix . 'your_contact_form_data';

		$charset_collate = $wpdb->get_charset_collate();

		$sql = "CREATE TABLE $table_name (
			id mediumint(9) NOT NULL AUTO_INCREMENT,
			name varchar(255) NOT NULL,
			email varchar(255) NOT NULL,
			message text NOT NULL,
			time datetime DEFAULT '0000-00-00 00:00:00' NOT NULL,
			PRIMARY KEY  (id)
		) $charset_collate;";

		require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );
		dbDelta( $sql );
	}
}
