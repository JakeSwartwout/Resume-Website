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

posts.push(new post(
    "More Pages",
    "October 14th, 2018",
    "This change involved a few different things. First, I augmented my size detection so that the side bar will move to the bottom when the window gets too small. After that, I created an actual main page, and worked to fill it and create links between it and the posts page."
));

posts.push(new mediaPost(
    "Resume Page",
    "October 14th, 2018",
    new Array(
        "Now that I have enough posts to overflow one page, I'll start grouping"
        , " updates by day. Along with writing some text for the main page,"
        , " I turned my resume into an HTML website. It was especially difficult to"
        , " avoid overlap between the div tags, as they overflowed into each other"
        , " when the width became too tight and forced them onto other lines."
    )
));

posts.push(new mediaPost(
    "Bottom Bar and Old Posts",
    "October 15th, 2018",
    new Array(
        "Today, I added in a bar across the bottom. Real tough, right? Well,"
        , " everything else was poorly designed I guess, because it was showing"
        , " up in all the wrong places, so I had to make a new wrapper div,"
        , " which meant I had to change the javascript for the width, which means"
        , " I had to do a lot of work and redesign to make it work. But, I think"
        , " it's designed better now, so hopefully I can keep things working. I"
        , " also set it to load in by function rather than hard code, so I can"
        , " easily change what it says across all pages."
        , "<br />"
        , " After that, I added some links on the bottom to navigate through"
        , " the older posts. Somehow, that was a lot easier than adding a bottom bar."
    )
));