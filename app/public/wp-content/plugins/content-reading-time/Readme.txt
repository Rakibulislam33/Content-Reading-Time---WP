=== Content Reading Time ===
Contributors: rakibulislam33
Donate Links: https://buymeacoffee.com/rakibulislam
Author URI: https://rakibulislam33.github.io/
Plugin URI: https://wordpress.org/plugins/content-reading-time/
Tags: reading time, content, blog, reading-time
Requires at least: 6.0
Tested up to: 6.8
Stable tag: 1.0.0
Requires PHP: 7.2
Author: Rakibul Islam
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

A simple plugin to display the estimated reading time for posts and custom post types.

== Description ==
Content Reading Time calculates and displays an estimated reading time for post content and any public custom post types. It counts words in the post (stripping HTML), applies a configurable words-per-minute rate (default 200), and formats results as a readable string (for example "3 min read" or "Less than a minute"). Display options include a shortcode [reading_time], a template tag crt_display_reading_time(), and an automatic prepend/append via the_content filter.

The plugin is developer-friendly: use filters like 'crt_words_per_minute' to change speed, 'crt_display_for_post' to control per-post visibility, and 'crt_reading_time_output' to modify the final HTML. It is lightweight and designed to avoid performance issues (clean word counting and optional caching via post meta or transients). Output uses simple, accessible markup suitable for themes and supports localization (i18n) and RTL layouts. Examples and hooks are documented in the main plugin file so you can easily adapt appearance, placement, and behavior.

Features:
- Estimates reading time using configurable words-per-minute.
- Shortcode and template tag for flexible placement.
- Works with the_content filter and custom post types.
- Developer-friendly filters and actions for customization.

== Installation ==
1. Upload the plugin folder to the `/wp-content/plugins/` directory.
2. Activate the plugin through the 'Plugins' screen in WordPress.
3. (Optional) Use the shortcode, template tag, or enable automatic display.

Shortcode:
[reading_time]

Template tag (place in theme templates):
<?php if ( function_exists( 'crt_display_reading_time' ) ) { crt_display_reading_time(); } ?>

Automatic (filters): The plugin can append the reading time to the post content. See plugin settings or code comments for available filters.

== Frequently Asked Questions ==
= Can I change the words-per-minute calculation? =
Yes. The plugin applies a filter 'crt_words_per_minute' so you can change the default reading speed.

= Does it support custom post types? =
Yes. The plugin works with any public post type; use filters to include or exclude specific types.

= How do I hide the reading time for a single post? =
You can remove it via a post meta flag, a custom field read by the plugin, or use the 'crt_display_for_post' filter to control per-post output.

== Screenshots ==
1. General Settings
2. Read Time
3. Progress Bar
4. Getting Started

== Changelog ==
= 1.0.0 =
* Initial release — estimated reading time, shortcode, template tag, filters.

== Upgrade Notice ==
= 1.0.0 =
Initial public release.

== Arbitrary section ==
If you need support or want to contribute, open an issue on the plugin's repository or add your WordPress.org username to the Contributors list.
