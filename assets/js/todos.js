//Check off specific tofos by clocking
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});
//Check if X is clicked, if yes then delete
$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
});
//Add new todo on text input enter click
var delButton = "<span>X</span> ";

$("input[type='text']").keypress(function (e) {
    if(e.which === 13)  // the enter key code
     {
        // save text to variable
        var todoText = "<li>" + delButton + $(this).val() + "</li>";
        // clear input text
        $(this).val("");
        // create a new li and add to ul
        $("ul").append(todoText);
     }
   });

