/*! Forward Pathway Addon JS - v1.0 - 2020-02-14
* https://www.forwardpathway.com
* Copyright Forward Pathway LLC */
jQuery(document).ready(function() {
jQuery(".advgb-toc a,div.yoast-table-of-contents ul li a").click(function(e) {
    e.preventDefault();
    var aid = jQuery(this).attr("href");
    jQuery('html,body').animate({scrollTop: (jQuery(aid).offset().top-80)},'slow');
});})