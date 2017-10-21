var name;
var list = {};

//Check off specific todos by clicking
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
    // change if completed in local storage
    var toCheckOff = $(this).text();
    if ($(this).hasClass("completed")) {
        list[toCheckOff] = true;
    } else {
        list[toCheckOff] = false;
    }
    updateList();

});
//Check if X is clicked, if yes then delete
$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500, function() {
        var toDelete = $(this).text();
        //remove from localStorage
        delete list[toDelete];
        updateList();
        //remove from list`
        $(this).remove();
    });
    //stop from executing clicks on lower elements
    event.stopPropagation();
});

//Add new todo on text input enter click
$("input[type='text']").keypress(function (e) {
    if(e.which === 13)  // the enter key code
     {
        // save text to variable
        var todoText = $(this).val()
        if (todoText.length >= 1 ) {
            addToList(todoText);
            // clear input text
            $(this).val("");
            //add entry to list and update localStorage
            list[todoText] = false;
            updateList();
        };
    };    
});

function addToList (todoText, completed) {
        // generate text button
        var delButton = "<span><i class='fa fa-trash' aria-hidden='true'></i></span>";
        if (completed === true) {
            var listEntry = "<li class='completed'>" + delButton + todoText + "</li>";
        } else {
            var listEntry = "<li>" + delButton + todoText + "</li>";
        }
        // create a new li and add to ul
        $("ul").append(listEntry);
}

function updateList() {
    localStorage.setItem('todoList', JSON.stringify(list));
};

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
    if (!(!window.localStorage.getItem("todoList"))) {
        list = JSON.parse(localStorage.getItem("todoList"));
    }
    
    $.each(list, function(todo, completed){
        addToList(todo, completed);
    });
};