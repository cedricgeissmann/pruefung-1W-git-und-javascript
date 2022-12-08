
// Kommentiere hier (b)
// Es zeigt eine globale variable. Das heisst, das es immer gilt und man es nicht in jeder Funktion neu eingeben muss. Queery Selector zeigt das man es aus dem html geholt hat. 
const svg = document.querySelector("#svg-field")

let running = false

function start() {
    running = true
    window.requestAnimationFrame(animationLoop)
}

function animationLoop() {
    
    // Kommentiere hier (c)    
    // Es ist wieder eine globale Variable, also zählt es immer. Das create element lässt einen Kreis entstehen.
    const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle")
    
    // Kommentiere hier (d)
    // Das let zeigt die Definition für x und y. Das setAttribute zeigt die Funktionen an. cx wurde zB x zugewiesen, cy zu y. Das r zeigt die Geschwindigkeit von 0.01. fill steht für die Farbe schwarz in deisem Fall.
    let x = Math.random()
    let y = Math.random()
    dot.setAttribute("cx", x)
    dot.setAttribute("cy", y)
    dot.setAttribute("r", 0.01)
    dot.setAttribute("fill", "black")
    // Kommentiere hier (e)
    // Dieser Punkt wurde mit diesem Code dem svg hinzugefügt.
    svg.appendChild(dot)

    // Kommentiere hier (f)
    // if stellt eine Bedingung dar, was bedeutet, das das untere nur überprüft wird, wenn die Bedingung erfüllt wurde.
    if ( running === true ) {
        window.requestAnimationFrame(animationLoop)
    }
}

function stop() {
    running = false
    loopCounter = 0
    loopCounter = loopCounter + 1
    if (loopCounter < 1000) {
        window.requestAnimationFrame(animationLoop)
    }
    let num = animationLoop
    if (num > animationLoop) {
        num = num + 100
    }
    if (Math.sqrt(x*x + y*y)) {
        dot.setAttribute("fill", "red")
    }
    dot.setAttribute("fill", "black")

}

