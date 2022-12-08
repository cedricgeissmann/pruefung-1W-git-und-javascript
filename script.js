
// Die Zeile sagt, dass die svg-field im css konstant bleibt und das svg-field wurde mit dem css verbunden (b)
// Setzt running auf false
const svg = document.querySelector("#svg-field")

let running = false

function start() {
    running = true
    inside = 0
    total = 0

    //if (dot) {
    //    total = total + 1
    //}

    //if (Math.sqrt(x*x + y*y) <= 1) {              Ich habe das in //, weil der Code sonst nicht funktioniert
    //    inside = inside + 1
    //}
    //window.requestAnimationFrame(animationLoop)
}

function animationLoop() {
    
    // (c)    
    // Erstellt Punkte
    const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle")
    
    // Lässt x und y zwei random zahlen sein  (d)
    // Es wird der Radius gesetzt, dass die kreise schwrz und gefüllt sein sollen und dass x un y eine random Koorinate zgeordnet wird
    let x = Math.random()
    let y = Math.random()
    dot.setAttribute("cx", x)
    dot.setAttribute("cy", y)
    dot.setAttribute("r", 0.01)
    dot.setAttribute("fill", "black")
    // macht, dass Punkte im svg ELement sind (e)
    svg.appendChild(dot)

    // num = 4*(inside/total)                   Ich habe das in //, weil sonst der Code nicht funktioniert
    // Wenn das running true ist, wird die Animation gemacht (f)
    // 
    if ( running === true ) {
        window.requestAnimationFrame(animationLoop)
    }

    if ( i = 1) {

        start
        const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle")
    
        let x = Math.random()
        let y = Math.random()
        dot.setAttribute("cx", x)
        dot.setAttribute("cy", y)
        dot.setAttribute("r", 0.01)
        dot.setAttribute("fill", "black")
        svg.appendChild(dot)
        dot.setAttribute("*100")

        if (Math.sqrt(x*x + y*y) <=1) {
            dot.setAttribute("fill", "red")
             }

    }}


function stop() {
    running = false
    loopCounter = 0

    if (requestAnimationFrame) {
        loopCounter === loopCounter + 1
    }

    else if (loopCounter > 1000) {
        loopCounter === 0
    }

}

//Welche Zahl wird berechnet:
//x * x und y*y müssen kleiner sein als 1, dass ein roter Punkt aufpoppt.
//Dass heisst, dass die erste Zahl 0 ist.
//total ist die Zahl wie viele Umrundungen es braucht, also i 
//inside erhöht sich wenn die Zahl 0 kommt 
//num ist also 4 (Umrundungen / wie oft die Zahl 0 kommt)