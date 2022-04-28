const canvas = document.getElementById('canvas2');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const particleArray =[];
let hue = 0;

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
});

const mouse = {
    x: null,
    y: null,
}
canvas.addEventListener('click', function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    for (let i=0; i < 20 ;  i++){
        particleArray.push(new Particle());
    }
})
canvas.addEventListener('mousemove', function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    for (let i=0; i < 10 ;  i++){
        particleArray.push(new Particle());
    }
})


class Particle {
    constructor() {
        this.x = mouse.x;
        this.y = mouse.y-150;  // to match with cuesor
        //this.x = Math.random() * canvas.width;
        //this.y = Math.random() * canvas.height;
        this.size = Math.random() * 8 +1 ;
        this.speedX = Math.random() * 3 -1.5;
        this.speedY = Math.random() * 3 -1.5;
        this.color = 'hsl(' + hue + ', 100%, 50%)';
    }
    update(){
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size> 0.2) this.size-=0.1;      // the elemEnt get shrink 

    }
    draw(){
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill(); 
    }
}

function handleParticles(){
    for (let i = 0; i<particleArray.length; i++){
        particleArray[i].update();
        particleArray[i].draw();
        if (particleArray[i].size <= 0.3){
            particleArray.splice(i, 1);
            i--;
        }
        console.log(particleArray.length)
    }
}
console.log("goblok");
function animate(){
    ctx.clearRect(0,0, canvas.width, canvas.height);   // to clear the old rect
    //ctx.fillStyle = 'rgba(0,0,0,0.02)';                // the rect fadding awy slowly
    //ctx.fillRect(0,0, canvas.width, canvas.height);
    handleParticles();
    hue++;
    requestAnimationFrame(animate);
}
animate();