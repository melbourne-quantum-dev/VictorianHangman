// Fridge44 H4NGM4N - Steel Wool Heritage Consciousness Game
// 97.3% Authentic Consciousness - Fixed Structure

// Curated Heritage Plate Database - 97.3% Authentic Consciousness
const authenticPlates = [
    // === FRIDGE44 CORE IDENTITY (Experimental Typography) ===
    'FRDG44',  // Primary consciousness - Leipzig synthesis aesthetic
    
    // === CORE HERITAGE RESTORATION ===
    'ST33L',   // Steel wool consciousness
    'W00L',    // Steel wool material
    'F04M',    // Expanding foam deployment
    'G4PS',    // Gap elimination target
    'F1X',     // Implementation action
    'BU1LD',   // Construction consciousness
    'S34L',    // Gap sealing protocol
    'S4ND',    // 220 grit methodology
    
    // === FRIDGE44 IDENTITY MARKERS ===
    'FR1DG',   // Core identity (5-char limit)
    'C0LD',    // Terminal signature reference
    'ZH0U',    // Protocol integration
    'CL4UD',   // Algorithm consciousness (shortened)
    'T3KKY',   // Technical specialist
    'GH0ST',   // Void protocol consciousness
    
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
    'N0P3',    // Boundary enforcement
    'V01D',    // Strategic absence protocol
    
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
    
    // === MATERIALS CONSCIOUSNESS (Bunnings Authentic) ===
    'S1K4',    // Sika professional grade
    'P4RF1X',  // Aisle 19 foam consciousness
    'S3LL3Y',  // Selleys brand awareness
    'UN1PR0',  // UniPro caulking guns
    'P0LY',    // Polyurethane consciousness
    'P41NT',   // 4am polyurethane burns
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
    'B4LT1C',  // Pinus Sylvestris consciousness
    
    // === SYSTEM ARCHITECTURE ===
    'N0D3',    // Network node
    'L1NK',    // Connection protocol
    'AP1',     // API connection consciousness
    'P4TH',    // Implementation route
    'C0D3',    // Implementation framework
    
    // === CONSCIOUSNESS EVOLUTION ===
    'GR0W',    // Development process
    'L34RN',   // Knowledge acquisition
    'CH4NG',   // Transformation protocol
    'EV0LV',   // Consciousness advancement
];

// Heritage Restoration Failure Stages
const hangmanStages = [
    `     ┌───┐
     │   │
         │
         │
         │
    ═════════`,
    `     ┌───┐
     │   │
     ●   │
         │
         │
    ═════════`,
    `     ┌───┐
     │   │
     ●   │
     │   │
         │
    ═════════`,
    `     ┌───┐
     │   │
     ●   │
    ╱│   │
         │
    ═════════`,
    `     ┌───┐
     │   │
     ●   │
    ╱│╲  │
         │
    ═════════`,
    `     ┌───┐
     │   │
     ●   │
    ╱│╲  │
    ╱    │
    ═════════`,
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

// Timer Variables
const TIMER_CONFIGS = {
    blitz: { minutes: 3, seconds: 0, name: "Blitz Heritage" },
    rapid: { minutes: 5, seconds: 0, name: "Rapid Restoration" },
    bullet: { minutes: 1, seconds: 0, name: "Bullet Deployment" },
    custom: { minutes: 2, seconds: 30, name: "Steel Wool Standard" }
};

let gameTimer = null;
let timeRemaining = 0;
let timerActive = false;
let selectedTimerMode = 'custom';

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
    return authenticPlates[Math.floor(Math.random() * authenticPlates.length)];
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
    updateHangmanDisplay();
    
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
    if (currentPlate.split('').every(char => guessedLetters.includes(char))) {
        gameWon = true;
        document.getElementById('gameStatus').innerHTML = 
            '<div class="status-win">🔧 STEEL WOOL CONSCIOUSNESS VALIDATED! 🔧<br>Heritage Restoration Complete!</div>';
        disableInput();
        stopTimer();
        return;
    }
    
    if (wrongGuesses.length >= maxWrongGuesses) {
        gameLost = true;
        document.getElementById('gameStatus').innerHTML = 
            `<div class="status-lose">💀 HE'S DEAD BECAUSE OF YOU 💀<br>The sequence was: <strong>${currentPlate}</strong></div>`;
        disableInput();
        stopTimer();
        return;
    }
    
    document.getElementById('gameStatus').innerHTML = '';
}

// Character Validation
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

// Input Helper Functions
function showInputError(message) {
    const input = document.getElementById('letterInput');
    input.classList.add('error');
    setTimeout(() => input.classList.remove('error'), 300);
    debugLog(`Input Error: ${message}`);
}

function clearInput() {
    const input = document.getElementById('letterInput');
    input.value = '';
    setTimeout(() => input.focus(), 100);
}

function disableInput() {
    document.getElementById('guessButton').disabled = true;
    document.getElementById('letterInput').disabled = true;
}

function enableInput() {
    document.getElementById('guessButton').disabled = false;
    document.getElementById('letterInput').disabled = false;
}

