	var controller = new ScrollMagic.Controller();

    var scene1 = new ScrollMagic.Scene({triggerElement: ".scene", duration: 1200})
    	.setTween("#castles",{bottom:"-800px", left:"-775px", width: "1800px", ease:Expo.easeOut})
    	.addTo(controller);

     var scene2 = new ScrollMagic.Scene({triggerElement: ".scene", duration: 300})
        .setTween("#water",{opacity:"0", bottom:"-150px", left:"300px", width: "900px", ease:Expo.easeOut})
        .addTo(controller);

    var scene3 = new ScrollMagic.Scene({triggerElement: ".scene", duration: 1200})
        .setTween("#treeLeft",{left:"-550px", ease:Expo.easeOut})
        .addTo(controller);

    var scene4 = new ScrollMagic.Scene({triggerElement: ".scene", duration: 1200})
        .setTween("#treeRight",{right:"-1200px", width: "800px", ease:Expo.easeOut})
        .addTo(controller);

    var scene5 = new ScrollMagic.Scene({triggerElement: "#scene2", duration: 1200})
        .setTween("#castle",{right:"-1800px", width: "800px", ease:Expo.easeOut})
        .addTo(controller);

