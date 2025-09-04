<div class="blog-wrap">
    <div class="dnxte-post-thumb">
        <a href="<?php esc_url(the_permalink());?>" target="<?php echo esc_html($post_url_new_window); ?>">
            <div class="dnxte-blog-imgoverlay"></div>
            <?php echo wp_kses_post($blog_thumbnail); ?>
        </a>
    </div>
</div>