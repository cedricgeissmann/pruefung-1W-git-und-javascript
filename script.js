
// Kommentiere hier: Wenn man auf Start drückt, dann soll das svg Element nach unten fallen, geht aber nicht weil let running false ist also falsch.  (b)
// 
const svg = document.querySelector("#svg-field")

let running = false

function start() {
    running = true
    window.requestAnimationFrame(animationLoop)
        const main = document.querySelector("#zahl")
        main.className = "btn-container"
    }
    function stop () {
        running = false 

        loopCounter= 0 for ( let i = 0; i < upperBound; i++) {
            print(i)
            let upperBound = parseInt(requestAnimationFrame)(){
              if (i < 1000)
            
            }
        const main = document.querySelector("#zahl")
        main.className= "btn-container"
        window.requestAnimationFrame(animationLoop)

    } }


function animationLoop() {
    
    // Kommentiere hier Das svg Element also der Kreis wurde für const dot angewählt, also wenn man const dot angibt, ist damit dieser Kreis eigentlich gemeint.  (c)    
    // 
    const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle")
    
    // Kommentiere hier Die Koordinaten x und y werden am anfang irgendwie gewählt, später wird das ELement dot.Attribute gewählt und mann gibt die Korrdinaten x und y an. Der radius beträgt 0.01 und das Element ist schwarz.  (d)
    // 
    let x = Math.random()
    let y = Math.random()
    dot.setAttribute("cx", x)
    dot.setAttribute("cy", y)
    dot.setAttribute("r", 0.01)
    dot.setAttribute("fill", "black")
    // Kommentiere hier Das SVG Element  soll ein dot sein, was Punkt heisst.(e)
    svg.appendChild(dot)

    // Kommentiere hier Das running soll mit true auf gleichheit überprüft werden, wenn die animation Loop ausgewählt wurde.  (f)
    // 
    if ( running === true ) {
        window.requestAnimationFrame(animationLoop)
    }
}