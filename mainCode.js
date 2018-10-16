var numPosts = 5;
var show;

function loadData() {
    document.getElementById("bottomBar").innerHTML = "----- Built by Jake Swartwout - Last updated October 15th, 2018 -----";
    whenResize();
}

//called from onload, this loads in all the data from other files, formats, and displays it
function loadPosts() {
    loadData();
    show = posts.length - numPosts;
    setPosts(show, show + numPosts);
    whenResize();
}

function loadResume() {
    loadData();
    checkWidth(950, 950);
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

        document.getElementById("contentAndBar").style.width = "99%";

        document.getElementById("sideBar").style.width = "99%";
        document.getElementById("content").style.width = "99%";
    } else {
        document.getElementById("leftSpacer").innerHTML = "";
        document.getElementById("leftSpacer").style.width = "0px";

        document.getElementById("contentAndBar").style.width = "100%";

        document.getElementById("content").style.width = "";
        document.getElementById("sideBar").style.width = "";
    }
}


function setPosts(lowInclusive, highExclusive) {
    //this will be what to add to create all of the posts
    var htmlToAdd = "";
    //go through every post and set up the divs to make it look nice
    for (var j = highExclusive - 1; j >= lowInclusive && j<posts.length && j>=0; j--) {
        //the actual post to get, starting from the most recent
        var i = j;
        // the overarching container
        htmlToAdd += "<div class=\"post\" id=\"post" + i + "\">";
        //the title
        htmlToAdd += "\n<div class=\"postTitle\" >" + posts[i].title + "</div >";
        //the date
        htmlToAdd += "\n<div class=\"postDate\">" + posts[i].date + "</div>";
        //the content
        htmlToAdd += "\n<div class=\"postContent\">" + posts[i].content + "</div>";
        //closing the container
        htmlToAdd += "</div >";
        //add a space
        htmlToAdd += "</br >";

        /* <div class="post" id="post(i)">       where (i) is which post it is
         *     <div class="postTitle" > title  </div >
         *     <div class="postDate"> date </div>
         *     <div class="postContent"> content </div>
         * </div>
         * </br>
         */

    }
    document.getElementById("postStream").innerHTML = htmlToAdd;
}




function showOlderPosts() {
    if (show > 0) {
        show -= numPosts;
        setPosts(show, show + numPosts);
    }
}

function showNewerPosts() {
    if (show + numPosts < posts.length) {
        show += numPosts;
        setPosts(show, show + numPosts);
    }
}

//make a tab selector bar across the top
//add links to my resume to various things (like youth commission go to their website, heritage to heritage's website, cybersecurity to their explanation, global to global's page)