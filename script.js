
$( document ).ready(function() {

$( ".cross" ).hide();
$( ".CrossMenu" ).hide();
$( ".NewMenu" ).click(function() {
$( ".CrossMenu" ).slideToggle( "slow", function() {
$( ".NewMenu" ).hide();
$( ".cross" ).show();
});
});

$( ".cross" ).click(function() {
$( ".CrossMenu" ).slideToggle( "slow", function() {
$( ".cross" ).hide();
$( ".NewMenu" ).show();
});
});

});