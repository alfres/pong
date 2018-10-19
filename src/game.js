var  fallos = 0, fallos2 = 0, sake = 500, s2 = 100, s3 = 400, palsize = 80

Game = {
	
 load:function(){
 

  Crafty.init(1000,560, document.getElementById('marco'));
   Crafty.background('black');
  Crafty.sprite("img/raj.jpg", {raj:[0,0,300,168]})
  Crafty.sprite("img/duo.jpg", {duo:[0,0,620,350]}); 
 Crafty.sprite("img/ic.png", {ic:[0,0,290,174]});
  Crafty.audio.add("pip", "sounds/pips.mp3");
  Crafty.audio.add("pipl", "sounds/pipl.mp3");
  Crafty.audio.add("pipr", "sounds/pipr.mp3");
  Crafty.audio.add("pop", "sounds/pop.mp3");
  Crafty.audio.add("pop2", "sounds/pop2.mp3");
  Crafty.sprite("img/pel.png", {pel:[0,0,50,50]})

  Crafty.scene("portada")
 
}

}

function starting(lev){
Crafty.e("frontis, pared").attr({x: 0, y: 0, w: 1, h: 560})
Crafty.e("pared1, pared, lateral").attr({x: 0, y: 0, w: 1000, h: 1})
Crafty.e("pared2, pared, lateral").attr({x: 0, y: 560, w: 1000, h: 1})
Crafty.e("fondo, pared").attr({x: 999, y: 0, w: 1, h: 560})

Crafty.e("pala, palas").bind("UpdateFrame", function(eventData) {
   if (Crafty.s('Keyboard').isKeyDown('UP_ARROW')){
   if( this.y > 0){this.y = this.y - 10;} 
   } else if (Crafty.s('Keyboard').isKeyDown('DOWN_ARROW')){
    if( this.y < (560 - Crafty('pala').h)){this.y = this.y + 10;} 
   }
  })

filltextbox('press ENTER key to play ')  
 document.getElementById('marco').style.cursor = 'none'
  Crafty.e("enter").nivel(lev)	
	
}

function onhitfrontis(p){
	
	   if(p.message < 2){
     
	   p.vx = p.vx * -1
	   Crafty.audio.play("pipl",1,1);
	   
} else {
	     Crafty.audio.play("pop2",1,1);
	  fallos = fallos +1
if(fallos > 5){
	Crafty("pelota").each(function(i) { this.destroy() });
	Crafty.scene("gameover");

	return}	  
	  filltextbox(fallos2 + '  |  ' + fallos )
	  sake = 500
	  s2 = 100
	  s3 = 400
	  
	  Crafty.e("Delay").delay(function() {
	Crafty("pelota").each(function(i) { this.destroy() });
  Crafty.e('pelota').nivel(p.message)
}, 1000, 0);
}		
	

}

function onhitfondo(p){
	Crafty("pelota").each(function(i) { this.destroy() });
      Crafty.audio.play("pop",1,1);
	    if(p.message < 2){
	  fallos = fallos -5
	  if(fallos < 1){
		  Crafty("pelota").each(function(i) { this.destroy() });
				Crafty.scene("gameover");

	return}	
	   filltextbox('life ' + fallos )
		} else{
			Crafty("pelota").each(function(i) { this.destroy() });
		fallos2 = fallos2 +1 
		if(fallos2 > 5){
			Crafty("pelota").each(function(i) { this.destroy() });
				Crafty.scene("gameover");

	return}	
	  filltextbox(fallos2 + '  |  ' + fallos )
	  sake = -500
	  s2 = 600
	  s3 = 900
		}			
Crafty.e("Delay").delay(function() {
	
	Crafty("pelota").each(function(i) { this.destroy() });
  Crafty.e('pelota').nivel(p.message)
}, 1000, 0);	
}

function onhitpalas(p, pa, pi){
  
  if (Crafty.s('Keyboard').isKeyDown('UP_ARROW') && pa.y > 0){ p.vy = p.vy +40
} else if (Crafty.s('Keyboard').isKeyDown('DOWN_ARROW') && pa.y < (550 - pa.h)){ p.vy = p.vy -40
}
	   p.vx = p.vx * -1
	   Crafty.audio.play(pi,1,1);	
	
}

function onhitdiana(p){
	
	p.vx = p.vx * -1
	   Crafty.audio.play("pipl",1,1);
	    fallos = fallos + 1 
		filltextbox('life ' + fallos)
	  
	  Crafty("diana").each(function(i) {  this.destroy()});
	  Crafty.e("Delay").delay(function() { Crafty.e("diana")},500,0)
	
}

function filltextbox(t){
Crafty("barra").each(function(i) { this.text(t) });	
}