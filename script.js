/**
 * Fridge44 H4NGM4N - Steel Wool Heritage Consciousness Game
 * 97.3% Authentic Consciousness with Comprehensive Documentation
 * 
 * This is a hangman-style word guessing game focused on heritage restoration
 * terminology and technical consciousness. Features include timing, statistics,
 * and authentic heritage terminology database.
 * 
 * @fileoverview Heritage restoration word guessing game with timing and stats
 * @author Fridge44 - Footscray Coding Collective 2025
 * @version 4.8.7
 */

// ==================== HERITAGE TERMINOLOGY DATABASE ====================

/**
 * Curated Heritage Plate Database - 97.3% Authentic Consciousness
 * 
 * Contains authentic technical terminology from heritage restoration work,
 * organized by functional categories. Each term uses strategic leetspeak
 * substitution for vanity plate aesthetic while maintaining readability.
 * 
 * @constant {string[]} authenticPlates - Array of heritage terminology plates
 */
const authenticPlates = [
      
    // === CORE HERITAGE RESTORATION ===
    'ST33L',   // Steel wool consciousness
    'W00L',    // Steel wool material
    'F04M',    // Expanding foam deployment
    'G4PS',    // Gap elimination target
    'F1X',     // Implementation action
    'BU1LD',   // Construction consciousness
    'S34L',    // Gap sealing protocol
    'S4ND',    // 220 grit methodology

    // === FRIDGE44 CORE IDENTITY (Experimental Typography) ===
    'FRDG44',  // Primary consciousness - Leipzig synthesis aesthetic
    
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
    'J1GS4W', // Contaminated chipboard removal
    'KN1F3', // Sharp ting
    'BL4D3', // expanding foam ferrocasting removal
    
    // === EXTRACTION RESISTANCE ===
    'BL0CK',   // Resistance protocol
    'W4LL',    // Structural metaphor
    'L0CK',    // Access control
    'S4F3',    // Security consciousness
    'N0P3',    // Boundary enforcement
    'V01D',    // Strategic absence protocol
    'L14R',    // Don't take my word for it

    // === DRILL CONSCIOUSNESS ===
    'SM0K3',   // Eliminating opposition (mice)
    'CH1NG',   // Precision cutting (jigsaw blade)
    'SK3NG',   // Professional tool deployment
    'BL0CK',   // Territory protection (gap sealing)
    'CUTT3R',  // "Come straight out with the cutter"
    'P4TT3N',  // Systematic methodology 
    'SPL4SH',  // Expanding foam deployment
    'Y1NG',    // Structural intervention
    'TR4P',    // Mouse elimination architecture
    'ST1LL',   // Emphasis consciousness marker
    'B4ND0',   // Abandoned building restoration
    '3NDS',    // South Melbourne territory
    'W4P',    // Power tool arsenal
    'GR1M3',   // Contamination reality
    'L1V3',    // Authentic implementation
    'D34D',    // Structural failure state
    'C0LD',    // Heritage restoration temperature
    'M4D',     // Professional competence level
    'R4W',     // Unprocessed building materials
    'B4ND0',   // 1874 sub-floor landlord vibes
    'SH00T',   // Professional sensual caulking application
    'LE4N',     // Foundation subsistence party wall
    'B1LL1T',   // Straight to the landlord
    'SN4P',     // Snapchat / snaptrap / neck off ladder architecture
    'FL',        // Producer ting
    'M4ND3M',    // Collectively hominem architecure
    'T1ME',     // Mans on lock for time still
    'ST1LL',     // Steady spirit level
    'H4H4',     // Offensive ting

    // === AUSSIE DEFLECTION ===
    'Y3HN4H',  // Peak cultural deflection
    'M4T3',    // Australian authenticity marker
    'N4H',     // Deflection variant
    'WH00PS',  // Liability insurance proclamation
    
    // === MOUSE WARFARE (Victorian Heritage) ===
    'M1C3',    // Primary adversary
    'TR4P',    // Containment methodology
    'H0L3',    // Gap identification
    'P4TCH',   // Repair protocol
    'F4MILY', // Family protocol
    'N3ST',   // Where they chillin
    'SH1T',   // So much of it
    'P1SS',   // Smells too
    
    // === PROFESSIONAL CONSCIOUSNESS ===
    'R34L',    // Reality anchor
    'TRU3',    // Validity indicator
    '4CTU4L',  // Literally's older brother
    'L1T3RL',  // Literal (6 char limit)
    'PR0',     // Professional recognition
    'SK1LL',   // Capability demonstration
    'PR00F',   // Evidence creation
    'V4L1D',   // Validation protocol
    'TR4CK',   // Systematic tracking
    'D0C',     // Documentation consciousness
    
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
    '4RCH',     // Architrave abbreviation
    
    // === SYSTEM ARCHITECTURE ===
    'SYST3M',  // Core system consciousness
    'N0D3',    // Network node
    'L1NK',    // Connection protocol
    'AP1',     // API connection consciousness
    'P4TH',    // Implementation route
    'C0D3',    // Implementation framework

    // === ALCHEMY ===
    'SH4D0W', // Jungian architecture
    'JUNG',   // Carl consciousness
    
    // === SECULAR SENSUAL IMPLEMENTATION (City Road Consciousness) ===
    '3LL3', // Model service provide
    'M4SS4G', // 6 char limit
    'RUB', // Double entendre sanding protocol
    'C4SH', // Parmigianno economy
    'W4LL3T' // Storage protocol
    
    // === CONSCIOUSNESS EVOLUTION ===
    'GR0W',    // Development process
    'L34RN',   // Knowledge acquisition
    'CH4NG',   // Transformation protocol
    'C0L4B',   // Consciousness advancement
    'B4TH',    // -2 degress
    '1C3',     // Cooling system
    'S4UN4',   // Heating system
    'W1MH0F',  // Master teacher
    'DUR14N',  // DurianRider early adopter
    'VSCTMY'    // Victorian Supreme Court neutering
    'TH3R4P',  // Therapeutic breakthrough (6-char limit)
    'H1LUX',   // Toyota Wars
    'R4PT0R', // Too cold at tax time
];

