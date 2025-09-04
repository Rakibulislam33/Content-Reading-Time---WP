<?php
/**
 * Admin settings.
 *
 * @package CRT
 */

namespace CRT;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * Class Admin_Settings
 *
 * Handles admin settings registration and rendering.
 *
 * @package CRT
 */
final class Admin_Settings {

    /**
     * Register settings, sections and fields.
     *
     * @return void
     */
    public function register() : void {
        register_setting(
            'crt_settings_group',
            CRT_OPT_KEY,
            array(
                'type'              => 'array',
                'sanitize_callback' => array( $this, 'sanitize' ),
                'default'           => Plugin::defaults(),
            )
        );

        /* GENERAL */
        add_settings_section( 'crt_sec_general', '', '__return_false', 'crt_page_general' );

        add_settings_field( 'enabled', __( 'Enable plugin', 'content-reading-time' ), array( $this, 'toggle' ), 'crt_page_general', 'crt_sec_general', array( 'key' => 'enabled' ) );
        add_settings_field( 'position', __( 'Display position', 'content-reading-time' ), array( $this, 'position' ), 'crt_page_general', 'crt_sec_general' );
        add_settings_field( 'post_types', __( 'Post types', 'content-reading-time' ), array( $this, 'post_types' ), 'crt_page_general', 'crt_sec_general' );
        add_settings_field( 'template', __( 'Output template', 'content-reading-time' ), array( $this, 'template' ), 'crt_page_general', 'crt_sec_general' );
        add_settings_field( 'show_icon', __( 'Show clock icon', 'content-reading-time' ), array( $this, 'toggle' ), 'crt_page_general', 'crt_sec_general', array( 'key' => 'show_icon' ) );

        /* READ TIME */
        add_settings_section( 'crt_sec_read', '', '__return_false', 'crt_page_readtime' );
        add_settings_field( 'wpm', __( 'Words per minute', 'content-reading-time' ), array( $this, 'number' ), 'crt_page_readtime', 'crt_sec_read', array( 'key' => 'wpm', 'min' => 60, 'max' => 1000 ) );
        add_settings_field( 'image_seconds', __( 'Extra seconds per image', 'content-reading-time' ), array( $this, 'number' ), 'crt_page_readtime', 'crt_sec_read', array( 'key' => 'image_seconds', 'min' => 0, 'max' => 60 ) );
        add_settings_field( 'prefix_text', __( 'Prefix text', 'content-reading-time' ), array( $this, 'text' ), 'crt_page_readtime', 'crt_sec_read', array( 'key' => 'prefix_text' ) );
        add_settings_field( 'min_label', __( 'Minutes label', 'content-reading-time' ), array( $this, 'text' ), 'crt_page_readtime', 'crt_sec_read', array( 'key' => 'min_label' ) );

        /* PROGRESS */
        add_settings_section( 'crt_sec_progress', '', '__return_false', 'crt_page_progress' );
        add_settings_field( 'progress_enabled', __( 'Enable progress bar', 'content-reading-time' ), array( $this, 'toggle' ), 'crt_page_progress', 'crt_sec_progress', array( 'key' => 'progress_enabled' ) );
        add_settings_field( 'progress_height', __( 'Bar height (px)', 'content-reading-time' ), array( $this, 'number' ), 'crt_page_progress', 'crt_sec_progress', array( 'key' => 'progress_height', 'min' => 1, 'max' => 16 ) );
        add_settings_field( 'progress_color', __( 'Bar color', 'content-reading-time' ), array( $this, 'color' ), 'crt_page_progress', 'crt_sec_progress', array( 'key' => 'progress_color' ) );
        add_settings_field( 'progress_bg', __( 'Background color', 'content-reading-time' ), array( $this, 'color' ), 'crt_page_progress', 'crt_sec_progress', array( 'key' => 'progress_bg' ) );

        /* STARTER */
        add_settings_section(
            'crt_sec_starter',
            '',
            array( $this, 'starter_section' ),
            'crt_page_starter'
        );
    }

