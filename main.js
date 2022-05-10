music = " "
music2 = " "
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scoreRightWrist = 0;
socreLeftWrist = 0
ifPlaying = " "

function setup(){
    canvas= createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoeNet is Initialized')
}

function preload(){
    music = loadSound("music2.mp3")
    music2 = loadSound("music.mp3")
}

function draw(){
    image(video, 0, 0, 600, 500);

    fill('#FF0000')
    stroke('#FF0000')

    if(scoreRightWrist > 0.2){
        circle(rightWristX, rightWristY, 20)
        music2.play();
        song.setVolume(1);
        song.rate(1);    
    }

    if(socreLeftWrist > 0.2){
        circle(leftWristX, leftWristY, 20)
        music.play();
        song.setVolume(1);
        song.rate(1);
    }
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        scoreRightWrist = results[0].pose.keypoints[10].score;
        socreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreRightWrist = " + scoreRightWrist + "scoreLeftwrist = " + socreLeftWrist);

        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("LeftWristX = "+leftWristX+" LeftWristY = "+leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("RightWristX = "+rightWristX+" RightWristY = "+rightWristY);
    }
}

