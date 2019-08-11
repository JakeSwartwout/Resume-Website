var posts = [];

posts.push(new projectPost(
    "Fireworks Display",
    "Processing", "Java",
    "A simple fireworks animation",
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
    "A 2D planet orbit simulator with an in-simulation menu to change the properties.",
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
    "Turning any input image into a new picture made up of smaller images from another input set",
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
    "Conway's Game of Life, a grid of tiles that 'live' or 'die' according to rules",
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
        , " they wrap around the screen. I was pretty proud of that for some reason."
    )
));


//pong
//snake


posts.push(new projectPost(
    "Minesweeper",
    "Processing", "Java",
    "Given the number of bombs in the 8 surrounding tiles, try to uncover all safe tiles without getting blown up",
    new Array(
        "This is just the classic game of Minesweeper, and I'm surprised by how fun it"
        , " actually is. I can alter the difficulty through number of bombs and the size of"
        , " the grid, and the code will automatically generate new and random games every"
        , " time. Now, that means that they won't always be solveable, but that'd be a lot of"
        , " work. Rather than draw everything, I used a combination of lines, simple shapes,"
        , " and images from online. Here's partway through one one my games:"
        , imageString("Minesweeper.PNG", "a partial game")
        , "As you can see, you can place flags as well. And when you lose..."
        , imageString("MinesweeperLoss.PNG", "a tragic loss")
        , "It uncovers all bombs and ends the game."
        , " You also can't click on a flag, and clicking on a blank tile automatically uncovers all of"
        , " the tiles surrounding it, recursively displaying large areas."
    )
));

