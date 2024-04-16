const formaPrincipal = document.querySelector(".form")
const buttonsContainer = document.querySelector("#buttons_container")

buttonsContainer.querySelector("#square").addEventListener("click", () => {
    verificaClass(formaPrincipal.classList)
    formaPrincipal.classList.add("square")
})

buttonsContainer.querySelector("#circle").addEventListener("click", () => {
    verificaClass(formaPrincipal.classList)
    formaPrincipal.classList.add("circle")
})

buttonsContainer.querySelector("#triangle").addEventListener("click", () => {
    verificaClass(formaPrincipal.classList)
    formaPrincipal.classList.add("triangle")
})

buttonsContainer.querySelector("#pentagon").addEventListener("click", () => {
    verificaClass(formaPrincipal.classList)
    formaPrincipal.classList.add("pentagon")
})

function verificaClass(classList) {
    console.log(classList.length);
    if(classList.length > 1){
        for (let i = 1; i < classList.length; i++) {
            classList.remove(classList[i])
        }
        console.log(classList);
    }
}
