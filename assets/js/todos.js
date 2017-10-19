var name;
//Check off specific todos by clicking
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
    // change if completed in local storage
    var toCheckOff = $(this).text().slice(1);
    if ($(this).hasClass("completed")) {
        window.localStorage.setItem(toCheckOff, "true");
    } else {
        window.localStorage.setItem(toCheckOff, "false");
    }

});
//Check if X is clicked, if yes then delete
$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500, function() {
        var toDelete = $(this).text().slice(1);
        //remove from localStorage
        window.localStorage.removeItem(toDelete);
        //demove from list`
        $(this).remove();
    });
    event.stopPropagation();
});

//Add new todo on text input enter click
$("input[type='text']").keypress(function (e) {
    if(e.which === 13)  // the enter key code
     {
        // save text to variable
        var todoText = $(this).val()
        addToList(todoText);
        // clear input text
        $(this).val("");
        //add entry to localStorage
        window.localStorage.setItem(todoText, "false");
    }    
});

function addToList (todoText, completed) {
        // generate text button
        var delButton = "<span><i class='fa fa-trash' aria-hidden='true'></i></span> ";
        if (completed === "true") {
            var listEntry = "<li class='completed'>" + delButton + todoText + "</li>";
        } else {
            var listEntry = "<li>" + delButton + todoText + "</li>";
        }
        // create a new li and add to ul
        $("ul").append(listEntry);
}

//hide add todo input
$(".fa-plus").on("click", function () {
    $("input[type='text']").fadeToggle(500);    
});

//on first load check if we have stored name if not then ask for it and display
window.onload = function () {
    if (!window.localStorage.getItem("name")) {
        name = prompt("Enter your name");
        window.localStorage.setItem("name", name);
    } else {
        name = window.localStorage.getItem("name");
    }
    $("h1").prepend(name + "'s ")

    //restore saved todos from localStorage
    $.each(localStorage, function(todo, completed){
        if (!(todo === "name")) {
            addToList(todo, completed);
        }
    });

};