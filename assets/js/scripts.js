jQuery(document).foundation();
jQuery(document).ready(function() {
    jQuery('.accordion p:empty, .orbit p:empty').remove();
	jQuery('.archive-grid .columns').last().addClass( 'end' );
	jQuery('iframe[src*="youtube.com"], iframe[src*="vimeo.com"]').wrap("<div class='flex-video'/>");
});