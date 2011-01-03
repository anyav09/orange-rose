ctx = null;

//world variables

hero = {x:10, y:10};
villain = {x:700, y:10, dead:false};


function main() {
	var canvas = $("#main")[0];
	ctx = canvas.getContext('2d');
	
	$('body').keydown(function(e){
		console.log( e.keyCode );
		if(e.keyCode == 37) {
		//left arrow
			hero.x = hero.x - 5;
		}
		if(e.keyCode == 39) {
		//right arrow
			hero.x = hero.x + 5;
		}
	});
	
	setInterval(function(){
		updateWorld();
		drawWorld();
	},16);
}

function updateWorld(){
	
	if( villain.x - hero.x <= 50 ) {
		villain.dead = true;
	}
}

function drawWorld(){
	clearCanvas();
	drawHero(hero.x,hero.y);
	if(!villain.dead) {
		drawVillain(villain.x,villain.y);
	}
}

function drawRect(r,g,b,x,y,w,h) {
	ctx.fillStyle = "rgb(" +r + "," +g+","+b+ ")";
    ctx.fillRect (x, y, w, h);
}

function drawHero(x,y) {
	drawRect(200, 0, 0, x, y, 50, 50);
}

function drawVillain(x,y) {
	drawRect(0, 0, 0, x, y, 50, 50);
}

function clearCanvas() {
	ctx.clearRect(0,0,$("#main")[0].width,$("#main")[0].height);
}