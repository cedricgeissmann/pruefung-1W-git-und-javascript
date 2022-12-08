
// Sagt das ein svg element enthalten ist (b)
// 
const svg = document.querySelector("#svg-field")

let running = false

function start() {
    running = true
    window.requestAnimationFrame(animationLoop)
}

function stop() {
    running =false
}

function animationLoop() {
    
    // Sagt das das svg Element ein Kreis ist(c)    
    // 
    const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle")
    
    // Sagt wo sich der Punkt befindet und wie gross dieser ist (d)
    // 
    let x = Math.random()
    let y = Math.random()
    dot.setAttribute("cx", x)
    dot.setAttribute("cy", y)
    dot.setAttribute("r", 0.01)
    dot.setAttribute("fill", "black")
    // Der Punkt wird dem svg angehängt (e)
    svg.appendChild(dot)

    // Sagt das die condition running richtig ist(f)
    // 
    if ( running === true ) {
        window.requestAnimationFrame(animationLoop)
    }
}