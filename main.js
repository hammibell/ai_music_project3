starboy_song = "starboy.mp3";
coming_song = "coming.mp3";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload(){
    loadSound("starboy.mp3");
    loadSound("coming.mp3");

}

function setup(){
    canvas = createCanvas(600, 550);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function modelLoaded(){
    console.log("If you see this message, then you are in the clear!");

}

function gotPoses{
    leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y;
    rightWristX = results[0].pose.rightWrist.x;
    rightWristY = results[0].pose.rightWrist.y;

    console.log("leftWristX ="+leftWristX+"leftWristY="+leftWristY);
    console.log("rightWristX ="+rightWristX+"rightWristY="+leftWristY);

}

function draw(){
    image(video, 0, 0, 600, 550);

}

