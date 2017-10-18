//Check off specific tofos by clocking
$("li").on("click", function () {
    $(this).toggleClass("completed");
});
//Check if X is clicked, if yes then delete
$("span").on("click", function (event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
})
