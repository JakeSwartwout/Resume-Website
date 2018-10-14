function addPosts(numberToAdd) {
    //either add as many as you want for that page, or add all there is
    if (numberToAdd > posts.length) {
        numberToAdd = posts.length;
    }
    //this will be what to add to create all of the posts
    var htmlToAdd = "";
    //go through every post and set up the divs to make it look nice
    for (var i = 0; i < numberToAdd; i++) {
        //the overarching container
        //<div class="post" id="post(i)"> where (i) is whatever position it is
        htmlToAdd += "<div class=\"post\" id=\"post" + i + "\">";
        htmlToAdd += "\n<div class=\"postTitle\" >" + posts[i].title + "</div >";
        htmlToAdd += "\n<div class=\"postDate\">" + posts[i].date + "</div>";
        htmlToAdd += "\n<div class=\"postContent\">" + posts[i].content + "</div>";
        htmlToAdd += "</div >";
        htmlToAdd += "</br >";
    }
    document.getElementById("postStream").innerHTML = htmlToAdd;
}