function Greeters(greeting: string) {
    this.greeting = greeting;
}

Greeters.prototype.greet = function() {
    return "Hello," + this.greeting;
}

var greeter = new Greeters("world");
let button = document.createElement('button');
button.textContent = "Say Hello!";
button.onclick = function() {
    alert(greeter.greet());
}

document.body.appendChild(button);