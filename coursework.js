/*calls function to display cookie message*/
setTimeout('showCookie()', 3000);

/* function to displays the cookie message*/
function showCookie() {
    document.getElementById("cookie").style.display = "block";
}

/*this function hides the cookie message*/
function hideCookie() {
    document.getElementById("cookie").style.display = "none";
}
   
/*this function validated the form and prompts error message if necessary*/
function validate() {
    var fname = document.forms["messageform"]["fname"].value;
    var lname = document.forms["messageform"]["lname"].value;
    var email = document.forms["messageform"]["email"].value;

    if (fname == "") {
        if (lname == ""){
            if (email ==""){
                alert("please fill in your first name, last name and email");
            }
            else {
                alert("please fill in first name and last name");
            }
        }
        else {
            if (email ==""){
                alert("please fill in your first name and email");
            }
            else {
                alert("please fill in first name ");
            }
        }
    }
    else {
        if (lname == ""){
            if (email ==""){
                alert("please fill in your last name and email");
            }
            else {
                alert("please fill in last name");
            }
        }   
        else {
            if (email ==""){
                alert("please fill in your email");
            }
            else {
                alert("Thank you for filling the form " + fname );
                document.forms["messageform"]["fname"].value="";
                document.forms["messageform"]["lname"].value="";
                document.forms["messageform"]["country"].value="";
                document.forms["messageform"]["email"].value="";
                document.forms["messageform"]["message"].value="";
            }
        }  
    }    
}   

