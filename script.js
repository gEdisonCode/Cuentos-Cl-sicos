const interruptor = document.getElementById("tema")
let modoOscuro = localStorage.getItem("modo-oscuro", "active")

const oscuro = () => {
    document.body.classList.add("modo-oscuro");
    localStorage.setItem("modo-oscuro", "active")
    modoOscuro = "active";
}

const claro = () => {
    document.body.classList.remove("modo-oscuro")
    localStorage.setItem("modo-oscuro", null)
    modoOscuro = null;
}

if (modoOscuro === "active") {
    oscuro()
}

interruptor.addEventListener("click", () => {
    modoOscuro = localStorage.getItem("modo-oscuro")
    modoOscuro === "active" ? claro() : oscuro() 
})