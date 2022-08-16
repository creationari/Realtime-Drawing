function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(550,550);
    canvas.position(560,150);
    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('Pose' , GotPoses);
}
function draw(){
    background('cyan');
}
function modelLoaded(){
    console.log("Posenet model is loaded");
}
function GotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}