
// Kommentiere hier (b)
// Animation wird gestartet, wenn running richtig ist.
const svg = document.querySelector("#svg-field")

let running = false
inside = 0
total = 0



function START() {
    running = true
    window.requestAnimationFrame(animationLoop)
}
function STOP() {
    running = false
    window.requestAnimationFrame(animationLoop)
}
function animationLoop(){  
    repeatCounter = infinite 
    per. repeat( circle*100)
    per. repeat(total + 1)
             
         circle.setAttribute("fill", "black")    
        if(
            circle.setAttribute("Math.sqrt(x*x + y*y <= 1"))
            circle.setAttribute("fill", "red")
            inside.setAttribute(inside + 1)
        
         
        
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

    num = 4*( inside/ total)

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