posts.push(new projectPost(
    "Blackjack",
    "JCreator", "Java",
    "A text based game of Blackjack, compete against a computer to draw cards until you are the closest to 21, without going over",
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
    "A simulation of dinosaurs on an island with humans trying to flee them",
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

posts.push(new projectPost(
    "Youtube Analysis",
    "Eclipse", "Java",
    "Performing basic analysis on my youtube watch history",
    new Array(
        "After downloading an insane amount of watch history data from both of"
        , " my Google accounts, I was very interested to analyze the data and"
        , " see what I could find. I used some code from online to turn the HTML"
        , " document into a String (crazy, right? my computer could barely load"
        , " the page, yet it all fit into a string?). From that, I broke it into"
        , " individual entries which I could then analyze. At first, I was reading"
        , " it into an ArrayList, so that took forever, but I turned it into an"
        , " array and now the loading is pretty quick. In all, I wrote functions to find:"
        , "</br>-the most watched ever"
        , "</br>-the most watched video in clusters of x videos (I usually broke it into groups of 100)"
        , "</br>-my most watched channel"
        , "</br>-how many titles contained a certain string"
        , "</br>-the top x most used words in the titles (usually boring unless you go up to 40 or so)"
        , "</br>Here's a sample run through, only calling some of the functions:"
        , codeString(new Array(
            "Loading"
            , "..................................................-"
            , "..................................................-"
            , "..................................................-"
            , "..................................................-"
            , "................................"
            , ""
            , "Most watched of 23252 videos(watched 15 times) : cloud atlas - sextet(extended version)"
            , ""
            , "Most watched channel of 23252 videos: collegehumor"
            , ""
            , "The phrase \"cooking\" appears 311 times"
            , ""
            , "The 1th most used is \"the\""
            , "The 2th most used is \"-\""
            , "The 3th most used is \"a\""
            , "The 4th most used is \"to\""
            , "The 5th most used is \"how\""
            , "The 6th most used is \"|\""
            , "The 7th most used is \"of\""
            , "The 8th most used is \"in\""
            , "The 9th most used is \"and\""
            , "The 10th most used is \"with\""
            , "The 11th most used is \"is\""
            , "The 12th most used is \"you\""
            , "The 13th most used is \"make\""
            , "The 14th most used is \"why\""
            , "The 15th most used is \"for\""
            , "The 16th most used is \"your\""
            , "The 17th most used is \"what\""
            , "The 18th most used is \"on\""
            , "The 19th most used is \"&\""
            , "The 20th most used is \"from\""
            , ""
        ))
        , "A loading dot would print for every 100 videos read in and a dash for every 5000."
        , " Again, it became useless after removing the ArrayLists since there was no loading."
        , " And sadly, I believe they changed their formatting, so my code is"
        , " unable to properly parse any newly downloaded data. And even when it did work, there"
        , " were still issues. For example, the data only showed each video"
        , " once per day, so songs I knew I had looped repeatedly showed up only once."
    )
));



posts.push(new projectPost(
    "Pixels",
    "Processing", "Java",
    "Taking the shape of one image and the colors of another (pixel by pixel) to create a new combination",
    new Array(
        "This is one of my favorite projects that I've done. I'll show the results first"
        , " and then explain how I did it and what exactly it's doing."
        , imageString("Pixels1.PNG", "the shape of my cat and the colors of jupiter")
        , "Cool, right? So: This program takes in two input images. It turns them both into"
        , " my own image format (just an array of a 'Pixel' class) and then starts going."
        , " It sorts the pixels by some value (I used brightness) and shows this"
        , " process (I just used bubble sort). Once both are sorted, it 'paints' the pixels"
        , " of the shape image with the colors of the pixel that was sorted to the same rank."
        , " Then using the Pixel's stored location, it swaps each pixel back to it's original"
        , " location. I'm super happy with this program."
        , imageString("Pixels2.PNG", "the shape of a christmas scene and the colors of a painting")
        , "And while the program itself works, the results aren't always this great."
        , " The results aren't as great when there are sharp contrasts or large amounts of the same color in the shape image,"
        , " or when the color image has a lot of similar-brightness colors of differing hues"
    )
))



//Oregon Trail



posts.push(new projectPost(
    "Monopoly",
    "Processing", "Java",
    "A fish themed game of Monopoly done for a Hackathon with a group of friends",
    new Array(
        "On December 1st, 2018, me and a group of friends attended our local hackathon"
        , ". I was upset that there was nothing that we were supposed to be hacking,"
        , " no challenge to complete, or anything like that. But, rather than just give up, we decided to work"
        , " together to code Monopoly (fish themed, one of my 3 big themes) and got"
        , " pretty far. Afterwards, I fixed some things up (I was sort of team"
        , " leader) and now it's pretty much done. It's hosted on "
        , linkString("github", "https://github.com/ryguyqwerty/MonopolyHackCU")
        , ", if you'd like to play it yourself. Here's a screenshot of the gameplay:"
        , imageString("Monopoly.PNG", "after landing on a card tile")
        , "One member drew the background tiles, fish, and boats; another"
        , " wrote the cards' saying; and the rest of us each did one file's worth."
        , " I think mine was input, which actually had the most problems, so whoops."
        , " They all actually did pretty good for their first time working in"
        , " Processing, as instead of the traditional wait-for-input approach of c++,"
        , " Processing is constantly running and you have to have something always"
        , " checking the state of the game and trigger things with input."
    )

))


posts.push(new projectPost(
    "Flocking Simulation",
    "Processing", "Java",
    "A set of 'boid' objects that naturally form complex flocks from simple rules",
    new Array(
        "In attempting to create a neural network (and failing), I watched so many tutorials that my youtube"
        , " feed is now mostly coding videos once more. I'm not upset, but it did inspire me to try making"
        , " some of the things that I saw. The one I went with was a flocking simulator as taught by "
        , linkString("The Coding Train", "https://www.youtube.com/watch?v=mhjuuHl6qHM")
        , ". I followed along loosely (he used javascript, I used java) and ended up with a great result."
        , imageString("Flocking.PNG", "base")
        , "It's tough to understand without motion, but the triangles all move individually, but attempt"
        , " to have the same direction as their neighbors, get close to their neighbors, and repell their"
        , " neighbors (in a certain perception radius). The effect is that they clump up and travel in packs."
        , " This image is a cooler view of all the interactions happening:"
        , imageString("FlockingStructure.png")
        , "The dark blue lines connect who they've detected, the blue lines are the separation, the yellow lines"
        , " are the cohesion, and the red lines are the direction alignment."
    )
));

posts.push(new projectPost(
    "Patterned Path",
    "Processing", "Java",
    "Users choose how to act when in certain situations, allowing a path to be drawn with repetitive shapes",
    new Array(
        "Based on a game I used to play on paper, this program allows the user to \"draw\" intricate paths"
        , " merely by choosing how the node should react in each scenario. The node inspects the surrounding"
        , " 8 points, and if any of them match (including if rotation is required) a previous command, then"
        , " the node will move to that position. When a new setup is found, the user is prompted to select"
        , " how the node should act in this scenario in the future. Here is the starting menu, when there is only the node:"
        , imageString("PatternPath(Start).PNG", "a 3x3 grid of dots, the center black and one dot circled")
        , "Each dot stores whether it has been visited or not, and the shape of this is what determines"
        , " the next action. Here are a few runthroughs: "
        , imageLineString(
            new Array(
                imageString("PatternPath(2).PNG", "marching path")
                , imageString("PatternPath(3).PNG", "winding path")
                , imageString("PatternPath(1).PNG", "chaotic path")
            )
        )
        , "As you can see, the path can form marches, wind itself up, or even act chaotically."
        , "<br />User input: If the current position has an answer, hitting spacebar will advance the path."
        , " otherwise, spacebar will bring up and hide the menu. With the menu open, the arrow"
        , " keys are used for selection of the next position, and enter confirms the selection"
    )
));


posts.push(new projectPost(
    "Predictive Text",
    "Atom", "C++",
    "After reading in sample text, the program uses the history and probability to guess following words and create sentence like chains",
    new Array(
        "This was a project that I completed with a team for my Data Structures class."
        , " Since it was a team project, the results are up "
        , linkString("on github", "https://github.com/JakeSwartwout/Writing-Analysis")
        , ". It's attempting to mimic the predcitive text features in keyboards, except"
        , " on a much simpler scale. We can read in any number of files and save files,"
        , " storing the data in a weighted directed graph. Each connection"
        , " represents a word that has previously followed another word, and the weight is"
        , " how many times that has occurred. Using this, we can form rough sentences"
        , " by choosing the more common following-words more often. The results are"
        , " varied, usually depending on the writing. Strong patterns encourage accurate"
        , " prediction, while varied vocabulary means the program will be get stuck"
        , " on linking words as they appear at a much higher rate."
    )
));