/* ============================================================
   script.js — Entry point
   Imports feature modules and wires up initialisation order.
   ============================================================ */

import { initSplash }                              from './js/splash.js';
import { prepareCurtains }                         from './js/curtains3d.js';
import { setupScratchListeners,
         initScratchCanvases,
         scheduleAutoReveal }                      from './js/scratch.js';
import { startCountdown }                          from './js/countdown.js';
import { initRSVP }                                from './js/rsvp.js';
// scroll-reveal is triggered internally by scratch.js after all cards are revealed

document.addEventListener('DOMContentLoaded', () => {

    // Warm the WebGL house while the splash is on screen
    prepareCurtains();

    // Wire up scratch card events immediately (elements exist in DOM)
    setupScratchListeners();

    // RSVP form lives in gated content but is safe to bind early
    initRSVP();

    // Splash dismiss kicks off everything that needs a visible layout
    initSplash(() => {
        setTimeout(initScratchCanvases, 80); // wait for main to be painted
        scheduleAutoReveal(); // 5s idle hang once the cards are on screen
        startCountdown();
    });

});
