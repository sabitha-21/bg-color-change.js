const colors = ["red", "blue", "green", "yellow"];
let currentColorIndex = 0;

document.getElementById('color-button').addEventListener('click', function() {
    
    currentColorIndex = (currentColorIndex + 1) % colors.length;

   
    const newColor = colors[currentColorIndex];

   
    document.body.style.backgroundColor = newColor;

   
    document.getElementById('color-name').textContent = newColor.charAt(0).toUpperCase() + newColor.slice(1);
});