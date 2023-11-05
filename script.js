// select items off the links to make it colored when clicked
let links=document.querySelectorAll(".links li")


// green background for the selected link 
links.forEach((link)=>{

    link.addEventListener("click",()=>{
        link.classList.add("clicked");
    
        links.forEach((otherLink)=>{
            if(otherLink!=link){          
                otherLink.classList.remove("clicked");
            }
        });
    });
})

// function just to upload the files since we don't want the built in buttons style
function uploadFile(input) {
    // Check if a file is selected
    if (input.files.length > 0) {
        // Automatically submit the form when a file is selected
        input.closest('form').submit();
    }
}