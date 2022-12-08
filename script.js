
// svg-field in css muss immer konstant bleiben
// 
const svg = document.querySelector("#svg-field")

let running = false

function start() {
    running = true
    window.requestAnimationFrame(animationLoop)
}

function animationLoop() {
    
    // Erstellt eine Kreisform
    // 
    const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle")
    
    // X und Y werden zufällig sein und ein Atribut, welches schwarz gefüllt werden soll
    // 
    let x = Math.random()
    let y = Math.random()
    dot.setAttribute("cx", x)
    dot.setAttribute("cy", y)
    dot.setAttribute("r", 0.01)
    dot.setAttribute("fill", "black")
    // SVG wird in SVG eingehängt
    svg.appendChild(dot)

    // Ein sich wiederholender Animationsloop
    // 
    if ( running === true ) {
        window.requestAnimationFrame(animationLoop)
    }
}