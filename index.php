<?php
/*
Plugin Name:  CDT UI Plugin Boiler Plate
Plugin URI:   https://www.createdesign.tech/wordpress-plugins/wordpress-ui-plugin-boilerplate
Description:  UI Plugin Boiler Plate
Version:      20160911
Author:       createdesign.tech
Author URI:   https://www.createdesign.tech/
License:      GPL2
License URI:  https://www.gnu.org/licenses/gpl-2.0.html
Text Domain:  cdt_ui
Domain Path:  /languages
*/

if ( !class_exists( 'ReduxFramework' ) && file_exists( dirname( __FILE__ ) . '/ReduxFramework/ReduxCore/framework.php' ) ) {
    require_once( dirname( __FILE__ ) . '/ReduxFramework/ReduxCore/framework.php' );
}
if ( !isset( $redux_demo ) && file_exists( dirname( __FILE__ ) . '/ReduxFramework/config.php' ) ) {
    require_once( dirname( __FILE__ ) . '/ReduxFramework/config.php' );
}

require_once('src/shortcodes.php');