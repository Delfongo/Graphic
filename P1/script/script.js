let scroll =  document.querySelector("button.scroll")

function load() {
    scroll.classList.remove("show")

}
window.addEventListener("scroll", z =>{
    if (window.scrollY > 700) {
        scroll.classList.add("show")
    }else{
        scroll.classList.remove("show")
    }
})

// scroll.addEventListener("click" z => {
//     if(scroll.classList.contains("show")){

//     }else{
//         scroll.classList.add("not_show")
//     }
// })
