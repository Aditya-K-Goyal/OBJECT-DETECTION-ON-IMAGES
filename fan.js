Status="";
objects=[];
fan ="";
function preload()
{
   fan = loadImage("fans.jpg");
}
function setup()
{
    canvas = createCanvas(400,400);
    canvas.center();
    document.getElementById("status").innerHTML="status: Objecting objects";
    object_Detector= ml5.objectDetector('cocossd',modelLoaded);
}
function modelLoaded()
{
    console.log("Model Loaded");
    Status = true;
    object_Detector.detect(fan,gotResults);
}
function draw(){
image(fan,0,0,400,400);
    if(Status !=""){
        r = random(255);
        g = random(255);
        b = random(255);
        for(i=0; i<objects.length; i++){
            document.getElementById("status").innerHTML="status: Objecting objects";
            document.getElementById("results").innerHTML="There is 1 object in the image";
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label +  " " + percent + "%" + objects[i].x + objects[i].y );
            stroke(r,g,b);
            fill(r,g,b);
            noFill();
            rect(objects[i].x -100 , objects[i].y , objects[i].width , objects[i].height-230);
    }
}
}
function gotResults(error,results)
{
    if(error){
        console.log(error);
    }
    console.log(results);
    objects = results;
}