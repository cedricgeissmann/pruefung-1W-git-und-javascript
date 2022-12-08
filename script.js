inside=0
total=0
num=4*(inside/total)
// Kommentiere hier (b)
// Es wählt das dokument svg-field aus 
const svg = document.querySelector("#svg-field")

let running = false

function start() {
    running = true
    window.requestAnimationFrame(animationLoop)
}

function stop() {
    running = true
    loopCounter=0
    loopCounter=loopcounter+1
    if (loopcounter<1000 ){
let (window.requestAnimationFrame(animationLoop))

    }
    window.requestAnimationFrame(animationLoop)
}




function animationLoop() {
    
    // Kommentiere hier (c)    
    // Es erstell eine Form die ein Kreis ist 
    const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle")
for  (let i=0; i>100 i +100)

if (circ Math.sqrt(x*x+Y*y)<1){
    color "red"
}
    // Kommentiere hier (d)
    // Nimmt für x eine irgend eine Zahl 
    let x = Math.random()
    let y = Math.random()
    dot.setAttribute("cx", x)
    dot.setAttribute("cy", y)
    dot.setAttribute("r", 0.01)
    dot.setAttribute("fill", "black")
    // Kommentiere hier (e)
    //Das hängt es in den SVG ein also den Punkt (dot)
    svg.appendChild(dot)

    // Kommentiere hier (f)
    // running wird verglichen mit true
    if ( running === true ) {

num=num 
        window.requestAnimationFrame(animationLoop)
    }
inside= inside 
total=total


}