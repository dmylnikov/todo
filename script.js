// add task
$("input[type='text']").on('keypress', function (e) {
	if(e.which == '13') {
		$("#tasklist").append(' \
			<div class="task">\
				<input type="checkbox">\
				<label contenteditable="true"> '+$(this).val()+'</label>\
				<img class="del" src="cross_48.png" width="20" align="right">\
			</div>');
		$(this).val('');
	}
});

// done - undone
$(document).on('change', 'input[type="checkbox"]', function () {
	$(this).parent().toggleClass('task-done');
});

//delete task
$(document).on('click', '.del', function() {
	$(this).parent().remove();
});

//all done
$('input[value="All done"]').on('click', function () {
	$('input[type="checkbox"]').each( function () {
		if (!$(this).is(":checked"))
			$(this).click();
	})
});

//delete done
$('input[value="Delete done"]').on('click', function () {
	$('input[type="checkbox"]').each( function () {
		if ($(this).is(":checked"))
			$(this).parent().remove();
	})
});