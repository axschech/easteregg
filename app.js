var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
        preload: preload, create: create, update: firstSceneUpdate
    });

    function preload() {
        game.load.image('sky', 'assets/sky.png');
        game.load.image('logo', 'assets/logo.png');
        game.load.image('sublogo', 'assets/sublogo.png');

        game.load.image('player1', 'assets/player1.png')
    }

    function create() {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.add.sprite(0, 0, 'sky');
        this.logo = game.add.sprite(225, 0, 'logo');

        game.add.tween(this.logo).to( { y: 100 }, 2400, Phaser.Easing.Bounce.Out, true);

        game.time.events.add(
            Phaser.Timer.SECOND * 2,
            function () {
                this.sublogo = game.add.sprite(100, 0, 'sublogo');
                this.tween = game.add.tween(
                    this.sublogo
                ).to( { y: 300 }, 2400, Phaser.Easing.Bounce.Out, true);
                this.tween.onComplete.add(function () {
                     game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).onDown.add(function () {
                        this.logo.destroy();
                        this.sublogo.destroy();
                    }, this);
                }, this);
            },
            this
        );
    }

    function firstSceneUpdate() {

    }

    function secondSceneUpdate() {

    }

    function postLogosSetUp() {

    }
