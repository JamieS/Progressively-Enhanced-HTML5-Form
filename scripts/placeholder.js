$(function() {
	
	var $el;
	
	$("input[placeholder]").each(function() {
	
		$el = $(this);
				
		$el
			.css("color", "#ccc")
			.val($el.attr("placeholder"))
			.attr("rel", $el.val())
			.focus(function() {
				$el = $(this);
				if ($el.val() == $el.attr("rel")) {
					$el.val("");
					$el.css("color", "black");
				}
			})
			.blur(function() {
				$el = $(this);
				if ($el.val() == "") {
					$el.val($el.attr("rel"));
					$el.css("color", "#ccc");
				}
			});
	
	});
	
});