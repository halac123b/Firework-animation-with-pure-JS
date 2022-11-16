const WIDTH = 1400;
const HEIGHT = 800;

class firework {
  constructor(){
    this.canvas = document.createElement("canvas");
    this.context = this.canvas.getContext("2d");
    this.canvas.width = WIDTH;
    this.canvas.height = HEIGHT;
    document.body.appendChild(this.canvas);

    this.bullets = [];

    setInterval( () => {
      let newBullet = new bullet(this);
      this.bullets.push(newBullet);
    }, 1000);
    this.loop();
  }

  loop(){
    this.update();
    this.draw();

    setTimeout(() => this.loop(), 20);
  }

  update(){
    this.bullets.forEach( (bullet) => bullet.update());
  }

  clearScreen(){
    this.context.fillStyle = "#000000";
    this.context.fillRect(0, 0, WIDTH, HEIGHT);
  }

  draw(){
    this.clearScreen();
    this.bullets.forEach( (bullet) => bullet.draw());
  }
}

var f = new firework();