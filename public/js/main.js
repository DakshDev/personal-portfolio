// import packages code
import { raf } from "./feature_module/packkages/lenis.js";
raf();




// export tech_stack_box name
export const tech_stack_box = document.querySelector("[tech_stack_box]");
// import svg code
import add_svg_in_html from "./feature_module/svg.js";
add_svg_in_html();





// export project_box name
export let project_box = document.getElementById("project_box");
// import project section execute code
import {default as projectSectionsExecute} from "./feature_module/script.js";
projectSectionsExecute();






// import Tilt.js Raw Package
import {default as tilt_js} from "./feature_module/packkages/tilt.js";
tilt_js();










// send mail fix it later
import {user_passed_contact_info} from "./feature_module/contact.js";
user_passed_contact_info((userPassedDetail) => {
    fetch("https://sendmail-server-production.up.railway.app/send", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userPassedDetail)
    })
    .then(raw => raw.json())
    .then(data => {
        mainSendResetForm(data);
    })
    .catch(err => console.log("Got Some Error", err.message))
    
});
function mainSendResetForm(user){
    let inpField = document.querySelectorAll("#contactform input, #contactform textarea");
    inpField.forEach(e => e.value = "");
    alert(`Thanks For Message ${user.firstName} ${user.lastName} !`)
}















function openLinkNextBrowser(){
    const instagram = document.querySelectorAll("[instagram_link]");
    const discord = document.querySelectorAll("[discord_link]");
    const gitHub = document.querySelectorAll("[github_link]");
    const replit = document.querySelectorAll("[replit_link]");
    const leetcode = document.querySelectorAll("[leetcode_link]");

    instagram.forEach(e => e.addEventListener("click", ()=>{ window.open("https://www.instagram.com/sync_coder", "_blank") }));
    discord.forEach(e => e.addEventListener("click", ()=>{ window.open("https://discord.gg/TkAMqfSN", "_blank") }));
    gitHub.forEach(e => e.addEventListener("click", ()=>{ window.open("https://github.com/DakshDev", "_blank") }));
    replit.forEach(e => e.addEventListener("click", ()=>{ window.open("https://replit.com/@DakshDeveloper", "_blank") }));
    leetcode.forEach(e => e.addEventListener("click", ()=>{ window.open("https://leetcode.com/u/SyncCoder/", "_blank") }));

};
openLinkNextBrowser();