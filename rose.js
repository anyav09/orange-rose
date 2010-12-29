ctx = null;

function main() {
	console.log("Calling main");
	var canvas = $("#main")[0];
	ctx = canvas.getContext('2d');
	
	startJourney(10,10);
}

function startJourney(x,y) {
	drawHero(x,y);
	setTimeout( function(){ startJourney(x+10, y+10); }, 1000);
}

function drawRect(r,g,b,x,y,w,h) {
	ctx.fillStyle = "rgb(" +r + "," +g+","+b+ ")";
    ctx.fillRect (x, y, w, h);
}

function drawHero(x,y) {
	drawRect(200, 0, 0, x, y, 50, 50);
}