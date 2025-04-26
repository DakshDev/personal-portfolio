import {project_box} from "../main.js"



export default ()=>{
    
    class ProjectShowCase{
        constructor(name,url,project,year,description){
            this.name = name;
            this.url = url;
            this.project = project;
            this.year = year;
            this.description = description;
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
                </div>
              </section>
            </div>
            `;

            project_box.insertAdjacentHTML("beforeend",html);
            
        };
    };

    
    new ProjectShowCase(
        "todo app",
        "https://toggl.com/blog/wp-content/uploads/2021/05/how-to-create-a-website-project-plan.jpg",
        "personal",
        "2021",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit illo commodi quaerat maiores dolorem ipsa, ducimus repudiandae impedit dolor ipsam molestias eos.").exec();
    
    new ProjectShowCase(
        "snake game",
        "https://toggl.com/blog/wp-content/uploads/2021/05/how-to-create-a-website-project-plan.jpg",
        "client",
        "2024",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit illo commodi quaerat maiores dolorem ipsa, ducimus repudiandae impedit dolor ipsam molestias eos.").exec();

    new ProjectShowCase(
        "Flappy Bird",
        "https://toggl.com/blog/wp-content/uploads/2021/05/how-to-create-a-website-project-plan.jpg",
        "personal",
        "2022",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit illo commodi quaerat maiores dolorem ipsa, ducimus repudiandae impedit dolor ipsam molestias eos.").exec();

    new ProjectShowCase(
        "Portfolio",
        "https://toggl.com/blog/wp-content/uploads/2021/05/how-to-create-a-website-project-plan.jpg",
        "client",
        "2023",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit illo commodi quaerat maiores dolorem ipsa, ducimus repudiandae impedit dolor ipsam molestias eos.").exec();
    
}