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
    "It took soo long, but I managed to make a navigation bar at the top of my website! It took a long time because I wanted it to be sticky, so I had to figure out how to get it to detect the scroll of the website, calculate if it should be sticking, then change the indentation of the content if it was supposed to be sticking, so that it didn't jump. Super tough, but it looks reaaally good now. One downside though, my links to things in the page are now hidden underneath the navbar, which I don't know how to fix. Maybe I'll just leave it for now. Also, I tinted some of the things to be peachy, and it's a little nicer than the pure white."
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
        , " then scaled to be the full width. Here's how it looks now:"
        , imageString("WebsiteMain11_15_18.PNG", "the website late on the 15th")
        , "The rest of the"
        , " pages look the same as before. Oh, also, all of these pictures are either"
        , " my own, or a family member's. I don't want to deal with copyright, sooo"
    )
));

posts.push(new post(
    "Uploading the Changes",
    "November 16th, 2018",
    "So, it's been quite a while since I actually uploaded my progress, and there are a lot of big changes. I was dreading it because I thought I had to go through each file, copy and paste the new version, and then commit it, and I really wasn't looking forward to that. But, I asked a friend, and apparently you can just <i>drag</i> something into github and it does everything automatically? Like, what? So that made it a lot better."
));

posts.push(new post(
    "Picture Explanation",
    "November 17th, 2018",
    "I worked on it a little bit yesterday, but I didn't get any further than getting my pictures to change color. So, today, I made it so that hovering over one of the front page photos causes words to slide down from invisible and explain what the picture is. And, I made it so that it would be easy to add more, or change others to do it. This was only tough because I was being stupid. I couldn't figure out why my pictures were turning out too small, and was even joking with myself that they were being counted twice or something, when they obviously weren't. I fiddled with some more stuff, accidentally got it to move downwards by deleting the margins only on the hovered version, and then realized something. I had put the image in a div, but the image itself still had the same class. It <i>was</i> being counted twice. Wow. So, I fixed that by removing the class name if it's been counted already, so that way a faded image can either have the class or not, making it a pretty simply copy paste to make something have words overtop. I also just love the extra motion it adds to the page, I think I might try to do more like that, as hard as it may be. (Well, no, the cool part's actually the CSS, I just overcomplicated it)"
));

posts.push(new post(
    "Active Page",
    "November 17th, 2018",
    "Quick modification, I added a function that highlighted the tab of the navbar that corresponded to the page you were on, just to look nicer."
));

posts.push(new post(
    "Active Page Style",
    "November 20th, 2018",
    "Another quick fix, I didn't like the surrounded style of the other active bar, so I put it on just the bottom. Before, I used an outline with a negative offset, which worked okay, but had to be on every side. I couldn't just use borders since they add width to the box, and would push everything onto another line. But, if I only put the border on the bottom, it just expands the height of the box, and nothing is pushed over. Small change, but it looks better now. Also, the home page has its own style (which I forget about) and that's really annoying. I kinda want to make a style sheet for the navbar, but it seems weird to have a sheet with so few things on it."
));

posts.push(new post(
    "Post Links and Resume Update",
    "November 24th, 2018",
    "I made the 'top of post' links finally work, just by creating an anchor at the top that's positioned further up thatn the text itself. That way, linking to the anchor links to above the post, pushing it down out of the way. Also, I updated my resume to: actually explain my coding experience better, describe Cybersecurity now that I've been in it, and have creativity as a skill."
));

posts.push(new mediaPost(
    "Attempting Design Again",
    "December 27th, 2018",
    new Array(
        "Once again, I'm trying to improve the design of the website."
        , " This time, I'm just trying to fix the css so that it actually looks"
        , " okay. Before, I had an orange and red theme, which really wasn't"
        , " working for me. Instead, I switched to a dark grays, whites, and blue"
        , " style, and I'm pretty happy with the results. It also matches the"
        , " front page better now, since both have a dark theme."
        , " Here's the before and after:"
        , imageLineString(new Array(
            imageString("StyleOrange.PNG", "before")
            , imageString("StyleDark.PNG", "after")
        ))
        , "And I did this for all of the pages except the front page."
        , "</br>Also, I added more projects to the projects page"
    )
));

posts.push(new post(
    "Projects Display",
    "December 28th, 2018",
    "I thought I'd try to make the projects' display a little nicer. Instead of displaying the default 5 per page, I thought it would be cool to just display one per page, so that I could link to a specific post. I didn't want to make an html doc for each post, so this seemed extremely difficult. At first, I was going to try to use anchors (that's the only way I knew how to change URLs), setting the anchor to some number and then reading where the anchor was. Luckily, there's a better way: URL parameters and window.location.search and href-ing to a '?' and yeah. It all works pretty well.<br />Oh, also, the nav bar also got an upgrade. It now has the left and right actually say the post and also includes a random and return to menu button. Even cooler, when it's at the end, the arrow for that direction disappears completely!"
));

