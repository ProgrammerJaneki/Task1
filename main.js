function hide() {
   const element = document.querySelector(".add-item-modal");
   element.style.display = "none";
}
const modal = document.querySelector(".add-item-modal");
// modal.addEventListener("click", function(){
//    modal.style.display = "none";
// } )


const addTask = document.querySelector(".add-item");

addTask.addEventListener("click", function(){
   modal.style.display = "block";
})

