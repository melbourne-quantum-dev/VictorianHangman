// Fridge44 H4NGM4N - Steel Wool Heritage Consciousness Game
// 97.3% Authentic Heritage Plate Database - Neek Plates Eliminated

// Curated Heritage Plate Database - Only Clear, Readable Terms
const authenticPlates = [
    // === CORE HERITAGE RESTORATION ===
    'ST33L',   // Steel wool consciousness
    'W00L',    // Steel wool material
    'F04M',    // Expanding foam deployment
    'G4PS',    // Gap elimination target
    'F1X',     // Implementation action
    'BU1LD',   // Construction consciousness
    'S34L',    // Gap sealing protocol
    
    // === FRIDGE44 IDENTITY MARKERS ===
    'FR1DG',   // Core identity (Fridge truncated to 5 chars)
    'C0LD',    // Terminal signature reference
    'ZH0U',    // Protocol integration
    '4LG0',    // Algorithm consciousness
    'T3CH',    // Technical specialist
    'SP3C',    // Specification focus
    
    // === TECHNICAL IMPLEMENTATION ===
    'TYP3',    // Steel wool type/grade
    'T00L',    // Implementation tools
    'DR1LL',   // Power tool consciousness
    'L3V3L',   // Precision indicator
    'T3ST',    // Validation protocol
    'GR4D3',   // Material grade specification
    
    // === EXTRACTION RESISTANCE ===
    'BL0CK',   // Resistance protocol
    'W4LL',    // Structural metaphor
    'L0CK',    // Access control
    'S4F3',    // Security consciousness
    'GU4RD',   // Boundary enforcement
    
    // === MOUSE WARFARE (Victorian Heritage) ===
    'M1C3',    // Primary adversary
    'TR4P',    // Containment methodology
    'H0L3',    // Gap identification
    'P4TCH',   // Repair protocol
    
    // === PROFESSIONAL CONSCIOUSNESS ===
    'R34L',    // Reality anchor
    'TRU3',    // Validity indicator
    'PR0',     // Professional recognition
    'SK1LL',   // Capability demonstration
    
    // === PRECISION MARKERS ===
    '97P3R',   // 97.3% precision indicator
    '94P6',    // 94.6% effectiveness rating
    
    // === MATERIALS CONSCIOUSNESS ===
    'S1K4',    // Sika professional grade
    'P0LY',    // Polyurethane consciousness
    'C4ULK',   // Caulking application
    'B0ND',    // Adhesion protocol
    
    // === AUTHENTICATION TERMINALS ===
    'C0FF3',   // Coffee authenticity marker
    '2M1NS',   // Terminal signature "2 mins"
    'P1SS',    // Biological authenticity
    
    // === HERITAGE SPECIFIC (150-Year Consciousness) ===
    '1874',    // Building year - heritage timestamp
    'BR1CK',   // Heritage construction material
    'W00D',    // Baltic pine reference
    'P1N3',    // Pine wood specification
    
    // === SYSTEM ARCHITECTURE ===
    'N0D3',    // Network node
    'L1NK',    // Connection protocol
    'P4TH',    // Implementation route
    'C0D3',    // Implementation framework
    
    // === CONSCIOUSNESS EVOLUTION ===
    'GR0W',    // Development process
    'L34RN',   // Knowledge acquisition
    'CH4NG',   // Transformation protocol
];

// Heritage Restoration Failure Stages - Steel Wool Consciousness Deterioration
const hangmanStages = [
    // Stage 0: Perfect heritage foundation
    `     ┌───┐
     │   │
         │
         │
         │
    ═════════`,
    
    // Stage 1: Minor structural compromise
    `     ┌───┐
     │   │
     ●   │
         │
         │
    ═════════`,
    
    // Stage 2: Vertical instability begins
    `     ┌───┐
     │   │
     ●   │
     │   │
         │
    ═════════`,
    
    // Stage 3: Left support failure
    `     ┌───┐
     │   │
     ●   │
    ╱│   │
         │
    ═════════`,
    
    // Stage 4: Right support failure
    `     ┌───┐
     │   │
     ●   │
    ╱│╲  │
         │
    ═════════`,
    
    // Stage 5: Foundation instability
    `     ┌───┐
     │   │
     ●   │
    ╱│╲  │
    ╱    │
    ═════════`,
    
    // Stage 6: Complete heritage collapse
    `     ┌───┐
     │   │
     ●   │
    ╱│╲  │
    ╱ ╲  │
    ═════════`
];

