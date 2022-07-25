Status="";
objects=[];
fruits ="";
function preload()
{
    fruits = loadImage("apple.jpg");
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
    object_Detector.detect(fruits,gotResults);
}
function draw(){
image(fruits,0,0,400,400);
    if(Status !=""){
        r = random(255);
        g = random(255);
        b = random(255);
        for(i=0; i<objects.length; i++){
            document.getElementById("status").innerHTML="status: Object Detected";
            document.getElementById("results").innerHTML="There is "+ objects.length + " object in the image";
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label +  " " + percent + "%" + objects[i].x + objects[i].y );
            stroke(r,g,b);
            fill(r,g,b);
            noFill();
            rect(objects[i].x -50, objects[i].y+20, objects[i].width+50 , objects[i].height+50 );
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