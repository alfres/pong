Crafty.c('tbox', {
	init: function( ) {
		this.requires('2D, DOM, Mouse, Text'); 
		this.textFont({ size: '24px', family: 'Press Start 2P' })
        this.textColor('white')
		}
})

Crafty.c('pared', {
	init: function( ) {this.requires('2D, DOM, Color'); }
})

Crafty.c('diana', {
	init: function( ) {
		this.requires('pared');
        this.attr({x: Crafty.math.randomNumber(100, 400), y: Crafty.math.randomNumber(5, 500), w: 10, h: 30}).color('green')
this.color('grey')
		}
})

Crafty.c("barra", { 
init: function( ) {
	this.requires('2D, DOM, Text, Persist');
   this.attr({x: 0, y: 5, w: 1000, h: 60})
  this.textColor('white')
  this.textFont({ size: '36px', family: 'Press Start 2P' })
this.textAlign('center')

}
})

  Crafty.c('help',{
	  init: function( ) {
		  this.requires('tbox');
this.attr({x: 220, y: 240, w:580, h:426})
this.text('UP ARROW = paddle up DOWN ARROW = paddle down')
	  }
  })
  
  
Crafty.c("palas",{
init: function( ) {
	this.requires('pared, Keyboard');
  this.attr({x: 950, y: 300, w: 7, h: palsize})
  this.color('white')
 
}
})


Crafty.c('pelota',  {
   init: function( ) {
      this.requires('2D, DOM, pel, Collision, Motion');
	  var dir = Crafty.math.randomElementOfArray([0, 550])
      this.attr({x: Crafty.math.randomNumber(s2, s3), y: dir, w: 9, h: 9})
	  this.vx = sake
      this.vy = 200
      if(dir > 0){this.vy = this.vy * -1}
      this.checkHits('pared')


 this.onHit('lateral' , function(hitDatas) {this.vy = this.vy * -1; Crafty.audio.play("pip",1,0.6);})
 this.onHit('frontis', function(hitDatas) { onhitfrontis(this)})	
 this.onHit('fondo', function(hitDatas) { onhitfondo(this)})
 this.onHit('pala', function(hitDatas) { onhitpalas(this, Crafty("pala"), "pipr") })
 this.onHit('pala2', function(hitDatas) { onhitpalas(this, Crafty("pala2"), "pipl") })
 this.onHit('diana', function(hitDatas) { onhitdiana(this)})
	   
  },
  nivel: function(message) { this.message = message; }
});


Crafty.c("enter", {
	
	init: function( ) {
this.requires('Keyboard');
this.uniqueBind('KeyDown', function(e) {
    if (Crafty.s('Keyboard').isKeyDown('ENTER')){
		var l = this.message
if(l < 2) {filltextbox('life ' + fallos); Crafty.e("diana")} else{filltextbox(fallos2 + '  |  ' + fallos )}
  Crafty.e("Delay").delay(function() { Crafty.e('pelota').nivel(l) 
  }, 1000, 0)
  Crafty("help").each(function(i) { this.destroy() });
  Crafty("enter").each(function(i) { this.destroy() });
    }	
	})
	},
	
	
	nivel: function(message) { this.message = message; }
})