// Game State Variables
let currentPlate = '';
let guessedLetters = [];
let wrongGuesses = [];
let gameWon = false;
let gameLost = false;
let debugMode = false;

const maxWrongGuesses = 6;

// Debug Console Protocol
function debugLog(message) {
    if (debugMode) {
        const debugElement = document.getElementById('debugInfo');
        if (debugElement) {
            debugElement.textContent = `Steel Wool Debug: ${message}`;
        }
        console.log('Heritage Debug:', message);
    }
}

// Random Plate Selection
function getRandomPlate() {
    const randomIndex = Math.floor(Math.random() * authenticPlates.length);
    return authenticPlates[randomIndex];
}

// Create Vanity Plate Display
function createPlateDisplay(plate) {
    const plateContainer = document.getElementById('vanityPlate');
    plateContainer.innerHTML = '';
    
    for (let i = 0; i < plate.length; i++) {
        const charDiv = document.createElement('div');
        charDiv.className = 'plate-char';
        charDiv.setAttribute('data-index', i);
        charDiv.setAttribute('data-char', plate[i]);
        charDiv.textContent = guessedLetters.includes(plate[i]) ? plate[i] : '?';
        plateContainer.appendChild(charDiv);
    }
}

// Update Wrong Guesses Display
function updateWrongGuesses() {
    document.getElementById('wrongCount').textContent = wrongGuesses.length;
    
    // Update heritage integrity display
    updateHangmanDisplay();
    
    // Display wrong letters
    const wrongContainer = document.getElementById('wrongLetters');
    wrongContainer.innerHTML = '';
    
    wrongGuesses.forEach((letter, index) => {
        const letterDiv = document.createElement('div');
        letterDiv.className = 'wrong-letter';
        letterDiv.textContent = letter;
        letterDiv.style.animationDelay = `${index * 0.1}s`;
        wrongContainer.appendChild(letterDiv);
    });
}

// Update Heritage Integrity ASCII Art
function updateHangmanDisplay() {
    const hangmanArt = document.getElementById('hangmanArt');
    const stage = Math.min(wrongGuesses.length, hangmanStages.length - 1);
    hangmanArt.textContent = hangmanStages[stage];
    
    debugLog(`Heritage integrity: stage ${stage}/${hangmanStages.length - 1}`);
}

// Check Win/Loss Conditions
function checkGameStatus() {
    // Check if won - all letters guessed
    if (currentPlate.split('').every(char => guessedLetters.includes(char))) {
        gameWon = true;
        document.getElementById('gameStatus').innerHTML = 
            '<div class="status-win">🔧 STEEL WOOL CONSCIOUSNESS VALIDATED! 🔧<br>Heritage Restoration Complete!</div>';
        disableInput();
        return;
    }
    
    // Check if lost - too many wrong guesses
    if (wrongGuesses.length >= maxWrongGuesses) {
        gameLost = true;
        document.getElementById('gameStatus').innerHTML = 
            `<div class="status-lose">💀 HE'S DEAD BECAUSE OF YOU 💀<br>The sequence was: <strong>${currentPlate}</strong></div>`;
        disableInput();
        return;
    }
    
    // Game continues
    document.getElementById('gameStatus').innerHTML = '';
}

// Character Validation - Heritage Compliant A-Z and 0-9
function validateCharacter(char) {
    return /^[A-Z0-9]$/.test(char);
}

