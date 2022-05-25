function openLogin() {
    document.getElementById("LogInForm").style.width = "50%";
    document.getElementById("LogInForm").style.border = "thick solid white";

}

function closeLogin() {
    document.getElementById("LogInForm").style.width = "0";
    document.getElementById("LogInForm").style.border = "none";
    document.getElementById("LogIn").reset();
}

function openSignup() {
    document.getElementById("SignUpForm").style.width = "50%";
    document.getElementById("SignUpForm").style.border = "thick solid white";
}

function closeSignup() {
    document.getElementById("SignUpForm").style.width = "0";
    document.getElementById("SignUpForm").style.border = "none";
    document.getElementById("SignUp").reset();

}

function Login() {
    UserID = document.getElementById("UserID1").value
    alert("Welcome," + UserID + "!")

}


function addEvent(node, type, callback) {
    if (node.addEventListener) {
        node.addEventListener(type, function (e) {
            callback(e, e.target);
        }, false);
    } else if (node.attachEvent) {
        node.attachEvent('on' + type, function (e) {
            callback(e, e.srcElement);
        });
    }
}

function shouldBeValidated(field) {
    return (
        !(field.getAttribute("readonly") || field.readonly) &&
        !(field.getAttribute("disabled") || field.disabled) &&
        (field.getAttribute("pattern") || field.getAttribute("required"))
    );
}

function instantValidation(field) {
    if (shouldBeValidated(field)) {
        var invalid =
            (field.getAttribute("required") && !field.value) ||
            (field.getAttribute("pattern") &&
                field.value &&
                !new RegExp(field.getAttribute("pattern")).test(field.value));
        if (!invalid && field.getAttribute("aria-invalid")) {
            field.removeAttribute("aria-invalid");
        } else if (invalid && !field.getAttribute("aria-invalid")) {
            field.setAttribute("aria-invalid", "true");
        }
    }
}

addEvent(document, "change", function (e, target) {
    instantValidation(target);
});
var fields = [
    document.getElementsByTagName("input")
];
for (var a = fields.length, i = 0; i < a; i++) {
    for (var b = fields[i].length, j = 0; j < b; j++) {
        addEvent(fields[i][j], "change", function (e, target) {
            instantValidation(target);
        });
    }
}

function ValidateSignUp() {

    DOB = new Date(document.getElementById("DOB").value);
    var Pass = document.getElementById("Pass").value;
    var RePass = document.getElementById("RePass").value;

    var month_diff = Date.now() - DOB.getTime();
    var age_dt = new Date(month_diff);
    var year = age_dt.getUTCFullYear();
    var age = Math.abs(year - 1970);
    if (age < 13) {
        document.getElementById("MsgDOB").innerHTML = "You must be atleast 13 years old to register!!";
    }
    else {
        document.getElementById("MsgDOB").innerHTML = "";
    }


    if (Pass.length < 8) {
        document.getElementById("MsgPass").innerHTML = "Password length must be atleast 8 characters!!";
        return false;
    }

    if (Pass != RePass) {
        document.getElementById("MsgPass").innerHTML = "Passwords Not Matching!!!";
        return false;
    }
    else {
        alert("Account Created Successfully!!");
    }
}  
