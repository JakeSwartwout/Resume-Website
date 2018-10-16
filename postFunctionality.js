var post = function (theTitle, theDate, theContent) {
    this.title = theTitle;
    this.date = theDate;
    this.content = theContent;
}

var mediaPost = function (theTitle, theDate, contentMediaArray) {
    this.theContent = "";
    for (var i = 0; i < contentMediaArray.length; i++) {
        this.theContent += contentMediaArray[i];
    }
    post.call(this, theTitle, theDate, this.theContent);

}

function imageString(location, description) {
    var string = "";
    string += "<img src=\"./images/" + location + "\"";
    string += "alt = \"" + description + "\"";
    string += "class=\"image\"";
    string += "title = \"" + description + "\" />";

    /* <img src= location
     * alt= description
     * class="image"
     * title= description />
     */
    return string;
}

function linkString(text, url) {
    var string = "";
    string += "<a href=\"" + url + "\">";
    string += text += "</a>";
    return string;
}