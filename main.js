var mouseEvent = "empty";
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
colour = "Black";
width = 2;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    colour = document.getElementById("colour").value;
    radius = document.getElementById("radius").value;
    width = document.getElementById("width").value;
    mouseEvent = "mouseDown";
}
canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
    var mouse_X = e.clientX - canvas.offsetLeft;
    var mouse_Y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
        console.log('Current position of the x and y coordiantes is...');
        console.log("X = " + mouse_X + ", " + "Y = " + mouse_Y);
        ctx.beginPath();
        ctx.strokeStyle = colour;
        ctx.lineWidth = width;
        ctx.arc(mouse_X, mouse_Y, radius, 0, 2 * Math.PI);
        ctx.stroke();
    }
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) {
    mouseEvent = "mouseUP";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {
    mouseEvent = "mouseleave";
}


function Clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}