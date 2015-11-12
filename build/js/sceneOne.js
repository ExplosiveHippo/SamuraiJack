window.onload = function(){
    var castle = document.getElementById("castles");
    var water = document.getElementById("water");
    var treeLeft = document.getElementById("treeLeft");
    var treeRight = document.getElementById("treeRight");
    TweenLite.to(castle, 7, {bottom:"-170px", left:"100px", width: "1100px", ease:Expo.easeOut}).delay(1);
    TweenLite.to(water, 5, {opacity:"0.5", bottom:"-250px", left:"300px", width: "900px", ease:Expo.easeOut}).delay(1);
    TweenLite.to(treeLeft, 5, {left:"-100px", ease:Expo.easeOut}).delay(1);
    TweenLite.to(treeRight, 5, {right:"-600px", width: "800px", ease:Expo.easeOut}).delay(1);
}