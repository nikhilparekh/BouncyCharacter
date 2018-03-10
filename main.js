/*$("h1").hover(function()
{
    $("h1").css("font-size","50px");
},
function()
{
$("h1").css("color","red");

});

$(".name").click(function()
{
    $(this).hide();

}
)
*/
jQuery(document).ready(function($){
  // Blast the `<h1>` element
  $('h1').blast({ delimiter: 'character' });
  
  // `Rebind the `mouseenter` event handler to the new `.blast` elements
  $('h1').on('mouseenter', '.blast', function(){

    // Store the targeted `.blast` element as an instanced variable
    var $target = $(this);

    // Add the animation classes to it
    $target.addClass('animated rubberBand');

    // Run the `removeClass` function on our instanced variable after
    // 1 sec (animation length of `.bounce`)
    setTimeout(function(){
      $target.removeClass('animated rubberBand');
    }, 1000);
  });
});