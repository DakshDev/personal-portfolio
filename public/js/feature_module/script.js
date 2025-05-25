import {project_box} from "../main.js"



export default ()=>{
    
    class ProjectShowCase{
        constructor(name,url,project,year,description,link){
            this.name = name;
            this.url = url;
            this.project = project;
            this.year = year;
            this.description = description;
            this.link = link
        }

        exec(){
          // console.log(this.url);
          
            let html = `
            <div class="swiper-slide shadow-[0px_0px_20px_2.5px_rgba(0,_0,_0,_0.1)] min-w-[650px] max-md:min-w-[100%]">
              <section class="rounded-md overflow-hidden bg-black_two_clr w-full h-full relative ">
                <div class="absolute left-0 top-0 h-full w-full bg-black/30"></div>   
                <div class="grid gap-5 sm:p-10 p-5 z-10 relative">
                  <h1 class="font_xl poppins-bold ">${this.name}</h1>
                  <div style="background-image: url(${this.url}); background-repeat: no-repeat; background-size: cover; background-position: center" class="rounded-lg h-80 max-md:h-60"></div>
                  <div class="md:flex md:justify-between md:gap-10 gap-5 max-md:grid">
                    <div class="md:grid md:gap-2 flex justify-between items-center">
                      <div>
                        <span class="uppercase text-text_two_clr">project</span>
                        <span class="md:capitalize montserrat_regular uppercase">${this.project}</span>
                      </div>
                      <div>
                        <span class="uppercase text-text_two_clr">year</span>
                        <span class="md:capitalize montserrat_regular uppercase">${this.year}</span>
                      </div>
                    </div>
                    <div class="grid gap-2 content-start max-sm:hidden">
                        <span class="uppercase text-text_two_clr">description</span>
                        <span class="lowercase montserrat_regular text-justify">${this.description}</span>
                    </div>
                  </div>
                  
                  <div class="flex justify-center items-center">
                    <a target="_blank" class="w-1/2 text-center px-6 py-2 rounded-md font-semibold bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800" href="${this.link}">View Project</a>
                  </div>
                </div>
              </section>
            </div>
            `;

            project_box.insertAdjacentHTML("beforeend",html);
            
        };
    };


    new ProjectShowCase(
      "EMS",
      "/assets/img/ems-project.webp",
      "personal",
      "2025",
      "This Employee Management System (EMS) lets you add, remove, and assign tasks to employees. It has two dashboards: Admin (full access) and Employee (read-only with task completion access).",
      "https://ems-prototype.vercel.app/").exec();
    
    new ProjectShowCase(
        "Atlas Tools",
        "/assets/img/atlas_tools_project.webp",
        "personal",
        "2025",
        "This project is a multi-functional utility web application designed to provide essential daily tools in one place. The goal is to enhance user productivity by offering simple, efficient, and user-friendly solutions to common tasks",
        "https://atlas-tools.vercel.app/").exec();
    
    new ProjectShowCase(
        "snake game",
        "/assets/img/snake_game_project.webp",
        "client",
        "2024",
        "This is a DOM-based game of Snake that I wrote in JavaScript over a decade ago. It was made to have sort of a nostalgic feel to it.",
        "https://dakshdev.github.io/SnakeGame/"
      ).exec();


    new ProjectShowCase(
        "Ecommerce Website",
        "/assets/img/soon_project.webp",
        "personal",
        "2025",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit illo commodi quaerat maiores  dolorem ipsa, ducimus repudiandae impedit dolor ipsam molestias eos.",
        "#").exec();
    
}