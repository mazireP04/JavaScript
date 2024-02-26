

// function to generate a random hex color value and set it as the HTML document's background color
const generate = () => {
    // make a random number
    const number = Math.floor(Math.random() * 16777215);
    // make it into a hex color code
    const colorCode = "#" + number.toString(16);
    // apply it to the HTML document's body
    document.body.style.backgroundColor = colorCode;
    // write the hex color code on the panel on the page 
    document.getElementById("color").innerText = colorCode;
    // write the hex color code to clipboard 
    navigator.clipboard.writeText(colorCode);
}


// attach an event listener to the button 
document.getElementById("button").addEventListener("click", generate);

// call function initially when page loads
generate();

