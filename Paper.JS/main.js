$(document).ready(function() {
    'use strict';

    paper.install(window);

    const first = paper.setup(document.getElementById('firstCircle'));
    var c = first.Shape.Circle(200, 200, 50);
    c.fillColor = 'green';


    const second = paper.setup(document.getElementById('arrangedCircle'));
    var d;
    for(var x=25; x<400; x+=50) {
        for(var y=25; y<400; y+=50) {
            d = second.Shape.Circle(x, y, 20);
            d.fillColor = 'green';
        }
    }

    const third = paper.setup(document.getElementById('textCircle'))
    var f = third.Shape.Circle(200, 200, 80);
    f.fillColor = 'black';
    var text = new PointText(200, 200);
    text.justification = 'center';
    text.fillColor = 'white';
    text.fontSize = 20;
    text.content = 'Hello, World';
    
    const fourth = paper.setup(document.getElementById('clickCircle'));
    var tool = new Tool();  // Tool object provided by Paper.js to handle user input
    tool.onMouseDown = function(event) {
        var e = fourth.Shape.Circle(event.point.x, event.point.y, 20);
        e.fillColor = 'green';
    }

    paper.view.draw();
});