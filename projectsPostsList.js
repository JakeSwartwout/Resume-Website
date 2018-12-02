var posts = [];

posts.push(new projectPost(
    "Fireworks Display",
    "Processing", "Java",
    new Array(
        "One of my friends showed off a small animation they built of"
        , " fireworks. I thought it was pretty unimpressive, so I went and"
        , " built my own fireworks show in code. Each firework is randomized"
        , " to have a different position, color, and speed (which decides"
        , " the height), and the explosions all have random strengths, colors"
        , " (but still similar to the original's colors), and flashing. The"
        , " particles also follow gravity, and fade away over time. I"
        , " think it turned out pretty cool."
        , imageString("fireworks.PNG", "Fireworks exploding", 99)
    )
));

posts.push(new projectPost(
    "Planets",
    "Processing", "Java",
    new Array(
        "Processing is based on drawing shapes and moving them each frame,"
        , " so of course I would want to build a physics simulation. And of"
        , " course, being a space nerd, I wanted to build a planet simulation"
        , " (even though I had no idea how gravity works). I think by the end,"
        , " this was the 16th version of this program, but it works, soo."
        , "<br />There's the base mode:"
        , imageString("PlanetsBase.PNG", "Path color depends on velocity vector")
        , "The mode to trace the entire path:"
        , imageString("PlanetsPath.PNG", "Planet color depends on velocity vector")
        , "And my favorite, the Gravity Map mode:"
        , imageString("PlanetsGravity.PNG", "Lighter = stronger gravity")
        , "And, there's even a popup menu that lets you change the mode,"
        , " resolution of the map, planet size (and strength), sun size (and"
        , " strength), if they attract at all, and if they collide."
        , imageString("PlanetsMenu.PNG", "Popup menu of options")
    )
));

posts.push(new projectPost(
    "Mosaic",
    "Processing", "Java",
    new Array(
        "Inspired by a mosaic puzzle, I felt like it would be fun to code a"
        , " program that turned pixtures into mosaics of other pictures. And,"
        , " I was extremely correct. This turned out sooo cool. You can choose"
        , " the width and height of the image, the number of images to make it"
        , " out of, and the set of pictures to use. I used a set of 36 images"
        , ", some of them were mine, but most were from online. I first found"
        , " the average color of all of my sample images. Then, I split the"
        , " main image into a bunch of smaller patches. For each patch,"
        , " I found the average color, and found which image's average color"
        , " was the closest match. When this was calculated, the image was"
        , " displayed and saved. Here is a flower and the mosaic made from"
        , " that image:"
        , imageString("FlowerNoMosaic.jpg", "Original flower")
        , imageString("FlowerMosaic.PNG", "The mosaic of the flower")
        , "Here are a few more I did (tiny since they look better that way):"
        , imageLineString(new Array(
            imageString("MouseMosaic.PNG", "a mouse mosaic")
            , imageString("ChewyMosaic.PNG", "my cat as a mosaic")
            , imageString("JupiterMosaic.PNG", "jupiter mosaic")
            ))
        , "And a slightly higher resolution one:"
        , imageString("HighResMosaic.PNG", "the starry night", 100)
        , "If you're curious, some of the images I used include: pencil,"
        , " rainbow, flower, moon, jupiter, lighthouse at night, sunflower,"
        , " giraffe, car, unicorn in a moon, tree, clouds, alligator, fly,"
        , " my cat, ship, coral reef, lime slices, snowy trees, a picture of"
        , " me, a castle, a chair, wooden emojis, a mouse, and probably more."
    )
));

posts.push(new projectPost(
    "Game of Life",
    "Processing", "Java",
    new Array(
        "Just another small project, I made Conway's Game of Life in"
        , " Processing. I am not very proud of the code for this, but the"
        , " results are still entertaining so I thought I'd mention it."
        , imageLineString(new Array(
            imageString("GameOfLife1.PNG", "the initial"),
            imageString("GameOfLife2.PNG", "the next step"),
            imageString("GameOfLife3.PNG", "the next step")
        ))
        , "It's just the classic game. The actual image is an array of"
        , " rectangles, each with a fill boolean, which then draws rectangles"
        , " at their corresponding position. Every few frames, the game checks"
        , " the next step. The hardest part was likely designing a user"
        , " interface, as I didn't really know what I wanted. I could code it,"
        , " but I didn't know what I wanted to code. Also, you can see how"
        , " they wrap around the screen. I was pretty proud of that for some"
        , " reason. Here's the final positions of that beginning:"
        , imageLineString(new Array(
            imageString("GameOfLifeEnd1.PNG", "the final positions"),
            imageString("GameOfLifeEnd2.PNG", "the final positions2")
        ))
    )
));

