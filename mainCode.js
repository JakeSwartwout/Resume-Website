function addBottomBar() {
    var date = "24th";
    document.getElementById("bottomBar").innerHTML =
        "&nbsp;<br />----- Built by Jake Swartwout - Last updated November " + date + ", 2018 -----<br />&nbsp;";
}

var numPosts = 5;
var show;


function loadPoster() {
    loadPosts();
    addBottomBar();
    setStickyNav();
    whenResize();
}

function loadResume() {
    checkWidth(950, 950);
    addBottomBar();
    setStickyNav();
}




function setStickyNav() {
    //build the navbar
    var navbar = "<a href=\"index.html\" id=\"home\">Home Page</a>";
    navbar = navbar.concat("<a href=\"resume.html\" id=\"resume\">My Resume</a>");
    navbar = navbar.concat("<a href=\"websitePostsPage.html\" id=\"website\">Website Build</a>");
    navbar = navbar.concat("<a href=\"appPostsPage.html\" id=\"apps\">App Building</a>");
    navbar = navbar.concat("<a href=\"gamePostsPage.html\" id=\"game\">Video Game</a>");
    navbar = navbar.concat("<a href=\"projectsPostsPage.html\" id=\"other\">Other Projects</a>");
    document.getElementById("navbar").innerHTML = navbar;

    //set the scroll
    window.onscroll = function () {
        var navbar = document.getElementById("navbar");
        var topStyle = getComputedStyle(document.getElementById("pageTopper"));
        var topHeight = Number(topStyle.height.substr(0, topStyle.height.length - 2))
            + Number(topStyle.paddingTop.substr(0, topStyle.paddingTop.length - 2))
            + Number(topStyle.paddingBottom.substr(0, topStyle.paddingBottom.length - 2));
        if (window.pageYOffset > topHeight) {
            var navHeight = getComputedStyle(navbar).height;
            navbar.classList.add("sticky");
            navbar.nextElementSibling.style.marginTop = "" + (Number(navHeight.substr(0, navHeight.length - 2)) + 2) + "px";
        } else {
            navbar.classList.remove("sticky");
            navbar.nextElementSibling.style.marginTop = "0px";
        }
    }

}


//called from onload, this loads in all the data from other files, formats, and displays it
function loadPosts() {
    if (posts.length != 0) {
        show = posts.length - numPosts;
        setPosts(show, show + numPosts);
    } else {
        document.getElementById("postStream").innerHTML = "There are no posts";
    }
    whenResize();
}


function whenResize() {
    checkWidth(850, 640);
}

function checkWidth(maxStretch, minSquish) {
    var space = window.innerWidth;
    if (space > maxStretch) {
        var barWidth = (space - maxStretch - 50) / 2;
        document.getElementById("leftSpacer").innerHTML = "&nbsp";
        document.getElementById("leftSpacer").style.width = barWidth + "px";

        document.getElementById("contentAndBar").style.width = maxStretch + "px";

        document.getElementById("sideBar").style.width = "";
        document.getElementById("content").style.width = "";
    } else if (space < minSquish) {
        document.getElementById("leftSpacer").innerHTML = "";
        document.getElementById("leftSpacer").style.width = "0px";

        document.getElementById("contentAndBar").style.width = "100%";

        document.getElementById("sideBar").style.width = "100%";
        document.getElementById("content").style.width = "100%";
    } else {
        document.getElementById("leftSpacer").innerHTML = "";
        document.getElementById("leftSpacer").style.width = "0px";

        document.getElementById("contentAndBar").style.width = "100%";

        document.getElementById("content").style.width = "";
        document.getElementById("sideBar").style.width = "";
    }
}