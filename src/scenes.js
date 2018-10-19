Crafty.defineScene("portada", function() {
	//Crafty.log("delay finished"); 
//Crafty.timer.FPS(20)

Crafty.e("2D, DOM, raj, Mouse").attr({x:500, y:130, w:225, h:126}).uniqueBind('Click', function(MouseEvent){Crafty.scene("playing")})
Crafty.e("2D, DOM, raj, Mouse").attr({x:500, y:295, w:100, h:56}).uniqueBind('Click', function(MouseEvent){Crafty.scene("playing2")})
Crafty.e("2D, DOM, raj, Mouse").attr({x:650, y:295, w:100, h:56}).uniqueBind('Click', function(MouseEvent){Crafty.scene("playing2")})
Crafty.e("2D, DOM, duo, Mouse").attr({x:500, y:390, w:500, h:295}).uniqueBind('Click', function(MouseEvent){Crafty.scene("playing3")})

Crafty.e('tbox')
.attr({x: 220, y: 140, w:225, h:226})
.text('1 player 1 paddle')
.uniqueBind('Click', function(MouseEvent){Crafty.scene("playing")})

Crafty.e('tbox')
.attr({x: 220, y: 290, w:225, h:126})
.text('1 player 2 paddles')
.uniqueBind('Click', function(MouseEvent){Crafty.scene("playing2")})

Crafty.e('tbox')
.attr({x: 220, y: 440, w:225, h:126})
.text('2 players')
.uniqueBind('Click', function(MouseEvent){Crafty.scene("playing3")})
Crafty("barra").each(function(i) { this.destroy() });
Crafty.e("barra").text('select game mode' ) 
});
 

Crafty.defineScene("playing", function() {
  
  starting(1)
  fallos = 10
  filltextbox('press ENTER key to start')
Crafty.e('help')
});

Crafty.defineScene("playing2", function() {
fallos = 0
fallos2 = 0
  Crafty.e("pala2, palas").attr({x: 50, y: 300, w: 7, h: palsize})
 
  .bind("UpdateFrame", function(eventData) {
   if (Crafty.s('Keyboard').isKeyDown('UP_ARROW')){
   if( this.y > 0){this.y = this.y - 10;} 
   } else if (Crafty.s('Keyboard').isKeyDown('DOWN_ARROW')){
    if( this.y < (560 - Crafty('pala').h)){this.y = this.y + 10;} 
   }
  })
  starting(2)
	 filltextbox('press ENTER key to start')
	   Crafty.e('help')

 })
Crafty.defineScene("playing3", function() {
	fallos = 0
fallos2 = 0
  Crafty.e("pala2, palas").attr({x: 50, y: 300, w: 7, h: palsize})
 
  .bind("UpdateFrame", function(eventData) {
   if (Crafty.s('Keyboard').isKeyDown('Q')){
   if( this.y > 0){this.y = this.y - 10;} 
   } else if (Crafty.s('Keyboard').isKeyDown('A')){
    if( this.y < (560 - Crafty('pala').h)){this.y = this.y + 10;} 
   }
  })
  starting(3)
	 filltextbox('press ENTER key to start')
	  Crafty.e('help')
	  .text('UP ARROW =  rigth paddle up DOWN ARROW = rigth paddle down Q key =  left paddle up  ------- A key = left paddle down')
	  .attr({x: 120, y: 240, w:720, h:426})
})

Crafty.defineScene("gameover", function() {
	document.getElementById('marco').style.cursor = 'initial'
Crafty.e("2D, DOM, ic, Mouse").attr({x:100, y:60, w:800, h:480}).uniqueBind('Click', function(MouseEvent){Crafty.scene("portada")})	
filltextbox(''  )	
})
