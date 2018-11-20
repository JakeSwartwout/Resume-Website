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
        , " Today, the tutorial had me use Tiled to create level maps. I drew up a bunch of ground pieces so"
        , " that I could actually build some stuff without stealing (even though that original grass was stolen):"
        , pixelArtString("grounds.png", "the ground pieces")
        , "along with a few props to add in as well: "
        , pixelArtString("Props.png", "A tree and lamppost I drew myself")
        , "After that, we made a second map, adding in the needed scripts and colliders so that the player would"
        , " transfer between them when it walks across a certain point. I even went ~beyond~ the tutorial, by adding"
        , " in a way for it to distinguish between the starting rooms, because I hated how it always started from the"
        , " same start point no matter where it came from."
    )
));
