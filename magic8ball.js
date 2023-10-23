var bing_chilling_audio = document.createElement("audio");
document.body.appendChild(bing_chilling_audio);

//Wait for audio to load before trying to play it
document.getElementById("8ball").addEventListener("click", showMessage);

function showMessage() {
    const xmlns = "http://www.w3.org/2000/svg"; //Used for creating SVG elements
    var do_bing_chilling = false;
    var i; //Used for indexing



    // =======[SELECT THE MESSAGE]=======

    var question = document.getElementById("question").value;
    var message = "placeholder\nyes";
    const msgList = [
        //Affirmative
        "It is certain",
        "It is decidedly so",
        "Without a\ndoubt",
        "Yes definitely",
        "You may rely\non it",
        "As I see it, yes",
        "Most likely",
        "Outlook good",
        "Yes",
        "Signs point\nto yes",

        //Uncertain
        "Reply hazy,\ntry again",
        "Ask again\nlater",
        "Better not tell\nyou now",
        "Cannot predict\nnow",
        "Concentrate and\nask again",

        //Negative
        "Don't count\non it",
        "My reply is no",
        "My sources\nsay no",
        "Outlook is\nnot so good",
        "Very doubtful"
    ];

    //Handle special responses
    var rtd = Math.random();
    if (!/[^\s]+/i.test(question)) { //If box is empty or contains only whitespace
        message = "Please put a\nquestion in\nthe box.";
    } else if (rtd <= 1/100 || /.*(?:(?:zhong|jiang|john) (?:xina|cena|china))|(?:bing chilling).*/i.test(question)) {
        
        /*
        Zǎoshang hǎo zhōngguó xiànzài wǒ yǒu BING CHILLING wǒ hěn xǐhuān
        BING CHILLING dànshì sùdù yǔ jīqíng jiǔ bǐ BING CHILLING sùdù yǔ jī sùdù
        yǔ jīqíng jiǔ wǒ zuì xǐhuān suǒyǐ xiànzài shì yīnyuè shíjiān zhǔnbèi
        sān'èryī liǎng gè lǐbài yǐhòu sùdù yǔ jīqíng jiǔ liǎng gè lǐbài
        yǐhòu sùdù yǔ jīqíng jiǔ liǎng gè lǐbài yǐhòu sùdù yǔ jīqíng jiǔ bùyào
        wàngjì bùyào cuò guòqù diànyǐngyuàn kàn sùdù yǔ jīqíng jiǔ yīn wéi fēicháng
        hǎo diànyǐng dòngzuò fēicháng hǎo chàbùduō yīyàng BING CHILLING zàijiàn
        */

        message = "\
        ⣿⣿⣿⣿⣿⣿⡿⠛⠋⠉⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⠉⠛⠿⣿⣿⣿⣿⣿⣿⣿\n\
        ⣿⣿⣿⡿⠋⠁⠄⠄⢠⣴⣶⣿⣿⣶⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⠿⣿⣿⣿⣿\n\
        ⣿⣿⡟⠁⠄⠄⠄⠄⣿⣿⣿⣿⣿⣿⣇⡀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢹⣿⣿⣿\n\
        ⣿⣿⣧⠄⠄⠄⠄⢰⣿⣿⣿⣿⣿⣿⣿⡆⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣸⣿⣿⣿\n\
        ⣿⣿⣿⣧⡀⠄⠄⢸⣿⣿⣿⣿⣿⣿⣿⣷⣆⠄⠄⠄⠄⠄⠄⠄⠄⣰⣿⣿⣿⣿\n\
        ⣿⣿⣿⣿⡿⣦⣀⣾⣿⣟⣉⠉⠙⢛⡏⠁⠄⠄⠄⠄⠄⠄⠄⠄⠚⢿⣿⣿⣿⣿\n\
        ⣿⣿⣿⣿⣯⣗⣻⣿⣯⣥⣦⠄⣀⣾⡇⠄⠄⠂⠄⠄⠄⠄⠄⠄⠄⣼⣿⣿⣿⣿\n\
        ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠄⠄⠂⠄⠄⠄⠄⠄⠄⠄⣿⣿⣿⣿⣿\n\
        ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⣻⠋⠄⠄⠄⠄⠄⠄⠄⢀⠄⣸⣿⣿⣿⣿⣿\n\
        ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡁⡀⠄⠄⠄⠄⠄⠄⢸⣾⣿⣿⣿⣿⣿⣿\n\
        ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣥⣾⣷⠶⠆⠄⠄⠄⢀⠄⠄⠄⠸⣿⣿⣿⣿⣿⣿⣿\n\
        ⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⣶⣄⡀⠄⠄⠄⠄⠄⢀⠄⠸⣿⣿⣿⣿⣿⣿\n\
        ⣿⣿⣿⣿⣿⣿⠟⠚⣿⣿⡻⠿⠿⠛⠙⠁⠄⠄⠄⠄⠠⠂⠄⠄⠘⠿⣿⣿⣿⣿\n\
        ⠿⠛⠉⠁⠁⠄⠄⠄⣻⣿⣿⣧⣠⣀⠄⠄⠄⠄⡀⠂⠄⠄⠄⠄⠄⠄⠈⠉⠿⢿\n\
        ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠘⠿⣿⡿⠃⢀⡠⠄⠃⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄\n\
        早上好中国現在我有冰淇淋我很喜歡冰淇淋\n\
        但是速度與激情九比冰淇淋\n\
        速度與激速度與激情九我最喜歡\n\
        所以現在是音樂時間準備三二一\n\
        兩個禮拜以後速度與激情九\n\
        兩個禮拜以後速度與激情九\n\
        兩個禮拜以後速度與激情九\n\
        不要忘記不要錯過去電影院\n\
        看速度與激情九因為非常好電影\n\
        動作非常好差不多一樣冰激淋\n\
        再見";
        do_bing_chilling = true;
    } else if ( /^does a magic 8 ball actually work/i.test(question)) {
        message = "How dare you\ndoubt me!";
    } else if (/^is (?:javascript|js) awesome/i.test(question)) {
        message = "Of course!";
    } else {
        message = msgList[Math.floor(Math.random() * msgList.length)];
    }



    // =======[MAKE THE MESSAGE CENTER-ALIGNED AND VERTICALLY CENTERED, AND HANDLE LINE BREAKS]=======

    var group = document.getElementById("message");
    //Clear the previous message, if any
    while (group.hasChildNodes())
        group.removeChild(group.firstChild);

    var tboxList = []; //This will be a list of all the <text> tags. Each line must get its own tag.

    //Measure the line height
    var tbox = document.createElementNS(xmlns, "text");
    group.appendChild(tbox);
    tbox.innerHTML = message;
    const h = tbox.getBBox().height;
    group.removeChild(tbox);

    //Split message into lines
    message = message.split('\n');

    var y0 = 250 - (0.5 * h * message.length) + (0.75 * h); //Y-coordinate of first line.

    //Each line gets its own text box
    for (i = 0; i < message.length; i++) {

        //Make the text box and center it
        tbox = document.createElementNS(xmlns, "text");
        group.appendChild(tbox);
        tbox.innerHTML = message[i];
        tbox.setAttribute("x", Math.round(250 - (0.5 * tbox.getBBox().width)));
        tbox.setAttribute("y", Math.round(y0 + (h * i)));

        if (do_bing_chilling) {
            //Create fake background
            let rect = document.createElementNS(xmlns, "rect");
            let boundbox = tbox.getBBox();

            rect.setAttribute("x", Math.round(250 - (0.5 * boundbox.width)));
            rect.setAttribute("y", Math.round(250 - (0.5 * h * message.length) + (h * i)));
            rect.setAttribute("width", boundbox.width);
            rect.setAttribute("height", boundbox.height);

            rect.setAttribute("fill", "#00001f");

            group.insertBefore(rect, tbox);
        }

        //Keep track of the text boxes
        tboxList.push(tbox);
    }



    // =======[HANDLE BING CHILLING AUDIO]=======

    if (do_bing_chilling) {
        bing_chilling_audio.src = "sound/bing_chilling.wav";
        bing_chilling_audio.load();
        bing_chilling_audio.addEventListener("canplaythrough", bing_chilling_audio.play); //More supported than autoplau
        bing_chilling_audio.addEventListener("ended", bing_chilling_audio.play); //More supported than loop attribute
    } else {
        bing_chilling_audio.pause(); //In case the audio is already playing, this stops it
        bing_chilling_audio.currentTime = 0;
        bing_chilling_audio.src = "";
        bing_chilling_audio.removeEventListener("ended", bing_chilling_audio.play);
    }



    // =======[ANIMATE THE TEXT FADING IN]=======

    document.getElementById("circle").setAttribute("fill", "#00001f");
    var fadeColour;
    var initialTimestamp = performance.now();

    function updateFade(timestamp) {
        fadeColour = 0x1f + Math.floor((timestamp - initialTimestamp) * 0.001 * 0xe0);
        for (i = 0; i < tboxList.length; i++)
            tboxList[i].setAttribute("fill", `rgb(0, 0, ${Math.min(0xff, fadeColour)})`);
        if (fadeColour <= 0xff)
            window.requestAnimationFrame(updateFade);
    }
    window.requestAnimationFrame(updateFade);
}