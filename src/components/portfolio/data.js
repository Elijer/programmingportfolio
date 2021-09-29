//const base_url = "/../media/commerce2.png"

export var pieces = [
    {   
        active: true,
        url: require("/../media/images/commerce1.png"),
        //url: require("../../../media/commerce2.png"),
        gif: require("/../media/h264/auctions.mp4"),
        title: "Auctions",
        id: "auctions",
        description: "Ebay-like bidding platform with images and login system",
        stack: ["Django", "Sass", "MYSQL"],
        link: "https://www.google.com/search?q=moose&oq=moose&aqs=chrome.0.35i39l2j46i131i433i512j69i60l5.446j0j1&sourceid=chrome&ie=UTF-8"
    },
    {
        active: true,
        url: require("../../../media/images/codingwiki1.png"),
        gif: require("../../../media/h264/wiki.mp4"),
        title: "Wiki",
        id: "wiki",
        description: "Custom wiki I use to keep and share all my programming notes.",
        stack: ["Django", "MYSQL", "Sass"],
        link: "https://www.google.com/search?q=moose&oq=moose&aqs=chrome.0.35i39l2j46i131i433i512j69i60l5.446j0j1&sourceid=chrome&ie=UTF-8"
    },
    {
        active: true,
        url: require("../../../media/images/bodega1.png"),
        gif: require("../../../media/h264/bodega.mp4"),
        title: "Bodega.Photo",
        id: "bodega",
        description: "Grab color samples out of uploaded photos.",
        stack: ["Javascript", "NPM"],
        link: "https://bodega.photo/"
    },
    {
        active: false,
        url: require("../../../media/images/jinjialin1.png"),
        gif: require("../../../media/images/jinjialin1.png"),
        title: "Jinjialin",
        id: "jinjialin",
        description: "Fun informational site about a fictional planet, with incorporated chat and twitter.",
        stack: ["Javascript", "NPM"],
        link: "https://invisibleplanetnine.web.app/"
    },
    {
        active: true,
        url: require("../../../media/images/wesume1.png"),
        gif: require("../../../media/h264/wesume.mp4"),
        title: "Resume",
        id: "resume",
        description: "My online resume with filterable experience entries.",
        stack: ["Javascript", "Sass"],
        link: "https://elijahresume.com/"
    },
    {
        active: true,
        url: require("../../../media/images/gyst1.png"),
        gif: require("../../../media/h264/gyst.mp4"),
        title: "Playgyst.com",
        id: "gyst",
        description: "Two-player game similar to tic-tac-toe. Play it with a friend!",
        stack: ["Firebase", "Sass"],
        link: "https://playgyst.com/"
    },
    {
        active: true,
        url: require("../../../media/images/cafe1.png"),
        gif: require("../../../media/h264/cafe.mp4"),
        title: "Cafe Infinite",
        id: "cafe",
        description: "Social exploration web app built on top of google maps.",
        stack: ["Firebase", "Google Maps API", "Geolocation"],
        link: "https://cafe-infinite.web.app/"
    },
    {
        active: true,
        url: require("../../../media/images/rapid1.png"),
        gif: require("../../../media/h264/rapid.mp4"),
        title: "Rapid Notes",
        id: "rapid",
        description: "A text editor I built from scratch that makes note-taking faster and more fun.",
        stack: ["Javascript"],
        link: "https://portsite.web.app/editor/editor.html"
    },
    {
        active: true,
        url: require("../../../media/images/firestripe1.png"),
        gif: require("../../../media/h264/firestripe.mp4"),
        title: "Firestripe",
        id: "firestripe",
        description: "Example site that can fully process real credit card payments.",
        stack: ["Javascript",  "Stripe API", "Firebase"],
        link: "https://firestripe-boilerplate.web.app/"
    }
]

// A currently unused function that scrapes all projects and generates a non-repeating list of
// All technology used throughout.
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