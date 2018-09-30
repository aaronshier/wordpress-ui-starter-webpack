<?php

function wptuts_scripts_basic()
{
    // Register the script like this for a plugin:
    wp_register_script( 'cdt_app-js', plugins_url( '/../js/app.js', __FILE__ ) );
    wp_register_script( 'cdt_styles-js', plugins_url( '/../js/styles.js', __FILE__ ) );
 
    // // For either a plugin or a theme, you can then enqueue the script:
    wp_enqueue_script( 'custom-script' );
}
add_action( 'wp_enqueue_scripts', 'wptuts_scripts_basic' );

function test_short_code( $atts ) {
    global $cdt_ui;

    $title = $cdt_ui['title'];
    
    if(isset($cdt_ui['media'])){
        $image = $cdt_ui['media'];
    } else {
        $image = null;
    }

    $user_prefix = 'cdt_ui';

	$atts = shortcode_atts( array(
		'title' => '',
		'subtitle' => ''
	), $atts, 'bartag' );
	ob_start();
?>

    <div id="<?php echo $user_prefix ?>_test_wrap">
    <?php if (isset($title)) { ?>
        <h1 id="<?php echo $user_prefix ?>_test_title"><?php echo $title ?></h1>
    <?php } ?>
        <div id="<?php echo $user_prefix ?>_images_wrap">

            <?php if ($image != '' || $image != null) { ?>
                    <img src="<?php echo ($image['url']) ?>" alt="Los Angeles Newest Baby and Pet photography studio" />
            <?php } ?>
            
        </div>
    </div>

<?php
	return ob_get_clean();
}

add_shortcode( 'test', 'test_short_code' );