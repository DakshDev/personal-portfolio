function user_passed_contact_info(callback){
       
    const firstName = document.getElementById("userFirstName");
    const lastName = document.getElementById("userLastName");
    const email = document.getElementById("userEmail");
    const message = document.getElementById("userMessage");
    const sendButton = document.getElementById("sendMail");
        
        
    sendButton.addEventListener("click", ()=>{

        if(firstName.value.length === 0 || lastName.value.length === 0 ||email.value.length === 0 || message.value.length === 0){
            let style = document.createElement('style');
            style.innerHTML += `
            #userFirstName::placeholder { color: #e74c3c; }
            #userLastName::placeholder { color: #e74c3c; }
            #userEmail::placeholder { color: #e74c3c; }
            #userMessage::placeholder { color: #e74c3c; }
            `;
            document.head.appendChild(style);
            return;
        }

        let sendUserMailObj = {
            firstName : firstName.value,
            lastName : lastName.value,
            email : email.value,
            message : message.value,
        }
            

        callback(sendUserMailObj)
        
    });

}

export {user_passed_contact_info};