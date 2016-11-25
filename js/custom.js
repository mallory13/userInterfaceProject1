

//Custom carousel

$('.carousel').carousel({
  interval: 2000,
  pause: null,
  wrap: false
  keyboard: false
})

$('.carousel-example-generic').on('slid.bs.carousel', function(e){

  //get direction of slide
  var direction = e.direction;
  console.log("Finished sliding to the " + direction + ".");
})



//custom tab panel

$('#myTabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})


//custom accordion
$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
});



$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});