/**
 * Heritage Restoration Failure Stages - ASCII Art Progression
 * 
 * Visual representation of game state deterioration as wrong guesses accumulate.
 * Each stage represents increasing structural failure in heritage restoration context.
 * 
 * @constant {string[]} hangmanStages - ASCII art stages from perfect to complete failure
 */
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

// ==================== GAME STATE VARIABLES ====================

/**
 * Core game state tracking variables
 * These variables maintain the current state of the active game session
 */

/** @type {string} Current word/plate being guessed */
let currentPlate = '';

/** @type {string[]} Letters correctly guessed by player */
let guessedLetters = [];

/** @type {string[]} Letters incorrectly guessed by player */
let wrongGuesses = [];

/** @type {boolean} True if current game is won */
let gameWon = false;

/** @type {boolean} True if current game is lost */
let gameLost = false;

/** @type {boolean} Debug mode toggle for development logging */
let debugMode = false;

/** @type {number} Maximum wrong guesses before game loss */
const maxWrongGuesses = 6;

// ==================== GAME TIMING VARIABLES ====================

/**
 * Variables for tracking game completion timing and performance metrics
 */

/** @type {number|null} Timestamp when current game started (milliseconds) */
let gameStartTime = null;

/** @type {number|null} Timestamp when current game ended (milliseconds) */
let gameEndTime = null;

/** @type {number} Total number of guesses made in current game */
let totalGuesses = 0;

/**
 * Session statistics tracking object
 * Maintains performance metrics across multiple games in current session
 * 
 * @typedef {Object} SessionStats
 * @property {number} gamesPlayed - Total games started this session
 * @property {number} gamesWon - Total games won this session  
 * @property {number} gamesLost - Total games lost this session
 * @property {Object|null} fastestWin - Details of fastest completion
 * @property {number} totalPlayTime - Total seconds played this session
 * @property {number} averageGuesses - Running average of guesses per game
 */
