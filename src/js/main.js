function submit() {
    console.log("Hello World");
    var name = document.getElementsByName("name").item(0).value;
    var message = document.getElementsByName("message").item(0).value;
    console.log(name);
    console.log(message);
    alert("Hello " + name + "! your message is: " + message);
    document.getElementById("message").innerHTML = message;
}