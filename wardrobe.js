Status="";
img="";
function preload()
{
   img = loadImage("wardrobe.jpg");
}
function setup()
{
    canvas = createCanvas(400,400);
    canvas.center();
    document.getElementById("status").innerHTML="status: Objecting objects";
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
}
function modelLoaded()
{
    console.log("Model Loaded");
    Status = true;
    object_Detector.Detect(img,gotResults);
}
function draw()
{
    image(img,0,0,400,400);
}
function gotResults(error,Results)
{
    if(error)
    {
        console.log(error);
    }
    console.log(results);
}