
// Kommentiere hier (b)
// Wenn ich auf den Start-button drücke, dann führt er die Funktion animationLoop aus.
//const bedeutet, das es für alle SVG Elemente gilt.

const svg = document.querySelector("#svg-field")

let running = false

function start() {
    running = true
    window.requestAnimationFrame(animationLoop)
}

function animationLoop() {
    
    // Kommentiere hier (c)    
    // Bedeutet, dass alles mit dem Attribut dot eine bestimmte funktion gilt. Dies wird gekennzeichnet mit einem namespace.
    const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle")
    
    // Kommentiere hier (d)
    // Der Punkt bewegt sich nicht definiert nach oben und nach unten. Er ist schwarz gefüllt.
    let x = Math.random()
    let y = Math.random()
    dot.setAttribute("cx", x)
    dot.setAttribute("cy", y)
    dot.setAttribute("r", 0.01)
    dot.setAttribute("fill", "black")
    // Kommentiere hier (e)
    svg.appendChild(dot)

    // Kommentiere hier (f)
    // Wenn es eine bestimmte Geschwindigkeit hat, dann dreht sich der Punkt im Kreis.
    if ( running === true ) {
        window.requestAnimationFrame(animationLoop)
    }
}