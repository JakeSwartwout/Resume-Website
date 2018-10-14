var posts = [];


posts.push(new post(
    "Beginning to Build the Website",
    "October 13th, 2018",
    "Today, I worked in Visual Studio to begin creating my own website. I hope to someday post it online through my free github hosting, and use it to talk about my cs progress and projects"
));

posts.push(new post(
    "Hosting the Website",
    "October 13th, 2018",
    "After building a rough website, I attempted to put it online so that I could verify that I could host it online at all. Currently, it appears that it does work!"
));

posts.push(new mediaPost(
    "Displaying Media",
    "October 13th, 2018",
    new Array(
        "I thought it'd be fun to put in images, so this is my attempt to add in images to the blog"
        , imageString("EarlyWebsite.PNG", "Screenshot of the early website")
        , "And it seems to work well!"
    )
));

posts.push(new post(
    "Website Sidebar",
    "October 14th, 2018",
    "I already encountered bugs, as I loaded in the posts in the wrong order. I also added some links to the side bar of the page along with my contact information at the top"
));

posts.push(new mediaPost(
    "Centering the Website",
    "October 14th, 2018",
    new Array(
        "Next, I spent time so that the window would either stretch the content to fit"
        , imageString("Stretched Across.PNG", "The posts filling the screen")
        , "Or it would fill some area and center that block in the middle"
        , imageString("Centered Across.PNG", "The centered posts")
        , "And then uploaded the changes to gitHub"
    )
));