//minesweeper

posts.push(new projectPost(
    "Blackjack",
    "JCreator", "Java",
    new Array(
        "Finally, here's a purely text program I built that's actually worth"
        , " mentioning. It's a blackjack game played against a very stupid"
        , " computer (just stops hitting at 16). It uses lots of abstract classes, like"
        , " card and player, then brings them all together to create the game"
        , ". Here's a possible run through:</br></br>"
        , "<div class=\"code\">"
        , "Welcome to Blackjack!</br></br>Starting the round:</br></br>Player: Given the card Ten of Diamonds | value = 10</br></br>Player:</br>Your hand:</br> [Queen of Spades | value = 10, Ten of Diamonds | value = 10]</br> Total Value: 20</br> Number of wins: 4</br></br>Dealer:</br>Dealer\'s hand:</br> An upside down card and [Six of Hearts | value = 6]</br>Hand Value: 6...or more</br> Number of wins: 7</br></br>Hit ?"
        , "</br>-accepts user input- (y)</br></br>"
        , "Player: Given the card Five of Spades | value = 5</br></br>Player:</br>Your hand:</br>[Queen of Spades | value = 10, Ten of Diamonds | value = 10, Five of Spades | value = 5]</br> Total Value: 25</br> Number of wins: 4</br ></br >Dealer:</br >Dealer's hand:</br > An upside down card and [Six of Hearts | value = 6]</br >Hand Value: 6...or more</br > Number of wins: 7</br ></br ></br >Dealer: Hit with Seven of Hearts | value = 7</br >Dealer's hand value: 23</br >Your hand: 25 from [Queen of Spades | value = 10, Ten of Diamonds | value = 10, Five of Spades | value = 5]</br >Their hand: 23 from [Jack of Clubs | value = 10, Six of Hearts | value = 6, Seven of Hearts | value = 7]</br ></br >A tragic LOSS</br ></br >You&nbsp&nbspThem</br >&nbsp&nbsp0&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp1</br ></br >Play again?"
        , "</br>-accepts user input- (n)"
        , "</div>"
    )
));


posts.push(new projectPost(
    "Dinosaur Simulation",
    "Sublime",
    "Javascript",
    new Array(
        "This was a fun project. My Dad had previously taught a programming class"
        , " at a college, and one of the assignments was to create a dinosaur"
        , " simulation. So, many years later, he decided to have me do the project"
        , " as well, and together we competed to make the better program. Each"
        , " dino is represented with a different shape and has different properties."
        , " Some can cross mountains, or lakes, some eat grass, others eat the"
        , " other dinosaurs and humans, leaving small bloodstains on the ground. It was a little weird"
        , " because I used classes in javascript, but it did work really well. For a"
        , " display, I used the p5.js stuff, which draws a window in an html page"
        , " and allows the coder to use a graphical coordinate display, rather than"
        , " a text or wrapper/box based one. For the code itself, they move in ticks,"
        , " and the speed can be changed. The humans move in lines and leave when they"
        , " hit water and the dinosaurs move in lines with random turning. When the"
        , " humans see blood or a dinosaur, they turn around and speed up."
        , " around the edge, I randomly generated a either water or beach, the next layer"
        , " in is either beach or grass, and then the rest is grass. The mountains and"
        , " lakes are drawn for the most part manually, but do shift randomly, even if"
        , " it's only slightly."
        , "<br/>Here's what the final result looks like:"
        , imageString("Dinos.PNG", "Dinosaur Simulation")
    )
));



//youtube analysis
//Pixels to Pixels
//Jeopardy Dice
//Book Reccommender system
//Oregon Trail



posts.push(new projectPost(
    "Monopoly",
    "Processing",
    "Java",
    new Array(
        "On December 1st, 2018, me and a group of friends attended our local hackathon"
        , ". We decided to try to code Monopoly (fish themed, because why not)"
        , " and got pretty far. It's hosted on "
        , linkString("github", "https://github.com/ryguyqwerty/MonopolyHackCU")
        , ", if you'd like to see it. We finished most things, but then I got super"
        , " overwhelmed because I needed to fix bugs and didn't know how to do that"
        , " collaboratively. So, I finished as much as I could at the end, but it"
        , " wasn't completely done. Still pretty impressive for one day though."
        , " Maybe I'll finish it eventually."
    )

))