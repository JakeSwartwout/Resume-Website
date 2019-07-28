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


posts.push(new mediaPost(
    "Inventory",
    "December 2nd, 2019",
    new Array(
        "I drew up and coded an inventory box. It was"
        , " really difficult because I wanted to create my own input option called inventory"
        , " but didn't realize that I had to change it to a button type input, so it wouldn't"
        , " open. I figured it out though, and now it looks pretty good. It opens"
        , " when you press 'e', stays open, and then closes again when you press 'e' again,"
        , " just how a classic inventory should. Here's"
        , " what I drew up as the base, and the slots will fill in with items later."
        , pixelArtString("Inventory.png", "the inventory I drew")
        , "Also, I am so proud of that shadow. It looks so good!"
    )
));

posts.push(new post(
    "Total Remake",
    "December 3rd, 2019",
    "Well... I totally redid a whole bunch of stuff. I was getting really tired of trying to deal with Tiled to Unity, soo... I just got rid of it. Now, I'm using Tiled for their path drawing tool, then exporting this as a PNG and just putting that in as the background. There's no collisions or alternate layers, but it's really nice to not have gaps between blurry tiles for once. I also changed a few other things too. I simplified the code for player movement, manually selected some things rather than the code trying to find them each time, and tried adding some plants to harvest. The plants were horrible though, as now the player has a second inspector boxCollider, but Unity doesn't like to distinguish between that and the players one for some reason? But I think I'm getting it. There's also an item class now, so I just need to figure out how to make some sweet sweet Carrot Prefabs, and I think I'll be good to go"
));

posts.push(new mediaPost(
    "Level Persistance",
    "December 9th, 2019",
    new Array(
        "I finally got it to work! Yes!! Object persistance across levels, that is."
        , " Oh my gosh did this take forever, and I'm only posting now that I've"
        , " gotten it to work. Basically, I got the plant harvesting to work"
        , " (I used triggers which made it not collide anymore) and I was really happy"
        , " with it, but then they wouldn't stay harvested. Every time I loaded a new"
        , " scene, it deleted everything, and when I reloaded it, it created everything"
        , " new again. To try to fix this, I tried so many things:"
        , "<ol>"
        , "<li>First, I tried to save the data from each level to reload later,"
        , " using interfaces to make things loadable. But, this didn't work as I"
        , " couldn't search for interfaces or give anything IDs.</li>"
        , "<li>Next, I tried combining everything into a single scene. With this,"
        , " it completely broke all of my camera borders and just felt horrible.</li>"
        , "<li>Then, I tried saving all of the gameObjects themselves. I just filled"
        , " a List with every single GameObject in the level. When loading in an old"
        , " scene, I would delete everything and then instantiate all of my saved"
        , " GameObjects. But, for some reason, there was no way to separate the"
        , " variable from an object in the scene, so it would delete the objects"
        , " when leaving the scene anyway and then there wasn't anything to load in.</li>"
        , "<li>Finally though, I went back to a twist on my original. I created an"
        , " intermediate class between the usual unity behavior and whatever behavior"
        , " I wanted to add. This means that everything that needs saving will"
        , " automatically have the saving dynamics. I could now give them IDs, (which"
        , " I had to use Awake() to make sure they got IDs before others tried to load"
        , " them [I could use manual IDs, but if I didn't, it would generate an ID based"
        , " on the position]) and recreate my loading function. The load and save just"
        , " use a string full of data to use in setup."
        , "</ol>"
        , "And it works! I am super happy with it. Not sure how death works now, but I'll work on that."
    )
));

posts.push(new post(
    "Death Non-persistance",
    "December 9th, 2019",
    "Okay, I worked out the levels persisting except in cases of death. I just had to have a secondary version of all of my memory varibles, to determine between current memory and actually saved memory. There was a little finagling, like with the inventory re-instantiating itself, things not loading in the right order, the scene teleporters trying to affect player, the camera not moving at the right time, etc etc. It seems to be working? But there's been so many little things that it's tough to know what 'working' is and to know if there's anything that I've missed."
));

posts.push(new mediaPost(
    "More Plants",
    "January 11th, 2019",
    new Array(
        "I drew up some more plants. It's funny how some of these posts are hardcore"
        , " and super frustrating code to help others with their code, and then others"
        , " are me posting my drawings on an adult version of the fridge."
        , " Anyway, I drew the plants:"
        , pixelArtString("6Plants.png", "The plants")
        , "The plants after being harvested:"
        , pixelArtString("6Plants-Harvested.png", "the remnants of the plants after harvest")
        , "And the items that they drop:"
        , pixelArtString("6Plants-items.png", "the items that drop")
        , "Since they're my own plants, I had to name them too. The first two are"
        , " just regular carrots and tomatoes, but the rest are my own."
        , "The round purple berry is an Opix, the long dark one is a Petra,"
        , " the tiny green ones are Slucks, and the mushroom is a Chosp."
        , " I'm pretty happy with how they turned out. Now I actually need to find"
        , " where to use them."
    )
));

posts.push(new post(
    "Storyline",
    "January 12th, 2019",
    "So I thought it'd be fun to work more on the story. Turns out, that means completely changing most of the plot. Now, the main character isn't the powerful person, but just a guy who cares about his family. Along with this, I realized that I had no way of actually getting the character to follow a story. So, I started work on a new component called a storyline. I'm trying to plan it well to make it easier later. Currently, there's the main class, which will look up across files, has goal objects, which each have task objects that need to be completed, and a corresponding goalShell so that I can load, order, and arange them without needing to create and store every goal at once. Hopefully that will work well?"
));

posts.push(new post(
    "Goals and Storyline Completed",
    "January 14th, 2019",
    "Well, it seems like the storyline is working correctly! Oh shoot, I just realized it doesn't take saving into consideration. Dang. Anyways, it's pretty simple but also weirdly complicated. Like I said, there's an array of shell objects which store the path of unlocking. Every frame, it checks if any new ones should unlock, creating a goal object for them and putting that into a list. These are constantly updated too, checking if they are completed or not. They are considered completed when every task inside of them is completed. Currently, I only have an itemTask type, but I should be able to expand it later. Oh, and each goal has its own file so that I don't load everything at once."
));