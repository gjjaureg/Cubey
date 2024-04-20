class MouseSmiley extends Phaser.Scene {
    constructor(){
        super("mouseSmiley");
        this.my = {sprite: {}};

    }

    preload(){
        // Assets from Kenny Assets pack "Shape Characters"
        // https://kenney.nl/assets/shape-characters
        this.load.setPath("./assets/");
        // body
        this.load.image("yellowBody", "yellow_body_squircle.png");
        // smiles
        this.load.image("smile", "face_a.png");
        this.load.image("smileDimple", "face_c.png");
        // hands
        this.load.image("handOpen", "hand_yellow_open.png");
    }

    create(){
        let my = this.my;   // create an alias to this.my for readability

        // update instruction text
        document.getElementById('description').innerHTML = '<h2>MouseSmiley.js</h2>'


    }

    update(){
        var pointer = this.input.activePointer;
        if (pointer.isDown) {
            this.bodyX = pointer.x;
            this.bodyY = pointer.y;
            this.smileX = pointer.x;
            this.smileY = pointer.y;
            this.add.sprite(this.bodyX, this.bodyY, "yellowBody");
            this.add.sprite(this.smileX, this.smileY, "smile");
        }

    }
}