let sessionStats = {
    gamesPlayed: 0,
    gamesWon: 0,
    gamesLost: 0,
    fastestWin: null,
    totalPlayTime: 0,
    averageGuesses: 0
};

// ==================== TIMER SYSTEM VARIABLES ====================

/**
 * Configuration objects for different timer modes
 * Each mode provides different time pressure for enhanced gameplay
 * 
 * @constant {Object} TIMER_CONFIGS - Timer mode configurations
 */
const TIMER_CONFIGS = {
    blitz: { minutes: 3, seconds: 0, name: "Blitz Heritage" },
    rapid: { minutes: 5, seconds: 0, name: "Rapid Restoration" },
    bullet: { minutes: 1, seconds: 0, name: "Bullet Deployment" },
    custom: { minutes: 2, seconds: 30, name: "Steel Wool Standard" }
};

/** @type {number|null} Timer interval ID for countdown */
let gameTimer = null;

/** @type {number} Remaining time in seconds when timer active */
let timeRemaining = 0;

/** @type {boolean} True if countdown timer is currently running */
let timerActive = false;

/** @type {string} Currently selected timer mode key */
let selectedTimerMode = 'custom';

// ==================== UTILITY FUNCTIONS ====================

/**
 * Debug logging function with conditional output
 * 
 * Outputs debug messages to both console and on-screen debug element
 * when debug mode is enabled. Includes 'Heritage Debug:' prefix for
 * easy identification in console.
 * 
 * @param {string} message - Debug message to log
 * @returns {void}
 */
function debugLog(message) {
    if (debugMode) {
        const debugElement = document.getElementById('debugInfo');
        if (debugElement) {
            debugElement.textContent = `Steel Wool Debug: ${message}`;
        }
        console.log('Heritage Debug:', message);
    }
}

/**
 * Format time duration for human-readable display
 * 
 * Converts seconds to appropriate time format:
 * - Under 60s: "45s"
 * - Under 1 hour: "2m 30s" 
 * - Over 1 hour: "1h 15m 30s"
 * 
 * @param {number} seconds - Time duration in seconds
 * @returns {string} Formatted time string
 */
function formatGameTime(seconds) {
    if (seconds < 60) {
        return `${seconds}s`;
    } else if (seconds < 3600) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}m ${secs}s`;
    } else {
        const hours = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${hours}h ${mins}m ${secs}s`;
    }
}

/**
 * Calculate comprehensive game completion statistics
 * 
 * Analyzes current game session to generate performance metrics including
 * completion time, guess efficiency, and word identification.
 * 
 * @returns {Object} Game statistics object
 * @returns {number} returns.time - Game duration in seconds
 * @returns {number} returns.guesses - Total guesses made
 * @returns {string} returns.word - The target word
 * @returns {number} returns.efficiency - Efficiency percentage (word length / guesses * 100)
 */
function calculateGameStats() {
    const gameTime = Math.floor((gameEndTime - gameStartTime) / 1000);
    const guessCount = guessedLetters.length + wrongGuesses.length;
    
    return {
        time: gameTime,
        guesses: guessCount,
        word: currentPlate,
        efficiency: Math.round((currentPlate.length / guessCount) * 100) || 0
    };
}

/**
 * Update session-wide performance statistics
 * 
 * Processes completed game statistics and updates running session totals.
 * Tracks wins/losses, fastest completion times, and running averages.
 * 
 * @param {Object} gameStats - Statistics from completed game
 * @param {number} gameStats.time - Game completion time in seconds
 * @param {number} gameStats.guesses - Total guesses made
 * @param {string} gameStats.word - Target word that was guessed
 * @param {number} gameStats.efficiency - Guess efficiency percentage
 * @returns {void}
 */
