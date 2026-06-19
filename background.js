// Mouse-following colored pixels with riso-style rendering
let pixelSize = 6;
let pixels = [];
const desktopColors = [
    { r: 3, g: 255, b: 0 },      // Green #03FF00
    { r: 148, g: 166, b: 255 },  // Blue #94A6FF
    { r: 255, g: 22, b: 252 },   // Magenta #FF16FC
    { r: 255, g: 163, b: 1 }     // Orange #FFA301
];
const mobileColors = [
    { r: 3, g: 255, b: 0 },      // Green #03FF00
    { r: 148, g: 166, b: 255 },  // Blue #94A6FF
    { r: 255, g: 22, b: 252 },   // Magenta #FF16FC
    { r: 255, g: 163, b: 1 }     // Orange #FFA301
];
let colors = desktopColors;

// Grayscale-left zone only applies on the landing (where the vertical divider exists)
let leftZoneGray = false;
let isMobileLayout = false;
// Trail density / spread (slightly lower on non-landing pages)
let spreadRange = 60, spawnEvery = 3, spawnMin = 2, spawnMax = 5, maxPixels = 200;

function configureBackgroundForViewport() {
    const wasMobileLayout = isMobileLayout;
    isMobileLayout = window.matchMedia('(max-width: 768px)').matches;

    if (isMobileLayout) {
        pixelSize = 10;
        colors = mobileColors;
        leftZoneGray = false;
        spawnEvery = 5;
        spawnMin = 1;
        spawnMax = 3;
        maxPixels = 100;
    } else {
        pixelSize = 6;
        colors = desktopColors;
        let landing = !!document.querySelector('.divider-v');
        leftZoneGray = landing;
        if (landing) {
            spreadRange = 60;
            spawnEvery = 3;
            spawnMin = 2;
            spawnMax = 5;
            maxPixels = 200;
        } else {
            spreadRange = 44;
            spawnEvery = 4;
            spawnMin = 1;
            spawnMax = 4;
            maxPixels = 130;
        }
    }

    if (wasMobileLayout !== isMobileLayout) {
        pixels = [];
    }
}

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('background-canvas');
    canvas.position(0, 0);
    canvas.style('z-index', '-3');
    configureBackgroundForViewport();
    frameRate(60);
}

function draw() {
    clear(); // Transparent background
    noStroke();

    if (isMobileLayout) {
        drawMobileBackground();
        return;
    }

    // Update and draw existing pixels
    for (let i = pixels.length - 1; i >= 0; i--) {
        let p = pixels[i];

        // Calculate opacity based on life (fade out effect)
        let opacity = map(p.life, 0, p.maxLife, 0, 1.0);

        // Draw riso-style pixel cluster
        drawRisoPoint(p.x, p.y, p.size, p.color, opacity);

        // Fade out and remove
        p.life--;
        if (p.life <= 0) {
            pixels.splice(i, 1);
        }
    }

    // Add new pixels at mouse position
    if (frameCount % spawnEvery === 0) { // Add pixels periodically
        let numPixels = floor(random(spawnMin, spawnMax));
        for (let i = 0; i < numPixels; i++) {
            let offsetX = floor(random(-spreadRange, spreadRange) / pixelSize) * pixelSize;
            let offsetY = floor(random(-spreadRange, spreadRange) / pixelSize) * pixelSize;
            let maxLife = floor(random(30, 60));
            // Left of the vertical divider (logo / description area) -> grayscale
            let col;
            if (leftZoneGray && mouseX < width * 0.25) {
                let v = floor(random(60, 190));
                col = { r: v, g: v, b: v };
            } else {
                col = random(colors);
            }
            pixels.push({
                x: floor(mouseX / pixelSize) * pixelSize + offsetX,
                y: floor(mouseY / pixelSize) * pixelSize + offsetY,
                color: col,
                size: random([pixelSize * 2, pixelSize * 2.5, pixelSize * 3]),
                life: maxLife,
                maxLife: maxLife
            });
        }
    }

    // Limit total pixels
    if (pixels.length > maxPixels) {
        pixels.splice(0, pixels.length - maxPixels);
    }
}

function drawMobileBackground() {
    for (let i = pixels.length - 1; i >= 0; i--) {
        let p = pixels[i];
        let opacity = map(p.life, 0, p.maxLife, 0, 0.9);
        drawRisoPoint(p.x, p.y, p.size, p.color, opacity);

        p.x += p.vx;
        p.y += p.vy;
        p.life--;
        if (p.life <= 0) {
            pixels.splice(i, 1);
        }
    }

    if (frameCount % spawnEvery === 0) {
        let numPixels = floor(random(spawnMin, spawnMax));
        for (let i = 0; i < numPixels; i++) {
            let x = floor(random(width) / pixelSize) * pixelSize;
            let y = floor(random(height) / pixelSize) * pixelSize;
            let maxLife = floor(random(40, 80));
            pixels.push({
                x: x,
                y: y,
                vx: random(-0.5, 0.5),
                vy: random(-0.5, 0.5),
                color: random(colors),
                size: random([pixelSize * 2, pixelSize * 2.5, pixelSize * 3]),
                life: maxLife,
                maxLife: maxLife
            });
        }
    }

    if (pixels.length > maxPixels) {
        pixels.splice(0, pixels.length - maxPixels);
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
    configureBackgroundForViewport();
}
