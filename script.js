
// Kommentiere hier (b)
// "Es wird für alle darunterstehenden Zeilen übernomen"
const svg = document.querySelector("#svg-field")

let running = false

function start() {
    running = true
    window.requestAnimationFrame(animationLoop)
}

function animationLoop() {
    
    // Kommentiere hier (c)    
    // "Es wird für alle darunterstehenden Zeilen übernomen + es wird ein Kreis erzeugt"
    const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle")
    
    // Kommentiere hier (d)
    // "Hier werden die details des Kreises angezeigt, was er alles machen soll, wo er sich befinden soll usw."
    let x = Math.random()
    let y = Math.random()
    dot.setAttribute("cx", x)
    dot.setAttribute("cy", y)
    dot.setAttribute("r", 0.01)
    dot.setAttribute("fill", "black")
    // Kommentiere hier (e)
    // "Kreis wurde im svg angehängt"
    svg.appendChild(dot)

    // Kommentiere hier (f)
    // "Hier wird auf Gleichheit geprüft"
    if ( running === true ) {
        window.requestAnimationFrame(animationLoop)
    }
}