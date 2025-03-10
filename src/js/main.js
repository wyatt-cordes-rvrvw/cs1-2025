function submit() {
    console.log("Hello World");
    var name = document.getElementsByName("name").item(0).value;
    var message = document.getElementsByName("message").item(0).value;
    console.log(name);
    console.log(message);
    alert("Hello " + name + "! Your message is: " + message);
    document.getElementById("message").innerHTML = message;
}

function createNav() {
    var anchors = [
        new anchor("Home", "/"),
        new anchor("My New Page", "/newpage/"),
        new anchor("More Pages", "/more/"),
        new anchor("Google", "https://www.google.com")
    ];
    var nav="";
    for (var i = 0; i < anchors.length; i++) {
        if (i > 0) {nav += "|";}
        nav += anchors[i].toHTML();
    }
    document.getElementById("topnav").innerHTML = nav;
}

document.addEventListener("DOMContentLoaded", () => {
    createNav();
});

 class anchor {
    constructor(name, url) {
        this.name = name;
        this.url = url;
    }
    toHTML() {
        return '<a href="' + this.url + '">' + this.name + '</a>';
    }
 }