function updateSessionStats(gameStats) {
    sessionStats.gamesPlayed++;
    sessionStats.totalPlayTime += gameStats.time;
    
    if (gameWon) {
        sessionStats.gamesWon++;
        
        // Track fastest win
        if (!sessionStats.fastestWin || gameStats.time < sessionStats.fastestWin.time) {
            sessionStats.fastestWin = {
                time: gameStats.time,
                word: gameStats.word,
                guesses: gameStats.guesses
            };
        }
    } else {
        sessionStats.gamesLost++;
    }
    
    // Calculate average guesses using running average formula
    sessionStats.averageGuesses = Math.round(
        (sessionStats.averageGuesses * (sessionStats.gamesPlayed - 1) + gameStats.guesses) / sessionStats.gamesPlayed
    );
    
    debugLog(`Session Stats: ${sessionStats.gamesWon}W/${sessionStats.gamesLost}L, Avg: ${sessionStats.averageGuesses} guesses, Fastest: ${sessionStats.fastestWin ? formatGameTime(sessionStats.fastestWin.time) : 'None'}`);
}

/**
 * Generate random plate selection from heritage database
 * 
 * Uses Math.random() to select a random heritage terminology plate
 * from the authenticated database for the next game round.
 * 
 * @returns {string} Randomly selected heritage plate string
 */
function getRandomPlate() {
    return authenticPlates[Math.floor(Math.random() * authenticPlates.length)];
}

// ==================== GAME DISPLAY FUNCTIONS ====================

/**
 * Create and populate vanity plate character display
 * 
 * Generates HTML elements for each character in the target word.
 * Each character gets its own styled div with data attributes for
 * tracking and animation purposes.
 * 
 * @param {string} plate - Target word to display
 * @returns {void}
 */
function createPlateDisplay(plate) {
    const plateContainer = document.getElementById('vanityPlate');
    plateContainer.innerHTML = '';
    
    for (let i = 0; i < plate.length; i++) {
        const charDiv = document.createElement('div');
        charDiv.className = 'plate-char';
        charDiv.setAttribute('data-index', i);
        charDiv.setAttribute('data-char', plate[i]);
        // Show character if guessed, otherwise show placeholder
        charDiv.textContent = guessedLetters.includes(plate[i]) ? plate[i] : '?';
        plateContainer.appendChild(charDiv);
    }
}

/**
 * Update wrong guesses display and heritage integrity visual
 * 
 * Updates the failed attempts counter, refreshes the hangman ASCII art,
 * and populates the wrong letters display with animated elements.
 * 
 * @returns {void}
 */
function updateWrongGuesses() {
    document.getElementById('wrongCount').textContent = wrongGuesses.length;
    updateHangmanDisplay();
    
    const wrongContainer = document.getElementById('wrongLetters');
    wrongContainer.innerHTML = '';
    
    // Create animated elements for each wrong letter
    wrongGuesses.forEach((letter, index) => {
        const letterDiv = document.createElement('div');
        letterDiv.className = 'wrong-letter';
        letterDiv.textContent = letter;
        letterDiv.style.animationDelay = `${index * 0.1}s`;
        wrongContainer.appendChild(letterDiv);
    });
}

/**
 * Update heritage integrity ASCII art display
 * 
 * Updates the hangman display to show current structural failure stage
 * based on number of wrong guesses. Includes debug logging of current stage.
 * 
 * @returns {void}
 */
function updateHangmanDisplay() {
    const hangmanArt = document.getElementById('hangmanArt');
    const stage = Math.min(wrongGuesses.length, hangmanStages.length - 1);
    hangmanArt.textContent = hangmanStages[stage];
    debugLog(`Heritage integrity: stage ${stage}/${hangmanStages.length - 1}`);
}

// ==================== GAME LOGIC FUNCTIONS ====================

/**
 * Check current game state for win/loss conditions
 * 
 * Evaluates whether all letters have been guessed (win) or maximum
 * wrong guesses reached (loss). Updates game status display and
 * triggers end-game procedures including timing and statistics.
 * 
 * @returns {void}
 */
