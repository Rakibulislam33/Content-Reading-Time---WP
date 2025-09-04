<?php
namespace Divi_Essential\Includes;

defined( 'ABSPATH' ) || die();


/**
 * Custom Attributes class.
 *
 *
 *
 * @since             1.0.0
 * @package           Attributes
 *
 */
class DnxteAttributes {

        public function __construct() {
            
            $this->dnxte_custom_attributes();
            add_filter( 'et_pb_all_fields_unprocessed_et_pb_section', [ $this, 'dnxte_custom_attributes_modules_setting'] );
            add_filter( 'et_pb_all_fields_unprocessed_et_pb_row', [ $this, 'dnxte_custom_attributes_modules_setting'] );
            add_filter( 'et_pb_all_fields_unprocessed_et_pb_column', [ $this, 'dnxte_custom_attributes_modules_setting'] );

            add_filter( 'et_builder_get_parent_modules', [ $this, 'dnxte_attributes_parent_toggles' ], 10, 2 );
            add_filter( 'et_builder_get_child_modules', [ $this, 'dnxte_attributes_child_toggles' ], 10, 2 );

            add_filter( 'et_module_shortcode_output', array( $this, 'dnxte_attributes_section_output' ), 10, 3 );
            add_filter( 'et_module_shortcode_output', array( $this, 'dnxte_attributes_column_output' ), 10, 3 );
            add_filter( 'et_module_shortcode_output', array( $this, 'dnxte_attributes_row_output' ), 10, 3 );
            add_filter( 'et_module_shortcode_output', [ $this, 'dnxte_attributes_module_output'], 10, 3 );

        }

