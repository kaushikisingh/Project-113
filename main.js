function setup()
{
    canvas=createCanvas(700,500);
    canvas.position(120,200);
    camera=createCapture(VIDEO);
    camera.hide();
    colour="";
}
function draw()
{
    image(camera,0,0,700,500);
    tint(colour);
    fill("red");
    circle(30,30,50);
    fill("green");
    rect(57,25,581,20);
    fill("green");
    rect(25,55,20,390);
    fill("green");
    rect(660,55,20,390);
    fill("red");
    circle(665, 30, 50);
    fill("green");
    rect(60,470,581,20);
    fill("red");
    circle(30,470,50);
    fill("red");
    circle(667, 470, 50);
}
function applytint()
{
    colour=document.getElementById("colour_name").value;
}
function take_snapshot()
{
    save('kaushiki.png');
}