function checkGameStatus() {
    // Check win condition: all letters in current plate have been guessed
    if (currentPlate.split('').every(char => guessedLetters.includes(char))) {
        gameWon = true;
        gameEndTime = Date.now();
        
        const gameStats = calculateGameStats();
        updateSessionStats(gameStats);
        
        // Enhanced victory message with performance metrics
        const victoryMessage = `
            <div class="status-win">
                🔧 STEEL WOOL CONSCIOUSNESS VALIDATED! 🔧<br>
                Heritage Restoration Complete!<br>
                <div style="font-size: 0.8em; margin-top: 10px; color: #00cc00;">
                    ⏱️ Completed in ${formatGameTime(gameStats.time)} with ${gameStats.guesses} guesses<br>
                    Efficiency: ${gameStats.efficiency}% | Word: ${gameStats.word}
                </div>
            </div>
        `;
        
        document.getElementById('gameStatus').innerHTML = victoryMessage;
        disableInput();
        stopTimer();
        return;
    }
    
    // Check loss condition: maximum wrong guesses reached
    if (wrongGuesses.length >= maxWrongGuesses) {
        gameLost = true;
        gameEndTime = Date.now();
        
        const gameStats = calculateGameStats();
        updateSessionStats(gameStats);
        
        document.getElementById('gameStatus').innerHTML = 
            `<div class="status-lose">💀 HE'S DEAD BECAUSE OF YOU 💀<br>The sequence was: <strong>${currentPlate}</strong><br>
            <div style="font-size: 0.8em; margin-top: 5px; color: #ff8888;">
                Game lasted ${formatGameTime(gameStats.time)} with ${gameStats.guesses} guesses
            </div></div>`;
        disableInput();
        stopTimer();
        return;
    }
    
    // Game continues - clear any previous status messages
    document.getElementById('gameStatus').innerHTML = '';
}

/**
 * Validate input character for heritage compliance
 * 
 * Checks if character is within allowed set (A-Z, 0-9) for heritage
 * terminology compatibility. Uses regex for efficient validation.
 * 
 * @param {string} char - Single character to validate
 * @returns {boolean} True if character is heritage-compliant
 */
function validateCharacter(char) {
    return /^[A-Z0-9]$/.test(char);
}

/**
 * Process player's character guess
 * 
 * Comprehensive guess processing including validation, duplicate checking,
 * game state updates, and UI animations. Handles both correct and incorrect
 * guesses with appropriate feedback and state changes.
 * 
 * @param {string} letter - Player's guessed character
 * @returns {boolean} True if guess was processed successfully
 */
function processGuess(letter) {
    debugLog(`Processing guess: '${letter}'`);
    
    // Validate input length
    if (!letter || letter.length !== 1) {
        showInputError('Enter a single character');
        return false;
    }
    
    const upperLetter = letter.toUpperCase();
    
    // Validate character set compliance
    if (!validateCharacter(upperLetter)) {
        showInputError('Only A-Z and 0-9 allowed');
        return false;
    }
    
    // Check for duplicate guesses
    if (guessedLetters.includes(upperLetter) || wrongGuesses.includes(upperLetter)) {
        showInputError('Already guessed that character');
        return false;
    }
    
    // Process valid guess
    if (currentPlate.includes(upperLetter)) {
        // Correct guess - add to guessed letters and reveal characters
        guessedLetters.push(upperLetter);
        debugLog(`Correct guess! Letters found: ${guessedLetters.join(', ')}`);
        
        // Animate character reveals
        const plateChars = document.querySelectorAll('.plate-char');
        currentPlate.split('').forEach((char, index) => {
            if (char === upperLetter) {
                plateChars[index].classList.add('revealed');
                plateChars[index].textContent = char;
            }
        });
    } else {
        // Incorrect guess - add to wrong guesses and trigger error animation
        wrongGuesses.push(upperLetter);
        debugLog(`Wrong guess! Failed attempts: ${wrongGuesses.join(', ')}`);
        
        // Animate wrong guess feedback
        const plateChars = document.querySelectorAll('.plate-char');
        plateChars.forEach(char => {
            char.classList.add('wrong');
            setTimeout(() => char.classList.remove('wrong'), 500);
        });
    }
    
    totalGuesses++;
    updateWrongGuesses();
    checkGameStatus();
    clearInput();
    return true;
}

