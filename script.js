
// Kommentiere hier (b)
// Zeigt eine Variable
const svg = document.querySelector("#svg-field")

let running = false

function start() {
    running = true
    window.requestAnimationFrame(animationLoop)
    const feld = document.querySelector("#feld")
}

const feld = document.querySelector("#feld")
function stop() {
    running = false
    loopCounter = 0
    cy = cy + 1
    if (loopCounter < 1000) 
    <svg height="100" width="100">
    <circle cx="50" cy="50" r="50" fill="red" />
</svg>
Math.sqrt(x*x + y*y) <= 1 

    {   
    window.requestAnimationFrame(animationLoop)}
    
}
function animationLoop() {
    
    // Kommentiere hier (c)    
    // zeigt wieder eine Variable auf, die zält
    const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle")
    
    // Kommentiere hier (d)
    // beschreibt funktionen
    let x = Math.random()
    let y = Math.random()
    dot.setAttribute("cx", x)
    dot.setAttribute("cy", y)
    dot.setAttribute("r", 0.01)
    dot.setAttribute("fill", "black")
    // Kommentiere hier (e)
    // beschreibt was das cy und cx macht
    svg.appendChild(dot)

    // Kommentiere hier (f)
    // if stellt eine Bedingung dar
    if ( running === true ) {
        window.requestAnimationFrame(animationLoop)
    }
}