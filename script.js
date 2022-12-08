
// Kommentiere hier (b)
// Das HTML Element mit der id svg-field wird ausgelesen und in der Variable svg gespeichert.
const svg = document.querySelector("#svg-field")

let running = false
let loopCounter = 0
let inside = 0
let total = 0

function start() {
    running = true
    loopCounter++
    window.requestAnimationFrame(animationLoop)
}

function stop() {
    running = false
}

function animationLoop() {
    
    for (let i=0; i < 100; i++) {
        // Kommentiere hier (c)    
        // Erstelle einen neuen SVG Kreis
        const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle")
        total++
        
        // Kommentiere hier (d)
        // Setze die Attribute für den Kreis
        let x = Math.random()
        let y = Math.random()
        dot.setAttribute("cx", x)
        dot.setAttribute("cy", y)
        dot.setAttribute("r", 0.01)
        if (Math.sqrt(x*x + y*y <=1 )) {
            dot.setAttribute("fill", "red")
            inside++
        } else {
            dot.setAttribute("fill", "black")
        }
        // Kommentiere hier (e)
        // Füge den Kreis zum SVG hinzu
        svg.appendChild(dot)
    }

    // Kommentiere hier (f)
    // Wenn running dann wiederhole diese Funktion
    if ( running === true ) {
        if (loopCounter < 1000) {
        loopCounter++
        // 4h) Die Zahl PI wird berechnet
        let num = 4 * (inside / total)
        document.querySelector("#zahl").textContent = num.toFixed(4)
        window.requestAnimationFrame(animationLoop)
        }
    }
}