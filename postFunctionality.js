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


//to specify the image's size
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

function linkString(text, url) {
    var string = "";
    string += "<a href=\"" + url + "\">";
    string += text += "</a>";
    return string;
}
