// --------------------------------------------------------
//  search open button
// --------------------------------------------------------
 
$('.site-search label').on('click', function(){
 	$(this).closest('form').toggleClass('active');
});