        public function dnxte_attributes_section_output( $output, $render_slug, $module ) {
            if( 'et_pb_section' === $render_slug ){
                if ( is_array( $output ) ) {
                    return $output;
                }
                
                $dnxte_custom_attribute_on_off = isset( $module->props['dnxte_custom_attribute_on_off'] ) ? $module->props['dnxte_custom_attribute_on_off'] : 'off';
                if ( isset( $module->props['dnxte_custom_attribute_on_off'] ) && 'on' === $module->props['dnxte_custom_attribute_on_off'] ) {
                    $dnxte_attributes_options             = $module->props['dnxte_attributes_options'];
                    $dnxte_custom_attribute_add          = isset( $module->props['dnxte_custom_attribute_add'] ) ? esc_attr( $module->props['dnxte_custom_attribute_add'] ) : 'module';
                    $dnxte_custom_attribute_css_selector = isset( $module->props['dnxte_custom_attribute_css_selector'] ) ? esc_attr( $module->props['dnxte_custom_attribute_css_selector'] ) : '';
                    $option_search                      = array( '&#91;', '&#93;' );
                    $option_replace                     = array( '[', ']' );
                    $dnxte_custom_attributes_options    = str_replace( $option_search, $option_replace, $dnxte_attributes_options );
                    $dnxte_custom_attributes            = json_decode( $dnxte_custom_attributes_options );

                    $dnxte_attributes_output = '';
                    foreach ( $dnxte_custom_attributes as $index => $option ) {
                        $data_attribute_name  = isset( $option->link_url ) ? esc_attr( $option->link_url ) : '';
                        $data_attribute_value = isset( $option->link_text ) ? esc_attr( $option->link_text ) : '';
    
                        if ( isset( $data_attribute_name ) ) {
                            $dnxte_attributes_output .= esc_attr( $data_attribute_name );
                        }
    
                        if ( isset( $data_attribute_value ) ) {
                            $dnxte_attributes_output .= ' ="' . esc_attr( $data_attribute_value ) . '"';
                        }
                    }

                    switch ($dnxte_custom_attribute_add) {
                        case 'wrapper':
                            $output = str_replace( 'class="et_pb_section ', $dnxte_attributes_output . ' class="et_pb_section dnxte_data_attributes ', $output );
                            $output = str_replace( 'class="et_pb_with_border ', $dnxte_attributes_output . ' class="et_pb_with_border dnxte_data_attributes ', $output );
                            break;
                        case 'button':
                            $output = str_replace( 'class="et_pb_button ', $dnxte_attributes_output . ' class="et_pb_button dnxte_data_attributes ', $output );
                            $output = str_replace( 'class="et_pb_with_border ', $dnxte_attributes_output . ' class="et_pb_with_border dnxte_data_attributes ', $output );
                            break;
                        case 'css':
                            if ( $dnxte_custom_attribute_css_selector ) {
                                $output = str_replace( 'class="' . ltrim( $dnxte_custom_attribute_css_selector, '.' ) . '', $dnxte_attributes_output . ' class="' . ltrim( $dnxte_custom_attribute_css_selector, '.' ) . ' dnxte_data_attributes ', $output );
                            }
                            break;

                        default:
                            # code...
                            break;
                    }
                
                
                }
            }
            return $output;
        }
        public function dnxte_attributes_row_output( $output, $render_slug, $module ) {
            if( 'et_pb_row' === $render_slug ){
                if ( is_array( $output ) ) {
                    return $output;
                }
                
                $dnxte_custom_attribute_on_off = isset( $module->props['dnxte_custom_attribute_on_off'] ) ? $module->props['dnxte_custom_attribute_on_off'] : 'off';
                if ( isset( $module->props['dnxte_custom_attribute_on_off'] ) && 'on' === $module->props['dnxte_custom_attribute_on_off'] ) {
                    $dnxte_attributes_options             = $module->props['dnxte_attributes_options'];
                    $dnxte_custom_attribute_add          = isset( $module->props['dnxte_custom_attribute_add'] ) ? esc_attr( $module->props['dnxte_custom_attribute_add'] ) : 'module';
                    $dnxte_custom_attribute_css_selector = isset( $module->props['dnxte_custom_attribute_css_selector'] ) ? esc_attr( $module->props['dnxte_custom_attribute_css_selector'] ) : '';
                    $option_search                      = array( '&#91;', '&#93;' );
                    $option_replace                     = array( '[', ']' );
                    $dnxte_custom_attributes_options    = str_replace( $option_search, $option_replace, $dnxte_attributes_options );
                    $dnxte_custom_attributes            = json_decode( $dnxte_custom_attributes_options );

                    $dnxte_attributes_output = '';
                    foreach ( $dnxte_custom_attributes as $index => $option ) {
                        $data_attribute_name  = isset( $option->link_url ) ? esc_attr( $option->link_url ) : '';
                        $data_attribute_value = isset( $option->link_text ) ? esc_attr( $option->link_text ) : '';
    
                        if ( isset( $data_attribute_name ) ) {
                            $dnxte_attributes_output .= esc_attr( $data_attribute_name );
                        }
    
                        if ( isset( $data_attribute_value ) ) {
                            $dnxte_attributes_output .= ' ="' . esc_attr( $data_attribute_value ) . '"';
                        }
                    }

                    switch ($dnxte_custom_attribute_add) {
                        case 'wrapper':
                            $output = str_replace( 'class="et_pb_row ', $dnxte_attributes_output . ' class="et_pb_row dnxte_data_attributes ', $output );
                            $output = str_replace( 'class="et_pb_with_border ', $dnxte_attributes_output . ' class="et_pb_with_border dnxte_data_attributes ', $output );
                            break;
                        case 'button':
                            $output = str_replace( 'class="et_pb_button ', $dnxte_attributes_output . ' class="et_pb_button dnxte_data_attributes ', $output );
                            $output = str_replace( 'class="et_pb_with_border ', $dnxte_attributes_output . ' class="et_pb_with_border dnxte_data_attributes ', $output );
                            break;
                        case 'css':
                            if ( $dnxte_custom_attribute_css_selector ) {
                                $output = str_replace( 'class="' . ltrim( $dnxte_custom_attribute_css_selector, '.' ) . '', $dnxte_attributes_output . ' class="' . ltrim( $dnxte_custom_attribute_css_selector, '.' ) . ' dnxte_data_attributes ', $output );
                            }
                            break;

                        default:
                            # code...
                            break;
                    }
                
                
                }
            }
            return $output;
        }

