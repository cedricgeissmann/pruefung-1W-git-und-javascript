
//Eine eckige Fläche mit etwas das rennt und die funktion ist richtig.
// 
const svg = document.querySelector("#svg-field")

let running = false

function start(STARK) {
    running = true
    window.requestAnimationFrame(animationLoop)
}

function animationLoop() {
    
      
    
    const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle")
    
   // Neues Element Kreis wird eingefügt
    // 
    let x = Math.random()
    let y = Math.random()
    dot.setAttribute("cx", x)
    dot.setAttribute("cy", y)
    dot.setAttribute("r", 0.01)
    dot.setAttribute("fill", "black")
    // xy können irgendwelche zahlen geben schwarz gefüllter kreis der einen radius von 0.01 hat er kann sich in alle richtungen frei bewegen//

    svg.appendChild(dot)

    // Kommentiere hier
    if ( running === true ) {
        window.requestAnimationFrame(animationLoop)
    }
}