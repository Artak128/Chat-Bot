export function stylingBorderRadius() {
    if (document.querySelector(".content").lastElementChild.classList.contains("guestContent") && document.querySelector(".content").lastElementChild.children.length > 1) {
       console.log( document.querySelector(".content").lastElementChild.firstElementChild.classList.remove("normal")) 
       document.querySelector(".content").lastElementChild.firstElementChild.classList.add("guestUp");
       if(document.querySelector(".content").lastElementChild.children.length > 2){
       document.querySelector(".content").lastElementChild.lastElementChild.previousElementSibling.classList.remove("guestDown");
       document.querySelector(".content").lastElementChild.lastElementChild.previousElementSibling.classList.add("normal");
      }
       document.querySelector(".content").lastElementChild.lastElementChild.classList.add("guestDown");
     }
    else if (document.querySelector(".content").lastElementChild.classList.contains("userContent") && document.querySelector(".content").lastElementChild.children.length > 1) {
       document.querySelector(".content").lastElementChild.firstElementChild.classList.remove("normal")
       document.querySelector(".content").lastElementChild.firstElementChild.classList.add("userUp");
       if(document.querySelector(".content").lastElementChild.children.length > 2){
       document.querySelector(".content").lastElementChild.lastElementChild.previousElementSibling.classList.remove("userDown");
       document.querySelector(".content").lastElementChild.lastElementChild.previousElementSibling.classList.add("normal");
       }
       document.querySelector(".content").lastElementChild.lastElementChild.classList.add("userDown");
     } 
     else {
       document.querySelector(".content").lastElementChild.firstElementChild.classList.add("normal");
     }
   }