        public function dnxte_attributes_column_output( $output, $render_slug, $module ) {
            if( 'et_pb_column' === $render_slug ){
                if ( is_array( $output ) ) {
                    return $output;
                }
                $dnxte_custom_attribute_on_off = isset( $module->props['dnxte_custom_attribute_on_off'] ) ? $module->props['dnxte_custom_attribute_on_off'] : 'off';
                if ( isset( $module->props['dnxte_custom_attribute_on_off'] ) && 'on' === $module->props['dnxte_custom_attribute_on_off'] ) {
                    $dnxte_attributes_options             = $module->props['dnxte_attributes_options'];
                    $dnxte_custom_attribute_add          = isset( $module->props['dnxte_custom_attribute_add'] ) ? esc_attr( $module->props['dnxte_custom_attribute_add'] ) : 'module';
                    $dnxte_custom_attribute_css_selector = isset( $module->props['dnxte_custom_attribute_css_selector'] ) ? esc_attr( $module->props['dnxte_custom_attribute_css_selector'] ) : '';
                    $option_search                      = array( '&#91;', '&#93;' );
                    $option_replace                     = array( '[', ']' );
                    $dnxte_custom_attributes_options    = str_replace( $option_search, $option_replace, $dnxte_attributes_options );
                    $dnxte_custom_attributes            = json_decode( $dnxte_custom_attributes_options );

                    $dnxte_attributes_output = '';
                    foreach ( $dnxte_custom_attributes as $index => $option ) {
                        $data_attribute_name  = isset( $option->link_url ) ? esc_attr( $option->link_url ) : '';
                        $data_attribute_value = isset( $option->link_text ) ? esc_attr( $option->link_text ) : '';
    
                        if ( isset( $data_attribute_name ) ) {
                            $dnxte_attributes_output .= esc_attr( $data_attribute_name );
                        }
    
                        if ( isset( $data_attribute_value ) ) {
                            $dnxte_attributes_output .= ' ="' . esc_attr( $data_attribute_value ) . '"';
                        }
                    }

                    switch ($dnxte_custom_attribute_add) {
                        case 'wrapper':
                            $output = str_replace( 'class="et_pb_column ', $dnxte_attributes_output . ' class="et_pb_column dnxte_data_attributes ', $output );
                            $output = str_replace( 'class="et_pb_with_border ', $dnxte_attributes_output . ' class="et_pb_with_border dnxte_data_attributes ', $output );
                            break;
                        case 'button':
                            $output = str_replace( 'class="et_pb_button ', $dnxte_attributes_output . ' class="et_pb_button dnxte_data_attributes ', $output );
                            $output = str_replace( 'class="et_pb_with_border ', $dnxte_attributes_output . ' class="et_pb_with_border dnxte_data_attributes ', $output );
                            break;
                        case 'css':
                            if ( $dnxte_custom_attribute_css_selector ) {
                                $output = str_replace( 'class="' . ltrim( $dnxte_custom_attribute_css_selector, '.' ) . '', $dnxte_attributes_output . ' class="' . ltrim( $dnxte_custom_attribute_css_selector, '.' ) . ' dnxte_data_attributes ', $output );
                            }
                            break;

                        default:
                            # code...
                            break;
                    }
                
                
                }
            }
            return $output;
        }


        public function dnxte_custom_attributes() {
            $dnxte_divi_dnxte_modules_custom_attributes = $this->dnxte_divi_dnxte_modules();
    
            foreach ( $dnxte_divi_dnxte_modules_custom_attributes as $module ) {
                if ( 'none' !== $module ) {
                    $filter = 'et_pb_all_fields_unprocessed_' . $module . '';
                    add_filter( $filter, [$this, 'dnxte_custom_attributes_modules_setting'] );
                }
            }
        }

