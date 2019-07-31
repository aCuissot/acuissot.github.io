var c = document.getElementById("myCanvas");
var clife = document.getElementById("lifeCanvas");
var ctx = c.getContext("2d");
var ctxLife = clife.getContext("2d");
var niveau = 1;
var corbeille_img = document.getElementById("pomme");//??
var pomme_img = document.getElementById("panier");//?????
var papppppppp = document.getElementById("papppppppp");//?????

var corbeille;
var time = 1000;
var pommes_par_niveau;
var vitesse_par_niveau = 1;
var pommes;
var life;


function Apple(x, y, speed, intervalTime) {
  this.x = x;
  this.y = y;
  this.h = 50;
  this.w = 50;
  this.speed = speed;
  this.intervalTime = intervalTime;
}

function aaaaaaaaaaa(){
	pomme_img = papppppppp;
}

function init() {
  c.width = 500;
  c.height = 500;
  clife.width = 25;
  clife.height = 500;
  niveau = 1;
  corbeille = {
	  x : c.width/2 - 25,
	  y : c.height/2 - 25,
	  w : 50,
	  h : 50,
	  score : 0
  };
	life = 10;
  
  pommes_par_niveau = 5;
  vitesse_par_niveau = 1;
  pommes = []
  c.addEventListener("mousemove", bougerCorbeille);
  setInterval(animer, 20);
  ajoutPommes();

}

function animer() {
	if (corbeille.score > -10 && life>0){
		ctx.beginPath();
		ctx.clearRect(0, 0, c.width, c.width);
		ctx.drawImage(corbeille_img, corbeille.x, corbeille.y);
		ctx.font = "30px Roboto";
		ctx.fillText("Niveau : " + niveau, 10, 30);
		ctx.fillText(corbeille.score, 450, 30)
		ctxLife.clearRect(0,0,clife.width, clife.height);
		ctxLife.rect(0, life*clife.height/10,clife.width, clife.height, life*clife.height/10);
		ctxLife.fill();
		for (var i=0; i<pommes.length; i++) {

		  var pomme = pommes[i];
		  if (collision(pomme)) {
			  corbeille.score +=1 ;
			  initPomme(i);
		  }
		  
		  if (pomme.y>0){
		  ctx.drawImage(pomme_img, pomme.x, pomme.y);
		  }
		  if (Date.now() >= pomme.intervalTime) {
			  pomme.y+=pomme.speed;
			  incrementerDifficulte();
			if (pomme.y > c.height) {
				corbeille.score -=2;
				life -=1;
				initPomme(i);
			}
		  }
		}
	} else {
		ctx.clearRect(0, 0, c.width, c.width);
		ctx.fillText("GAME OVER", 10, 100);
		ctxLife.rect(0, 0,clife.width, clife.height);
		ctxLife.fill();

	}
}

function bougerCorbeille(e){
  corbeille.x = e.x - 50;
  corbeille.y = e.y - 50;
}

function initPomme(index){
  var x = Math.floor(Math.random() * c.width);
  pommes[index] = new Apple(x-pomme_img.width, -pomme_img.height, niveau * vitesse_par_niveau* 1.2, Date.now() + Math.random() * time);
}

function ajoutPommes(){
    for(var i = 0; i < pommes_par_niveau * niveau; i++) {
        initPomme(i);
    }
}

function collision(pomme) {
	if (pomme.y + pomme.h/2 < corbeille.y - corbeille.h/2) {
    return false;
	} else if (pomme.y - pomme.h/2 > corbeille.y + corbeille.h/2) {
    return false;
	} else if (pomme.x + pomme.w/2 < corbeille.x - corbeille.w/2) {
    return false;
	} else if(pomme.x - pomme.w/2 > corbeille.x + corbeille.w/2) {
    return false;
	}
	return true;   
}

function incrementerDifficulte() {
	niveau = Math.max(niveau, Math.ceil(corbeille.score / (niveau*niveau+5)));		
}