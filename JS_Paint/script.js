var color = "#000";
var painting = false;
var started = false;
var width_brush = 5;
var canvas = $("#canvas");
var cursorX, cursorY;
var endCursorX, endCursorY;
var restoreCanvasArray = [];
var restoreCanvasIndex = 0;
var radios = $('input[name=option]');
var clique = 0;

var ctx = canvas[0].getContext("2d");
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

canvas.mousedown(function(e) {
	for(var i = 0; i < radios.length; i++) {
		if(radios[i].checked) {
			painting = radios[i].value;
		}
	}
	cursorX = (e.pageX - this.offsetLeft);
	cursorY = (e.pageY - this.offsetTop);
	if(painting == "line" && clique < 2) {
		drawLine();
		clique++;
	}
	if(painting == "line" && clique == 2){
		started = false;
		painting = false;
		clique = 0;
	}
});

canvas.mouseup(function(e) {
	if(painting != 'line') {
		started = false;
		painting = false;
	}
});

canvas.mousemove(function(e) {
	if(painting == "drawing") {
		cursorX = (e.pageX - this.offsetLeft);
		cursorY = (e.pageY - this.offsetTop);
		drawLine();
	}
	if(painting == "gomme") {
		cursorX = (e.pageX - this.offsetLeft) - 20;
		cursorY = (e.pageY - this.offsetTop) - 20;
		drawLine();
	}
});

function drawLine() {
	if (!started) {
		ctx.beginPath();
		ctx.moveTo(cursorX, cursorY);
		started = true;
	} 
	else {
		if(painting == "drawing") {
			color = $('#color')[0].value;
			ctx.lineTo(cursorX, cursorY);
			ctx.strokeStyle = color;
			ctx.lineWidth = width_brush;
			ctx.stroke();
		}
		if(painting == "line") {
			color = $('#color')[0].value;
			ctx.strokeStyle = color;
			ctx.lineWidth = width_brush;
			ctx.lineTo(cursorX, cursorY);
			ctx.stroke();
		}
		if(painting == "gomme") {
			ctx.clearRect(cursorX, cursorY, width_brush, width_brush);
		}
	}
}

$("#largeurs_pinceau input").change(function() {
	if (!isNaN($(this).val())) {
		width_brush = $(this).val();
		$("#output").html($(this).val() + " pixels");
	}
});

// $("#save").click(function() {
// 	var canvas_tmp = document.getElementById("canvas");
// 	window.location = canvas_tmp.toDataURL("image/png");
// });
