function addBottomBar() {
    document.getElementById("bottomBar").innerHTML =
        "&nbsp;<br />----- Built by Jake Swartwout - Last updated " +
        "August 27th, 2022"
        + " ----- <br /> &nbsp; ";
}


function fillInPoster() {
    loadPosts();
    addBottomBar();
    fillInNav();
    fillInSideBar();
}



function fillInNav() {
    formatNavTab = function(pageName, id, tagText) {
        output = "<div id=\"" + id + "\">"
            output += "<a href=\"" + pageName + ".html\">"
                output += tagText
            output += "</a>"
        output += "</div>"
        // output = "<a id=\"" + id + "\" href=\"" + pageName + ".html\">"
        //     output += tagText
        // output += "</a>"
        return output
    }
    //build the navbar
    var navbar = formatNavTab("index", "home", "Home Page");
    navbar += formatNavTab("resume", "resume", "My Resume");
    // // navbar = navbar.concat("<a href=\"appPostsPage.html\" id=\"apps\">App Building</a>");
    navbar += formatNavTab("websitePostsPage", "website", "Website updates");
    // // navbar = navbar.concat("<a href=\"gamePostsPage.html\" id=\"game\">Video Game</a>");
    navbar += formatNavTab("projectsPostsPage", "other", "Projects");
    document.getElementById("navbar").innerHTML = navbar;
}

function fillInSideBar() {
    var string = "<strong>Other Places to Visit</strong>";
    string += "<br />";
    string += "<div id=\"linksList\">";
    string += "<a href=\"https://www.linkedin.com/in/jake-swartwout\" title=\"You need an account to view it\">My LinkedIn Profile</a>";
    string += "<br /> <a href=\"https://github.com/JakeSwartwout\" title=\"not much here\">My Github</a>";
    string += "<br /> <a href=\"https://jakeswartwout.wordpress.com/\" title=\"Not hand-made\">My Design Progress Blog</a>";
    string += "<br /> <a href=\"https://jakespathwaytospace.wordpress.com/\" title=\"Not hand-made\">My Pathway to Space Blog</a>";
    // string += "<br /> <a href=\"https://jakeshortstories.blogspot.com/\" title=\"jakesshortstories.blogspot.com\">My Writing Blog</a>";
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