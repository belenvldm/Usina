timer = setTimeout('temporizador()', 2000);

function temporizador() {
	$(document).ready(function() {
		$(location).attr('href', '#home');
	});
}
