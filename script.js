
// Kommentiere hier (b)
// Es zeigt eine globale Variable

let running = false

const svg = document.querySelector("#svg-field")
function start() {
    running = true
    window.requestAnimationFrame(animationLoop)
}





function animationLoop() {
    
    // Kommentiere hier (c)    
    // Es ist wieder eine Globale Variable, es zählt immer.
    const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle")
    
    // Kommentiere hier (d)
    // Let zeigt die Definition für x und y.
    let x = Math.random()
    let y = Math.random()
    dot.setAttribute("cx", x)
    dot.setAttribute("cy", y)
    dot.setAttribute("r", 0.01)
    dot.setAttribute("fill", "black")
    // Kommentiere hier (e)
    // Man hengt die oberen programmierungen im svg an.
    svg.appendChild(dot)

    // Kommentiere hier (f)
    // if stellt eine Bedingung klar
    if ( running === true ) {
        window.requestAnimationFrame(animationLoop)
    }
}