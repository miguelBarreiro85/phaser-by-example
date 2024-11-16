export default class Laser extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, type = "right") {
      super(scene, x, y, "laser");
      this.name = "laser";
      this.scene = scene;
      this.scene.physics.add.existing(this);
      this.scene.physics.world.enable(this);
      this.body.setAllowGravity(false);
      this.scene.add.existing(this);
      this.direction = type === "right" ? 1 : -1;
      this.init();
    }
  
  
    /*
    As we did with the Bat. Inits the animations for the zombies and starts the movement. We also add a listener for the `animationcomplete` event.
    */
    init() {
      this.body.setVelocityX(this.direction * 500);
      this.flipX = this.direction < 0;
    }
  
    /*
    This kills the zombie "nicely" by playing the death animation.
    */
    death() {
      this.dead = true;
      this.body.enable = false;
    }
  }
  