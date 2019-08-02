// general js for the project that wouldn't be a reuseable component

var bvOverlay1 = document.getElementById("bv-overlay-1");
var bvOverlay2 = document.getElementById("bv-overlay-2");
var bvOverlay3 = document.getElementById("bv-overlay-3");
var bvCaption1 = document.getElementById("bv-caption-1");
var bvCaption2 = document.getElementById("bv-caption-2");
var bvCaption3 = document.getElementById("bv-caption-3");
  console.log(bvOverlay2);
bvOverlay1.onmouseover = function() {
  bvCaption1.style.visibility = "visible";

}
bvOverlay1.onmouseout = function() {
  bvCaption1.style.visibility = "hidden";
}

bvOverlay2.onmouseover = function() {
  bvCaption2.style.visibility = "visible";
}
bvOverlay2.onmouseout = function() {
  bvCaption2.style.visibility = "hidden";
}

bvOverlay3.onmouseover = function() {
  bvCaption3.style.visibility = "visible";
}
bvOverlay3.onmouseout = function() {
  bvCaption3.style.visibility = "hidden";
}
