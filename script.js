
// Kommentiere hier (b)
// Damit meint man dass man von dem Dokument dieses Element holt
const svg = document.querySelector("#svg-field")

let running = false
 let loopCounter = 0
let inside = 0
let total = 0
let num = 4* (inside / total)


function start() {
   
    running = true
    loopCounter = 100
    if ( loopCounter < 1000 )
    loopCounter = 0 
    counter = counter + 1 
    if (counter = counter + 1); total = total + 1
    if (Math.sqrt(x*x + y*y <= 1)); inside = inside + 1
   window.requestAnimationFrame(animationLoop)
   

    
}

function stop() {

    if ( running = false )
if ( loopCounter < 1000 )
loopCounter = 100
counter = counter + 1}


function animationLoop()  {
    
    if (counter = counter + 1); total = total + 1
    if (Math.sqrt(x*x + y*y <= 1)); inside = inside + 1
 
    // Kommentiere hier (c)    
    // Man kreiert ein Element und zwar ein circle.
    const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle")
    
    // Kommentiere hier (d)
    // Man lässt die Werte (radius sollte 0,01 sein, cy sollte y sein, cx sollte x sein.) definieren, die Farbe des Kreises angeben und die Kreise sollen an zufälligen Orten spawnen, deswegen wurden die x und y-Koordinate als random bezeichnet
    let x = Math.random()
    let y = Math.random()
    if (Math.sqrt(x*x + y*y) <= 1) dot.setAttribute("fill", "red")
    dot.setAttribute("cx", x)
    dot.setAttribute("cy", y)
    dot.setAttribute("r", 0.01)
    dot.setAttribute("fill", "black")
    // Kommentiere hier (e)
    // Das wird im svg angehängt, also das dot
    svg.appendChild(dot)

    // Kommentiere hier (f)
    //  Wenn das was es ausführt stimmen sollte, dann sollte es einen animationLoop führen.
    if ( running === true)
    {
        window.requestAnimationFrame(animationLoop)
    }
}