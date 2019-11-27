$(function() {
  $('#front.tablink').hover(function() {
  	$('#front').css({opacity: 1, transition: "all 0.3s ease"});
    $('#back').css({opacity: 0.5, transition: "all 0.3s ease"});
  }, function() {
  	$('#front').css({opacity: "", transition: "all 0.3s ease"});
    $('#back').css({opacity: "", transition: "all 0.3s ease"});
  });
});

$(function() {
	$('#back.tablink').hover(function() {
		$('#back').css({opacity: 1, transition: "all 0.3s ease"});
		$('#front').css({opacity: 0.5, transition: "all 0.3s ease"});
  	}, function() {
  		$('#back').css({opacity: "", transition: "all 0.3s ease"});
  		$('#front').css({opacity: "", transition: "all 0.3s ease"});
  	});
});


$(function() {
  $('.page-selector').hover(function() {
    $('.dropbtn').css({opacity: 0, transition:"all 0.5s ease"});
  	$('.drop-content').css({opacity: 1, transition:"all 0.5s ease"});
    setTimeout(function() {$('#hidden').removeClass("disabled");}, 800);
  	}, function() {
  		$('.drop-content').css({opacity: "", transition:"all 0.5s ease"});
      $('.dropbtn').css({opacity: "", transition:"all 0.5s ease"});
      $('#hidden').addClass("disabled");
  	});
});

$(function(){
  $("#include-map").load("../map-app/build/index.html"); 
});