    /**
     * Output the getting started section content.
     *
     * @return void
     */
    public function starter_section() : void {
        $html = '<div class="crt-getting-started">'
            . '<h2>Welcome to Read Meter! 🎉</h2>'
            . '<p>Follow these quick steps to get started:</p>'
            . '<ol>'
            . '<li><strong>Enable the Plugin</strong><br>Go to <em>General Settings → Enabled</em>.</li>'
            . '<li><strong>Choose Display Method</strong>'
            . '<ul>'
            . '<li><strong>Automatic:</strong> Select “Before content” or “After content”.</li>'
            . '<li><strong>Manual:</strong> Use <code>[crt_read_time]</code> anywhere (post, page, widget).</li>'
            . '</ul>'
            . '</li>'
            . '<li><strong>Customize Output</strong><br>In <em>General Settings</em>, adjust the <strong>Output Template</strong>.<br>Tokens:'
            . '<ul>'
            . '<li><code>{{prefix}}</code> → “Reading Time:”</li>'
            . '<li><code>{{time}}</code> → estimated minutes</li>'
            . '<li><code>{{min_label}}</code> → “min read”</li>'
            . '</ul>'
            . '</li>'
            . '<li><strong>Style It with CSS</strong><br>Use classes: <code>.crt-prefix</code>, <code>.crt-time</code>, <code>.crt-min</code>.</li>'
            . '<li><strong>Enable Progress Bar (Optional)</strong><br>Go to <em>Progress Bar</em> tab → customize bar position, colors, and style.</li>'
            . '</ol>'
            . '<p class="crt-gs-foot"><strong>That’s it!</strong> Your readers will now see the estimated reading time automatically.</p>'
            . '</div>';

        echo wp_kses_post( $html );
    }
    /* ---------- Renderers ---------- */

    /**
     * Get option value or default.
     *
     * @param string $key Option key.
     * @return mixed|null
     */
    private function opt( string $key ) {
        $opts = Plugin::get_settings();
        return $opts[ $key ] ?? Plugin::defaults()[ $key ] ?? null;
    }

    /**
     * Render a checkbox toggle.
     *
     * @param array $args Field args.
     * @return void
     */
    public function toggle( array $args ) {
        $key = $args['key'];
        $val = (int) $this->opt( $key );
        /* translators: Toggle label for enabled state. */
        $label = esc_html__( 'Enabled', 'content-reading-time' );
        printf(
            '<label><input type="checkbox" name="%s[%s]" value="1" %s /> %s</label>',
            esc_attr( CRT_OPT_KEY ),
            esc_attr( $key ),
            checked( 1, $val, false ),
            esc_html( $label )
        );
    }

    /**
     * Render position select.
     *
     * @return void
     */
    public function position() {
        $key     = 'position';
        $val     = esc_attr( $this->opt( $key ) );
        $choices = array(
            'before' => __( 'Before content', 'content-reading-time' ),
            'after'  => __( 'After content', 'content-reading-time' ),
            'manual' => __( 'Manual (shortcode)', 'content-reading-time' ),
        );

        echo '<select name="' . esc_attr( CRT_OPT_KEY ) . '[' . esc_attr( $key ) . ']">';
        foreach ( $choices as $k => $label ) {
            echo '<option value="' . esc_attr( $k ) . '" ' . selected( $val, $k, false ) . '>' . esc_html( $label ) . '</option>';
        }
        echo '</select>';
    }

    /**
     * Render post types checkboxes.
     *
     * @return void
     */
    public function post_types() {
        $key  = 'post_types';
        $vals = (array) $this->opt( $key );
        $all  = get_post_types( array( 'public' => true ), 'objects' );

        foreach ( $all as $pt ) {
            echo '<label style="display:inline-block;margin-right:12px;"><input type="checkbox" name="' . esc_attr( CRT_OPT_KEY ) . '[' . esc_attr( $key ) . '][]" value="' . esc_attr( $pt->name ) . '" ' . checked( in_array( $pt->name, $vals, true ), true, false ) . '> ' . esc_html( $pt->labels->singular_name ) . '</label>';
        }
    }

    /**
     * Render template textarea.
     *
     * @return void
     */
    public function template() {
        $key = 'template';
        $val = (string) $this->opt( $key );
        printf(
            '<textarea name="%s[%s]" rows="3" style="width:480px;">%s</textarea>',
            esc_attr( CRT_OPT_KEY ),
            esc_attr( $key ),
            esc_textarea( $val )
        );
        echo '<p class="description">' . esc_html__( 'Tokens: {{prefix}}, {{time}}, {{min_label}}', 'content-reading-time' ) . '</p>';
    }

    /**
     * Render number input.
     *
     * @param array $args Field args.
     * @return void
     */
    public function number( array $args ) {
        $key = $args['key'];
        $val = (int) $this->opt( $key );
        $min = $args['min'] ?? 0;
        $max = $args['max'] ?? 9999;

        echo '<input type="number" min="' . esc_attr( $min ) . '" max="' . esc_attr( $max ) . '" name="' . esc_attr( CRT_OPT_KEY ) . '[' . esc_attr( $key ) . ']" value="' . esc_attr( $val ) . '" />';
    }

