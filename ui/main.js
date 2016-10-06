console.log('UnLoaded!');
//move the image
var img = document.getElementById('madi');
var marginLeft =0;
function moveRight(){
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
}
img.oneclick = function (){
    var interval = setInterval(moveRight,100);
    img.style.marginLeft = '100px';
};