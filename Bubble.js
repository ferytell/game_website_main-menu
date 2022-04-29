

//-------------------------------------------------------------------------------

  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const particleArray =[];
  
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
  })
  canvas.addEventListener('mousemove', function(event){
      mouse.x = event.x;
      mouse.y = event.y;
  })
  
  
  class Particle {
      constructor() {
          // this.x = mouse.x;
          // this.y = mouse.y;
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
          this.size = Math.random() * 40 +1 ;
          this.speedX = Math.random() * 3 -1.5;
          this.speedY = Math.random() * 3 -1.5;
      }
      update(){
          this.x += this.speedX;
          this.y += this.speedY;
      }
      draw(){
          ctx.fillStyle = 'red';
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill(); 
      }
  }
  
  function init(){
      for (let i=0; i<100; i++){
          particleArray.push(new Particle());
      }
  }
  init();
  
  
  function handleParticles(){
      for (let i = 0; i<100; i++){
          particleArray[i].update();
          particleArray[i].draw();
          //console.log(y);
      }
  }
  function animate(){
      ctx.clearRect(0,0, canvas.width, canvas.height);   // to clear the old rect
      handleParticles();
      requestAnimationFrame(animate);
  }
  animate();