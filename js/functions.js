timer = setTimeout('temporizador()', 3000);

function temporizador() {
	$(document).ready(function() {
		$(location).attr('href', '#home');
	});
}
