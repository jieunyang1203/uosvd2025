// Lightweight colored pixel background. Plain canvas removes the external script
// load and lowers mobile frame cost.
(function () {
    const container = document.getElementById('background-canvas');
    if (!container) return;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    canvas.setAttribute('aria-hidden', 'true');
    container.appendChild(canvas);

    const desktopColors = [
        { r: 3, g: 255, b: 0 },
        { r: 148, g: 166, b: 255 },
        { r: 255, g: 22, b: 252 },
        { r: 255, g: 163, b: 1 }
    ];
    const mobileColors = desktopColors;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let pixelSize = 6;
    let colors = desktopColors;
    let leftZoneGray = false;
    let isMobileLayout = false;
    let spreadRange = 60;
    let spawnInterval = 55;
    let spawnMin = 2;
    let spawnMax = 5;
    let maxPixels = 200;
    let targetFrameTime = 1000 / 60;
    let lastFrameTime = 0;
    let lastSpawnTime = 0;
    let scrollQuietUntil = 0;
    let rafId = null;
    let pixels = [];
    let pointerX = window.innerWidth / 2;
    let pointerY = window.innerHeight / 2;

    const rand = (min, max) => Math.random() * (max - min) + min;
    const randInt = (min, max) => Math.floor(rand(min, max + 1));
    const choice = (array) => array[Math.floor(Math.random() * array.length)];
    const align = (value) => Math.floor(value / pixelSize) * pixelSize;

    function configureBackgroundForViewport() {
        const wasMobileLayout = isMobileLayout;
        isMobileLayout = window.matchMedia('(max-width: 768px)').matches;

        if (isMobileLayout) {
            pixelSize = 10;
            colors = mobileColors;
            leftZoneGray = false;
            spawnInterval = 620;
            spawnMin = 1;
            spawnMax = 2;
            maxPixels = 24;
            targetFrameTime = 1000 / 14;
        } else {
            pixelSize = 6;
            colors = desktopColors;
            leftZoneGray = !!document.querySelector('.divider-v');
            targetFrameTime = 1000 / 60;

            if (leftZoneGray) {
                spreadRange = 60;
                spawnInterval = 50;
                spawnMin = 2;
                spawnMax = 5;
                maxPixels = 200;
            } else {
                spreadRange = 44;
                spawnInterval = 65;
                spawnMin = 1;
                spawnMax = 4;
                maxPixels = 130;
            }
        }

        if (wasMobileLayout !== isMobileLayout) {
            pixels = [];
        }
    }

    function resizeCanvas() {
        width = Math.max(1, window.innerWidth);
        height = Math.max(1, window.innerHeight);
        dpr = isMobileLayout ? 1 : Math.min(window.devicePixelRatio || 1, 1.5);

        canvas.width = Math.round(width * dpr);
        canvas.height = Math.round(height * dpr);
        canvas.style.width = width + 'px';
        canvas.style.height = height + 'px';
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function seedMobilePixels() {
        if (!isMobileLayout || width === 0 || height === 0 || pixels.length) return;
        for (let i = 0; i < 10; i++) {
            pixels.push(createMobilePixel(rand(0, width), rand(0, height)));
        }
    }

    function createMobilePixel(x, y) {
        const maxLife = randInt(70, 130);
        return {
            x: align(x),
            y: align(y),
            vx: rand(-0.18, 0.18),
            vy: rand(-0.18, 0.18),
            color: choice(colors),
            size: choice([pixelSize * 2, pixelSize * 2.5, pixelSize * 3]),
            life: maxLife,
            maxLife
        };
    }

    function createDesktopPixel() {
        const offsetX = align(rand(-spreadRange, spreadRange));
        const offsetY = align(rand(-spreadRange, spreadRange));
        const maxLife = randInt(30, 60);
        let color;

        if (leftZoneGray && pointerX < width * 0.25) {
            const v = randInt(60, 190);
            color = { r: v, g: v, b: v };
        } else {
            color = choice(colors);
        }

        return {
            x: align(pointerX) + offsetX,
            y: align(pointerY) + offsetY,
            color,
            size: choice([pixelSize * 2, pixelSize * 2.5, pixelSize * 3]),
            life: maxLife,
            maxLife
        };
    }

    function drawRisoPoint(x, y, size, color, opacity) {
        const radius = size / 2;
        ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity})`;

        for (let i = -radius; i <= radius; i += pixelSize) {
            for (let j = -radius; j <= radius; j += pixelSize) {
                if (Math.sqrt(i * i + j * j) <= radius) {
                    const px = align(x + i);
                    const py = align(y + j);
                    if (px >= 0 && px <= width && py >= 0 && py <= height) {
                        ctx.fillRect(px, py, pixelSize, pixelSize);
                    }
                }
            }
        }
    }

    function spawnPixels(now) {
        if (now - lastSpawnTime < spawnInterval) return;
        lastSpawnTime = now;

        const total = randInt(spawnMin, spawnMax);
        for (let i = 0; i < total; i++) {
            pixels.push(isMobileLayout
                ? createMobilePixel(rand(0, width), rand(0, height))
                : createDesktopPixel());
        }

        if (pixels.length > maxPixels) {
            pixels.splice(0, pixels.length - maxPixels);
        }
    }

    function drawPixels() {
        ctx.clearRect(0, 0, width, height);

        for (let i = pixels.length - 1; i >= 0; i--) {
            const pixel = pixels[i];
            const opacityMax = isMobileLayout ? 0.48 : 1;
            const opacity = Math.max(0, Math.min(opacityMax, (pixel.life / pixel.maxLife) * opacityMax));

            drawRisoPoint(pixel.x, pixel.y, pixel.size, pixel.color, opacity);

            if (isMobileLayout) {
                pixel.x += pixel.vx;
                pixel.y += pixel.vy;
            }

            pixel.life--;
            if (pixel.life <= 0) pixels.splice(i, 1);
        }
    }

    function animate(now) {
        rafId = window.requestAnimationFrame(animate);
        if (document.hidden || now - lastFrameTime < targetFrameTime) return;
        if (isMobileLayout && now < scrollQuietUntil) return;

        lastFrameTime = now;
        spawnPixels(now);
        drawPixels();
    }

    function handlePointerMove(event) {
        pointerX = event.clientX;
        pointerY = event.clientY;
    }

    function handleResize() {
        configureBackgroundForViewport();
        resizeCanvas();
        seedMobilePixels();
    }

    function handleScroll() {
        if (!isMobileLayout) return;
        scrollQuietUntil = performance.now() + 420;
    }

    configureBackgroundForViewport();
    resizeCanvas();
    seedMobilePixels();

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, { passive: true });
    rafId = window.requestAnimationFrame(animate);

    window.addEventListener('pagehide', () => {
        if (rafId) window.cancelAnimationFrame(rafId);
    });
})();
