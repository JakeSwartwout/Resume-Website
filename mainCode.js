function addBottomBar() {
    document.getElementById("bottomBar").innerHTML =
        "&nbsp;<br />----- Built by Jake Swartwout - Last updated November 15th, 2018 -----<br />&nbsp;";
}

var numPosts = 5;
var show;


function loadMain() {
    addBottomBar();
    setStickyNav();
    whenResize();
    loadMainPics();
}

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
    var navbar = "<a href=\"index.html\">Home Page</a>";
    navbar = navbar.concat("<a href=\"resume.html\">My Resume</a>");
    navbar = navbar.concat("<a href=\"websitePostsPage.html\">Website Building</a>");
    navbar = navbar.concat("<a href=\"appPostsPage.html\">App Building</a>");
    navbar = navbar.concat("<a href=\"gamePostsPage.html\">Video Game</a>");
    navbar = navbar.concat("<a href=\"projectsPostsPage.html\">Other Projects</a>");
    document.getElementById("navbar").innerHTML = navbar;

    window.onscroll = function () {
        var navbar = document.getElementById("navbar");
        var navHeight = getComputedStyle(navbar).height;
        var topStyle = getComputedStyle(document.getElementById("pageTopper"));
        var topHeight = Number(topStyle.height.substr(0, topStyle.height.length - 2))
            + Number(topStyle.paddingTop.substr(0, topStyle.paddingTop.length - 2))
            + Number(topStyle.paddingBottom.substr(0, topStyle.paddingBottom.length - 2));
        if (window.pageYOffset > topHeight) {
            navbar.classList.add("sticky");
            document.getElementById("navbar").nextElementSibling.style.marginTop = "" + (Number(navHeight.substr(0,navHeight.length-2)) + 2) + "px";
        } else {
            navbar.classList.remove("sticky");
            document.getElementById("navbar").nextElementSibling.style.marginTop = "0px";
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


//make the pics 
function loadMainPics() {
    var lines = document.getElementsByClassName("picsAcross");
    for (var j = 0; j < lines.length; j++) {
        var wrapper = lines[j];
        var pics = wrapper.getElementsByTagName("img");
        var sumWidths = 0.000000;
        for (var i = 0; i < pics.length; i++) {
            var wide = getComputedStyle(pics[i]).width;
            var high = getComputedStyle(pics[i]).height;
            //add the number of widths per 1 height
            sumWidths += Number(wide.substring(0, wide.length - 2)) / Number(high.substring(0, high.length - 2));
            //make them notice the hovering
        }
        //the total width then is going to be the sum of widths per height times total height
        //so the total height should be the total width divided by the sum
        var totWide = getComputedStyle(wrapper).width;
        var totHigh = Number(totWide.substring(0, totWide.length - 2)) / (sumWidths+.0001);
        wrapper.style.height = totHigh + "px";
    }
}