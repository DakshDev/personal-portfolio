const blury_bg = document.getElementById("blury_bg");
const menuBar = document.querySelector("[menuBar]");
const menuBox_li = document.querySelectorAll("#menuBox li");
const menuBox_a = document.querySelectorAll("#menuBox a");
let menu_flag = true;




// PAGE LOADER
window.addEventListener("DOMContentLoaded", (e) => {
    pageSectionAnimation();
    setTimeout(() => {
        let loaderBox = document.getElementById("loader_box");
        gsap.to(loaderBox.children, {
            opacity: 0,
            scale: 0.5,
            duration: 1,
        })
        gsap.to(loaderBox, {
            opacity: 0,
            duration: 1,
        })

    setTimeout(() => {
        loaderBox.innerHTML = "";
        loaderBox.style.display = "none";
    },1500)
    }, 500)
});







// nav box open and close animation triggered by bar btn
(()=>{

// Default Style
gsap.to("#menuBox",{
    borderRadius: "100%",
});
gsap.to("#menuBox div",{
    opacity: 0,
    duration: 0.2,
});
blury_bg.style.display = "hidden";





// Blury Background Event
blury_bg.addEventListener("click",()=>{
    gsap.to("#menuBox div",{
        opacity: 0,
        duration: 0.5,
    })
    gsap.to("#menuBox",{
        x: "600px",
        borderRadius: "100%",
        duration: 0.75,
    });
    menu_flag = true;
    blury_bg.style.display = "none";
})






// Button Event
menuBar.addEventListener("click",()=>{
    conditionCheck();
});
menuBox_li.forEach(e => {
    e.addEventListener("click", ()=>{
        conditionCheck();
    });
})
menuBox_a.forEach(e => {
    e.addEventListener("click", ()=>{
        conditionCheck();
    });
})


function conditionCheck(){
    if(menu_flag){
        gsap.to("#menuBox",{
            x: 0,
            borderRadius: 0,
            duration: 0.75,
        });
        gsap.to("#menuBox div",{
            opacity: 1,
            duration: 0.5,
        });
        menu_flag = false;
        blury_bg.style.display = "block";
    }else{
        gsap.to("#menuBox div",{
            opacity: 0,
            duration: 0.5,
        })
        gsap.to("#menuBox",{
            x: "600px",
            borderRadius: "100%",
            duration: 0.75,
        });
        menu_flag = true;
        blury_bg.style.display = "none";
    }
}

})();







// Span Animation opacity and bottom to up
class SplitText {
    constructor (node) {
        this.node = node;
    }

    split(){
        let nodeElm = document.querySelector(`${this.node}`);
        nodeElm.style.cssText += "display: flex; flex-wrap: wrap; gap: 0px 5px";
        let splitNodes = nodeElm.innerText.split(" ");  
        nodeElm.innerHTML = "";
        splitNodes.forEach((char) => {
            const span = document.createElement("span");
            const br = document.createElement("br");
            span.textContent = char;
            nodeElm.appendChild(span);
        });
    }
}


// Page Section animattion by scroll triggered
const pageSectionAnimation = () => {
    let page1_tl = gsap.timeline();
    // page 1
    page1_tl.from("[page1_animation] h2", {
        delay: 1.5,
        y: "25px",
        transform: `rotateZ(5deg)`,
        opacity: 0,
        duration: 0.6,
        stagger: 0.3,
    });
    new SplitText("[page1_animation] p", ).split();
    page1_tl.from("[page1_animation] p span", {
        x: "10px",
        y: "10px",
        opacity: 0,
        stagger: 0.08,
        duration: 0.4,
    });
    document.querySelectorAll("[page1_animation_button_box] .primary-button")
    .forEach(e => e.style.cssText += "opacity: 0; scale: 0.8; transform: translateY(10px)");
    page1_tl.to("[page1_animation_button_box] .primary-button", {
        y: "0px",
        opacity: 1,
        scale: 1,
        stagger: 0.2,
        duration: 0.6,
    });
    page1_tl.from("[page1_animation_2] > div", {
        x: "25px",
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
    });
    page1_tl.to("#page1 [page1_animation_menuBar]", {
        opacity: 1,
    });


    // page 2
    gsap.from("#about span.common_heading", {
        opacity: 0,
        top: "50px",
        scrollTrigger: {
            trigger: "#about",
            // markers: true,
            start: 'top 50%',
            end: 'top 25%',
            scrub: 1,
        }
    });
    gsap.from("#about [about_animation_left]",{
        opacity: 0,
        y: "10px",
        stagger: 0.5,
        scrollTrigger: {
            trigger: "#about #about_animation_left_box",
            // markers: true,
            start: 'top 60%',
            end: 'top 40%',
            scrub: 1,
        }
    });
    gsap.from("#about #about_animation_right_box [about_animation_right]",{
        opacity: 0,
        y: "10px",
        stagger: 0.5,
        scrollTrigger: {
            trigger: "#about #about_animation_right_box",
            // markers: true,
            start: 'top 60%',
            end: 'top 40%',
            scrub: 1,
        }
    });
    gsap.from("#about [about_animation_middle_line]", {
        opacity: 0,
        scrollTrigger: {
            trigger: "#about #about_animation_right_box",
            // markers: true,
            start: 'top 60%',
            end: 'top 40%',
            scrub: 1,
        }
    });


    // page 3
    gsap.from("#stack span.common_heading", {
        opacity: 0,
        top: "50px",
        scrollTrigger: {
            trigger: "#stack",
            // markers: true,
            start: 'top 50%',
            end: 'top 25%',
            scrub: 1,
        }
    });
    gsap.from("#stack [stack_animation]", {
        opacity: 0,
        scrollTrigger: {
            trigger: "#stack",
            // markers: true,
            start: 'top 25%',
            end: 'top 10%',
            scrub: 1,
        }
    });


    // page 4
    gsap.to("#page4 h1",{
        x: "-80%",
        color: "#6c63ff",
        scrollTrigger: {
            trigger: "#page4",
            // markers: true,
            start: 'top 0%',
            end: 'top -200%',
            scrub: 2,
            pin: true,
        }
    });


    // page 5
    gsap.from(document.querySelector("[page5_right_arrow]").children,{
        y: "25px",
        opacity: 0,
        scrollTrigger: {
            trigger: "[page5_right_arrow]",
            // markers: true,
            start: 'top 60%',
            end: 'top 40%',
            scrub: 1,
        }
    });
    gsap.from(document.querySelector("[page5_projects]"),{
        opacity: 0,
        scrollTrigger: {
            trigger: "[page5_projects]",
            // markers: true,
            start: 'top 60%',
            end: 'top 40%',
            scrub: 1,
        }
    }); 


    // page 6 = contact
    gsap.from("#contact span.common_heading", {
        opacity: 0,
        top: "50px",
        scrollTrigger: {
            trigger: "#contact",
            // markers: true,
            start: 'top 50%',
            end: 'top 25%',
            scrub: 1,
        }
    });
    gsap.from(document.querySelector("#contact [page6_animation]").children, {
        y: "50px",
        opacity: 0,
        stagger: 0.5,
        scrollTrigger: {
            trigger: "#contact [page6_animation]",
            // markers: true,
            start: 'top 60%',
            end: 'top 40%',
            scrub: 1,
        }
    });


    // page 7 = Footer
    gsap.from("#footer", {
        opacity: 0,
        y: "50px",
        scrollTrigger: {
            trigger: "#footer",
            // markers: true,
            start: 'top 90%',
            end: 'top 80%',
            scrub: 1,
        }
    });
};