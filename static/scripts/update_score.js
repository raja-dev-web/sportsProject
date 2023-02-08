//console.log("javascript working!")
setInterval(function() {
    fetch('/json_data').then(
        response => response.json()
        ).then(
            data =>
                data.forEach(game =>
                    updateElement(game)
                )
        )
    },1000
);

function updateElement(game){
    Object.entries(game).forEach(([k,v]) => {
        element = document.getElementById(k + "_" + game.id);
        // Get Previous value first
        previousValue = element.innerHTML;

        // If Previous value is not equal to the new value, change it!
        if (previousValue !== v.toString()) {
            blinkUpdate(element, v.toString())
        }
    })
}

function blinkUpdate(element, newValue, newColor='#00ff00') {
    previousColor = element.style.color;
    element.innerHTML = newValue;
    element.style.color = newColor;
    // Set back to original color after timeout ms
    setTimeout(() => {
        element.style.color = previousColor
    }, 2000)
}