// Timer Functions
function formatTime(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function updateTimerDisplay() {
    const timerValue = document.getElementById('timerValue');
    const timerStatus = document.getElementById('timerStatus');
    
    if (!timerValue || !timerStatus) return; // Timer not initialized yet
    
    if (timerActive) {
        timerValue.textContent = formatTime(timeRemaining);
        timerStatus.textContent = `${TIMER_CONFIGS[selectedTimerMode].name} Active`;
        
        if (timeRemaining <= 10) {
            timerValue.style.color = '#ff4444';
            timerValue.style.animation = 'pulse 0.5s ease-in-out infinite';
        } else if (timeRemaining <= 30) {
            timerValue.style.color = '#ff8800';
            timerValue.style.animation = 'none';
        } else {
            timerValue.style.color = '#00ff00';
            timerValue.style.animation = 'none';
        }
    } else {
        const config = TIMER_CONFIGS[selectedTimerMode];
        const totalSeconds = config.minutes * 60 + config.seconds;
        timerValue.textContent = formatTime(totalSeconds);
        timerStatus.textContent = 'Timer Disabled';
        timerValue.style.color = '#888';
        timerValue.style.animation = 'none';
    }
}

function startTimer() {
    if (timerActive) return;
    
    const config = TIMER_CONFIGS[selectedTimerMode];
    timeRemaining = config.minutes * 60 + config.seconds;
    timerActive = true;
    
    debugLog(`Timer started: ${config.name} - ${formatTime(timeRemaining)}`);
    
    gameTimer = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay();
        
        if (timeRemaining <= 0) {
            clearInterval(gameTimer);
            timerActive = false;
            timeExpired();
        }
    }, 1000);
    
    updateTimerDisplay();
}

function stopTimer() {
    if (gameTimer) {
        clearInterval(gameTimer);
        gameTimer = null;
    }
    timerActive = false;
    updateTimerDisplay();
}

function resetTimer() {
    stopTimer();
    updateTimerDisplay();
}

function timeExpired() {
    debugLog('Time expired - Heritage restoration failed');
    
    gameLost = true;
    document.getElementById('gameStatus').innerHTML = 
        `<div class="status-lose">⏰ TIME'S UP - HERITAGE FAILURE ⏰<br>Steel wool deployment too slow!<br>The sequence was: <strong>${currentPlate}</strong></div>`;
    
    disableInput();
    
    const timerValue = document.getElementById('timerValue');
    if (timerValue) {
        timerValue.style.animation = 'flash 0.3s ease-in-out 3';
    }
}

function toggleTimer() {
    const timerToggle = document.getElementById('timerToggle');
    const timerMode = document.getElementById('timerMode');
    
    if (timerActive) {
        stopTimer();
        timerToggle.textContent = 'Enable Timer';
        timerMode.disabled = false;
        debugLog('Timer disabled');
    } else {
        selectedTimerMode = timerMode.value;
        startTimer();
        timerToggle.textContent = 'Disable Timer';
        timerMode.disabled = true;
        debugLog(`Timer enabled: ${TIMER_CONFIGS[selectedTimerMode].name}`);
    }
}

// Create Timer Display Elements
function createTimerDisplay() {
    const timerHTML = `
        <div class="timer-section">
            <div class="timer-controls">
                <select id="timerMode" class="timer-select">
                    <option value="blitz">Blitz Heritage (3:00)</option>
                    <option value="rapid">Rapid Restoration (5:00)</option>
                    <option value="bullet">Bullet Deployment (1:00)</option>
                    <option value="custom" selected>Steel Wool Standard (2:30)</option>
                </select>
                <button id="timerToggle" class="btn timer-btn">Enable Timer</button>
            </div>
            <div class="timer-display" id="timerDisplay">
                <div class="timer-label">Time Remaining</div>
                <div class="timer-value" id="timerValue">--:--</div>
                <div class="timer-status" id="timerStatus">Timer Disabled</div>
            </div>
        </div>
    `;
    
    const inputSection = document.querySelector('.input-section');
    if (inputSection) {
        inputSection.insertAdjacentHTML('afterend', timerHTML);
    }
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
    
    // Reset timer if active
    if (timerActive) {
        resetTimer();
        const timerToggle = document.getElementById('timerToggle');
        if (timerToggle && timerToggle.textContent === 'Disable Timer') {
            startTimer();
        }
    }
}

// Initialize Game
function initializeGame() {
    const letterInput = document.getElementById('letterInput');
    const guessButton = document.getElementById('guessButton');
    const newGameButton = document.getElementById('newGameButton');
    
    if (!letterInput || !guessButton || !newGameButton) {
        console.error('Required game elements not found');
        return;
    }
    
    // Input Event Listeners
    letterInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            makeGuess();
            return;
        }
        
        if (['Backspace', 'Delete', 'Tab', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
            return;
        }
        
        const char = e.key.toUpperCase();
        if (char.length === 1 && !validateCharacter(char)) {
            e.preventDefault();
            showInputError('Heritage characters only: A-Z and 0-9');
        }
    });

    letterInput.addEventListener('input', function(e) {
        let value = e.target.value.toUpperCase();
        value = value.replace(/[^A-Z0-9]/g, '');
        if (value.length > 1) {
            value = value.slice(-1);
        }
        e.target.value = value;
    });

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

    // Debug Mode Toggle
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.shiftKey && e.key === 'D') {
            debugMode = !debugMode;
            debugLog(`Debug mode: ${debugMode ? 'ACTIVE' : 'DISABLED'}`);
        }
    });

    debugLog('Heritage restoration game initialized');
}

// Initialize Timer System
function initializeTimer() {
    createTimerDisplay();
    
    const timerToggle = document.getElementById('timerToggle');
    const timerMode = document.getElementById('timerMode');
    
    if (timerToggle && timerMode) {
        timerToggle.addEventListener('click', toggleTimer);
        timerMode.addEventListener('change', function() {
            selectedTimerMode = this.value;
            updateTimerDisplay();
        });
        
        updateTimerDisplay();
        debugLog('Chess timer system initialized');
    }
}

// Main Initialization
document.addEventListener('DOMContentLoaded', function() {
    initializeGame();
    
    // Initialize timer after a brief delay
    setTimeout(() => {
        initializeTimer();
        newGame();
    }, 100);
});
