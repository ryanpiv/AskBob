function AskBob(input) {

    for (i = 0; i < text.length; i++) {
        if (text[i].tags.indexOf(input) > -1) {
            $("#output").prepend('<div class="bob-output">' + text[i].message + '</div>');
            return;
        } else {
            var random = Math.floor(Math.random() * text.length + 1);
            $("#output").prepend('<div class="bob-output">' + text[random].message + '</div>');
            return;
        }
    }
}

$(document).keyup(function (e) {
    if (e.keyCode == 13) {
        var userInput = $("#bob-input").val();
        $("#bob-input").val("");
        if (userInput.length > 0) {
            $("#output").prepend('<div class="user-input">' + userInput + '</div>');
            $("#loader").show();

            setTimeout(function () {
                AskBob(userInput);
                $("#loader").hide();
            }, 1500);

        } else {
            alert('Bob does not like chat attempts without text.')
        }
    }
});

$(document).on('click', function (e) {
    $("#bob-input").focus();
});

$(document).ready(function () {
    $("#bob-input").focus();
    
    var dots = window.setInterval( function() {
    var wait = document.getElementById("dots");
    if ( wait.innerHTML.length > 2 ) 
        wait.innerHTML = "";
    else 
        wait.innerHTML += ".";
    }, 300);
    
});

var text = [{
    "tags": "testtag",
        "message": "Yes it is. Programming sucks"
}, {
    "tags": "",
        "message": "Yes it is. Programming sucks"
}, {
    "tags": "happy excited good hopeful nice excited",
        "message": "YES. That's the spirit"
}, {
    "tags": "meeting meet team talk",
        "message": "what time are we talking with the TEAM"
}, {
    "tags": "programming upset frustrated defaults",
        "message": "now the defaults are NOT the same"
}, {
    "tags": "sheila lebouf done accomplish goals",
        "message": "then DO IT"
}, {
    "tags": "",
        "message": "oh boy, jump right in with BOTH feet"
}, {
    "tags": "problem fucked shit fuck bad code pca carepoint",
        "message": "Shit - got a problem"
}, {
    "tags": "merge submit help",
        "message": "ok, thats nice.  But the application doesn't run on my local now"
}, {
    "tags": "again mistake upset try",
        "message": "let me rebuild"
}, {
    "tags": "requirements change mess",
        "message": "don't mess with the requirements - they never change!"
}, {
    "tags": "care careful opinion",
        "message": "i don't care as long as the field NAMES are the same"
}, {
    "tags": "",
        "message": "You fill in what is supposed to be there.  I will ONLY blank them out"
}, {
    "tags": "",
        "message": "I just foud out I'm going to be a grandpa again"
}, {
    "tags": "",
        "message": "ok, your right, but they DO want to use it"
}, {
    "tags": "",
        "message": "HEY - SAM!!!!!   Wake Up"
}, {
    "tags": "",
        "message": "what EVER!!!!"
}, {
    "tags": "",
        "message": "ABSOLUTELY NO CONVERATIONS"
}, {
    "tags": "",
        "message": "i HAVE a EDMX change pending"
}, {
    "tags": "",
        "message": "yes  - why?"
}, {
    "tags": "",
        "message": "wooohoooo!"
}, {
    "tags": "",
        "message": "I FORGOT MY HWAIIAN SHIRT"
}, {
    "tags": "",
        "message": "speaking of which, its time for my DAILY therapy session"
}, {
    "tags": "",
        "message": "SAM, JUST ANSWER THE QUESTION"
}, {
    "tags": "",
        "message": "ok, i dont care"
}, {
    "tags": "",
        "message": "Yes it is. Programming sucks"
}];

var obj = JSON.parse(text);
