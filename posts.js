var post = function (theTitle, theDate, theContent) {
    this.title = theTitle;
    this.date = theDate;
    this.content = theContent;
}

var posts = [];

var example = new post(
    "Example Title",
    "Example Date",
    "Example Information to put in the post"
    );

posts.push(new post(
    "Beginning to Build the Website",
    "October 13th, 2018",
    "Today, I worked in Visual Studio to begin creating my own website. I hope to someday post it online through my free github hosting, and use it to talk about my cs progress and projects"
));
