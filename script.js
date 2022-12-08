
// Kommentiere hier (b)
// svg als variabel von const. wenn der wert falsch ist, wird als wahr ausgewertet.
const svg = document.querySelector("#svg-field")

let running = false

function start() {
    running = true
    window.requestAnimationFrame(animationLoop)
}

function animationLoop() {
    
    // Kommentiere hier (c)    
    // cost mit der variablem dot zeigt die folgende webseite an
    const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle")
    
    // Kommentiere hier (d)
    // x und y sind wird irgedeine zahl zugeordnet 
    let x = Math.random()
    let y = Math.random()
    dot.setAttribute("cx", x)
    dot.setAttribute("cy", y)
    dot.setAttribute("r", 0.01)
    dot.setAttribute("fill", "black")
    // Kommentiere hier (e)
    // wird im svg angehängt
    svg.appendChild(dot)

    // Kommentiere hier (f)
    // wenn die variable richtig ist, kommt eine animation
    if ( running === true ) {
        window.requestAnimationFrame(animationLoop)
    }
}

function stop() {
    running = false
    loopCounter = 0
    running = running + 1
    
    if (loopCounter < 1000) {
        requestAnimationFrame }