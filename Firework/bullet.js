class bullet {
  constructor(firework) {
    this.firework = firework;
    this.context = this.firework.context;
    this.x = Math.random() * WIDTH;
    this.y = Math.random() * HEIGHT / 2;

    this.color = Math.round(Math.random() * 255) + ", " +
                 Math.round(Math.random() * 255) + ", " +
                 Math.round(Math.random() * 255);
    this.particles = [];
    for (let i = 0; i < 10; i++){
      let bulletDeg = Math.PI / 5;
      let newParticle = new particle(this, bulletDeg * i);
      this.particles.push(newParticle);
    }
  }

  remove(){
    this.firework.bullets.splice(this.firework.bullets.indexOf(this), 1);
  }

  update(){
    if (this.particles.length == 0){
      this.remove();
    }
    this.particles.forEach( (particle) => particle.update());
  }
  draw(){
    this.particles.forEach( (particle) => particle.draw());
  }
}