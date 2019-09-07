window.onload = function(){
	var game = new Phaser.Game(640,960,Phaser.AUTO,'',{
			preload:preload,
			create:create,
			update:update
		}),
		background,
		player,
		elapsed = 0,
		candies,
		score_bg,
		floor;

	function preload(){
		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		game.scale.pageAlignHorizontally = true;
		game.scale.pageAlignVertically = true;

		game.load.image("background","img/background.png");
		game.load.spritesheet("candy","img/candy.png",82,98);
		game.load.image("floor","img/floor.png");
		game.load.image("gameover","img/gameover.png");
		game.load.spritesheet("monster-idle","img/monster-idle.png",103,131);
		game.load.image("score-bg","img/score-bg.png");
		game.load.image("title","img/title.png");
	}

	function create(){
		game.physics.startSystem(Phaser.Physics.ARCADE);
		game.physics.arcade.gravity.y = 800;
		background = game.add.sprite(0,0,'background');
		floor = game.add.sprite(0,0,'floor');
		floor.y = game.height - floor.height;
		score_bg = game.add.sprite(0,0,'score-bg');
		player = game.add.sprite(0,0,'monster-idle');
		player.x = game.world.centerX;

		game.physics.arcade.enable(floor);

		player.animations.add('idle',
				[0,1,2,3,4,5,6,7,8,9,10,11,12],10,true);
		player.play('idle');
		player.anchor.setTo(0.5);
		game.physics.arcade.enable(player);
		player.body.collideWorldBounds = true;
		floor.body.immovable = true;
		floor.body.allowGravity = false;
		floor.body.setSize(floor.width,floor.height,0,80);
		candies = game.add.group();
		keys = game.input.keyboard.createCursorKeys();
	}

	function update(){
		game.physics.arcade.collide(player,floor);
		player.body.velocity.x = 0;
		if(keys.left.isDown){
			player.body.velocity.x = -200;
			player.scale.setTo(-1,1);
		}
		if(keys.right.isDown){
			player.body.velocity.x = 200;		
			player.scale.setTo(1);	
		}
		elapsed+=game.time.elapsed;
		if(elapsed>=3000){
			elapsed = 0;
			var candy = game.add.sprite(0,0,'candy');
			candy.anchor.setTo(0.5);
			candy.frame = game.rnd.integerInRange(1,5);
			candy.x = game.rnd.realInRange(candy.width*0.5,game.width - (candy.width*0.5));
			candy.checkWorldBounds = true;
			candy.onOutOfBoundsKill = true;
			candy.events.onOutOfBounds.add(function(){
				console.log("MORI GAAAA");
			});
			candies.add(candy);
			game.physics.arcade.enable(candy);
		}
		game.physics.arcade.overlap(player,candies,killCandy,null);
	}

	function killCandy(sprite1,sprite2){
		console.log("collide .v");
	}
	
}