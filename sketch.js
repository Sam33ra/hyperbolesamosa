const zine = {
    title: "hyperbole SAMOSA",
    description: "this is the description for how to listen to a samosa. Hyperbole Samosa-\nrandomised melodies,\nHihats glitches,\nand a prophetic dreaming of\nalternate definitions for\nartificial intelligence",
    author: "roguentropy"
}

let img; // samosa_bgremove.png (for spinning on the right)
let img2; // 2 samosas
let img3; // birds-of-india-colonial painting-bgremove.jpg
let img4; // hornbill_bgremove.png
let img5; // peacock_bgremove.png
let img6; // sparrow_bgremove.png
let img7; // 2025-05-04 (bgremove).png
let img8; // mughal_bgremove.png
let img9; // navkoonjar_bgremove.png
let img10; // samosa_bgcoloredit_2.png
let img11; // Ravana_fighting_with_Jatayu.jpg
let img12; // saraswati.jpg
let img13; // Ravi_Varma-Ravana_Sita_Jathayu.jpg
let img14; //Indian_myth_and_legend.jpg(damyanti&hans)
let img15; //peacock.jpg



// --- GLOBAL VARIABLES FOR PAGE ONE ANIMATION ---
// Bird images (will be assigned from img3-img7 in preload)
let birdImage1; // birds-of-india-colonial painting-bgremove.jpg
let birdImage2; // hornbill_bgremove.png
let birdImage3; // peacock_bgremove.png
let birdImage4; // sparrow_bgremove.png
let birdImage5; // 2025-05-04 (bgremove).png

// Bird positions and speeds
let bird1X, bird1Y, bird1Speed = 20; // Left to Right (speed increased by 4x)
let bird2X, bird2Y, bird2Speed = 12; // Up to Down (speed increased by 4x)
let bird3X, bird3Y, bird3Speed = 15; // Right to Left (speed increased by 4x)
let bird4X, bird4Y, bird4SpeedX = 5, bird4SpeedY = 6; // Diagonal (speeds increased by 4x)
let bird5X, bird5Y; // For random movement
let bird5RandomSpeed = 8; // Base speed for random bird (speed increased by 4x)
let birdScale = 0.5; // ADJUSTED: Scale factor for all birds (now 0.5)

// New global variables for Page One background
let m = 0; // Global variable for animation (currently unused without pulsation/rotation)
let samosaImage; // Variable to hold the loaded samosa image for Page One background

// Audio variables for mic input
let mic;
let fft;

// threePage - REMOVED myGlitch declaration
let pageThreeImages = []; // Array to hold images for page three (img11-img15)
let pageThreeImageCounter = 0; // Counter for cycling through page three images

function preload() {
    // Ensure these image files are in the same directory as your sketch.js
    img = loadImage("samosa_bgremove.png"); // The main image for the cover
    img2 = loadImage("samosa.png"); // Kept loaded for other pages if they use it
    img3 = loadImage("birds-of-india-colonial painting-bgremove.jpg");
    img4 = loadImage("hornbill_bgremove.png");
    img5 = loadImage("peacock_bgremove.png");
    img6 = loadImage("sparrow_bgremove.png");
    img7 = loadImage("2025-05-04 (bgremove).png");
    img8 = loadImage("mughal_bgremove.png");
    img9 = loadImage("navkoonjar_bgremove.png"); // Added img9
    img10 = loadImage("samosa_bgcoloredit_2.png"); // Added img10
    img11 = loadImage("Ravana_fighting_with_Jatayu.jpg"); // Added img11
    img12 = loadImage("saraswati.jpg");
    img13 = loadImage("Ravi_Varma-Ravana_Sita_Jathayu.jpg");
    img14 = loadImage("Indian_myth_and_legend.jpg");
    img15 = loadImage("peacock.jpg");

    // Assign already loaded images to birdImage variables for Page One
    birdImage1 = img3;
    birdImage2 = img4;
    birdImage3 = img5;
    birdImage4 = img6;
    birdImage5 = img7;

    // Page One background
    samosaImage = loadImage("samosa_bgremove.png"); // Use the same image as 'img' for this background

    // pagethree - Directly add images to the array, no glitch
    pageThreeImages.push(img11);
    pageThreeImages.push(img12);
    pageThreeImages.push(img13);
    pageThreeImages.push(img14);
    pageThreeImages.push(img15);
}

