yepnope({
  test : Modernizr.inputtypes.date,
  nope : [
	'scripts/jquery-ui.js',
	'css/jquery-ui.css'
  ],
  callback : {
	'scripts/jquery-ui.js' : function() {
		$(function() {
			$("input[type='date']").datepicker();
		});
	}
  }
});

yepnope({
  test : Modernizr.input.placeholder,
  nope : [
	'scripts/placeholder.js'
  ]
});

yepnope({
  test : Modernizr.inputtypes.range,
  nope : [
	'scripts/jquery-tools.js', 
	'css/range.css', 
	'scripts/range.js'
  ]
});


// Geolocation stuff
	
$(function() {
	
	function success(position) {
		$("#location").val(position.coords.latitude + ", " + position.coords.longitude);
	}
	
	function error(msg) {
		// alert("fail: " + msg);
	}
	
	if (navigator.geolocation) {
	  navigator.geolocation.getCurrentPosition(success, error);
	}
		
});