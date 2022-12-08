
// Kommentiere hier (b)
// Auswahl von Elementen innerhalb anderer festgelegter Bereiche
const svg = document.querySelector("#svg-field")

let running = false

function start() {
    running = true
    window.requestAnimationFrame(animationLoop)
}

function animationLoop() {
    
    // Kommentiere hier (c)    
    // fester, nicht veränderbarer Wert
    const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle")
    
    // Kommentiere hier (d)
    // setAttribute steht für ein Attribut (verändert Werte)
    let x = Math.random()
    let y = Math.random()
    dot.setAttribute("cx", x)
    dot.setAttribute("cy", y)
    dot.setAttribute("r", 0.01)
    dot.setAttribute("fill", "black")
    // Kommentiere hier (e)
    // alles mit "dot." wird schwarz ausgefüllt
    svg.appendChild(dot)

    // Kommentiere hier (f)
    // wenn es true (wahr) ist, dann soll etwas rennen (ausgeführt werden)
    if ( running === true ) {
        window.requestAnimationFrame(animationLoop)
    }
}