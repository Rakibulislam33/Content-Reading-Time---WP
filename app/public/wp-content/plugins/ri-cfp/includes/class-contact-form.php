<?php
// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

class Your_Plugin_Contact_Form {

    public function __construct() {
        add_shortcode( 'your_contact_form', array( $this, 'contact_form' ) );
    }

    public function enqueue_scripts() {
        wp_enqueue_style( 'your-plugin-style', YOUR_PLUGIN_URL . 'css/style.css', array(), YOUR_PLUGIN_VERSION );
        wp_enqueue_script( 'your-plugin-script', YOUR_PLUGIN_URL . 'js/script.js', array( 'jquery' ), YOUR_PLUGIN_VERSION, true );

        wp_localize_script( 'your-plugin-script', 'your_plugin_ajax', array(
            'ajax_url' => admin_url( 'admin-ajax.php' ),
            'nonce'    => wp_create_nonce( 'your_plugin_nonce' ),
        ) );
    }

    public function contact_form() {
        ob_start();
        ?>
        <form action="" method="post" id="your-plugin-contact-form">
            <label for="your_name">Name:</label><br>
            <input type="text" id="your_name" name="your_name"><br><br>

            <label for="your_email">Email:</label><br>
            <input type="email" id="your_email" name="your_email"><br><br>

            <label for="your_message">Message:</label><br>
            <textarea id="your_message" name="your_message"></textarea><br><br>

            <input type="submit" name="your_plugin_form_submitted" value="Submit">
        </form>
        <?php
        return ob_get_clean();
    }
}
