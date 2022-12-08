
// Kommentiere hier (b)
// Animation wird gestartet, wenn running richtig ist.
const svg = document.querySelector("#svg-field")

let running = false

function START() {
    running = true
    window.requestAnimationFrame(animationLoop)
}
function STOP() {
    running = false
    window.requestAnimationFrame(animationLoop)
}

function animationLoop() {
    
    // Kommentiere hier (c)    
    // Der svg-Block von circle wird als const angezeigt
    const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle")
    
    // Kommentiere hier (d)
    // Die Koordinaten, in welchen sich der circle bewegen sollte auch die optische Anzeige des circle 
    let x = Math.random()
    let y = Math.random()
    dot.setAttribute("cx", x)
    dot.setAttribute("cy", y)
    dot.setAttribute("r", 0.01)
    dot.setAttribute("fill", "black")
    // Kommentiere hier (e) Das svg von circle wird verlinked.
    svg.appendChild(dot)

    // Kommentiere hier (f)
    // Wenn running richtig ist, soll die aniamtion abgespielt werden.
    if ( running === true ) {
        loopCounter = 0
        for(let running = 0; running; i =i+1)
        loopCounter = 0
        if(loopCountrer < 1000){
                window.requestAnimationFrame(animationLoop)
        
      }
    }
}
