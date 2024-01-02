song1 = "";
song2 = "";
rightWristX = 0;
rightWristY = 0;
leftWristX = 0;
leftWristY = 0;

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

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    image(video, 0, 0, 600, 591);

    fill("#FF0000");
    stroke("#FF0000");

    if(scoreleftWrist > 0.2)
      {
    circle(leftWristX,leftWristX,20);
    InNumberleftWristY = Number(leftWristY);
    remove_decimals = floor(InNumberleftWristY);
    volume = remove_decimals/500;
    document.getElementById("volume").innerHTML = "Voulume = " + volume;
    song1.setVolume(volume);
    song2.setVolume(volume);
      }
}


function play1()
{
    song1.play();
    song1.setVolume(1);
    song1.rate(1);
}

function play2()
{
    song2.play();
    song2.setVolume(1);
    song2.rate(1);
}

function modelLoaded()
{
    console.log("modelLoaded!");
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        scoreleftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreleftWrist = " + scoreleftWrist);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);
    }
}

