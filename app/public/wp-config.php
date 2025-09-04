<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );
// In your wp-config.php
// define( 'DB_HOST', '127.0.0.1' );


/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'aAwU3B.7(bVU/t[XtJUb`3>E*]GB$oBn&&Z%pm!MQm5NuK!1=2I6.s<umEIp(05b' );
define( 'SECURE_AUTH_KEY',   't-.jphY?R)u{>0k]^hZstUJoQxCVH8w&Y6wr].YeK?TzvX#VA9:FhrVf}X;Q?p]*' );
define( 'LOGGED_IN_KEY',     'x R=pP9.oL^=T{AusK|`DTD#:)2d3h[^WP+i~wc65ugC!-=OJPv+Q;;Q6u$u#{$G' );
define( 'NONCE_KEY',         'M;H!;p,[KMi:~Jifi5za-<5$bbB[f}x%[@L5wmhmtjq@exHDB(Kc6hF[l0iYxN<b' );
define( 'AUTH_SALT',         'RIm0}(efW7pq6^5l.G=-kpeD9Uyli&@sFIK~d29=.*)DifY]Iey(WgcC<sA-RX}?' );
define( 'SECURE_AUTH_SALT',  'S5XFk*$gFQyqE~QUsC|]:IT$zd#AqDpL=$Mt#h!2]~znzu|F>9Q7l>%z`XNh Hjk' );
define( 'LOGGED_IN_SALT',    '%|/p6_J5y?{r31]iL KZE^,_,8uf?vw!b.8&dk`3A|rjzAkGl$pC<%;/!-U(bIHI' );
define( 'NONCE_SALT',        ' gtnBziKH5HC2M#0FOq:=CpcY2M!l0#/:&6vFCH]Dgij$BCS;lM{j<G.(Co~ vA[' );
define( 'WP_CACHE_KEY_SALT', 'R}E=}&$(dE<[x%zxm;)@8o~ur%zReKL>AlE-oLf(kGaZ!M#E0 #3Y9JnvAQIrFTC' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
// if ( ! defined( 'WP_DEBUG' ) ) {
// 	define( 'WP_DEBUG', false );
// }
//custom settings
define( 'WP_DEBUG', true );
define('WP_DEBUG_LOG', true );
define('WP_DEBUG_DISPLAY', true );

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
define('SCRIPT_DEBUG', true);
define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
