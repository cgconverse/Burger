// wait until after the DOM is fully loaded to attach handlers
$(function() {
    $(".change-eaten").on("click", function(event) {
        event.preventDefault()
        var id = $(this).data("id");
        var newEaten = $(this).data("neweaten");

        var newEatenState = {
            eaten: newEaten
        };
        console.log(newEatenState)
        console.log(id)
