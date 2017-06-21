var myIndex = 0;
carousel();

/* This function implments the automated slideshow of imgaes. */
function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 3000); // Change image every 2 seconds
}

/* This function prompts the user for name and display a greeting on the fixed menu. */
function login() {
	var name = prompt("Please input your name: ");

	if (name != null) {
		// document.getElementsById("login").innerHTML = "<button id=\"login-button\" style=\"visibility:hidden;\"> <b> Hello " + name + " ! </b> </button>";
		document.getElementById("login").innerHTML = "<p style=\"position: fixed; color: white; z-index: 30; font-size: 150%; font-family: \"Palatino Linotype\", \"Book Antiqua\", Palatino, serif;\"> Hello, " + name + "! </p>";
	}
}

/* This function changes the background of the webpage. */
function switchbg(n){
    document.body.style.backgroundImage = "url(\"img/bg0" + n + ".jpg\")";
}