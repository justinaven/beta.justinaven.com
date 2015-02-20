// --------------------------------------------------------
//  menu open button
// --------------------------------------------------------

var $header = $('.site-header'),
    $nav = $('.site-nav.primary-nav'),
    $search = $('.site-search.primary-search');

var navHTML = $nav.html(),
    searchHTML = $search.html();

$('<div class="site-search secondary-search"></div> 
   <div class="site-nav secondary-nav"></div>').insertAfter($header);
$('.site-search.secondary-search').html(searchHTML);
$('.site-nav.secondary-nav').html(navHTML);
$header.find('.container').append('<span class="secondary-search-button"> </span><span class="secondary-nav-button"></span>');

$('.secondary-search-button').on('click', function(){
    $('.secondary-search').toggleClass('active');
});
$('.secondary-nav-button').on('click', function(){
    $('.secondary-nav').toggleClass('active');
});

$('.secondary-nav .has-dropdown > a').each(function(){
	var m_href = $(this).attr('href');
	var m_text = $(this).text();
	$(this).siblings('ul').prepend('<li class="parent_link"><a href="'+m_href+'">'+m_text+'</a></li>');
});

$('.secondary-nav .has-dropdown > a').on('click', function(e){
	e.preventDefault();
	if($(this).closest('.has-dropdown').hasClass('expanded')) {
		$(this).closest('.has-dropdown').removeClass('expanded').find('.expanded').removeClass('expanded');
	} else {
		$(this).closest('.has-dropdown').addClass('expanded');
	}
})


$(window).resize(function() {
	if($('.has-dropdown').hasClass('expanded')) {
		$('.has-dropdown').removeClass('expanded').find('.expanded').removeClass('expanded');
	}
});

// // open
// $('<button class="menu__button menu__open-button">Menu</button>').insertBefore($menu).on('click', function() {
//     $body.toggleClass('menu-activated');
// });

// // close
// $('<button class="menu__button menu__close-button">&times;</button>').prependTo($menu).on('click', function() {
//     $body.toggleClass('menu-activated');
// });




// --------------------------------------------------------
//  max width on category menu
// --------------------------------------------------------

// $('.bar-nav__link').on('mouseenter', function() {
//     $('.outer', this).css({ 'max-width': $('.inner', this).outerWidth() }); // set the max-width to the size of the inner span
// }).on('mouseleave', function() {
//     $('.outer', this).css({ 'max-width': '' }); // set the widths back to the default value
// });




// // --------------------------------------------------------
// //  category menu positioning
// // --------------------------------------------------------

// var $stickyNav = $('.site-nav-bar'),
//     stickyNavHeight;

// var getNavDimensions = function(){
//     stickyNavHeight = $stickyNav.height();
// }

// var stickyNav = function(){
//     if ($(window).height() >= stickyNavHeight) {
//         $stickyNav.addClass('site-nav-bar--fixed').css({ 'margin-top': stickyNavHeight/-2 });
//     } else {
//         $stickyNav.removeClass('site-nav-bar--fixed').css({ 'margin-top': '' });
//     }
// };

// getNavDimensions();
// stickyNav();

// $(window).resize(function() {
//     getNavDimensions();
//     stickyNav();
// });




// --------------------------------------------------------
//  action and info menus to the mobile menu
// --------------------------------------------------------

// var menuHTML = '<nav class="secondary-nav"><ul class="menu__sub-nav">';

// $('.action-nav a, .info-nav a').each(function() {
//     menuHTML += '<li class="menu__sub-nav__item"><a class="menu__sub-nav__link" href="' + $(this).attr('href') + '">' + $(this).text() + '</a></li>';
// });

// menuHTML += '</ul></nav>';
// $(menuHTML).insertAfter('.site-nav', $menu);