
<!DOCTYPE HTML>
<html>

<head>
	<style>
		img {
			display:none;
		}
	</style>
</head>

<body onload="init()">
	
	<canvas id="myCanvas" style="border:1px solid black;">
    Votre navigateur ne supporte pas canvas.
	</canvas>
	<img id="panier" width="30" height="30" src="pomme.png" alt="Apple">
	<img id="pomme" width="40" height="40" src="corbeille.png" alt="PANIER">
	<br>
	<button onclick="init()">Restart</button>
	<button onclick="init()">AAAAAAAAA</button>
  <script type="text/javascript" src="jaaj.js"></script>

	<script type="text/javascript">
	


	/*
	var ball;
	var balls =[];
	balls.push(ball);
	var score = 0;
	var niveau = 1; // le niveau
	var newPommmmmmmmmmmmmmmmmmmmmmmmme = 0;
	var newPommmmmmmmmmmmmmmmmmmmmmmmmeSeuil = 50;
	var pomme = document.getElementById("pomme") ; // image de la corbeille
	var corbeille = document.getElementById("panier") ; 
	function start() {
		  balls.push(new component(15, 15));
		  bouncingArea.start();
	}

	var bouncingArea = {
		  canvas : document.getElementById("myCanvas"),
		  start : function() {
		      this.canvas.width = 500;
		      this.canvas.height = 500;
		      this.context = this.canvas.getContext("2d");
		      this.interval = setInterval(updateArea, 20);        
		  },
		  stop : function() {
		      clearInterval(this.interval);
		  },    
		  clear : function() {
		      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		  }
	}

	function component(x, y) {
		  this.x = x;
		  this.y = y;
		  var speed = niveau;   

		  this.speedY = speed;    
		  this.update = function() {
		      ctx = bouncingArea.context;
          ctx.drawImage(pomme, this.x, this.y);
		  }
		  this.newPos = function() {
		      //this.x += this.speedX;
		      this.y += this.speedY;
		      this.hitFace();
		  }

		  this.hitFace = function() {
		      var areabottom = bouncingArea.canvas.height;

		      if (this.y > areabottom) {
		  			//this.delete;
		  			score-=2;
		  			
		      }

		  }
	}

	function updateArea() {
			newPommmmmmmmmmmmmmmmmmmmmmmmme +=1;
			if (newPommmmmmmmmmmmmmmmmmmmmmmmme>newPommmmmmmmmmmmmmmmmmmmmmmmmeSeuil){
				//ball = new component(Math.floor(Math.random() * Math.floor(460)) + 20, 15);
				newPommmmmmmmmmmmmmmmmmmmmmmmme = 0;
				newPommmmmmmmmmmmmmmmmmmmmmmmmeSeuil = Math.floor(Math.random() * Math.floor(100-2*niveau));
				balls.push(new component(Math.floor(Math.random() * Math.floor(460)) + 20, 15));
			}
			bouncingArea.clear();
			for (var i=0; i < balls.length; ++i){
				console.log(balls[i]);
				balls[i].newPos();
				balls[i].update();
			}*/
			/*
		  balls.forEach(function(item, index, array) {
  			item.newPos();
			});
		  balls.forEach(function(item, index, array) {
  			item.update();
			});*/
			//ball.newPos();
			//ball.update();
	/*}
	*/

	</script>
	</body>
</html>

