window.onload = function(){
	var game = new Phaser.Game(640,960,Phaser.AUTO,'',{
		preload:preload,
		create:create,
		update:update
	});

	function preload(){
		

		game.load.image("background","img/background.png");
		game.load.image("candy","img/candy.png");
		game.load.image("floor","img/floor.png");
		game.load.image("gameover","img/gameover.png");
		game.load.image("monster-iddle","img/monster-iddle.png");
		game.load.image("score-bg","img/score-bg.png");
		game.load.image("title","img/title.png");
	}

	function create(){
		var background = game.add.sprite(0,0,'background');
	}

	function update(){

	}
	
}