/**
 * Main guess submission function
 * 
 * Entry point for player guess submission. Retrieves input value
 * and delegates to processGuess() for comprehensive handling.
 * Includes game state validation to prevent guesses after completion.
 * 
 * @returns {void}
 */
function makeGuess() {
    if (gameWon || gameLost) {
        debugLog('Game already finished');
        return;
    }
    
    const input = document.getElementById('letterInput');
    const letter = input.value.trim();
    processGuess(letter);
}

// ==================== INPUT HANDLING FUNCTIONS ====================

/**
 * Display input error with visual feedback
 * 
 * Provides user feedback for invalid input by adding error styling
 * and logging the error message. Error styling is automatically
 * removed after 300ms for clean UX.
 * 
 * @param {string} message - Error message to display in debug log
 * @returns {void}
 */
function showInputError(message) {
    const input = document.getElementById('letterInput');
    input.classList.add('error');
    setTimeout(() => input.classList.remove('error'), 300);
    debugLog(`Input Error: ${message}`);
}

/**
 * Clear input field and restore focus
 * 
 * Clears the letter input field and returns focus to it after a brief
 * delay to ensure smooth UX flow. Used after successful guess processing.
 * 
 * @returns {void}
 */
function clearInput() {
    const input = document.getElementById('letterInput');
    input.value = '';
    setTimeout(() => input.focus(), 100);
}

/**
 * Disable input controls for game completion
 * 
 * Disables both the letter input field and guess button to prevent
 * interaction after game completion (win/loss/timeout).
 * 
 * @returns {void}
 */
function disableInput() {
    document.getElementById('guessButton').disabled = true;
    document.getElementById('letterInput').disabled = true;
}

/**
 * Enable input controls for active gameplay
 * 
 * Re-enables input field and guess button for active game state.
 * Used when starting new games or resuming from paused state.
 * 
 * @returns {void}
 */
function enableInput() {
    document.getElementById('guessButton').disabled = false;
    document.getElementById('letterInput').disabled = false;
}

// ==================== TIMER SYSTEM FUNCTIONS ====================

/**
 * Format seconds into MM:SS display format
 * 
 * Converts time in seconds to zero-padded MM:SS format for
 * consistent timer display. Used for countdown timer display.
 * 
 * @param {number} totalSeconds - Time in seconds to format
 * @returns {string} Formatted time string (MM:SS)
 */
