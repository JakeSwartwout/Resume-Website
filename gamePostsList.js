var posts = [];


posts.push(new post(
    "Decision to Make a Game",
    "October 18th, 2018",
    "Me and a group of my friends decided to plan, write, draw, and code a video game together. When talking about my past work, they were impressed at my skill in coding, and suggested making a game together. Everyone there was instantly excited, and we started brainstorming ideas for how to write it, what it should be about, what code to use, and so on."
));

posts.push(new post(
    "First Planning Session",
    "October 19th, 2018",
    "We had an official planning period, lasting almost two hours. We mostly talked about possible plot, goals of making the game, and where to build it. We've settled on a likely storyline, involving questing, thievery, and eternal summer. We're planning to build it using Unity, taking on a pixelated style in 2D (almost an overhead view, but with a slight angle to see the sides of things)."
));

posts.push(new mediaPost(
    "Learning Unity: Player Motion",
    "November 18th, 2018",
    new Array(
        "Today, I finally started learning how to make a 2D game. I had messed around in Unity before, but"
        , " had made a platformer, rather than an overhead game. So, I followed "
        , linkString("an online tutorial", "https://youtu.be/Pk3GCgaNVTY")
        , " and built a little game. I learned about adding scripts to things, adding animations, blend trees,"
        , " animation trees, and altering in game information with the script. It was all very cool. Now, I"
        , " have a little character that moves around the screen, turning as needed, and plays a walking"
        , " animation that I drew myself. Well, I took an online character, shrank him, then fixed the edges."
        , " I also turned him myself. It's basically mine, right?"
        , imageLineString(new Array(
            pixelArtString("personSmolFront.png", "Facing forewards")
            , pixelArtString("personSmol.png", "facing 3/4 forewards")
            , pixelArtString("personSmolRight.png", "facing right")
            , pixelArtString("personSmolBackRight.png", "facing backwards")
        ))
    )
));

posts.push(new mediaPost(
    "Learning Unity: Map Making and Level Loading",
    "November 19th, 2018",
    new Array(
        "I watched some more tutorials, and I'm enjoying this process a lot more than I thought I would. Unity"
        , " really isn't as complex as I thought it was, everything is linked really nicely and makes sense."
        , " Today, the tutorial had me use "
        , linkString("Tiled", "https://www.mapeditor.org/")
        , " to create level maps. I drew up a bunch of ground pieces so"
        , " that I could actually build some stuff without stealing:"
        , pixelArtString("grounds.png", "the ground pieces")
        , "The grass was originally stolen, but then I drew my own and added a really"
        , " ugly border, so I don't know how I feel. I also added a few props as well: "
        , pixelArtString("Props.png", "A tree and lamppost I drew myself")
        , "After that, we made a second map, adding in the needed scripts and colliders so that the player would"
        , " transfer between them when it walks across a certain point. I even went ~beyond~ the tutorial, by adding"
        , " in a way for it to distinguish between where to start based on the last room, mostly because I hated how"
        , " it always started from the same start point no matter where it came from."
    )
));

posts.push(new mediaPost(
    "Learning Unity: Enemies and Death",
    "November 21st, 2018",
    new Array(
        "A combination of yesterday and today, I made some enemies for the game. They're"
        , " inspired by the pictures of cats that look like they only have two legs:"
        , pixelArtString("enemy.png", "The enemy")
        , "I think they're actually super cute though, as they bounce up and down when"
        , " standing still. But, since they're enemies, I had to also add a way for them"
        , " to kill the player, causing a kill animation and restarting the room"
        , pixelArtString("personDeath.png", "When the player dies")
        , "I think it's working pretty well. Even though this is just a practice, it's"
        , " still coming along really well! I'm having a lot of fun too. Here's what"
        , " it looks like so far:"
        , imageString("Videogame/EarlyGamePractice.PNG", "The appearance of the early game")
        , "The background is still really bad, but I think it's something to do with"
        , " Tiled, the software I'm using to make all of them. It makes them super"
        , " easy to create them, but it also makes everything blurry and not snap together."
    )
));

posts.push(new post(
    "Sharing with the Group",
    "November 25th, 2018",
    "Since we're making this game collaboratively, I finally shared my progress with the group. I moved all of the files from my project to our joint project and uploaded them to the shared unity game."
));

posts.push(new mediaPost(
    "Plants and Plot",
    "November 29th, 2018",
    new Array(
        "I didn't know where to go from where I was, so I decided to try an write"
        , " some plot. I want the player to start on a farm like thing to learn"
        , " some of the controls, so I drew up a dirt patch and some plants:"
        , pixelArtString("crops.png", "The dirt patch")
        , pixelArtString("Plants.png", "some plants I drew")
    )
));

posts.push(new post(
    "Brainstorming",
    "December 1st, 2018",
    "I asked a friend for some feedback on my plot, and we went way beyond, talking about huge plot parts. We went between ideas, but we both really liked the idea of the player having powers they don't know about, guarding an orb (that channels their powers) which goes missing, and the orb before kept the winter out with a physical wall. Then, they would travel to the farm after and experience the beauty of summer to be influenced towards liking eternal summer, but by the end learn that it's bad."
));

posts.push(new post(
    "All alone?",
    "December 16th, 2018",
    "Well, while it isn't official, I'm pretty sure that I'm the only one working on this game anymore. On the plus side, that means that I can do it exactly my way, but on the negative side, that means I have to do everything. I just made a copy of it though so I can go as far off the plan as I want and they'll still have the original game."
));

posts.push(new post(
    "Collection of Fixes",
    "December 17th, 2018",
    "This is a few different fixes that I've made over the past few weeks. </br>1: I partially solved my blurriness problem. Tiled compressed my art into a square and then stretched it back out again, so I just had to upload them as squares.</br>2: I wanted both collisions and no collisions sometimes, so I made both so that I could choose between the two</br>3: I made a way to easily set up the edge of the screen, and lock the camera into it. I want to extend it to the player, but I still need to work on that."
));

posts.push(new mediaPost(
    "More drawings",
    "December 27th, 2018",
    new Array(
        "I just did a few more drawings, these are the plants harvested"
        , " that will eventually go into the players inventory"
        , pixelArtString("Plants-items.png", "the harvested plants")
        , " I also gave the path a much nicer border and created the inner"
        , " curve for the dirt. These were put into that square I mentioned"
        , " in the previous post"
        , pixelArtString("SquareGrounds.png", "the grounds compilation")
        , "I should probably separate those plants now though, shouldn't I. Dang."
    )
));