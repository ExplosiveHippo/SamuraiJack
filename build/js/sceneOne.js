	var controller = new ScrollMagic.Controller();

    var scene1 = new ScrollMagic.Scene({duration: 6000})
        .setTween("#castles",{left:"-11250px", bottom: "-950px", scaleX:56, scaleY:56, ease:Expo.easeOut})
        .addTo(controller);

    var scene2 = new ScrollMagic.Scene({duration: 300})
        .setTween("#water",{opacity:"0", bottom:"-150px", left:"300px", width: "900px", ease:Expo.easeOut})
        .addTo(controller);

    var scene3 = new ScrollMagic.Scene({duration: 300})
        .setTween("#treeLeft",{left:"-550px", ease:Expo.easeOut})
        .addTo(controller);

    var scene4 = new ScrollMagic.Scene({duration: 300})
        .setTween("#treeRight",{right:"-1200px", width: "800px", ease:Expo.easeOut})
        .addTo(controller);


    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        console.log(scroll);
        if(scroll == 5215){
            console.log("here");
        }
    });