function setupPage() {
    frameRate(30); // Set a higher frame rate for smoother animation

    // Initialize audio input
    mic = new p5.AudioIn();
    mic.start();

    // Initialize FFT for frequency analysis
    fft = new p5.FFT();
    fft.setInput(mic);

    // for pageOne
    bird1X = -birdImage1.width * birdScale; // Start off-screen left
    bird1Y = one.height * 0.30; // ADJUSTED: Bird 1 starts at 30% from top

    bird2X = one.width * 0.5; // Start towards right (relative to one's width)
    bird2Y = -birdImage2.height * birdScale; // Adjusted: Start just off-screen top based on new scale

    bird3X = one.width; // Start off-screen right
    bird3Y = one.height * 0.70; // ADJUSTED: Peacock starts at 70% from top, on the right

    bird4X = -birdImage4.width * birdScale; // Adjusted: Start just off-screen top-left based on new scale
    bird4Y = -birdImage4.height * birdScale; // Adjusted: Start just off-screen top-left based on new scale

    bird5X = one.random(one.width); // Start at a random X on 'one'
    bird5Y = one.random(one.height); // Start at a random Y on 'one'

    // Set imageMode for 'one' graphics buffer
    one.imageMode(one.CENTER);

    // Removed all glitch-related setup
}

