//how many posts to show at a time
var numPosts = 5;
//which posts are showing
var show;

function loadPosts() {
    if (posts.length != 0) {
        show = posts.length - numPosts;
        setPosts(show, show + numPosts);
    } else {
        document.getElementById("postStream").innerHTML = "There are no posts";
    }
}

// the base post
var post = function (theTitle, theDate, theContent) {
    this.title = theTitle;
    this.date = theDate;
    this.content = theContent;
}

// a post but you can pass it a list of strings instead of a single string
var mediaPost = function (theTitle, theDate, contentMediaArray) {
    this.theContent = "";
    for (var i = 0; i < contentMediaArray.length; i++) {
        this.theContent += contentMediaArray[i];
    }
    post.call(this, theTitle, theDate, this.theContent);

}

//a dateless post that instead has information about the language environment
var projectPost = function (theTitle, theIDE, theLanguage, shortDescription, theContentArray) {
    this.title = theTitle;
    this.ide = theIDE;
    this.lang = theLanguage;
    this.desc = shortDescription;
    this.framework = "";
    this.theEnvironment = "Built in ";

    switch (this.ide.toLowerCase()) {
        case "processing":
            this.framework = "Processing";
            this.theEnvironment += this.ide + ", using " + this.lang + " and the " + this.framework + " framework";
            break;
        case "sublime":
            this.framework = "p5.js";
            this.theEnvironment += this.ide + ", using " + this.lang + " and the " + this.framework + " framework";
            break;
        case "paper":
            this.theEnvironment = "A written research paper";
            break;
        case "jupyter notebook":
        case "jupyter":
            this.theEnvironment += this.lang + " in a Jupyter Notebook";
            break;
        default:
            this.theEnvironment += this.lang;
            break;
    }
    this.content = "";
    for (var i = 0; i < theContentArray.length; i++) {
        this.content += theContentArray[i];
    }
    post.call(this, theTitle, this.theEnvironment, this.content);
}


// a string to load in an image
function imageString(location, description, size) {
    var string = "<img src=\"./images/" + location + "\"";
    string += "alt=\"" + description + "\"";
    string += "class=\"image\"";
    string += "title=\"" + description + "\"";
    if (size != undefined) {
        string += "style=\"width: " + size + "%\"";
    }
    string += "/>";

    /* <img src= ./images/location
     * alt= description
     * class="image"
     * title= description 
     * style="width: size%"
     * />
     */
    return string;
}

// loading in images, but for making pixel art non-pixelated
function pixelArtString(location, description) {
    var string = "<img src=\"./images/Videogame/" + location + "\"";
    string += "alt=\"" + description + "\"";
    string += "class=\"image pixelated\"";              //adds the pixelated class to the image
    string += "/>";
    return string;
}

// to place multiple images in the same line
function imageLineString(imageStringArray) {
    var string = "<div style=\"text-align:center;\"><div class=\"imageBoxWrapper\">";
    var width = 99.5 / imageStringArray.length;
    for (var i = 0; i < imageStringArray.length; i++) {
        string += "<div class=\"imageDiv\" style=\"width:" + width + "%\">";
        string += imageStringArray[i];
        string += "</div>";
    }
    return string + "</div></div>";
}

// to auto-format a link
function linkString(text, url) {
    var string = "";
    string += "<a href=\"" + url + "\">";
    string += text += "</a>";
    return string;
}

// to auto format code
function codeString(linesArray) {
    var string = "<div class=\"code\">";
    string += linesArray[0];
    for (var i = 1; i < linesArray.length; i++) {
        string += "</br>" + linesArray[i];
    }
    return string + "</div>";
}

// to auto-format lists
function listString(isNumbered, linesArray) {
    var string = isNumbered? "<ol>" : "<ul>";
    for (var i = 0; i < linesArray.length; i++) {
        string += "\n<li>" + linesArray[i] + "</li>";
    }
    return string + isNumbered? "\n</ol>" : "\n</ul>";
}


function setPosts(lowInclusive, highExclusive) {
    //this will be what to add to create all of the posts
    var htmlToAdd = "";
    //go through every post and set up the divs to make it look nice
    for (var j = highExclusive - 1; j >= lowInclusive && j < posts.length && j >= 0; j--) {
        //the actual post to get, starting from the most recent
        var i = j;
        // the overarching container
        htmlToAdd += "<div class=\"post\" id=\"post" + i + "\">";
        //the anchor
        htmlToAdd += "<a id=\"postAnchor" + i + "\" class=\"postAnchor\">&nbsp;</a>";
        //the title
        htmlToAdd += "\n<div class=\"postTitle\" >" + posts[i].title + "</div >";
        //the date
        htmlToAdd += "\n<div class=\"postDate\">" + posts[i].date + "</div>";
        //the content
        htmlToAdd += "\n<div class=\"postContent\">" + posts[i].content + "</div>";
        //a link at the bottom of the post linking to the top of the post
        htmlToAdd += "\n<div class=\"postLink\" style=\"float: right\"> <a href=\"#postAnchor" + i + "\" class=\"plainLink\">Top of Post \"" + posts[i].title + "\"</a></div > ";
        //closing the container
        htmlToAdd += "</div >";
        //add a space
        htmlToAdd += "</br >&nbsp";

        /* <div class="post" id="post(i)">       where (i) is which post it is
         *     <div class="postTitle" > title  </div >
         *     <div class="postDate"> date </div>
         *     <div class="postContent"> content </div>
         *     <div class="postLink" style="float: right"> <a href="#post(i)" style="text-decoration:none; color:darkslategray">Top of Post "title" </a></div>
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
    if (show + numPosts * 2 < posts.length) {
        show += numPosts;
        setPosts(show, show + numPosts);
    } else if (show + numPosts < posts.length) {
        show = posts.length - numPosts;
        setPosts(show, show + numPosts);
    }
}