
// Kommentiere hier (b)
// Allgemeine variabel, svg sei gleich, das geholte element aus dem Dokument mit der id "svg-field".
const svg = document.querySelector("#svg-field")

let running = false
let loopCounter = 0

function start() {
    running = true
    loopCounter = loopCounter + 1
    window.requestAnimationFrame(animationLoop)
}

function stop() {
    running = false
}

function animationLoop() {



    
    // Kommentiere hier (c)    
    // Allgemeine variabel dot, sei gleich, das neu erstelltes Element circle
    const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle")
    
    // Kommentiere hier (d)
    // x soll eine zufällig gewählte mathematische Zahl sein
    // y soll eine zufällig gewählte mathematische Zahl sein
    // setzte bei dot ein neues Attribut für cx ein, für cx kommt die zufällig erstellte zahl x
    // setzte bei dot ein neues Attribut für cy ein, für cy kommt die zufällig erstellte zahl y
    // setzte bei dot ein neues Attribut für r ein, für r kommt die Zahl 0.01
    // setzte bei dot ein neues Attribut für fill ein, für fill kommt die Farbe "black"
    let x = Math.random()
    let y = Math.random()
    dot.setAttribute("cx", x)
    dot.setAttribute("cy", y)
    dot.setAttribute("r", 0.01)
    dot.setAttribute("fill", "black")
    // Kommentiere hier (e)
    // hänge das erstellte Element circle, mit den weiteren Bestimmungen die es hat von 2d, an das svg im html an
    svg.appendChild(dot)

    // Kommentiere hier (f)
    // wenn running gelich wahr ist (sobald man auf Start klickt ändert es sich auf true), dann ruft es das requestAnimationFrame auf, welche die Funktion animationLoop ausführt
    if ( running === true ) {
        window.requestAnimationFrame(loopCounter1000)
    }
}

function loopCounter1000() {
    if (loopCounter < 1000){
        loopCounter = loopCounter + 1
        window.requestAnimationFrame(animationLoop)
    }
}