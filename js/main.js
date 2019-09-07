window.onload = function(){
	var game = new Phaser.Game(640,960,Phaser.AUTO,'',{
			preload:preload,
			create:create,
			update:update
		}),
		background,
		score_bg,
		floor;

	function preload(){
		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		game.scale.pageAlignHorizontally = true;
		game.scale.pageAlignVertically = true;

		game.load.image("background","img/background.png");
		game.load.image("candy","img/candy.png");
		game.load.image("floor","img/floor.png");
		game.load.image("gameover","img/gameover.png");
		game.load.image("monster-iddle","img/monster-iddle.png");
		game.load.image("score-bg","img/score-bg.png");
		game.load.image("title","img/title.png");
	}

	function create(){
		background = game.add.sprite(0,0,'background');
		floor = game.add.sprite(0,0,'floor');
		floor.y = game.height - floor.height;
		score_bg = game.add.sprite(0,0,'score-bg');

	}

	function update(){

	}
	
}