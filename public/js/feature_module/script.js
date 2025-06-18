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
                    <a target="_blank" class="flex gap-5 items-center justify-between w-fit text-center px-6 py-2 rounded-md font-semibold bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800" href="${this.link}">View Project 
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="15px" width="15px"><path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path></svg>
                    </a>
                  </div>
                </div>
              </section>
            </div>
            `;

            project_box.insertAdjacentHTML("beforeend",html);
            
        };
    };



    new ProjectShowCase(
      "EM System",
      "/assets/img/ems-project.webp",
      "personal",
      "2025",
      `Developed using React.js, Tailwind, Node.js, Express.js, and Firebase.
Implemented ems with real-time updates and a secure login system.
Implemented CRUD operations with Firebase as the database.
Integrated send email to employees.`,
      "https://ems-cloudbased.vercel.app/").exec();
    
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
        "").exec();
    
}