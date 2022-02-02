function logMove(x,y) {
		$.ajax({
			type: 'POST',
			url: 'post.php',
			data: {'THINGX':'VALUEX', 'THINGY':'VALUEY'},
			dataType: 'json',
			success: function(GAMEDATA) {
				console.log(GAMEDATA);
			}
		});
	}
