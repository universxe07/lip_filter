lipsX = 0;
lipsY = 0;

function preload(){
  lips = loadImage("lipstick_png.png");
}

function setup(){

canvas = createCanvas(300, 300);
canvas.center();
video = createCapture(VIDEO);
video.size(300, 300);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses)
}

function modelLoaded(){

    console.log("PoseNet has Initialised")
}

function draw(){
image(video, 0, 0, 300, 300);
image(lips, lipsX-25, lipsY+17, 45, 45);
}

function take_snapshot(){

    save('myFilterImage.png');
}

function gotPoses(results){

if(results.length > 0){

    console.log(results);
    lipsX = results[0].pose.nose.x;
    lipsY = results[0].pose.nose.y;
    console.log("lips x = " + lipsX);
    console.log("lips y = " + lipsY);
}
}