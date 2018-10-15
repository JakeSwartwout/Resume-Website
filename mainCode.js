//called from onload, this loads in all the data from other files, formats, and displays it
function loadData() {
    addPosts(5);
    whenResize();
}

function whenResize() {
    checkWidth(900, 640);
}

function checkWidth(maxStretch, minSquish) {
    var space = window.innerWidth;
    if (space > maxStretch) {
        var barWidth = (space - maxStretch - 50)/2;
        document.getElementById("leftSpacer").innerHTML = "&nbsp";
        document.getElementById("leftSpacer").style.width = barWidth + "px";

        document.getElementById("mainWrapper").style.width = maxStretch + "px";

        document.getElementById("content").style.width = "";
        document.getElementById("sideBar").style.width = "";
    } else if (space < minSquish) {
        document.getElementById("leftSpacer").innerHTML = "";
        document.getElementById("leftSpacer").style.width = "0px";

        document.getElementById("mainWrapper").style.width = "97%";

        document.getElementById("content").style.width = "97%";
        document.getElementById("sideBar").style.width = "97%";
    } else {
        document.getElementById("leftSpacer").innerHTML = "";
        document.getElementById("leftSpacer").style.width = "0px";

        document.getElementById("mainWrapper").style.width = "97%";

        document.getElementById("content").style.width = "";
        document.getElementById("sideBar").style.width = "";
    }
}


function addPosts(numberToAdd) {
    //this will be what to add to create all of the posts
    var htmlToAdd = "";
    //go through every post and set up the divs to make it look nice
    for (var j = 0; j < numberToAdd && j<posts.length; j++) {
        //the actual post to get, starting from the most recent
        var i = posts.length - 1 - j;
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

//next, make a new page for my resume and link to it
//make a tab selector bar across the top
//have a button to look at older posts
