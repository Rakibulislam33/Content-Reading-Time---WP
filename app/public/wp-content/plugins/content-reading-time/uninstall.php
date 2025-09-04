<?php
// Remove options on uninstall (when plugin is DELETED from admin)
defined( 'WP_UNINSTALL_PLUGIN' ) || exit;
delete_option( 'crt_settings' );
