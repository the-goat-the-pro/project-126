song1 = "";
song2 = "";

function preload()
{
    song1 = loadSound("cartoon.mp3");
    song2 = loadSound("deaf.mp3");
}

function setup()
{
    canvas = createCanvas(600,591);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 0, 0, 600, 591);
}


function play1()
{
    song1.play();
}

function play2()
{
    song2.play();
}
