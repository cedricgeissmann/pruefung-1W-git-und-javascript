
// svg-field in css muss immer konstant bleiben
// 

const svg = document.querySelector("#svg-field")

let running = false

function start() {
    running = true
    window.requestAnimationFrame(animationLoop)

}

function animationLoop() {
    
    // Erstellt eine Kreisform
    // 
    const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle")
    
    // X und Y werden zufällig sein und ein Atribut, welches schwarz gefüllt werden soll
    // 
    let x = Math.random()
    let y = Math.random()
    dot.setAttribute("cx", x)
    dot.setAttribute("cy", y)
    dot.setAttribute("r", 0.01)
    dot.setAttribute("fill", "black")
    // SVG wird in SVG eingehängt
    svg.appendChild(dot)

    // Ein sich wiederholender Animationsloop
    // running wird mit true verglichen
    if ( running === true ) {
        if ( inside/total)
        animationLoop = 0
        window.requestAnimationFrame(animationLoop)
        let inside = + 1
        let total = +1
    }
}

function stop () {
    running = false
    loopCounter = 0
    if (loopCounter < 1000)
    window.requestAnimationFrame(animationLoop)
}

function animationLoop () {
    let circle = 100
    circle("fill", "red")
    if (circle= Math.sqrt(x*y+y*y)) {
     circle.setAttribute("fill" , "black")   
}
}






