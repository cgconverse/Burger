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

        // Sending the put request
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newEatenState
        }).then(
            function() {
                console.log("changed eaten to", newEaten);
                // when the page is reloaded it will get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            name: $("#burger").val().trim(),
            eaten: $("[name=eaten]:checked").val().trim()
        };
        console.log(newBurger)
            
        // Sending the post request
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});