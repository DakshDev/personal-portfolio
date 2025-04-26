const animated_particle_bg = document.getElementById("animated_particle_bg");
let lastPaintTime = 0;
let speed = 2;

function background_particle_animation(){

    let createParticleOne = `<span class="bg_particles bg-text_two_clr h-[1px] w-[3px] inline-block rounded-full absolute"></span>`;
    let createParticleTwo = `<span class="bg_particles bg-text_two_clr h-[3px] w-[3px] inline-block rounded-full absolute"></span>`;
    let createParticleThree = `<span class="bg_particles bg-text_two_clr h-[5px] w-[1px] inline-block rounded-full absolute"></span>`;
    let createParticleFour = `<span class="bg_particles bg-text_two_clr h-[3px] w-[1px] inline-block rounded-full absolute"></span>`;


    let max_width = document.getElementById("animated_particle_bg").clientWidth;
    let max_height = document.getElementById("animated_particle_bg").clientHeight / 10;
    

    function display_particles(){

        
        class Display{
            constructor(html){
                this.html = html;
            }
            
            doDisplay(){
                let randomPosX = Math.random() * (max_width - 0) + 0;
                let randomPosY = Math.random() * (max_height - 0) + 0;
                
                
                animated_particle_bg.insertAdjacentHTML("beforeend", this.html)
                animated_particle_bg.lastElementChild.style.cssText = `transform: translateX(${randomPosX}px) translateY(${randomPosY}px)`;
            }
        }
        
        new Display(createParticleOne).doDisplay();
        new Display(createParticleTwo).doDisplay();
        new Display(createParticleThree).doDisplay();
        new Display(createParticleFour).doDisplay();
        
        // Animation for backgroung particles
        gsap.to("#animated_particle_bg span",{
            y: `${document.body.clientHeight * 2}px`,
            duration: 500,
        })

    }




    // FPS
    function main(ctime){
        requestAnimationFrame(main)
        if((ctime - lastPaintTime)/1000 < speed) return;
        lastPaintTime = ctime;
        display_particles();
        // Remove Particle when they cross the box
        Array.from(animated_particle_bg.children).forEach(e => { 
            const computedStyle = window.getComputedStyle(e)

            const translateYMatch = computedStyle.transform.match(/matrix\([^\)]+\)/);
            if (translateYMatch) {
                
            const values = translateYMatch[0].match(/-?\d+(\.\d+)?/g);
            const translateYValue = parseFloat(values[5]);
                if (translateYValue > animated_particle_bg.clientHeight - 50) {
                    animated_particle_bg.removeChild(e)
                }
            }
        })
    }
    requestAnimationFrame(main)

    

}
background_particle_animation();