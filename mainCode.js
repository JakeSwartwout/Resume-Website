function addBottomBar() {
    document.getElementById("bottomBar").innerHTML =
        "&nbsp;<br />----- Built by Jake Swartwout - Last updated " +
        "July 20th, 2019"
        + " ----- <br /> &nbsp; ";
}


function fillInPoster() {
    loadPosts();
    addBottomBar();
    fillInNav();
    fillInSideBar();
}



function fillInNav() {
    //build the navbar
    var navbar = "<a href=\"index.html\" id=\"home\">Home Page</a>";
    navbar = navbar.concat("<a href=\"resume.html\" id=\"resume\">My Resume</a>");
    navbar = navbar.concat("<a href=\"websitePostsPage.html\" id=\"website\">Website Build</a>");
    navbar = navbar.concat("<a href=\"appPostsPage.html\" id=\"apps\">App Building</a>");
    navbar = navbar.concat("<a href=\"gamePostsPage.html\" id=\"game\">Video Game</a>");
    navbar = navbar.concat("<a href=\"projectsPostsPage.html\" id=\"other\">Other Projects</a>");
    document.getElementById("navbar").innerHTML = navbar;
}

function fillInSideBar() {
    var string = "<strong>Other Places to Visit</strong>";
    string += "<br />";
    string += "<div id=\"linksList\">";
    string += "<a href=\"https://www.linkedin.com/in/jake-swartwout\" title=\"You need an account to view it\">My LinkedIn Profile</a>";
    string += "<br /> <a href=\"https://github.com/JakeSwartwout\" title=\"not much here\">My Github</a>";
    string += "<br /> <a href=\"https://jakeshortstories.blogspot.com/\" title=\"jakesshortstories.blogspot.com\">My Writing Blog</a>";
    string += "<br /> <a href=\"https://bug-adventures.blogspot.com/\" title=\"free to download\">The Blog for My Books</a>";
    string += "<br />";
    string += "</div>";

    document.getElementById("sideBar").innerHTML = string;
}

function checkMobile() {
    var userAgent = navigator.userAgent;
    var isMobile = userAgent.indexOf("Mobile") !== -1; //is there mobile in the user agent
    document.getElementsByTagName("body")[0].classList.add("mobile");
}

setTimeout(checkMobile, 10);