var posts = [];


posts.push(new post(
    "Downloaded Android Studio",
    "September 13th, 2018",
    "I'm writing a month later, but I think that's okay. This day, I tried going to an app development club at CU. Sadly, nobody showed up, but their website had reccommended downloading Android Studio. So, I downloaded it and started looking into how it works."
));

posts.push(new post(
    "First Tests",
    "September 23rd, 2018",
    "I followed the tutorial, and got an app to download and then open up on my phone! That was super cool."
));

posts.push(new post(
    "Began Mad Libs",
    "September 24th, 2018",
    "With my new knowledge, I started to create a madLibs type app. It had several inputs, a button, and the button would bring you to a new page and pass the inputs there. I didn't finish it though, so it was just text entry basically"
));

posts.push(new post(
    "Keyboard App",
    "October 3rd? 2018",
    "I watched some online tutorials, copied their code word for word, and got a numeric keyboard to come up as an optional keyboard. And, it actually typed too! This was super exciting, as I wanted to make a keyboard with my own characters previously, and this showed me that it was possible"
));

posts.push(new post(
    "Owatis Keyboard of Fun Characters",
    "October 8th, 2018",
    "I set up my personal keyboard. I just had numbers instead of keys, because I had to figure out passing input, and plan the actual placement. But, I changed the rows, number of keys, and got them to transfer data"
));

posts.push(new post(
    "Adding the Characters to Owatis",
    "October 10th, 2018",
    "This day had a lot of improvements. I put all of the symbols in both the keyboard and outputs, picked new symbols when they wouldn't show up on my phone, created a backspace, tab, delete, and enter, then solved my backspace and delete issues where it deleted two characters in some places but not others. I also set it so pressing the 'symb' key switched to the secondary set of symbols."
));

posts.push(new mediaPost(
    "Owatis App Icon and Final Results",
    "October 15th",
    new Array(
        "While the keyboard was already finished, I polished it up by giving it"
        , " a custom icon that shows up in my apps screen. It looks like this:"
        , imageString("Owatis App.png", "The square app icon", 20)
        , "The omega is just one of the characters. When the keyboard is selected,"
        , " it pops up anytime the regular keyboard would. So, here it is being used"
        , " to edit a google doc:"
        , imageString("Owatis Google Docs.png", "Owatis pulled up in google docs mobile")
        , " And when you long press a character, it shows a preview of the key to"
        , " to make sure you're pressing the right one. Here's that in the chrome"
        , " app's url bar:"
        , imageString("Owatis Google.png", "example of the long-press key-preview")
        , "I'm super proud that I've been able to do this! It was a lot of fun to"
        , " learn as well."
    )
));

posts.push(new mediaPost(
    "Finishing Mad Libs",
    "October 16th, 2018",
    new Array(
        "I finally decided to finish my madLibs app. It was pretty simple, I just"
        , " cut the input string back into it's variables, removed any weird"
        , " capitals, then put them into a paragraph. For the input: "
        , imageString("Mad Libs/Input (2).png", "input for a madlib", 50)
        , "the program would plug the words in and show: "
        , imageString("Mad Libs/Output (1).png", "output for the madlib", 50)
        , "After that, I went in and added a few more possible outputs and set"
        , " the program to randomly select one. In all I did four possible"
        , " outputs, so here are the 3 others that I did:"
        , imageString("Mad Libs/Output (2).png", "output 2", 50)
        , imageString("Mad Libs/Output (3).png", "output 3", 50)
        , imageString("Mad Libs/Output (4).png", "output 4", 50)
        , "(It's pretty obvious which words are the user selected, right? They're"
        , " all of the same initial input type too)<br />"
        , "And finally, to finish it all, I created an app icon for this one as well:"
        , imageString("MadLibs App.png", "the madlibs icon", 20)
    )
));

posts.push(new post(
    "Using Unity?",
    "December 30th, 2018",
    "While working with Unity, I found an option to build an Android app. HmmMMMmm. I started fiddling with it and it seems like it'll actually be really easy to use, so I'm excited to try creating something. Currently, I have a ball that moves down slowly, but moves up when you're touching the screen. This shows that I can get touch input, have running programs, and download stuff to my phone. I'm excited to see what I can make."
));