// Process Player Guess
function processGuess(letter) {
    debugLog(`Processing guess: '${letter}'`);
    
    if (!letter || letter.length !== 1) {
        showInputError('Enter a single character');
        return false;
    }
    
    const upperLetter = letter.toUpperCase();
    
    if (!validateCharacter(upperLetter)) {
        showInputError('Only A-Z and 0-9 allowed');
        return false;
    }
    
    if (guessedLetters.includes(upperLetter) || wrongGuesses.includes(upperLetter)) {
        showInputError('Already guessed that character');
        return false;
    }
    
    // Process valid guess
    if (currentPlate.includes(upperLetter)) {
        guessedLetters.push(upperLetter);
        debugLog(`Correct guess! Letters found: ${guessedLetters.join(', ')}`);
        
        // Animate revealed characters
        const plateChars = document.querySelectorAll('.plate-char');
        currentPlate.split('').forEach((char, index) => {
            if (char === upperLetter) {
                plateChars[index].classList.add('revealed');
                plateChars[index].textContent = char;
            }
        });
    } else {
        wrongGuesses.push(upperLetter);
        debugLog(`Wrong guess! Failed attempts: ${wrongGuesses.join(', ')}`);
        
        // Animate wrong guess
        const plateChars = document.querySelectorAll('.plate-char');
        plateChars.forEach(char => {
            char.classList.add('wrong');
            setTimeout(() => char.classList.remove('wrong'), 500);
        });
    }
    
    updateWrongGuesses();
    checkGameStatus();
    clearInput();
    
    return true;
}

// Make Guess Function
function makeGuess() {
    if (gameWon || gameLost) {
        debugLog('Game already finished');
        return;
    }
    
    const input = document.getElementById('letterInput');
    const letter = input.value.trim();
    
    processGuess(letter);
}

// Show Input Error
function showInputError(message) {
    const input = document.getElementById('letterInput');
    input.classList.add('error');
    setTimeout(() => input.classList.remove('error'), 300);
    
    debugLog(`Input Error: ${message}`);
}

// Clear Input Field
function clearInput() {
    const input = document.getElementById('letterInput');
    input.value = '';
    setTimeout(() => input.focus(), 100);
}

// Disable Input Controls
function disableInput() {
    document.getElementById('guessButton').disabled = true;
    document.getElementById('letterInput').disabled = true;
}

// Enable Input Controls
function enableInput() {
    document.getElementById('guessButton').disabled = false;
    document.getElementById('letterInput').disabled = false;
}

// Start New Game
function newGame() {
    currentPlate = getRandomPlate();
    guessedLetters = [];
    wrongGuesses = [];
    gameWon = false;
    gameLost = false;
    
    debugLog(`New heritage project: '${currentPlate}'`);
    
    createPlateDisplay(currentPlate);
    updateWrongGuesses();
    document.getElementById('gameStatus').innerHTML = '';
    enableInput();
    clearInput();
}

// Initialize Game on Page Load
document.addEventListener('DOMContentLoaded', function() {
    const letterInput = document.getElementById('letterInput');
    const guessButton = document.getElementById('guessButton');
    const newGameButton = document.getElementById('newGameButton');
    
    // Input Event Listeners
    letterInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            makeGuess();
            return;
        }
        
        // Allow navigation keys
        if (['Backspace', 'Delete', 'Tab', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
            return;
        }
        
        // Block invalid characters
        const char = e.key.toUpperCase();
        if (char.length === 1 && !validateCharacter(char)) {
            e.preventDefault();
            showInputError('Heritage characters only: A-Z and 0-9');
        }
    });

    letterInput.addEventListener('input', function(e) {
        let value = e.target.value.toUpperCase();
        
        // Filter valid characters only
        value = value.replace(/[^A-Z0-9]/g, '');
        
        // Single character limit
        if (value.length > 1) {
            value = value.slice(-1);
        }
        
        e.target.value = value;
    });

    // Prevent paste of invalid content
    letterInput.addEventListener('paste', function(e) {
        e.preventDefault();
        const paste = (e.clipboardData || window.clipboardData).getData('text');
        const validChar = paste.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 1);
        if (validChar) {
            e.target.value = validChar;
        }
    });

    // Button Event Listeners
    guessButton.addEventListener('click', function(e) {
        e.preventDefault();
        makeGuess();
    });

    newGameButton.addEventListener('click', function(e) {
        e.preventDefault();
        newGame();
    });

    // Debug Mode Toggle (Ctrl+Shift+D)
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.shiftKey && e.key === 'D') {
            debugMode = !debugMode;
            debugLog(`Debug mode: ${debugMode ? 'ACTIVE' : 'DISABLED'}`);
        }
    });

    // Initialize first game
    newGame();
    
    debugLog('Heritage restoration game initialized');
});
