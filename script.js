var img1=null;
var img2=null;
var canvas1=null;
var canvas2=null;
var canvas3=null;


function upload1(){
    canvas1=document.getElementById("c1");
    var input1=document.getElementById("fInput1");
    img1=new SimpleImage(input1);
    img1.drawTo(canvas1);
}

function upload2(){
    canvas2=document.getElementById("c2");
    var fin=document.getElementById("fInput2");
    img2=new SimpleImage(fin);
    img2.drawTo(canvas2);
}

function hideImage(){
    img1=chop(img1);
    img2=hide(img2);
    var ans=join(img1,img2);
    var canvas3=document.getElementById("c3");
    ans.drawTo(canvas3);
}

function chop(img){
    for(var p of img.values()){
        p.setRed(sizeIt(p.getRed()));
        p.setBlue(sizeIt(p.getBlue()));
        p.setGreen(sizeIt(p.getGreen()));
    }
    return img;
}

function sizeIt(i){
    return Math.floor(i/16)*16;
}

function hide(img){
    for(var p of img.values()){
        p.setRed(sizeIt2(p.getRed()));
        p.setBlue(sizeIt2(p.getBlue()));
        p.setGreen(sizeIt2(p.getGreen()));
    }
    return img;
}

function sizeIt2(i){
    return Math.floor(i/16);
}

function join(img1 , img2){
    var ans=new SimpleImage(img1.width, img2.height);
    for(var p of ans.values()){
        var x=p.getX();
        var y=p.getY();
        var img1Pixel=img1.getPixel(x,y);
        var img2Pixel=img2.getPixel(x,y);
        
        p.setRed(img1Pixel.getRed()+img2Pixel.getRed());
        p.setBlue(img1Pixel.getBlue()+img2Pixel.getBlue());
        p.setGreen(img1Pixel.getGreen()+img2Pixel.getGreen());
    }
    return ans;
}

function download(){
    var canvas=document.getElementById("c3");
  var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
  var link = document.createElement('a');
  link.download = "my-image.png";
  link.href = image;
  link.click();
}