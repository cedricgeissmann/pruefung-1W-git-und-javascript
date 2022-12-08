
// Die Zeile sagt, dass die svg-field im css konstant bleibt und das svg-field wurde mit dem css verbunden (b)
// Setzt running auf false
const svg = document.querySelector("#svg-field")

let running = false

function start() {
    running = true
    window.requestAnimationFrame(animationLoop)
}

function animationLoop() {
    
    // (c)    
    // 
    const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle")
    
    // Lässt x und y zwei random zahlen sein und setzt Koordinaten sowie ein Raduis und dass es Schwarz ausgefüllt ist (d)
    // 
    let x = Math.random()
    let y = Math.random()
    dot.setAttribute("cx", x)
    dot.setAttribute("cy", y)
    dot.setAttribute("r", 0.01)
    dot.setAttribute("fill", "black")
    // macht eine Art pfadzum svg (e)
    svg.appendChild(dot)

    // Wenn das running true ist, wird die Animation gemacht (f)
    // 
    if ( running === true ) {
        window.requestAnimationFrame(animationLoop)
    }
}

function stop() {
    running = false
    loopCounter = 0

    if (requestAnimationFrame) {
        loopCounter = loopCounter + 1
    }

    else if (loopCounter > 1000) {
        loopCounter = loopCounter
    }

}