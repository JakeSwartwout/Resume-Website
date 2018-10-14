//called from onload, this loads in all the data from other files, formats, and displays it
function loadData() {
    checkWidth(900);
    addPosts(5);
}

function checkWidth(maxStretch) {
    var space = window.innerWidth;
    if (space > maxStretch) {
        var barWidth = (space - maxStretch - 50)/2;
        document.getElementById("leftSpacer").innerHTML = "&nbsp";
        document.getElementById("leftSpacer").style.width = barWidth + "px";
        document.getElementById("mainWrapper").style.width = maxStretch + "px";
    }
    else {
        document.getElementById("leftSpacer").innerHTML = "";
        document.getElementById("leftSpacer").style.width = "0px";
        document.getElementById("mainWrapper").style.width = "97%";
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