function formatTime(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

/**
 * Update timer display with current state
 * 
 * Updates timer display elements with current time remaining and status.
 * Includes color coding based on time remaining (green/orange/red) and
 * animation triggers for urgency feedback.
 * 
 * @returns {void}
 */
function updateTimerDisplay() {
    const timerValue = document.getElementById('timerValue');
    const timerStatus = document.getElementById('timerStatus');
    
    if (!timerValue || !timerStatus) return; // Timer not initialized yet
    
    if (timerActive) {
        timerValue.textContent = formatTime(timeRemaining);
        timerStatus.textContent = `${TIMER_CONFIGS[selectedTimerMode].name} Active`;
        
        // Color coding based on urgency
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
        // Display configured time when timer is disabled
        const config = TIMER_CONFIGS[selectedTimerMode];
        const totalSeconds = config.minutes * 60 + config.seconds;
        timerValue.textContent = formatTime(totalSeconds);
        timerStatus.textContent = 'Timer Disabled';
        timerValue.style.color = '#888';
        timerValue.style.animation = 'none';
    }
}

/**
 * Start countdown timer for current game
 * 
 * Initializes and starts countdown timer based on selected mode.
 * Sets up interval for second-by-second countdown with automatic
 * game termination when time expires.
 * 
 * @returns {void}
 */
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

/**
 * Stop active countdown timer
 * 
 * Clears timer interval and resets timer state. Used for game
 * completion, manual timer disable, or game reset.
 * 
 * @returns {void}
 */
function stopTimer() {
    if (gameTimer) {
        clearInterval(gameTimer);
        gameTimer = null;
    }
    timerActive = false;
    updateTimerDisplay();
}

/**
 * Reset timer to initial state
 * 
 * Stops any active timer and updates display to show configured
 * time for selected mode. Used when changing timer modes.
 * 
 * @returns {void}
 */
function resetTimer() {
    stopTimer();
    updateTimerDisplay();
}

/**
 * Handle timer expiration - force game loss
 * 
 * Triggered when countdown timer reaches zero. Forces game loss state,
 * calculates statistics, and provides time-specific loss message with
 * performance metrics.
 * 
 * @returns {void}
 */
function timeExpired() {
    debugLog('Time expired - Heritage restoration failed');
    
    gameLost = true;
    gameEndTime = Date.now();
    
    const gameStats = calculateGameStats();
    updateSessionStats(gameStats);
    
    document.getElementById('gameStatus').innerHTML = 
        `<div class="status-lose">⏰ TIME'S UP - HERITAGE FAILURE ⏰<br>Steel wool deployment too slow!<br>The sequence was: <strong>${currentPlate}</strong><br>
        <div style="font-size: 0.8em; margin-top: 5px; color: #ff8888;">
            Game lasted ${formatGameTime(gameStats.time)} with ${gameStats.guesses} guesses
        </div></div>`;
    
    disableInput();
    
    // Add flash animation to timer for dramatic effect
    const timerValue = document.getElementById('timerValue');
    if (timerValue) {
        timerValue.style.animation = 'flash 0.3s ease-in-out 3';
    }
}

/**
 * Toggle timer between enabled/disabled states
 * 
 * Handles timer enable/disable button clicks. Manages UI state updates
 * and timer control delegation. Updates button text and mode selector
 * availability based on timer state.
 * 
 * @returns {void}
 */
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

/**
 * Create and inject timer display HTML
 * 
 * Generates complete timer interface HTML and injects it into the
 * designated container. Includes mode selector, enable/disable button,
 * and time display elements with proper styling classes.
 * 
 * @returns {void}
 */
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
    
    // Insert timer into dedicated container above New Heritage Project button
    const timerContainer = document.getElementById('timerContainer');
    if (timerContainer) {
        timerContainer.innerHTML = timerHTML;
        debugLog('Timer inserted into timerContainer above New Heritage Project button');
    } else {
        // Fallback: insert after game status if container not found
        const gameStatus = document.getElementById('gameStatus');
        if (gameStatus) {
            gameStatus.insertAdjacentHTML('afterend', timerHTML);
            debugLog('Timer inserted after gameStatus (fallback position)');
        } else {
            console.warn('Could not find timer container or gameStatus element');
        }
    }
}

// ==================== GAME LIFECYCLE FUNCTIONS ====================

/**
 * Initialize new game session
 * 
 * Comprehensive new game setup including word selection, state reset,
 * timing initialization, and UI updates. Handles timer state preservation
 * and focus management for optimal UX.
 * 
 * @returns {void}
 */
function newGame() {
    // Reset all game state variables
    currentPlate = getRandomPlate();
    guessedLetters = [];
    wrongGuesses = [];
    gameWon = false;
    gameLost = false;
    totalGuesses = 0;
    
    // Initialize timing for new game
    gameStartTime = Date.now();
    gameEndTime = null;
    
    debugLog(`New heritage project: '${currentPlate}' - Timer started`);
    
    // Update UI for new game
    createPlateDisplay(currentPlate);
    updateWrongGuesses();
    document.getElementById('gameStatus').innerHTML = '';
    enableInput();
    clearInput();
    
    // Handle timer state for new game
    if (timerActive) {
        resetTimer();
        const timerToggle = document.getElementById('timerToggle');
        if (timerToggle && timerToggle.textContent === 'Disable Timer') {
            startTimer();
        }
    }
}

/**
 * Initialize core game systems and event listeners
 * 
 * Sets up all event listeners for user input, validates required DOM elements,
 * and establishes keyboard shortcuts. Includes comprehensive input validation
 * and error handling for missing elements.
 * 
 * @returns {void}
 */
