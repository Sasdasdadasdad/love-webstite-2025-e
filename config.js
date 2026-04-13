const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "моя милая эмилечка",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "самой самой миленькой и любименькой в моей жизни👀",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['💞', '🩷', '🤍', '💗', '💘'],  // Heart emojis
        bears: ['🌷', '🌸']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "а я нравки нравки?",                                    // First interaction
            yesBtn: "нууу дооо(≧◡≦) ♡",                                             // Text for "Yes" button
            noBtn: "ниии^_^",                                               // Text for "No" button
            secretAnswer: "нууу ты нравки нравки, но я то люблю тя"           // Secret hover message
        },
        second: {
            text: "ааа ета, на скоко я нравки нравки?",                          // For the love meter
            startText: "iбааа заинтькаа, настолько>_<",                                   // Text before the percentage
            nextBtn: "дальшее ❤️"                                         // Text for the next button
        },
        third: {
            text: "согласна ли ты быть самой счастливой девочкой на свете... и позволить мне делать тебя счастливой каждый день?(⁄ ⁄>⁄ ▽ ⁄<⁄ ⁄)", // The big question!
            yesBtn: "дооо",                                             // Text for "Yes" button
            noBtn: "ну нии"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "бозетькеее заинька, настолько, я не могу, ти самая самая лучшаяяшя и любимая!!!(⌒▽⌒)♡",  // Shows when they go past 5000%
        high: "ойойойо, куда ж ты так. и так блина смущаещшшь>_<",              // Shows when they go past 1000%
        normal: "а я то как сильно тя люблю"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "с тобой я самый самый счастлив!! я тя безумно люблю, любовь всей моей жизни (⁄ ⁄>⁄ ▽ ⁄<⁄ ⁄)",
        message: "а вот что я те буду давать миленькаьяя>_<",
        emojis: "🌷🩷🌸🎁💋"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#e961bb",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#ffa0ea",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#ff6bbc",     // Button color (should stand out against the background)
        buttonHover: "#b187ff",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#f796de"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "16s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "55px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.6s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.4         // Size of heart explosion effect (1.2-2.0 recommended)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
