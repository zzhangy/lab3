// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript has taken control");
		$("#testjs").text("Please wait...");
		$('.jumbotron p').toggleClass("active");
	});

	// Add any additional listeners here
	$("a.thumbnail").click(projectClick);
	$("#submitBtn").click(updateProject);
}

function updateProject(e) {
	var projectID = $('#project').val();
	$(projectID).animate({
		width: $('#width').val()
	});

	var newText = $('#description').val();
	$(projectID + " .project-description").text(newText);
}

/*
 * Listener function when a project is clicked on.
 */
function projectClick(e) {
	// Cancel the default action, which prevents the page from reloading
    e.preventDefault();

    // Get the div id, e.g., "project1"
    var project = $(this).closest('.project').attr('id');
    // Write it to the console
    announceProject(project);

	projectDivID = "#" + project;
    // Look up the project div with that id and change its color
    // Remember that to look up something by id, you have to put # before its id
    // e.g., $("#foo") will locate <div id="foo">
	// Finally, set the background color to gray
	$(projectDivID).css("background-color", "#e9e9e9");

	var description = $(projectDivID).find('.project-description');
	if (description.length == 0) {
		$(projectDivID).append("<div class='project-description'><p>Description of the project.</p></div>");
	} else {
		description.fadeOut();
	}
}

/*
 * Prints to the console when a project is clicked on.
 */
function announceProject(toAnnounce) {
	// Remove the 'project' part of the string, leaving just the number (e.g., 3)
	var project = toAnnounce.substring(7);
	console.log("Project " + project + " clicked on.");
}