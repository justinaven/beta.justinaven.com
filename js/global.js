//  Make loging safe for all browsers
window.log=function(){log.history=log.history||[];log.history.push(arguments);if(this.console){console.log(Array.prototype.slice.call(arguments))}};
// --------------------------------------------------------
//  menu open button
// --------------------------------------------------------

var $menu = $('.menu'),
    $body = $('body');

// open
$('<button class="menu__button menu__open-button">Menu</button>').insertBefore($menu).on('click', function() {
    $body.toggleClass('menu-activated');
});

// close
$('<button class="menu__button menu__close-button">&times;</button>').prependTo($menu).on('click', function() {
    $body.toggleClass('menu-activated');
});




// --------------------------------------------------------
//  max width on category menu
// --------------------------------------------------------

$('.bar-nav__link').on('mouseenter', function() {
    $('.outer', this).css({ 'max-width': $('.inner', this).outerWidth() }); // set the max-width to the size of the inner span
}).on('mouseleave', function() {
    $('.outer', this).css({ 'max-width': '' }); // set the widths back to the default value
});




// --------------------------------------------------------
//  category menu positioning
// --------------------------------------------------------

var $stickyNav = $('.site-nav-bar'),
    stickyNavHeight;

var getNavDimensions = function(){
    stickyNavHeight = $stickyNav.height();
}

var stickyNav = function(){
    if ($(window).height() >= stickyNavHeight) {
        $stickyNav.addClass('site-nav-bar--fixed').css({ 'margin-top': stickyNavHeight/-2 });
    } else {
        $stickyNav.removeClass('site-nav-bar--fixed').css({ 'margin-top': '' });
    }
};

getNavDimensions();
stickyNav();

$(window).resize(function() {
    getNavDimensions();
    stickyNav();
});




// --------------------------------------------------------
//  action and info menus to the mobile menu
// --------------------------------------------------------

var menuHTML = '<nav class="secondary-nav"><ul class="menu__sub-nav">';

$('.action-nav a, .info-nav a').each(function() {
    menuHTML += '<li class="menu__sub-nav__item"><a class="menu__sub-nav__link" href="' + $(this).attr('href') + '">' + $(this).text() + '</a></li>';
});

menuHTML += '</ul></nav>';
$(menuHTML).insertAfter('.site-nav', $menu);