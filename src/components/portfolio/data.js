const base_url = "/../media/commerce2.png"

export var pieces = [
    {   
        active: true,
        url: require("/../media/commerce2.png"),
        //url: require("../../../media/commerce2.png"),
        gif: require("/../media/gifs/auctions1.gif"),
        title: "Auctions",
        id: "auctions",
        description: "Ebay-like bidding platform with images and login system",
        stack: ["Django", "Sass", "MYSQL"],
        link: "https://www.google.com/search?q=moose&oq=moose&aqs=chrome.0.35i39l2j46i131i433i512j69i60l5.446j0j1&sourceid=chrome&ie=UTF-8"
    },
    {
        active: true,
        url: require("../../../media/codingwiki1.png"),
        gif: require("../../../media/gifs/wiki1.gif"),
        title: "Wiki",
        id: "wiki",
        description: "Custom wiki I use to keep and share all my programming notes.",
        stack: ["Django", "MYSQL", "Sass"],
        link: "https://www.google.com/search?q=moose&oq=moose&aqs=chrome.0.35i39l2j46i131i433i512j69i60l5.446j0j1&sourceid=chrome&ie=UTF-8"
    },
    {
        active: true,
        url: require("../../../media/bodega3.png"),
        gif: require("../../../media/gifs/bodega1.gif"),
        title: "Bodega.Photo",
        id: "bodega",
        description: "Grab color samples out of uploaded photos.",
        stack: ["Javascript", "NPM"],
        link: "https://bodega.photo/"
    },
    {
        active: false,
        url: require("../../../media/jinjialin3.png"),
        gif: require("../../../media/jinjialin3.png"),
        title: "Jinjialin",
        id: "jinjialin",
        description: "Fun informational site about a fictional planet, with incorporated chat and twitter.",
        stack: ["Javascript", "NPM"],
        link: "https://invisibleplanetnine.web.app/"
    },
    {
        active: true,
        url: require("../../../media/wesume1.png"),
        gif: require("../../../media/gifs/wesume1.gif"),
        title: "Resume",
        id: "resume",
        description: "My online resume with filterable experience entries.",
        stack: ["Javascript", "Sass"],
        link: "https://elijahresume.com/"
    },
    {
        active: true,
        url: require("../../../media/gyst6.png"),
        gif: require("../../../media/gifs/gyst1.gif"),
        title: "Playgyst.com",
        id: "gyst",
        description: "Two-player game similar to tic-tac-toe. Play it with a friend!",
        stack: ["Firebase", "Sass"],
        link: "https://playgyst.com/"
    },
    {
        active: true,
        url: require("../../../media/cafe4.png"),
        gif: require("../../../media/gifs/cafe1.gif"),
        title: "Cafe Infinite",
        id: "cafe",
        description: "Social exploration web app built on top of google maps.",
        stack: ["Firebase", "Google Maps API", "Geolocation"],
        link: "https://cafe-infinite.web.app/"
    },
    {
        active: true,
        url: require("../../../media/rapid1.png"),
        gif: require("../../../media/gifs/rapid1.gif"),
        title: "Rapid Notes",
        id: "rapid",
        description: "A text editor I built from scratch that makes note-taking faster and more fun.",
        stack: ["Javascript"],
        link: "https://portsite.web.app/editor/editor.html"
    },
    {
        active: true,
        url: require("../../../media/firestripe1.png"),
        gif: require("../../../media/gifs/firestripe1.gif"),
        title: "Firestripe",
        id: "firestripe",
        description: "Example site that can fully process real credit card payments.",
        stack: ["Javascript",  "Stripe API", "Firebase"],
        link: "https://firestripe-boilerplate.web.app/"
    }
]

export const techList = () => {

    var techs = []

    for (let piece of pieces){ // for each piece

        piece.stack.forEach(element => { // and each tech in each piece's stack

            if (techs.includes(element)){
                // don't add to techs array -- it's already there
            } else {
                techs.push(element);
            }

        });

    }

    console.log(techs);
    return techs;

}