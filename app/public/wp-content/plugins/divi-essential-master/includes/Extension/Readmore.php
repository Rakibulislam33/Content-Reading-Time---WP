<?php
defined('ABSPATH') || die();

class DNXTE_Readmore
{

	public $allowed_modules = ['et_pb_text', 'et_pb_blog', 'et_pb_code', 'et_pb_cta', 'et_pb_blurb'];

	public function __construct()
	{
		$this->dnxte_readme_module();

		add_filter('et_module_shortcode_output', [$this, 'dnxte_readmore_render'], 10, 3);
	}

	public function dnxte_readme_module()
	{
		foreach ($this->allowed_modules as $module) {
			add_filter($this->filter_hook_conkat($module), [$this, 'dnxte_readmore_fields']);
		}
	}

	public function filter_hook_conkat($hook)
	{
		$hook = 'et_pb_all_fields_unprocessed_' . $hook;
		return $hook;
	}

	/*
	 * Load Read More Divi Modules
	 * @params - Field
	 * 
	 * @return - Field - Array
	 */

	public function dnxte_readmore_fields($param)
	{
		$fields = array();

		$fields['dnxte_rm_readmore'] = array(
			'label'            => esc_html__('USE READ MORE', 'dnxte-divi-essential'),
			'type'             => 'yes_no_button',
			'option_category'  => 'configuration',
			'options'          => array(
				'off' => esc_html__('No', 'dnxte-divi-essential'),
				'on'  => esc_html__('Yes', 'dnxte-divi-essential'),
			),
			'default'          => 'off',
			'default_on_front' => 'off',
			'tab_slug'         => 'custom_css',
			'toggle_slug'      => 'visibility',
			'description'      => esc_html__('Toggle whether you want to use the Read More feature on this module or not.', 'dnxte-divi-essential'),
		);

		$fields['dnxte_rm_height'] = array(
			'label'            => esc_html__('Height', 'dnxte-divi-essential'),
			'type'             => 'text',
			'option_category'  => 'basic_option',
			'default'          => '200',
			'default_on_front' => '200',
			'description'      => esc_html__('Adjust Read More block height from here.', 'dnxte-divi-essential'),
			'tab_slug'         => 'custom_css',
			'toggle_slug'      => 'visibility',
			'show_if'          => array(
				'dnxte_rm_readmore' => 'on',
			),
		);

		$fields['dnxte_rm_disabled_on_device'] = array(
			'label'            => esc_html__('Disabled On Device', 'dnxte-divi-essential'),
			'type'             => 'select',
			'option_category'  => 'configuration',
			'options'          => array(
				'none' => esc_html__('None', 'dnxte-divi-essential'),
				'phone' => esc_html__('Phone', 'dnxte-divi-essential'),
				'tablet' => esc_html__('Tablet', 'dnxte-divi-essential'),
				'desktop' => esc_html__('Desktop', 'dnxte-divi-essential'),

			),
			'default'          => 'none',
			'default_on_front' => 'none',
			'description'      => esc_html__('Phone - Disable Read More on phone (below 767 px), Tablet - Disables both on phone & tablet (below 980 px)
', 'dnxte-divi-essential'),
			'tab_slug'         => 'custom_css',
			'toggle_slug'      => 'visibility',
			'show_if'          => array(
				'dnxte_rm_readmore' => 'on',
			),
		);

		$fields['dnxte_rm_text'] = array(
			'label'            => esc_html__('Read More Text', 'dnxte-divi-essential'),
			'type'             => 'text',
			'option_category'  => 'basic_option',
			'default'          => 'Read more',
			'default_on_front' => 'Read more',
			'description'      => esc_html__('Insert Read More placeholder text.
', 'dnxte-divi-essential'),
			'tab_slug'         => 'custom_css',
			'toggle_slug'      => 'visibility',
			'show_if'          => array(
				'dnxte_rm_readmore' => 'on',
			),
		);

		$fields['dnxte_rm_less_text'] = array(
			'label'            => esc_html__('Read less Text', 'dnxte-divi-essential'),
			'type'             => 'text',
			'option_category'  => 'basic_option',
			'default'          => 'Read less',
			'default_on_front' => 'Read less',
			'description'      => esc_html__('Insert Read Less placeholder text.', 'dnxte-divi-essential'),
			'tab_slug'         => 'custom_css',
			'toggle_slug'      => 'visibility',
			'show_if'          => array(
				'dnxte_rm_readmore' => 'on',
			),
		);

		$fields['dnxte_rm_no_less'] = array(
			'label'            => esc_html__('Less Text Show', 'dnxte-divi-essential'),
			'type'             => 'yes_no_button',
			'option_category'  => 'configuration',
			'options'          => array(
				'off' => esc_html__('No', 'dnxte-divi-essential'),
				'on'  => esc_html__('Yes', 'dnxte-divi-essential'),
			),
			'default'          => 'on',
			'default_on_front' => 'on',
			'tab_slug'         => 'custom_css',
			'toggle_slug'      => 'visibility',
			'description'      => esc_html__('Yes - Show less text. No - Not showing Less Text after expanding', 'dnxte-divi-essential'),
			'show_if'          => array(
				'dnxte_rm_readmore' => 'on',
			),
		);

		$fields['dnxte_rm_font'] = array(
			'label'           => esc_html__( 'Font', 'dnxte-divi-essential' ),
			'type'            => 'font',
			'option_category' => 'font_option',
			'options'         => array(
				'bold'      => esc_html__( 'Bold', 'dnxte-divi-essential' ),
				'italic'    => esc_html__( 'Italic', 'dnxte-divi-essential' ),
				'uppercase' => esc_html__( 'Uppercase', 'dnxte-divi-essential' ),
				'underline' => esc_html__( 'Underline', 'dnxte-divi-essential' ),
			),
			'description'     => esc_html__( 'Choose the Read More Text Font.', 'dnxte-divi-essential' ),
			'tab_slug'        => 'custom_css',
			'toggle_slug'     => 'visibility',
			'show_if'         => array(
				'dnxte_rm_readmore' => 'on',
			),
		);

		$fields['dnxte_rm_font_size'] = array(
			'label'           => esc_html__('Text Size', 'dnxte-divi-essential'),
			'description'     => esc_html__('Increase / decrease text size for Read More text. ', 'dnxte-divi-essential'),
			'type'            => 'range',
			'option_category' => 'font_option',
			'tab_slug'        => 'custom_css',
			'toggle_slug'     => 'visibility',
			'allowed_units'   => array('%', 'em', 'rem', 'px', 'cm', 'mm', 'in', 'pt', 'pc', 'ex', 'vh', 'vw'),
			'default_unit'    => 'px',
			'range_settings'  => array(
				'min'  => '1',
				'max'  => '100',
				'step' => '1',
			),
			'default'         => '14px',
			'show_if'         => array(
				'dnxte_rm_readmore' => 'on',
			),
		);
		
		$fields['dnxte_rm_text_align'] = array(
			'label'            => esc_html__( 'Text Alignment', 'dnxte-divi-essential' ),
			'type'             => 'text_align',
			'option_category'  => 'layout',
			'options'          => et_builder_get_text_orientation_options( array( 'justified' ) ),
			'default_on_front' => 'left',
			'description'      => esc_html__( 'Choose the Read More Text alignment.', 'dnxte-divi-essential' ),
			'tab_slug'         => 'custom_css',
			'toggle_slug'      => 'visibility',
			'show_if'          => array(
				'dnxte_rm_readmore' => 'on',
			),
		);

		$fields['dnxte_rm_link_color'] = array(
			'label'        => esc_html__('Link Text Color', 'dnxte-divi-essential'),
			'description'  => esc_html__('Change Read More link color.', 'dnxte-divi-essential'),
			'type'         => 'color-alpha',
			'custom_color' => true,
			'tab_slug'     => 'custom_css',
			'toggle_slug'  => 'visibility',
			'hover'        => 'tabs',
			'default'      => '#3D91DC',
			'show_if'      => array(
				'dnxte_rm_readmore' => 'on',
			),
		);

		$fields['dnxte_rm_custom_css'] = array(
			'label'       => esc_html__('Link Custom CSS', 'dnxte-divi-essential'),
			'description' => esc_html__('Add / customize Read More with Custom CSS ', 'dnxte-divi-essential'),
			'type'        => 'codemirror',
			'tab_slug'    => 'custom_css',
			'toggle_slug' => 'visibility',
			'default'     => '',
			'show_if'     => array(
				'dnxte_rm_readmore' => 'on',
			),
		);

		return array_merge($param, $fields);
	}

	public function dnxte_readmore_render($output, $render_slug, $module)
	{

		if (!in_array($render_slug, $this->allowed_modules)) {
			return $output;
		}

		if (is_array($output)) {
			return $output;
		}

		if (isset($module->props['dnxte_rm_readmore']) && $module->props['dnxte_rm_readmore'] === 'on') {

			$dnxte_rm_readmore_custom_css = isset($module->props['dnxte_rm_custom_css']) ? $module->props['dnxte_rm_custom_css'] : '';

			$data   =  'data-readmore-text="' . $module->props['dnxte_rm_text'] . '"  data-readmore-disable-on-device="' . $module->props['dnxte_rm_disabled_on_device'] . '" data-readmore-less-text="' . $module->props['dnxte_rm_less_text'] . '" data-readmore-height="' .  $module->props['dnxte_rm_height'] . '" data-readmore-no-less="' .$module->props['dnxte_rm_no_less'] . '" data-readmore-font-size="' .$module->props['dnxte_rm_font_size'] . '"';
			$output = str_replace('class="et_pb_module ', $data . ' class="et_pb_module dnxte-rm ', $output);
			$output = str_replace('class="et_pb_with_border ', $data . ' class="et_pb_with_border dnxte-rm ', $output);

			if ($module->props['dnxte_rm_link_color']) {
				ET_Builder_Element::set_style(
					$render_slug,
					array(
						'selector'    => '%%order_class%%~ .expand-bar',
						'declaration' => sprintf(
							'color: %1$s',
							esc_html($module->props['dnxte_rm_link_color'])
						),
					)
				);
			}

			if (et_builder_is_hover_enabled('dnxte_rm_readmore_link_color', $module->props)) {
				ET_Builder_Element::set_style(
					$render_slug,
					array(
						'selector'    => '%%order_class%% ~.expand-bar:hover',
						'declaration' => sprintf(
							'color: %1$s;',
							esc_html($module->props['dnxte_rm_readmore_link_color__hover'])
						),
					)
				);
			}

			if ($module->props['dnxte_rm_font_size']) {
				ET_Builder_Element::set_style(
					$render_slug,
					array(
						'selector'    => '%%order_class%% ~.expand-bar,%%order_class%%~.expand-bar i::before,%%order_class%%~.expand-bar i::after',
						'declaration' => sprintf(
							'font-size: %1$s;',
							esc_html($module->props['dnxte_rm_font_size'])
						),
					)
				);
			}

			if ( $module->props['dnxte_rm_font'] ) {
				ET_Builder_Element::set_style(
					$render_slug,
					array(
						'selector'    => '%%order_class%% ~.expand-bar',
						'declaration' => et_builder_set_element_font( $module->props['dnxte_rm_font'] ),
					)
				);
			}

			if ($module->props['dnxte_rm_text_align'] ) {
				ET_Builder_Element::set_style(
					$render_slug,
					array(
						'selector'    => '%%order_class%% ~.expand-bar',
						'declaration' => sprintf(
							'text-align: %1$s;',
							esc_attr( $module->props['dnxte_rm_text_align'] )
						),
					)
				);
				ET_Builder_Element::set_style(
					$render_slug,
					array(
						'selector'    => '%%order_class%% ~.expand-bar',
						'declaration' => sprintf(
							'display: block;'
						),
					)
				);
			}

			if ($dnxte_rm_readmore_custom_css) {
				ET_Builder_Element::set_style(
					$render_slug,
					array(
						'selector'    => '%%order_class%%~.expand-bar',
						'declaration' => esc_html($dnxte_rm_readmore_custom_css),
					)
				);
			}

			wp_enqueue_style('dnext_read_more_css');
			wp_enqueue_script('jquery_expander_js');
		}


		return $output;
	}
}

(new DNXTE_Readmore());