        public function dnxte_custom_attributes_modules_setting( $fields_unprocessed ) {

            $labels = array(
                'link_url'      => esc_html__( 'Attribute Name', 'dnxte-divi-essential' ),
                'link_text'     => esc_html__( 'Attribute Value', 'dnxte-divi-essential' ),
                'link_cancel'   => esc_html__( 'Discard Changes', 'dnxte-divi-essential' ),
                'link_save'     => esc_html__( 'Save Changes', 'dnxte-divi-essential' ),
                'link_settings' => esc_html__( 'Data Attributes', 'dnxte-divi-essential' ),
            );


            $fields = array(
                'dnxte_custom_attribute_on_off' => array(
                    'label'            => esc_html__( 'Use Custom Attributes', 'dnxte-divi-essential' ),
                    'type'             => 'yes_no_button',
                    'option_category'  => 'configuration',
                    'options'          => array(
                        'off' => esc_html__( 'No', 'dnxte-divi-essential' ),
                        'on'  => esc_html__( 'Yes', 'dnxte-divi-essential' ),
                    ),
                    'default'          => 'off',
                    'default_on_front' => 'off',
                    'tab_slug'         => 'custom_css',
                    'toggle_slug'      => 'dnxte_attributes',
                    'description'      => esc_html__( 'Here you can choose whether to use a custom attributes on this module or not.', 'dnxte-divi-essential' ),
                ),
                'dnxte_custom_attribute_add' => array(
                    'label'            => esc_html__( 'Add Attributes To', 'dnxte-divi-essential' ),
                    'type'             => 'select',
                    'option_category'  => 'layout',
                    'tab_slug'         => 'custom_css',
                    'toggle_slug'      => 'dnxte_attributes',
                    'options'          => array(
                        'wrapper' => esc_html__( 'Wrapper', 'dnxte-divi-essential' ),
                        'button'  => esc_html__( 'Button', 'dnxte-divi-essential' ),
                        'css'     => esc_html__( 'CSS Selector', 'dnxte-divi-essential' ),
                    ),
                    'default'          => 'wrapper',
                    'default_on_front' => 'wrapper',
                    'show_if'          => array(
                        'dnxte_custom_attribute_on_off' => 'on',
                    ),
                ),
                'dnxte_custom_attribute_css_selector' => array(
                    'label'           => esc_html__( 'CSS Selector', 'dnxte-divi-essential' ),
                    'type'            => 'text',
                    'option_category' => 'basic_option',
                    'description'     => esc_html__( 'Input your CSS Selector.', 'dnxte-divi-essential' ),
                    'tab_slug'        => 'custom_css',
                    'toggle_slug'     => 'dnxte_attributes',
                    'show_if'         => array(
                        'dnxte_custom_attribute_on_off' => 'on',
                        'dnxte_custom_attribute_add'    => 'css',
                    ),
                ),
                'dnxte_attributes_options' => array(
                    'label'           => esc_html__( 'Custom Attributes', 'dnxte-divi-essential' ),
                    'type'            => 'sortable_list',
                    'checkbox'        => true,
                    'option_category' => 'basic_option',
                    'tab_slug'        => 'custom_css',
                    'toggle_slug'     => 'dnxte_attributes',
                    'right_actions'   => 'link|copy|delete',
                    'description'     => esc_html__( 'Custom attributes will be added to the most relevant HTML node.', 'dnxte-divi-essential' ),
                    'labels'          => $labels,
                    'show_if'         => array(
                        'dnxte_custom_attribute_on_off' => 'on',
                    ),
                )
            );

            return array_merge($fields, $fields_unprocessed);
        }

        public function dnxte_attributes_parent_toggles( $modules, $post_type ) {
            // Ensure we run this code only once because it's expensive.
            static $is_applied = false;
            if ( $is_applied ) {
                return $modules;
            }
            // Bail early if the modules list empty.
            if ( empty( $modules ) ) {
                return $modules;
            }

            foreach ( $modules as $module_slug => $module ) {
                // Ensure toggles and fields list exist.
                if ( ! isset( $module->settings_modal_toggles ) || ! isset( $module->fields_unprocessed ) ) {
                    continue;
                }
    
                $toggles_list = $module->settings_modal_toggles;
    
                if ( isset( $toggles_list['custom_css'] ) && ! empty( $toggles_list['custom_css']['toggles'] ) ) {
                    $toggles_list['custom_css']['toggles']['dnxte_attributes'] = array(
                        'title'    => esc_html__( 'Custom Attributes', 'dnxte-divi-essential' ),
                        'priority' => 220,
                    );
                    $modules[ $module_slug ]->settings_modal_toggles         = $toggles_list;
                }
                unset( $modules[ $module_slug ]->fields_unprocessed['dnxte_custom_attribute_on_off']['vb_support'] );
                unset( $modules[ $module_slug ]->fields_unprocessed['dnxte_custom_attribute_add']['vb_support'] );
                unset( $modules[ $module_slug ]->fields_unprocessed['dnxte_custom_attribute_css_selector']['vb_support'] );
                unset( $modules[ $module_slug ]->fields_unprocessed['dnxte_attributes_options']['vb_support'] );
            }
            $is_applied = true;
    
            return $modules;
        }
        public function dnxte_attributes_child_toggles( $modules, $post_type ) {
            // Ensure we run this code only once because it's expensive.
            static $is_applied = false;
            if ( $is_applied ) {
                return $modules;
            }
            // Bail early if the modules list empty.
            if ( empty( $modules ) ) {
                return $modules;
            }

            foreach ( $modules as $module_slug => $module ) {
                // Ensure toggles and fields list exist.
                if ( ! isset( $module->settings_modal_toggles ) || ! isset( $module->fields_unprocessed ) ) {
                    continue;
                }
    
                $toggles_list = $module->settings_modal_toggles;
    
                if ( isset( $toggles_list['custom_css'] ) && ! empty( $toggles_list['custom_css']['toggles'] ) ) {
                    $toggles_list['custom_css']['toggles']['dnxte_attributes'] = array(
                        'title'    => esc_html__( 'Custom Attributes', 'dnxte-divi-essential' ),
                        'priority' => 220,
                    );
                    $modules[ $module_slug ]->settings_modal_toggles         = $toggles_list;
                }
                unset( $modules[ $module_slug ]->fields_unprocessed['dnxte_custom_attribute_on_off']['vb_support'] );
                unset( $modules[ $module_slug ]->fields_unprocessed['dnxte_custom_attribute_add']['vb_support'] );
                unset( $modules[ $module_slug ]->fields_unprocessed['dnxte_custom_attribute_css_selector']['vb_support'] );
                unset( $modules[ $module_slug ]->fields_unprocessed['dnxte_attributes_options']['vb_support'] );
            }
            $is_applied = true;
    
            return $modules;
        }