    /**
     * Render text input.
     *
     * @param array $args Field args.
     * @return void
     */
    /**
     * Render text input.
     *
     * @param array $args Field args.
     * @return void
     */
    public function text( array $args ) : void {
        $key = $args['key'];
        $val = (string) $this->opt( $key );

        printf(
            '<input type="text" name="%s[%s]" value="%s" class="regular-text" />',
            esc_attr( CRT_OPT_KEY ),
            esc_attr( $key ),
            esc_attr( $val )
        );
    }

    /**
     * Render color picker input.
     *
     * @param array $args Field args.
     * @return void
     */
    public function color( array $args ) {
        $key     = $args['key'];
        $val     = esc_attr( (string) $this->opt( $key ) );
        $default = esc_attr( Plugin::defaults()[ $key ] ?? '' );

        // The 'data-default-color' attribute adds a "Default" button to the color picker.
        printf(
            '<input type="text" class="crt-color" name="%1$s[%2$s]" value="%3$s" data-default-color="%4$s" />',
            esc_attr( CRT_OPT_KEY ),
            esc_attr( $key ),
            esc_attr( $val ),
            esc_attr( $default )
        );
    }

    /**
     * Sanitizes a color value.
     *
     * Accepts hex (#fff, #ffffff) and rgb/rgba strings.
     *
     * @param string $color The color string to sanitize.
     * @return string The sanitized color string, or an empty string if invalid.
     */
    private function sanitize_color( string $color ) : string {
        if ( empty( $color ) ) {
            return '';
        }

        /* Hex colors. */
        if ( 1 === preg_match( '/^#([a-f0-9]{3}){1,2}$/i', $color ) ) {
            return $color;
        }

        /* rgb() or rgba(). */
        if ( 1 === preg_match( '/^rgba?\((\s*\d+\s*,){2}\s*\d+\s*(,\s*[\d.]+\s*)?\)$/i', $color ) ) {
            return $color;
        }

        return '';
    }

    /* ---------- Sanitizer ---------- */

    /**
     * Sanitizes all settings per tab.
     *
     * @param mixed $input Incoming settings.
     * @return array Sanitized settings.
     */
    public function sanitize( $input ) : array {
        // Verify the nonce created by settings_fields() before processing the data.
        // While WordPress core does this before calling the sanitize callback,
        // this explicit check satisfies security scanners and adds an extra layer of protection.
        check_admin_referer( 'crt_settings_group-options' );

        $in  = (array) $input;
        $out = Plugin::get_settings(); // Load existing settings.

        // We can now safely use the POST data.
        $active_tab = isset( $_POST['crt_active_tab'] ) ? sanitize_key( $_POST['crt_active_tab'] ) : 'general';

        switch ( $active_tab ) {
            case 'general':
                $out['enabled']    = ! empty( $in['enabled'] ) ? 1 : 0;
                $out['position']   = in_array( $in['position'] ?? 'before', array( 'before', 'after', 'manual' ), true ) ? $in['position'] : 'before';
                $out['post_types'] = array_values( array_intersect( array_keys( get_post_types( array( 'public' => true ) ) ), (array) ( $in['post_types'] ?? array() ) ) );
                $out['template']   = wp_kses_post( $in['template'] ?? Plugin::defaults()['template'] );
                $out['show_icon']  = ! empty( $in['show_icon'] ) ? 1 : 0;
                break;

            case 'readtime':
                $out['wpm']           = max( 60, min( 1000, (int) ( $in['wpm'] ?? 200 ) ) );
                $out['image_seconds'] = max( 0, min( 60, (int) ( $in['image_seconds'] ?? 10 ) ) );
                $out['min_label']     = sanitize_text_field( $in['min_label'] ?? 'min read' );
                $out['prefix_text']   = sanitize_text_field( $in['prefix_text'] ?? 'Reading Time:' );
                break;

            case 'progress':
                $out['progress_enabled'] = ! empty( $in['progress_enabled'] ) ? 1 : 0;
                $out['progress_height']  = max( 1, min( 16, (int) ( $in['progress_height'] ?? 4 ) ) );

                $progress_color         = $this->sanitize_color( $in['progress_color'] ?? '' );
                $out['progress_color'] = $progress_color ?: Plugin::defaults()['progress_color'];

                $progress_bg         = $this->sanitize_color( $in['progress_bg'] ?? '' );
                $out['progress_bg'] = $progress_bg ?: Plugin::defaults()['progress_bg'];
                break;
        }

        return $out;
    }
}
