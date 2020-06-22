$(function () {

    $(".create-form").on("submit", function (event) {
        event.preventDefault();
        var newBurger = {
            burger_name: $("#addedBurger").val().trim(),
            devoured: 0
        };

        $.ajax("/api/burgers/", {
            type: "PUT",
            data: { devoured: true }
        }).then(
            function () {
                console.log("devoured burger " + id);
                location.reload();
            }
        );
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("Made new burger!");
                location.reload();
            }
        );
    });

    $(".eatburger").on("click", function (event) {
        var id = $(this).data("id");
        var devouredState = {
            devoured: 1
        };
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredState
        }).then(function () {
            console.log("Burger Devoured!")
            location.reload();
        })
    });
});