        public function dnxte_attributes_module_output( $output, $render_slug, $module ) {
            if( $this->dnxte_divi_dnxte_modules() !== $render_slug ){
                if ( is_array( $output ) ) {
                    return $output;
                }

                
                $dnxte_custom_attribute_on_off = isset( $module->props['dnxte_custom_attribute_on_off'] ) ? $module->props['dnxte_custom_attribute_on_off'] : 'off';
                if ( isset( $module->props['dnxte_custom_attribute_on_off'] ) && 'on' === $module->props['dnxte_custom_attribute_on_off'] ) {
                    $dnxte_attributes_options             = $module->props['dnxte_attributes_options'];
                    $dnxte_custom_attribute_add          = isset( $module->props['dnxte_custom_attribute_add'] ) ? esc_attr( $module->props['dnxte_custom_attribute_add'] ) : 'module';
                    $dnxte_custom_attribute_css_selector = isset( $module->props['dnxte_custom_attribute_css_selector'] ) ? esc_attr( $module->props['dnxte_custom_attribute_css_selector'] ) : '';
                    $option_search                      = array( '&#91;', '&#93;' );
                    $option_replace                     = array( '[', ']' );
                    $dnxte_custom_attributes_options    = str_replace( $option_search, $option_replace, $dnxte_attributes_options );
                    $dnxte_custom_attributes            = json_decode( $dnxte_custom_attributes_options );

                    $dnxte_attributes_output = '';
                    foreach ( $dnxte_custom_attributes as $index => $option ) {
                        $data_attribute_name  = isset( $option->link_url ) ? esc_attr( $option->link_url ) : '';
                        $data_attribute_value = isset( $option->link_text ) ? esc_attr( $option->link_text ) : '';
    
                        if ( isset( $data_attribute_name ) ) {
                            $dnxte_attributes_output .= esc_attr( $data_attribute_name );
                        }
    
                        if ( isset( $data_attribute_value ) ) {
                            $dnxte_attributes_output .= ' ="' . esc_attr( $data_attribute_value ) . '"';
                        }
                    }

                    switch ($dnxte_custom_attribute_add) {
                        case 'wrapper':
                            $output = str_replace( 'class="et_pb_module ', $dnxte_attributes_output . ' class="et_pb_module dnxte_data_attributes ', $output );
                            $output = str_replace( 'class="et_pb_with_border ', $dnxte_attributes_output . ' class="et_pb_with_border dnxte_data_attributes ', $output );
                            $output = str_replace( 'class="et_pb_toggle ', $dnxte_attributes_output . ' class="et_pb_toggle dnxte_data_attributes ', $output );
                            $output = str_replace( 'class="et_pb_slide ', $dnxte_attributes_output . ' class="et_pb_slide dnxte_data_attributes ', $output );
                            $output = str_replace( 'class="et_pb_video_slider_item ', $dnxte_attributes_output . ' class="et_pb_video_slider_item dnxte_data_attributes ', $output );
                            $output = str_replace( 'class="et_pb_accordion_item ', $dnxte_attributes_output . ' class="et_pb_accordion_item dnxte_data_attributes ', $output );
                            $output = str_replace( 'class="et_pb_pricing_table ', $dnxte_attributes_output . ' class="et_pb_pricing_table dnxte_data_attributes ', $output );
                            $output = str_replace( 'class="et_pb_counter ', $dnxte_attributes_output . ' class="et_pb_counter dnxte_data_attributes ', $output );
                            $output = str_replace( 'class="et_pb_blurb ', $dnxte_attributes_output . ' class="et_pb_blurb dnxte_data_attributes ', $output );
                            $output = str_replace( 'class="et_pb_blog ', $dnxte_attributes_output . ' class="et_pb_blog dnxte_data_attributes ', $output );

                            // Divi Essential Parent & Child Modules.
                            $output = str_replace( 'class="dnxte_lottie ', $dnxte_attributes_output . ' class="dnxte_lottie dnxte_data_attributes ', $output );
                            $output = str_replace( 'class="dnxte_image_magnifier ', $dnxte_attributes_output . ' class="dnxte_image_magnifier dnxte_data_attributes ', $output );
                            $output = str_replace( 'class="dnxte_blurb ', $dnxte_attributes_output . ' class="dnxte_blurb dnxte_data_attributes ', $output );
                            $output = str_replace( 'class="dnxte_thumbs_gallery_parent ', $dnxte_attributes_output . ' class="dnxte_thumbs_gallery_parent dnxte_data_attributes ', $output );
                            $output = str_replace( 'class="dnxte_thumbs_gallery_child ', $dnxte_attributes_output . ' class="dnxte_thumbs_gallery_child dnxte_data_attributes ', $output );
                            $output = str_replace( 'class="dnxte_tooltip ', $dnxte_attributes_output . ' class="dnxte_tooltip dnxte_data_attributes ', $output );
                            $output = str_replace( 'class="dnxte_tooltip_child ', $dnxte_attributes_output . ' class="dnxte_tooltip_child dnxte_data_attributes ', $output );
                            $output = str_replace( 'class="dnxte_3dcubeslider_parent ', $dnxte_attributes_output . ' class="dnxte_3dcubeslider_parent dnxte_data_attributes ', $output );
                            $output = str_replace( 'class="dnxte_3dcubeslider_child ', $dnxte_attributes_output . ' class="dnxte_3dcubeslider_child dnxte_data_attributes ', $output );
                            $output = str_replace( 'class="dnxte_business_hour_parent ', $dnxte_attributes_output . ' class="dnxte_business_hour_parent dnxte_data_attributes ', $output );
                            $output = str_replace( 'class="dnxte_business_hour_child ', $dnxte_attributes_output . ' class="dnxte_business_hour_child dnxte_data_attributes ', $output );
                            $output = str_replace( 'class="dnxte_coverflowslider_parent ', $dnxte_attributes_output . ' class="dnxte_coverflowslider_parent dnxte_data_attributes ', $output );
                            $output = str_replace( 'class="dnxte_coverflowslider_child ', $dnxte_attributes_output . ' class="dnxte_coverflowslider_child dnxte_data_attributes ', $output );
                            $output = str_replace( 'class="dnxte_feature_list_parent ', $dnxte_attributes_output . ' class="dnxte_feature_list_parent dnxte_data_attributes ', $output );
                            $output = str_replace( 'class="dnxte_feature_list_child ', $dnxte_attributes_output . ' class="dnxte_feature_list_child dnxte_data_attributes ', $output );
                            $output = str_replace( 'class="dnxte_floating_element ', $dnxte_attributes_output . ' class="dnxte_floating_element dnxte_data_attributes ', $output );
                            $output = str_replace( 'class="dnxte_floating_element_child ', $dnxte_attributes_output . ' class="dnxte_floating_element_child dnxte_data_attributes ', $output );
                            $output = str_replace( 'class="dnxte_price_list_parent ', $dnxte_attributes_output . ' class="dnxte_price_list_parent dnxte_data_attributes ', $output );
                            $output = str_replace( 'class="dnxte_price_list_child ', $dnxte_attributes_output . ' class="dnxte_price_list_child dnxte_data_attributes ', $output );
                            $output = str_replace( 'class="dnxte_testimonial_parent ', $dnxte_attributes_output . ' class="dnxte_testimonial_parent dnxte_data_attributes ', $output );
                            $output = str_replace( 'class="dnxte_testimonial_child ', $dnxte_attributes_output . ' class="dnxte_testimonial_child dnxte_data_attributes ', $output );
                            $output = str_replace( 'class="dnxte_logo_carousel_parent ', $dnxte_attributes_output . ' class="dnxte_logo_carousel_parent dnxte_data_attributes ', $output );
                            $output = str_replace( 'class="dnxte_logo_carousel_child ', $dnxte_attributes_output . ' class="dnxte_logo_carousel_child dnxte_data_attributes ', $output );
                            $output = str_replace( 'class="dnxte_person ', $dnxte_attributes_output . ' class="dnxte_person dnxte_data_attributes ', $output );
                            $output = str_replace( 'class="dnxte_person_item ', $dnxte_attributes_output . ' class="dnxte_person_item dnxte_data_attributes ', $output );
                            $output = str_replace( 'class="dnxte_advanced_tab ', $dnxte_attributes_output . ' class="dnxte_advanced_tab dnxte_data_attributes ', $output );
                            $output = str_replace( 'class="dnxte_advanced_tab_item ', $dnxte_attributes_output . ' class="dnxte_advanced_tab_item dnxte_data_attributes ', $output );
                            $output = str_replace( 'class="dnxte_image_accordion ', $dnxte_attributes_output . ' class="dnxte_image_accordion dnxte_data_attributes ', $output );
                            $output = str_replace( 'class="dnxte_image_accordion_item ', $dnxte_attributes_output . ' class="dnxte_image_accordion_item dnxte_data_attributes ', $output );
                            $output = str_replace( 'class="dnxte_team_creative ', $dnxte_attributes_output . ' class="dnxte_team_creative dnxte_data_attributes ', $output );
                            $output = str_replace( 'class="dnxte_team_creative_item ', $dnxte_attributes_output . ' class="dnxte_team_creative_item dnxte_data_attributes ', $output );
                            $output = str_replace( 'class="dnxte_team_overlay ', $dnxte_attributes_output . ' class="dnxte_team_overlay dnxte_data_attributes ', $output );
                            $output = str_replace( 'class="dnxte_team_overlay_item ', $dnxte_attributes_output . ' class="dnxte_team_overlay_item dnxte_data_attributes ', $output );
                            $output = str_replace( 'class="dnxte_team_overlay_card ', $dnxte_attributes_output . ' class="dnxte_team_overlay_card dnxte_data_attributes ', $output );
                            $output = str_replace( 'class="dnxte_team_overlay_card_item ', $dnxte_attributes_output . ' class="dnxte_team_overlay_card_item dnxte_data_attributes ', $output );
                            $output = str_replace( 'class="dnxte_team_social_reveal ', $dnxte_attributes_output . ' class="dnxte_team_social_reveal dnxte_data_attributes ', $output );
                            $output = str_replace( 'class="dnxte_team_social_reveal_child ', $dnxte_attributes_output . ' class="dnxte_team_social_reveal_child dnxte_data_attributes ', $output );
                            $output = str_replace( 'class="dnxte_timeline ', $dnxte_attributes_output . ' class="dnxte_timeline dnxte_data_attributes ', $output );
                            $output = str_replace( 'class="dnxte_timeline_child ', $dnxte_attributes_output . ' class="dnxte_timeline_child dnxte_data_attributes ', $output );
                            break;
                        case 'button':
                            $output = str_replace( 'class="et_pb_button ', $dnxte_attributes_output . ' class="et_pb_button dnxte_data_attributes ', $output );
                            $output = str_replace( 'class="et_pb_with_border ', $dnxte_attributes_output . ' class="et_pb_with_border dnxte_data_attributes ', $output );
                            break;
                        case 'css':
                            if ( $dnxte_custom_attribute_css_selector ) {
                                $output = str_replace( 'class="' . ltrim( $dnxte_custom_attribute_css_selector, '.' ) . '', $dnxte_attributes_output . ' class="' . ltrim( $dnxte_custom_attribute_css_selector, '.' ) . ' dnxte_data_attributes ', $output );
                            }
                            break;

                        default:
                            # code...
                            break;
                    }
                
                
                }
            }
            return $output;
        }

