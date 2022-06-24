function Greeters(greeting) {
    this.greeting = greeting;
}
Greeters.prototype.greet = function () {
    return "Hello," + this.greeting;
};
var greeter = new Greeters("world");
var button = document.createElement('button');
button.textContent = "Say Hello!";
button.onclick = function () {
    alert(greeter.greet());
};
document.body.appendChild(button);
