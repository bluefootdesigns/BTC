// Standard Links
jQuery('#slider .entry-content a.background-color,.textwidget a,#home-widgets ul.recent-posts .most-recent-title a,#blog-list h4 a,#home-blog .home-post-content a,h3.blog-page-title a,#sidebar .jg_Recent_Posts ul.recent-posts .most-recent-title a,#sidebar .jg_Popular_Posts ul.recent-posts .most-recent-title a,.tabs-inner a.title,#content p>a,.post-detail-box #author-details a,.portfolio-excerpt a.more-link,.portfolio-title a').hover(function(){
    jQuery(this).stop().animate({backgroundColor: '#e23333', color: '#ffffff'});
}, function() {
    jQuery(this).stop().animate({backgroundColor: '#ffffff',color: '#333333'});
});

//  Bold Headings
jQuery('h2.strong-title a').hover(function(){
    jQuery(this).stop().animate({backgroundColor: '#e23333', color: '#ffffff'});
}, function() {
    jQuery(this).stop().animate({backgroundColor: '#ff9000',color: '#ffffff'});
});

//  Gray Inactive Background (Read More, CTA, etc.) 
jQuery('.service span.read-more a,#call-to-action h2 a,.home-post-content a.more-link').hover(function(){
    jQuery(this).stop().animate({backgroundColor: '#e23333', color: '#ffffff'});
}, function() {
    jQuery(this).stop().animate({backgroundColor: '#E6E6E6',color: '#333333'});
});

//  Image Hover Shortcode  
jQuery('.image-hover a, a.buttons').hover(function(){
    jQuery(this).stop().animate({backgroundColor: '#ffffff'});
}, function() {
    jQuery(this).stop().animate({backgroundColor: '#ffffff'});
});	