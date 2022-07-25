Status="";
objects=[];
ac ="";
function preload()
{
   ac = loadImage("ac.jpg");
}
function setup()
{
    canvas = createCanvas(400,400);
    canvas.center();
    document.getElementById("status").innerHTML="status: Detecting Objects";
    object_Detector= ml5.objectDetector('cocossd',modelLoaded);
}
function modelLoaded()
{
    console.log("Model Loaded");
    Status = true;
    object_Detector.detect(ac,gotResults);
}
function draw(){
image(ac,0,0,400,400);
    if(Status !=""){
        r = random(0-1);
        g = random(0-1);
        b = random(0-1);
        for(i=0; i<objects.length; i++){
            document.getElementById("status").innerHTML="status: Object Detected";
            document.getElementById("results").innerHTML="There is "+ objects.length + " object in the image";
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label +  " " + percent + "%" + objects[i].x + objects[i].y );
            stroke(r,g,b);
            fill(r,g,b);
            noFill();
            rect(objects[i].x +60, objects[i].y -25 , objects[i].width , objects[i].height);
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
