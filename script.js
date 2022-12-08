
// Kommentiere hier (b)
// 
const svg = document.querySelector("#svg-field")

let running = false
let inside = 0
let total = 0

function start() {
    running = true
    window.requestAnimationFrame(animationLoop)
}

function animationLoop() {
    
    // Kommentiere hier (c)    
    // ist eine globale Variabel für deise Funktion, wir holen uns von dem Dukument das Element mit der id circle
    const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle")
    
    // Kommentiere hier (d)
    // hier geben wir dem Kreis befehle, wie sich deiser Bewegen soll

    // dot = dot*100 -> ich wollt, dass 100 Kreise auf der Seite angezeigt werden pro durchlauf
    let x = Math.random()
    let y = Math.random()
    dot.setAttribute("cx", x)
    dot.setAttribute("cy", y)
    dot.setAttribute("r", 0.01)
    dot.setAttribute("fill", "black")
    if (dot === x*x + y*y) {
        dot.setAttribute ( "fill" , "red")
    }

    total = total + 1

    if ( inside === (x*x + y*y) < 1 ) {
        inside = inside + 1
    }


    // Kommentiere hier (e)
    // das element wurde oben erstellt und wird nun in das svg angehängt
    svg.appendChild(dot)

    let num = 4* (inside/ total)

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