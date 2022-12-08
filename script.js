
// Kommentiere hier (b)
// damit wird deklariert, dass man das svg Element mit der id "svg-field" auswählen möchte, für den darauffolgenden Code
const svg = document.querySelector("#svg-field")

let running = false

function start() {
    running = true
    window.requestAnimationFrame(animationLoop)
}

function stop() {
    running = false
    window.requestAnimationFrame(cancelAnimationFrame)
}


function animationLoop() {
    
    // Kommentiere hier (c)    
    // hier wird ein Element erstellt. Der Link von dem svg Element in der index.html Datei wird angegeben und der Name, der das neue Element in diesem svg Element erhalten soll.
    const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle")
    
    // Kommentiere hier (d)
    // hier wird zuerst bestummen, dass für x und y eine zufällige Zahl zwischen 0 une 1 ausgesucht wird.
    // danach werden mit den darauf folgenden zwei Zeilen die neuen Attribute "cx" und "cy" für das svg Element "circle" erstellt und angegeben, dass für "cx" und "cy" die Werte von x und y eingesetzt werden sollen
    // in der Zeile danach wird ein Attribut "r" für das svg Element "circle" erstellt und angegeben, dass für "r" der Wert 0.01 eingesetzt werden soll
    // in der letzten Zeile wird ein Attribut "fill" erstellt und angegeben, dass dafür die Farbe schwarz eingesetzt werden soll
    let x = Math.random()
    let y = Math.random()
    dot.setAttribute("cx", x)
    dot.setAttribute("cy", y)
    dot.setAttribute("r", 0.01)
    dot.setAttribute("fill", "black")

    // Kommentiere hier (e)
    // hiermit wird der obere Codeblock in svg angehängt. in klammern steht dot, um die oberen Zeilen, welche mit dot. anfangen anzuwählen
    svg.appendChild(dot)

    // Kommentiere hier (f)
    // hier steht wenn "running" (von der oberen Funktion start()) wahr ist, soll die Animation in einem Loop ausgeführt werden
    if ( running === true ) {
        window.requestAnimationFrame(animationLoop)
    }
}