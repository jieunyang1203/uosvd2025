// Mouse-following colored pixels with riso-style rendering
let pixelSize = 10;
let pixels = [];
let colors = [
    { r: 72, g: 152, b: 251 },   // Blue #4898FB
    { r: 254, g: 182, b: 75 },   // Orange #FEB64B
    { r: 255, g: 75, b: 253 }    // Pink #FF4BFD
];

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('background-canvas');
    canvas.position(0, 0);
    canvas.style('z-index', '-3');
    frameRate(60);
}

function draw() {
    clear(); // Transparent background
    noStroke();

    // Update and draw existing pixels
    for (let i = pixels.length - 1; i >= 0; i--) {
        let p = pixels[i];

        // Calculate opacity based on life (fade out effect)
        let opacity = map(p.life, 0, p.maxLife, 0, 0.9);

        // Draw riso-style pixel cluster
        drawRisoPoint(p.x, p.y, p.size, p.color, opacity);

        // Fade out and remove
        p.life--;
        if (p.life <= 0) {
            pixels.splice(i, 1);
        }
    }

    // Add new pixels at mouse position
    if (frameCount % 3 === 0) { // Add pixels every 3 frames
        let numPixels = floor(random(2, 5)); // 2-4 pixels
        for (let i = 0; i < numPixels; i++) {
            let offsetX = floor(random(-60, 60) / pixelSize) * pixelSize;
            let offsetY = floor(random(-60, 60) / pixelSize) * pixelSize;
            let maxLife = floor(random(30, 60));
            pixels.push({
                x: floor(mouseX / pixelSize) * pixelSize + offsetX,
                y: floor(mouseY / pixelSize) * pixelSize + offsetY,
                color: random(colors),
                size: random([pixelSize * 2, pixelSize * 2.5, pixelSize * 3]),
                life: maxLife,
                maxLife: maxLife
            });
        }
    }

    // Limit total pixels
    if (pixels.length > 200) {
        pixels.splice(0, pixels.length - 200);
    }
}

// Riso-style point drawing (filled circle made of pixels)
function drawRisoPoint(x, y, size, color, opacity) {
    let radius = size / 2;
    for (let i = -radius; i <= radius; i += pixelSize) {
        for (let j = -radius; j <= radius; j += pixelSize) {
            let distance = sqrt(i * i + j * j);
            if (distance <= radius) {
                drawRisoPixel(x + i, y + j, color, opacity);
            }
        }
    }
}

// Draw individual pixel aligned to grid
function drawRisoPixel(x, y, color, opacity) {
    let pixelX = floor(x / pixelSize) * pixelSize;
    let pixelY = floor(y / pixelSize) * pixelSize;

    // Boundary check
    if (pixelX < 0 || pixelX > width || pixelY < 0 || pixelY > height) {
        return;
    }

    fill(color.r, color.g, color.b, opacity * 255);
    rect(pixelX, pixelY, pixelSize, pixelSize);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
