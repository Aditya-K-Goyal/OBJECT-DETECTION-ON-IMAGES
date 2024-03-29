Status="";
objects=[];
tv ="";
function preload()
{
   tv = loadImage("https://i5.walmartimages.com/asr/b34f6635-2399-40b6-a365-0e0ed65fa93c_1.cc842e7eaaa33199581118de273a71df.jpeg");
}
function setup()
{
    canvas = createCanvas(400,400);
    canvas.center();
    document.getElementById("status").innerHTML="status: detecting objects";
    object_Detector= ml5.objectDetector('cocossd',modelLoaded);
}
function modelLoaded()
{
    console.log("Model Loaded");
    Status = true;
    object_Detector.detect(tv,gotResults);
}
function draw(){
image(tv,0,0,400,400);
    if(Status !=""){
        r = random(255);
        g = random(255);
        b = random(255);
        for(i=0; i<objects.length; i++){
            document.getElementById("status").innerHTML="status: objects Detected";
            document.getElementById("results").innerHTML="There are " + objects.length+" object in the image";
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label +  " " + percent + "%" + objects[i].x + objects[i].y );
            stroke(r,g,b);
            fill(r,g,b);
            noFill();
            rect(objects[i].x-110 , objects[i].y-100 , objects[i].width-1810 , objects[i].height -1000);
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