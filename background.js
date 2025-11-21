// Mouse-following colored pixels
let pixelSize = 14;
let pixels = [];
let colors = ['#A24DC4', '#FF8E01', '#FF00B6']; // Purple, Orange, Pink

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('background-canvas');
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
    frameRate(60);
}

function draw() {
    background(48, 48, 48); // #303030 base color
    noStroke();

    // Update and draw existing pixels
    for (let i = pixels.length - 1; i >= 0; i--) {
        let p = pixels[i];

        // Draw pixel
        fill(p.color);
        rect(p.x, p.y, pixelSize, pixelSize);

        // Fade out and remove
        p.life--;
        if (p.life <= 0) {
            pixels.splice(i, 1);
        }
    }

    // Add new pixels at mouse position
    if (frameCount % 4 === 0) { // Add pixels every 4 frames
        let numPixels = floor(random(2, 5)); // 2-4 pixels
        for (let i = 0; i < numPixels; i++) {
            let offsetX = floor(random(-30, 30) / pixelSize) * pixelSize;
            let offsetY = floor(random(-30, 30) / pixelSize) * pixelSize;
            pixels.push({
                x: floor(mouseX / pixelSize) * pixelSize + offsetX,
                y: floor(mouseY / pixelSize) * pixelSize + offsetY,
                color: random(colors),
                life: floor(random(30, 60)) // Life span in frames
            });
        }
    }

    // Limit total pixels
    if (pixels.length > 150) {
        pixels.splice(0, pixels.length - 150);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
