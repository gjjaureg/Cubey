class mouseSmiley extends Phaser.Scene{
    constructor(){
        super("mouseScene")
    }
    preload(){
        this.load.image("smileypic", "smileypic.png");
    }
    create(){
        document.getElementById('description').innerHTML = '<h2>mouseSmiley.js</h2>'
    }
    update(){
        var pointer = scene.input.activePointer;
        if (pointer.isDown){
            var touchX = pointer.x;
            var touchY = pointer.y;
        }
        var click = this.input.onMouseDown;
        if (click.isDown){
            "smileypic".visble = true
        }
        else {
            "smileypic".visible = false
        }
    }
}