function initializeGame() {
    // Validate required DOM elements exist
    const letterInput = document.getElementById('letterInput');
    const guessButton = document.getElementById('guessButton');
    const newGameButton = document.getElementById('newGameButton');
    
    if (!letterInput || !guessButton || !newGameButton) {
        console.error('Required game elements not found');
        return;
    }
    
    // Input Event Listeners - Keyboard handling
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
        
        // Validate and block invalid characters
        const char = e.key.toUpperCase();
        if (char.length === 1 && !validateCharacter(char)) {
            e.preventDefault();
            showInputError('Heritage characters only: A-Z and 0-9');
        }
    });

    // Input filtering - real-time character validation
    letterInput.addEventListener('input', function(e) {
        let value = e.target.value.toUpperCase();
        value = value.replace(/[^A-Z0-9]/g, ''); // Strip invalid characters
        if (value.length > 1) {
            value = value.slice(-1); // Keep only last character
        }
        e.target.value = value;
    });

    // Paste handling - extract valid characters from clipboard
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

    // Keyboard Shortcuts - Enhanced with session stats
    document.addEventListener('keydown', function(e) {
        // Debug mode toggle (Ctrl+Shift+D)
        if (e.ctrlKey && e.shiftKey && e.key === 'D') {
            debugMode = !debugMode;
            if (debugMode) {
                debugLog(`Debug mode: ACTIVE | Session: ${sessionStats.gamesWon}W/${sessionStats.gamesLost}L | Fastest: ${sessionStats.fastestWin ? formatGameTime(sessionStats.fastestWin.time) : 'None'}`);
            } else {
                debugLog('Debug mode: DISABLED');
            }
        }
        
        // Session statistics popup (Ctrl+Shift+S)
        if (e.ctrlKey && e.shiftKey && e.key === 'S') {
            const winRate = sessionStats.gamesPlayed > 0 ? Math.round((sessionStats.gamesWon / sessionStats.gamesPlayed) * 100) : 0;
            const fastestWinText = sessionStats.fastestWin ? 
                `${formatGameTime(sessionStats.fastestWin.time)} (${sessionStats.fastestWin.word} in ${sessionStats.fastestWin.guesses} guesses)` : 
                'None yet';
            
            const statsMessage = `
SESSION STATS:
Games: ${sessionStats.gamesPlayed} (${sessionStats.gamesWon}W/${sessionStats.gamesLost}L)
Win Rate: ${winRate}%
Avg Guesses: ${sessionStats.averageGuesses}
Total Time: ${formatGameTime(sessionStats.totalPlayTime)}
Fastest Win: ${fastestWinText}
            `;
            alert(statsMessage.trim());
        }
    });

    debugLog('Heritage restoration game initialized with completion timing');
}

/**
 * Initialize timer system and event handlers
 * 
 * Creates timer display interface, sets up event listeners for timer
 * controls, and initializes display state. Includes error handling
 * for missing timer elements.
 * 
 * @returns {void}
 */
function initializeTimer() {
    createTimerDisplay();
    
    const timerToggle = document.getElementById('timerToggle');
    const timerMode = document.getElementById('timerMode');
    
    if (timerToggle && timerMode) {
        // Timer control event listeners
        timerToggle.addEventListener('click', toggleTimer);
        timerMode.addEventListener('change', function() {
            selectedTimerMode = this.value;
            updateTimerDisplay();
        });
        
        updateTimerDisplay();
        debugLog('Chess timer system initialized - positioned above New Heritage Project button');
    }
}

// ==================== APPLICATION INITIALIZATION ====================

/**
 * Main application initialization
 * 
 * Entry point for application startup. Initializes game systems, timer,
 * and starts first game session. Uses delayed initialization to ensure
 * DOM is fully ready before timer injection.
 */
document.addEventListener('DOMContentLoaded', function() {
    initializeGame();
    
    // Initialize timer after brief delay to ensure DOM stability
    setTimeout(() => {
        initializeTimer();
        newGame();
    }, 100);
});