function drawPage() {
    // --- Cover Page: Audio-Reactive "Unknown Pleasures" Wave Background ---
    cover.background(0); // Black background

    let w = cover.width;
    let h = cover.height;
    let centerX = w / 2;
    let centerY = h / 2;
    let maxRadius = Math.max(w, h) * 0.7; // Used for text curving radius

    // Get audio data for reactivity
    fft.analyze();
    let bassEnergy = fft.getEnergy('bass'); // Get the energy of the bass frequencies
    let midEnergy = fft.getEnergy('mid'); // Get the energy of mid frequencies

    // Parameters for the waves
    let numWaves = 25; // Reduced number of waves for more spacing
    let waveSpacing = h / (numWaves + 2); // Increased spacing between waves
    let waveAmplitude = 80; // Increased base height of the wave peaks for more pronounced waves
    let noiseScaleX = 0.006; // Controls horizontal "zoom" of noise
    let noiseScaleY = 0.05; // Controls vertical "zoom" across waves
    let noiseTimeScale = 0.05; // Controls animation speed of the noise

    // Map audio energy to influence wave amplitude
    // Increased the mapping range (from 0 to 2.0) for stronger audio reactivity
    let audioAmplitudeMod = cover.map(bassEnergy, 0, 255, 0, 2.0); // amplify peaks by up to 200%
    let audioOffsetMod = cover.map(midEnergy, 0, 255, -20, 80); // Mid energy can cause slight vertical shifts

    cover.noFill(); // Waves should not be filled
    cover.stroke(255); // White stroke for the waves
    cover.strokeWeight(2); // Thinner stroke for multiple lines

    // Draw multiple waves
    for (let i = 0; i < numWaves; i++) {
        cover.beginShape();

        // Add an initial curveVertex outside the visible area for smoothness
        cover.curveVertex(0, (i + 1) * waveSpacing + h * 0.1);

        for (let x = 0; x <= w; x += 5) {
            // Calculate noise offset
            let noiseVal = cover.noise(x * noiseScaleX, i * noiseScaleY + cover.frameCount * noiseTimeScale);
            let yOffset = cover.map(noiseVal, 0, 1, -waveAmplitude, waveAmplitude);

            // Add audio influence to the yOffset
            // Applying audioAmplitudeMod directly multiplies the existing noise-based yOffset
            yOffset += yOffset * audioAmplitudeMod;

            // Base Y position for this wave line
            let baseLineY = (i + 1) * waveSpacing + h * 0.1; // Shift waves down a bit from top

            cover.curveVertex(x, baseLineY + yOffset + audioOffsetMod);
        }

        // Add a final curveVertex outside the visible area for smoothness
        cover.curveVertex(w, (i + 1) * waveSpacing + h * 0.1);

        cover.endShape();
    }


    // --- Main Samosa Image (img) on Right, Spinning ---
    let baseSamosaHeight = cover.height * 0.40;
    let baseSamosaWidth = baseSamosaHeight * (img.width / img.height);

    let paddingRight = cover.width * 0.00001; // 5% padding from the right edge
    let paddingBottom = cover.height * 0.15; // 15% padding from the bottom edge

    // Calculate position for the center of the image
    let imageX = cover.width - baseSamosaWidth / 2 - paddingRight;
    let imageY = cover.height - baseSamosaHeight / 2 - paddingBottom;

    cover.push(); // Start a new transformation state
    cover.translate(imageX, imageY); // Move origin to the center of the image
    cover.rotate(cover.frameCount * 0.05); // Rotate based on frameCount for continuous spin (adjust 0.05 for speed)
    cover.image(img, -baseSamosaWidth / 2, -baseSamosaHeight / 2, baseSamosaWidth, baseSamosaHeight); // Draw image centered at the new origin
    cover.pop(); // Restore previous transformation state


    // --- Cover Page: Title Text (on Left) ---
    cover.textFont("Yatra One")
    cover.fill(197, 250, 120); // tota hara
    cover.stroke(255); // White stroke
    cover.strokeWeight(4);

    // For curved text, we'll use CENTER alignment relative to the curve's center
    cover.textAlign(CENTER, CENTER);

    let hyperboleText = "hyperbole";
    let hyperboleTextRadius = maxRadius * 0.35; // Adjusted radius for the curve
    let hyperboleStartAngle = cover.radians(-110); // Starting angle (adjust to position on left)
    let hyperboleEndAngle = cover.radians(0); // Ending angle
    let hyperboleAngleStep = (hyperboleEndAngle - hyperboleStartAngle) / hyperboleText.length;

    cover.push(); // Isolate transformations for the curved text
    // Translate origin to a point on the left side, slightly above center
    cover.translate(cover.width * 0.26, cover.height * 0.35);

    for (let i = 0; i < hyperboleText.length; i++) {
        let char = hyperboleText.charAt(i);
        let charAngle = hyperboleStartAngle + i * hyperboleAngleStep;

        let x = hyperboleTextRadius * cover.cos(charAngle);
        let y = hyperboleTextRadius * cover.sin(charAngle);

        cover.push();
        cover.translate(x, y);
        cover.rotate(charAngle + cover.HALF_PI); // Rotate character to align with the curve
        cover.textSize(90); // Adjust size for individual characters
        cover.text(char, 0, 0);
        cover.pop();
    }
    cover.pop();

    // "SAMOSA" text - placed below "hyperbole" on the left
    cover.textSize(150); // Larger size for "SAMOSA"
    cover.textAlign(LEFT, TOP); // Revert to left alignment for this text
    cover.text("SAMOSA", cover.width * 0.06, cover.height * 0.39); // Position below "hyperbole"


    // ------------------------------------Page 'one': Animated Birds with Samosa Grid Background -----------------------------------------------------------

    // --- Samosa Grid Background ---
    one.background(0); // Black background for the grid
    one.imageMode(one.CENTER); // Set imageMode for 'one' graphics buffer

    // Define grid spacing and size for the geometric elements
    let gridSize = 60;
    let imageWidth = 70; // Fixed width of each samosa image

    for (let x = 0; x < one.width; x += gridSize) {
        for (let y = 0; y < one.height; y += gridSize) {
            one.push();

            one.translate(x + gridSize / 2, y + gridSize / 2);

            // Calculate the image height to maintain aspect ratio (using fixed imageWidth)
            let imageHeight = imageWidth * (samosaImage.height / samosaImage.width);

            // Draw the samosa image with maintained aspect ratio at its fixed size
            one.image(samosaImage, 0, 0, imageWidth, imageHeight);

            one.pop();
        }
    }

    // Apply no stroke globally for this page (if needed for other elements later)
    one.noStroke();

    // --- BIRD ANIMATIONS ---
    // Bird 1: Left to Right - Reverted to original birdScale
    one.image(birdImage1, bird1X, bird1Y, birdImage1.width * birdScale, birdImage1.height * birdScale);
    bird1X += bird1Speed;
    if (bird1X > one.width) {
        bird1X = -birdImage1.width * birdScale; // Reset position with original size
    }

    // Bird 2: Up to Down - Reverted to original birdScale
    one.image(birdImage2, bird2X, bird2Y, birdImage2.width * birdScale, birdImage2.height * birdScale);
    bird2Y += bird2Speed;
    if (bird2Y > one.height) {
        bird2Y = -birdImage2.height * birdScale; // Reset position with original size
    }

    // Bird 3: Right to Left (Peacock) - Size remains half its size (0.5 * birdScale)
    one.image(birdImage3, bird3X, bird3Y, birdImage3.width * birdScale * 0.5, birdImage3.height * birdScale * 0.5);
    bird3X -= bird3Speed; // Move left
    if (bird3X < -birdImage3.width * birdScale * 0.5) { // Reset position with its current (half) size
        bird3X = one.width; // Reset to right
    }

    // Bird 4: Diagonal - Reverted to original birdScale
    one.image(birdImage4, bird4X, bird4Y, birdImage4.width * birdScale, birdImage4.height * birdScale);
    bird4X += bird4SpeedX;
    bird4Y += bird4SpeedY;
    if (bird4X > one.width || bird4Y > one.height) {
        bird4X = -birdImage4.width * birdScale; // Reset position with original size
        bird4Y = -birdImage4.height * birdScale; // Reset position with original size
    }

    one.image(birdImage5, bird5X, bird5Y, birdImage5.width * birdScale, birdImage5.height * birdScale);
    bird5X += one.random(-bird5RandomSpeed, bird5RandomSpeed);
    bird5Y += one.random(-bird5RandomSpeed, bird5RandomSpeed);

    // Wrap around logic for random bird (updated to original size)
    if (bird5X > one.width) bird5X = 0 - (birdImage5.width * birdScale);
    if (bird5X < 0 - (birdImage5.width * birdScale)) bird5X = one.width;
    if (bird5Y > one.height) bird5Y = 0 - (birdImage5.height * birdScale);
    if (bird5Y < 0 - (birdImage5.height * birdScale)) bird5Y = one.height;

    // Add text to Page 'one' on the right side
    one.push();
    one.textFont("Modak"); // Using Modak, as it works on Page Two
    one.fill(255, 105, 180); // Hot Pink
    one.textSize(100);
    // Set text alignment to LEFT, TOP for unambiguous positioning
    one.textAlign(one.LEFT, one.TOP);
    // Positioned clearly on the top-left area to ensure visibility
    one.text("Do you hear\nmusic\nfrom the forest?...", one.width * 0.1, one.height * 0.1);
    one.pop();

    // ------------------------------------Page 'two': Random Images on Right Side -----------------------------------------------------------
    two.background(215); // Set a background color for Page Two (e.g., white)
    two.noStroke(); // No stroke for the images

    // Updated array of images to choose from, including img10-13, 14, 15
    let randomImages = [img3, img8, img9, img10, img11, img12, img13, img14, img15];
    let numRandomImages = 3; // Reduced number of random images to display for slower animation

    for (let i = 0; i < numRandomImages; i++) {
        let imgToDraw = two.random(randomImages);
        let imgWidth = imgToDraw.width * 0.4;
        let imgHeight = imgToDraw.height * 0.2;

        // Generate random X position only in the right half of the canvas
        let randomX = two.random(two.width / 2, two.width - imgWidth / 2);
        let randomY = two.random(imgHeight / 2, two.height - imgHeight / 2);

        two.image(imgToDraw, randomX, randomY, imgWidth, imgHeight);
    }
    // two page left side
    two.push();
    two.textSize(100);
    two.textFont("Yatra One");
    two.fill(255, 105, 180); // Hot Pink
    two.textAlign(two.LEFT, two.TOP);
    two.text("Hyperbole Samosa-\na connection between\nHihats glitches,\nartificial intelligence,\nand himalayan birds\nchirping out bangers", two.width * 0.05, two.height * 0.1);
    two.pop();


    three.background(0); // Black background

    // Display multiple random images with transparency and random sizes
    if (pageThreeImages.length > 0) {
        let numImagesToDraw = 5; // You can adjust this number for more or fewer images per frame (e.g., 5-10)

        for (let i = 0; i < numImagesToDraw; i++) {
            // Get a random image from the array each time
            let currentImage = three.random(pageThreeImages);

            // Check if the image is valid and loaded
            if (currentImage && currentImage.width > 0 && currentImage.height > 0) {
                // Set image transparency (e.g., 100-200 alpha out of 255) for layering
                // Using a random transparency can add to the layered effect
                three.tint(255, three.random(100, 200)); // Random alpha between 100 and 200

                // Determine random size while maintaining aspect ratio
                let imgAspectRatio = currentImage.width / currentImage.height;

                // Random base size, for example, between 15% and 40% of the canvas width
                let baseSize = three.random(three.width * 0.15, three.width * 0.4);
                // Adjust these ranges as needed for desired size variety (min and max image size)

                let displayWidth = baseSize;
                let displayHeight = baseSize / imgAspectRatio;

                // Optional: If the image is extremely tall after scaling by width,
                // re-scale it based on height to prevent it from going too far off-screen vertically.
                if (displayHeight > three.height * 0.8) { // If it's more than 80% of canvas height
                    displayHeight = three.height * 0.8;
                    displayWidth = displayHeight * imgAspectRatio;
                }

                // Generate random position for the image to appear anywhere on the canvas
                // Allow images to appear slightly off-screen for a more "cut-off" or layered look
                // We're calculating top-left corner (randomX, randomY)
                let randomX = three.random(-displayWidth / 2, three.width - displayWidth / 2);
                let randomY = three.random(-displayHeight / 2, three.height - displayHeight / 2);

                three.image(currentImage, randomX, randomY, displayWidth, displayHeight);

                three.noTint(); // Reset tint after drawing each image
            } else {
                console.log("Image not ready or invalid dimensions for random draw at index:", pageThreeImages.indexOf(currentImage));
            }
        } // Closes the 'for' loop
    } // Closes the 'if (pageThreeImages.length > 0)' block


    // Page 'back'
    let bgColor = [random(255), random(255), random(255)]; // Define bgColor for this scope
    if (frameCount % 10 == 1) {
        bgColor = [random(255), random(255), random(255)];
    }

    let n_back = 75 + back.sin(frameCount * 10) * 25; // Renamed 'n' to 'n_back' to avoid conflict
    let m_back = back.map(back.cos(frameCount * 10), -1, 1, 100, 800); // Renamed 'm' to 'm_back' to avoid conflict

    back.background(bgColor)
    back.textFont("Anek Latin", 200, {
        wdth: n_back,
        wght: m_back
    })
    back.gridLayout("thanx")


    // Page 'poster'
    poster.background("purple")
    poster.textFont("Anek Latin", 200, {
        wdth: 75,
        wght: 600
    })
    poster.gridLayout("burp", 20, 10)
} 