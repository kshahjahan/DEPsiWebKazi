var video = document.getElementById('video');

video.addEventListener('click',function() {
  if (video.muted === false){

  	video.muted = true;
  }
	else {
		video.muted = false;
	}
});

// var posts = $('.team-member');
// posts.hide();

// $(".portfolio-filter li a" ).click(function() {

// 	var customType = $( this ).data('filter');
// 	console.log(customType);
// 	console.log(posts.length);

// 	$('.team-member').each(function () {
// 		data = $(this).data('cat');

// 		if (data == customType) {
// 			$(this).show()
// 		}
// 	});

// });