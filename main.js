noseX = 0;
noseY = 0;
leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup ()
{
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(400, 400);
    canvas.position(500, 100);

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);

}

function modelLoaded()
{
    console.log("Model is loaded.");
}

function draw()
{
    background('#ca5cdd');
    fill('#4b6043');
    stroke('#4b6043');
    square(noseX, noseY, difference);
}

function gotPoses(results)
{
if(results.length>0)
{
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("Nose X ="+noseX+"; Nose Y ="+noseY);
    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);
    console.log("Left Wrist X = "+leftWristX+"; Right Wrist X = "+rightWristX+"; Difference = "+difference);
}
}