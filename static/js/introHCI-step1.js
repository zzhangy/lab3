// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function() {
		$('.jumbotron h1').text("Javascript has taken control");
	});

	// Add any additional listeners here
}