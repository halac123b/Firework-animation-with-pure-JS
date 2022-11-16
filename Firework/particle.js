const PARTICLE_SIZE = 8;
const PARTICLE_CHANGE_SIZE = 0.1;
const PARTICLE_CHANGE_SPEED = 0.5;
const ACCELERATION = 0.15;

class particle {
  constructor(bullet, deg){
    this.bullet = bullet;
    this.deg = deg;
    this.context = this.bullet.context;
    this.color = this.bullet.color;

    this.x = this.bullet.x;
    this.y = this.bullet.y;
    this.size = PARTICLE_SIZE;
    this.speed = Math.random() * 4 + 10;
    this.speedX = 0;
    this.speedY = 0;
    this.fallSpeed = 0;

    this.dots = [];
  }

  update(){
    this.fallSpeed += ACCELERATION;

    this.speed -= PARTICLE_CHANGE_SPEED;
    if (this.speed < 0){
      this.speed = 0;
    }
    this.speedX = this.speed * Math.cos(this.deg);
    this.speedY = this.speed * Math.sin(this.deg) + this.fallSpeed;

    this.x += this.speedX;
    this.y += this.speedY;

    if(this.size > PARTICLE_CHANGE_SIZE){
      this.size -= PARTICLE_CHANGE_SIZE;
    }
    if (this.size > 0){
      this.dots.push({
        x: this.x,
        y: this.y,
        alpha: 1,
        size: this.size
      });
    }
    this.dots.forEach( (dot) => {
      dot.size -= 0.1;
      dot.alpha -= 0.05;
    });

    this.dots = this.dots.filter( (dot) => {
      return dot.size > 0;
    });
    if (this.dots.length == 0){
      this.remove();
    }
  }

  remove(){
    this.bullet.particles.splice(this.bullet.particles.indexOf(this), 1);
  }

  draw(){
    this.dots.forEach( (dot) => {
      this.context.fillStyle = "rgba(" + this.color + ", " + dot.alpha + ")";
      this.context.beginPath();
      this.context.arc(dot.x, dot.y, dot.size, 0, 2 * Math.PI);
      this.context.fill();
    });
  }
}