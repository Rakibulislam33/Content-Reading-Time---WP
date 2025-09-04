<?php
namespace CRT;

if ( ! defined( 'ABSPATH' ) ) exit;

final class Plugin {
	public static function defaults() : array {
		return [
			'enabled'          => 1,
			'position'         => 'before',          // before|after|manual
			'post_types'       => ['post'],          // enabled CPTs
			'wpm'              => 200,               // words per minute
			'image_seconds'    => 10,                // extra seconds per image
			// Use plain strings for defaults before 'init' to avoid "too early" translation notices.
			// Translations will be applied correctly on settings pages after 'init' has run.
			'min_label'        => did_action('init') ? __('min read', 'content-reading-time') : 'min read',
			'prefix_text'      => did_action('init') ? __('Reading Time:', 'content-reading-time') : 'Reading Time:',
			'show_icon'        => 1,
			'template'         => '<span class="crt-prefix">{{prefix}}</span> <strong class="crt-time">{{time}}</strong> <span class="crt-min">{{min_label}}</span>',
			'progress_enabled' => 1,
			'progress_height'  => 4,
			'progress_color'   => '#2563eb',
			'progress_bg'      => 'rgba(0,0,0,.08)',
		];
	}

	/** Helper to get settings merged with defaults */
	public static function get_settings() : array {
		return array_replace( self::defaults(), (array) get_option( CRT_OPT_KEY, [] ) );
	}
}
