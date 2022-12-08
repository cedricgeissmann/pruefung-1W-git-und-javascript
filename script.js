
// Kommentiere hier (b)
// Es wählt das Element aus mit der ID "svg-field"
const svg = document.querySelector("#svg-field")

let running = false
let inside = 0
let total = 0
let num = 4 * (inside/total)

//Die Zahl von inside/ total wird berechnet


//textContent(#zahl) : num.toFixed(4)

function start() {
    running = true
    window.requestAnimationFrame(animationLoop)
}

function stop() {
    running = false 
    loopCounter = 0
    if (loopCounter > -1){
        loopCounter = loopCounter +1
        
        if (loopCounter < 1000){
            window.requestAnimationFrame
        }
        }

}

function animationLoop() {
    
    if (animationLoop > 0){
        animationLoop = +100 (circle)
        if("circle" = Math.sqrt(x*x + y*y) <= 1){
        dot.setAttribute("fill", "red")
        }
        if (animationLoop = +100 (circle)){
            total = total + 1
        }
        if ("circle" = Math.sqrt(x*x y*y) <= 1){
            inside = inside +1
        }
    }
    


    
    // Kommentiere hier (c)    
    // Es erstellt ein Element mit einem Namen welcher in diesem Fall circle wäre.
    const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle")
    
    // Kommentiere hier (d)
    // Es gibt dem Erstellten Element circle die nach wunsch angegebenen Attribute und sagt das x und y random sind.
    let x = Math.random()
    let y = Math.random()
    dot.setAttribute("cx", x)
    dot.setAttribute("cy", y)
    dot.setAttribute("r", 0.01)
    dot.setAttribute("fill", "black")
    // Kommentiere hier (e)
    //Dieses neu erstellte element circle wird als dot in svg angehängt.
    svg.appendChild(dot)

    // Kommentiere hier (f)
    // falls es richtig läuft macht es eine animationLoop bzw. eine Animations Schleife.
    if ( running === true ) {
        window.requestAnimationFrame(animationLoop)
    }
}