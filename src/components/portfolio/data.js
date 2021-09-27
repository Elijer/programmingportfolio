const base_url = "/../media/commerce2.png"

export var stacks = [
    {
        name: "Django",
        description: "The most popular Python framework for developing secure, database-driven web applications.",
        link: "https://www.djangoproject.com/start/overview/"
    },
    {
        name: "Sass",
        description: "Sass is the most mature, stable, and powerful professional grade CSS extension language in the world (CSS is what makes websites pretty.)",
        link: "https://sass-lang.com/"
    },
    {
        name: "MYSQL",
        description: "The most popular relational database system in the world.",
        link: "https://www.mysql.com/"
    },
    {
        name: "Javascript",
        description: "A very flexible programming language used for web development, game development, and lots more. (Not to be confused with Java, a completely different programming language.)",
        link: "https://www.javascript.com/"
    },
    {
        name: "NPM",
        description: "NPM, which stands for 'Node Package Manager', is the leading package manager for Javascript programs, housing an incredible ecosystem of over 1.3 million packages that do anything you can imagine.",
        link: "https://www.javascript.com/"
    },
    {
        name: "Firebase",
        description: "A suite of amazing tools created by google, including databases, hosting, login systems, and much more.",
        link: "https://www.youtube.com/watch?v=9kRgVxULbag"
    },
    {
        name: "Google Maps API",
        description: "The Google Maps API allows web developers to use many of Google's navigation technology, including rendering maps, computing directions, and accessing data about stores and locations.",
        link: "https://www.youtube.com/watch?v=9kRgVxULbag"
    },
    {
        name: "Geolocation",
        description: "The Geolocation API is a feature of all modern web browsers that gives web apps approximate access to the user's GPS location, allowing calulcation of fitness data, location on a map, and much more.",
        link: "https://www.youtube.com/watch?v=9kRgVxULbag"
    },
    {
        name: "Stripe API",
        description: "Stripe is one of the most secure and sophisticated payment-processing technologies, enabling the secure entry of card information and complex transfers of funds across different currencies.",
        link: "https://www.youtube.com/watch?v=9kRgVxULbag"
    },
]

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