$(document).ready(function() {

    var topics = ["bass", "trout", "salmon", "shark", "tuna", "marlin"];    

    function topicButtons() {
		$("#buttonRow").empty();
		for (var i = 0; i < topics.length; i++) {
			var category = $("<button>");
			category.attr("data-name", topics[i]);
			category.text(topics[i]);
			$("#buttonRow").append(category);
		}
    }
    topicButtons();

});
