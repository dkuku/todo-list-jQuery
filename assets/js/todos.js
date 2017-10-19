var name;
//Check off specific todos by clicking
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
var delButton = "<span><i class='fa fa-trash' aria-hidden='true'></i></span> ";

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

$(".fa-plus").on("click", function () {
    $("input[type='text']").fadeToggle(500);    
});
//on first load check if we have stored name if not then ask for it and display
window.onload = function () {
    console.log(window.localStorage);
    if (!window.localStorage.getItem("name")) {
        name = prompt("Enter your name");
        window.localStorage.setItem("name", name);
    } else {
        name = window.localStorage.getItem("name");
    }
    $("h1").prepend(name + "'s ")
};