//const base_url = "/../media/commerce2.png"

const root = "https://portfoliosite-h264.s3.us-east-2.amazonaws.com/"

const vids = root + "mp4/"
const pics = root + "png/"
const vidExt = ".mp4"
const picExt = ".png"

function makeUrl(id, type){
    if (type === "pic"){
        return pics + id + picExt
    } else {
        return vids + id + vidExt
    }
}

export var pieces = [
    {
        active: true,
        mobile: true,
        url: makeUrl("moonbot", "pic"),
        gif: makeUrl("moonbot", "vid"),
        title: "Moonbot",
        id: "moonbot",
        description: "A customizeable, personal data tracker designed to analyze trends in period cycles.",
        stack: ["React", "Django", "Docker", "Mobile First", "Recharts.js", "JWT Auth", "Django Rest API"],
        link: "http://moonbot.me"
    },
    {
        active: true,
        mobile: true,
        url: makeUrl("wesume", "pic"),
        gif: makeUrl("wesume", "vid"),
        title: "Resume",
        id: "resume",
        description: "My online resume with filterable experience entries.",
        stack: ["Javascript", "Sass", "CSS Transitions", "Mobile First"],
        link: "https://elijahresume.com/"
    },
    {   
        active: true,
        mobile: false,
        url: makeUrl("auctions", "pic"),
        gif: makeUrl("auctions", "vid"),
        title: "Auctions",
        id: "auctions",
        description: "Ebay-like bidding platform with images and login system",
        stack: ["Django", "Sass", "SQLite", "Bootstrap", "CSS Grid"],
        link: "http://157.230.2.209:8001/test",
        getID(){
            return this.id;
        }
    },
    {
        active: true,
        mobile: true,
        url: makeUrl("wiki", "pic"),
        gif: makeUrl("wiki", "vid"),
        title: "Wiki",
        id: "wiki",
        description: "Custom wiki I use to keep and share all my programming notes.",
        stack: ["Django", "MYSQL", "Sass"],
        link: "http://157.230.2.209:8000/"
    },
    {
        active: true,
        mobile: true,
        url: makeUrl("bodega", "pic"),
        gif: makeUrl("bodega", "vid"),
        title: "Bodega.Photo",
        id: "bodega",
        description: "Grab color samples out of uploaded photos.",
        stack: ["Javascript", "NPM", "CSS Flexbox"],
        link: "https://bodegaphoto.web.app/"
    },
    {
        active: false,
        url: makeUrl("jinjialin", "pic"),
        gif: makeUrl("jinjialin", "vid"),
        title: "Jinjialin",
        id: "jinjialin",
        description: "Fun informational site about a fictional planet, with incorporated chat and twitter.",
        stack: ["Javascript", "NPM"],
        link: "https://invisibleplanetnine.web.app/"
    },
    {
        active: true,
        mobile: true,
        url: makeUrl("gyst", "pic"),
        gif: makeUrl("gyst", "vid"),
        title: "Playgyst.com",
        id: "gyst",
        description: "Two-player game similar to tic-tac-toe. Play it with a friend!",
        stack: ["Firebase", "Sass", "Realtime DB", "Firestore", "Mobile First"],
        link: "https://playgyst.com/"
    },
    {
        active: true,
        mobile: false,
        url: makeUrl("cafe", "pic"),
        gif: makeUrl("cafe", "vid"),
        title: "Cafe Infinite",
        id: "cafe",
        description: "Social exploration web app built on top of google maps.",
        stack: ["Firebase", "Google Maps", "Geolocation", "Webpack", "Gulp"],
        link: "https://cafe-infinite.web.app/"
    },
    {
        active: true,
        mobile: false,
        url: makeUrl("rapid", "pic"),
        gif: makeUrl("rapid", "vid"),
        title: "Rapid Notes",
        id: "rapid",
        description: "A text editor I built from scratch that makes note-taking faster and more fun.",
        stack: ["Javascript"],
        link: "https://portsite.web.app/editor/editor.html"
    },
    {
        active: false,
        url: makeUrl("stripe", "pic"),
        gif: makeUrl("stripe", "vid"),
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