        public function dnxte_divi_dnxte_modules(){
            $dnxte_divi_dnxte_modules = [
                'et_pb_accordion',
                'et_pb_audio',
                'et_pb_counters',
                'et_pb_blog',
                'et_pb_blurb',
                'et_pb_circle_counter',
                'et_pb_code',
                'et_pb_button',
                'et_pb_comments',
                'et_pb_contact_form',
                'et_pb_countdown_timer',
                'et_pb_cta',
                'et_pb_divider',
                'et_pb_filterable_portfolio',
                'et_pb_fullwidth_code',
                'et_pb_fullwidth_header',
                'et_pb_fullwidth_image',
                'et_pb_fullwidth_map',
                'et_pb_fullwidth_menu',
                'et_pb_fullwidth_portfolio',
                'et_pb_fullwidth_post_slider',
                'et_pb_fullwidth_post_title',
                'et_pb_fullwidth_slider',
                'et_pb_gallery',
                'et_pb_image',
                'et_pb_login',
                'et_pb_map',
                'et_pb_number_counter',
                'et_pb_portfolio',
                'et_pb_post_slider',
                'et_pb_post_title',
                'et_pb_post_nav',
                'et_pb_pricing_tables',
                'et_pb_search',
                'et_pb_shop',
                'et_pb_sidebar',
                'et_pb_signup',
                'et_pb_slider',
                'et_pb_slide',
                'et_pb_social_media_follow',
                'et_pb_tabs',
                'et_pb_team_member',
                'et_pb_testimonial',
                'et_pb_text',
                'et_pb_toggle',
                'et_pb_video',
                'et_pb_video_slider',
                'et_pb_icon',
                'dnxte_divider',
                'dnxte_image_magnifier',
                'dnxte_image_reveal',
                'dnxte_lottie',
                'dnxte_thumbs_gallery_parent',
                'dnxte_thumbs_gallery_child',
                'dnxte_tooltip',
                'dnxte_tooltip_child',
                'dnxte_3dcubeslider_parent',
                'dnxte_3dcubeslider_child',
                'dnxte_business_hour_parent',
                'dnxte_business_hour_child',
                'dnxte_coverflowslider_parent',
                'dnxte_coverflowslider_child',
                'dnxte_feature_list_parent',
                'dnxte_feature_list_child',
                'dnxte_floating_element',
                'dnxte_floating_element_child',
                'dnxte_price_list_parent',
                'dnxte_price_list_child',
                'dnxte_promobox',
                'dnxte_testimonial_parent',
                'dnxte_testimonial_child',
                'dnxte_flip_box',
                'dnxte_logo_carousel_parent',
                'dnxte_logo_carousel_child',
                'dnxte_person',
                'dnxte_person_item',
                'dnxte_3d_flipbox',
                'dnxte_advanced_tab',
                'dnxte_advanced_tab_item',
                'dnxte_before_after',
                'dnxte_blog_slider',
                'dnxte_blurb',
                'dnxte_circular_image_hover',
                'dnxte_comment',
                'dnxte_content_toggle',
                'dnxte_dual_button',
                'dnxte_embedded_comment',
                'dnxte_embedded_post',
                'dnxte_embedded_video',
                'dnxte_fb_page',
                'dnxte_fb_share_button',
                'dnxte_gradient_text',
                'dnxte_image_accordion',
                'dnxte_image_accordion_item',
                'dnxte_image_hover_box',
                'dnxte_image_icon',
                'dnxte_image_scroll',
                'dnxte_like_button',
                'dnxte_masonary',
                'dnxte_mega_image_effect',
                'dnxte_minimal_image_hover',
                'dnxte_multi_heading',
                'dnxte_rating',
                'dnxte_review',
                'dnxte_step_flow',
                'dnxte_team_creative',
                'dnxte_team_creative_item',
                'dnxte_team_overlay',
                'dnxte_team_overlay_item',
                'dnxte_team_overlay_card',
                'dnxte_team_overlay_card_item',
                'dnxte_team_social_reveal',
                'dnxte_team_social_reveal_child',
                'dnxte_text_animation',
                'dnxte_text_color_motion',
                'dnxte_text_divider',
                'dnxte_text_glitch',
                'dnxte_text_highlight',
                'dnxte_text_hover_highlight',
                'dnxte_text_mask',
                'dnxte_text_stroke',
                'dnxte_text_stroke_motion',
                'dnxte_text_tilt',
                'dnxte_timeline',
                'dnxte_timeline_child',
                'dnxte_twitter_follow',
                'dnxte_twitter_share',
                'dnxte_twitter_timeline',
                'dnxte_twitter_tweet',
                'dnxte_ultimate_image_hover',
                'dnxte_button'
            ];
    
            return $dnxte_divi_dnxte_modules;
        }

}
if ( class_exists( 'DnxteAttributes' ) ) {
	new DnxteAttributes();
}