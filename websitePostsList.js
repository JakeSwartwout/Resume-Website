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
        , " updates by session. Along with writing some text for the main page,"
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

posts.push(new post(
    "Resume Links",
    "October 15th, 2018",
    "Since my resume <i>is</i> a website, I thought I would go beyond the abilities of a traditional resume. So, I went through and turned several words into links to other explanatory websites, such as CU Boulder's, Youth Commission's, Global's, and more. It was hard to keep all of the links uncolored though, and I probably wasted time doing that."
));

posts.push(new post(
    "App Page",
    "October 16th, 2018",
    "I created another possible tab for the website, and there I posted my progress in working with Android Studio to develop apps and app powered programs for my smart phone. I also added a size parameter to the image html generating function, as I wanted to shrink some images. I'm a little upset, as refreshing brings the user to the middle of the page"
));

posts.push(new post(
    "Linking Styling",
    "October 18th, 2018",
    "I added a link to the bottom of the posts linking up to the top of each post. Then, I fixed all of my resume links to be based on a class, rather than a hard-coded style, and now they get underlined when hovered over"
));

posts.push(new post(
    "Game Creation",
    "October 20th, 2018",
    "I created a page for posts about a game I'm beginning to create. It was really easy, as I just copied the other pages and changed some names. I might try styling it differently from the others in the future."
));

posts.push(new mediaPost(
    "Learning From Others",
    "November 14th, 2018",
    new Array(
        "I wasn't sure of what to add to my website, so I kinda just stopped working"
        , " on it. But, a friend of mine showed me some of the websites that their"
        , " teammates had built, and it inspired me to restart. So, I'm spending some"
        , " time actually reading code and it will hopefully help my website to"
        , " to actually look nice, because right now, it's pretty ugly. Here are the"
        , " links for reference:</br>"
        , linkString("Will Ness's Website", "https://willness210.github.io/")
        , "</br>"
        , linkString("Andrew Thomas's Website", "http://andrewt.io/")
        , "</br>I don't actually know these people in person, but I like the look"
        , " of their websites, and it seems doable, so I'm going to try it. Here's"
        , " my website before for reference:"
        , imageString("WebsiteMain11_14_18.PNG", "the website early on the 14th")
    )
));

posts.push(new post(
    "Navigation Bar",
    "November 14th, 2018",
    "It took soo long, but I managed to make a navigation bar at the top of my website! It took a long time because I wanted it to be sticky, so I had to figure out how to get it to detect the scroll of the website, calculate if it should be sticking, then change the indentation of the content if it was supposed to be sticking, so that it didn't jump. Super tough, but it looks reaaally good now. I also tinted some of the things to be peachy, and it's a little nicer than the pure white."
));

posts.push(new mediaPost(
    "Pictures and Dark Theme",
    "November 15th, 2018",
    new Array(
        "I'm making great progress! Today, I worked to make the front page look a lot"
        , " better. I made the background dark, put the main text into the sidebar,"
        , " and added a bunch of pictures to the main content. The brunt of today's"
        , " work went into making the pictures flush with each other, and be the same"
        , " height across, while also being the right width. I eventually solved it"
        , " by creating a function that pretended to scale them all to height 1,"
        , " found the width of that, and then found the height of it if it were"
        , " then scaled to be the full width. Here's how it looks now. The rest of the"
        , " pages look the same as before."
        , imageString("WebsiteMain11_15_18.PNG", "the website late on the 15th")
    )
));


//things I want to try adding:
/* Colors
 * nicer fonts
 * look more professional
 * Different speed scrolling (background moves slow, overlay moves quicker)
 * On hover highlight links
 * resize event listener rather than onresize()
 * hover event listener highlight pictures
 * - ~actually~ important things:
 *  - light or dark theme
 *  - tabs or spaces
 * a <nav> bar
 * -highlights the current page
 * 
 * add tags to the posts that can be used to search/sort
 * 
 */