posts.push(new post(
    "Projects Main Page and Sticky2",
    "December 29th, 2018",
    "I finished up yesterday's work with the project's page by making the main page. It has a short little intro which is honestly not that great and then a list of the projects.I had to add a description to each of them, which wasn't that bad as apparently there's only about 10 or so.I also created a few more posts of past projects I had been waiting to do.<br />I also fixed the sticky nav bar. Upsettingly, all I had to do was 'position:&nbsp;sticky' in the CSS and it would do exactly what I had done earlier while also doing it better (instant stick, rather than calculated jumpy stick)."
));

posts.push(new post(
    "Possible Parallax",
    "January 22nd, 2019",
    "Welcome to 2019! New year New website! Ha, I wish I was joking. But no. I got inspired and want to change the front page aesthetics again. I want to make it have a parallax effect, where scrolling makes things move at different speeds. I'm not sure how I want to do it yet though. Some do it with javascript and MANY calculations. Other use CSS perspective to make things 'further away' move slower and 'closer' things faster. There's even just fixing the image in place and letting things scroll over it. I'm currently using powerpoint to try some ideas (using the morph transition like a sort of scrolling) and depending on the design, I'll choose a method to match. Also, I have to be careful with mobile"
));

posts.push(new post(
    "Parallax Issues",
    "February 5th, 2019",
    "Well, this is a lot harder than I had anticipated. First, I had to actually design the front page. I'm really not sure what sort of style I want to go for. The one I'm liking the best is very troubling though, because it involves at least two different ways of doing parallax, and I don't know if I want to get into that. Also, why is background-size relative to the entire screen? It should be relative to the div, c'mon. Also, what's with images not touching each other unless they are positioned relative? That doesn't make any sense. It should just be margins are naturally some value, not that there's some mysterious thing non padding non margin on two sides of it. *sigh* I'm getting through it though"
));

posts.push(new post(
    "Back to Business",
    "July 20th, 2019",
    "I'm back to keep working on the website! I've been interning at Visa this summer, and we've been making a website there. I've been learning soo much about websites, both in backend, construction, tips and tricks, and css styles. It's been a really great experience. We've been working with ASP.NET MVC 5 (which I'm really liking) and now I see why it's been so difficult to make a website using my method. Since I don't want to host it, I'm going to stick with this method, but apply some of the tricks I learned to improve the overall function of the site."
));

posts.push(new post(
    "Elegant Layout",
    "July 20th, 2019",
    "Okay, I fixed a few things. Before, I was brute forcing a lot of styling since I didn't understand css. Now, I think I've found the so-called 'elegant solution', but to a css problem. The main content was previously centered using javascript to calculate it. Now, I'm using pure css, a combination of max-width, margin: auto, and @media. It works really well. I also changed the navbar a little too. Now, it detects when the window is small and changes the links width. Before, there were certain widths when only a few of the links were two lines tall, but now, they all become two lines tall at the same time."
));

posts.push(new post(
    "Front Page Finally",
    "July 28th, 2019",
    "I've finally gotten to work on the front page. I thought it would be nice to have something dynamic, like parallax, or some moving background, but I just can't come up with anything that I like. I wasted a bunch of time making a cloud move back and forth raining down words, but it didn't really make sense, nor did it describe me. So, I went back to my original design. I fixed it up with the efficient styling, wrote a new story, removed some of the pictures, and I think it should be good to go. It's still not great, but it'll work for now."
));

//Keep working on:
/* main page pictures still disappear sometimes
 * fonts
 * looking more professional
 * Different speed scrolling (background moves slow, overlay moves quicker)
 * ~actually~ important things about me:
 *  - light or dark theme
 *  - tabs or spaces
 * add tags to the posts that can be used to search/sort
 *      (filter the projects by language)
 * add a favicon (little icon for the bookmark)
 *      hopefully just <link rel="icon" href="/favicon.ico">     
 * can literally center with just <thing align="center"> ?
 *      or margin: auto
 * can use calc(#vh + #% + #px)
 * new font?
 *      Bahnschrift semibold: Jake Swartwout
 *      Tahoma --Bolded: Jake Swartwout      my favorite
 *      Yu Gothic UI Semibold: Jake Swartwout
 * resume on mobile looks awful
 * sticky main page description?
 *      just do the same thing as this site does for itself(not the tutorial, the page itself)
 *      https://www.w3schools.com/css/css_positioning.asp
 */