
// Kommentiere hier (b)
// 
const svg = document.querySelector("#svg-field")

let running = false

function start() {
    running = true
    window.requestAnimationFrame(animationLoop)
}

function animationLoop() {
    
    // Kommentiere hier (c)    
    // ist eine globale Variabel, wir holen uns von dem Dukumentdas Element mit der id circle
    const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle")
    
    // Kommentiere hier (d)
    // hier geben wir dem Kreis befehle, wie sich deiser Bewegen soll
    let x = Math.random()
    let y = Math.random()
    dot.setAttribute("cx", x)
    dot.setAttribute("cy", y)
    dot.setAttribute("r", 0.01)
    dot.setAttribute("fill", "black")
    // Kommentiere hier (e)
    // das element wurde oben erstellt und wird nun in das svg angehängt
    svg.appendChild(dot)

    // Kommentiere hier (f)
    // hier wird oben die Gleichheit von running und true geprüft und unten wird der Inhalt der Funktion aufgeruffen
    if ( running === true ) {
        window.requestAnimationFrame(animationLoop)
    }
}

function stop() {
    running = false
    loopCounter= 0
    loopCounter = loopCounter + 1
    
    if (loopCounter < 1000) {
    window.requestAnimationFrame(animationLoop) }
}