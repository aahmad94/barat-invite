/* ============================================================
   splash.js — Splash screen & hero curtain animation
   ============================================================ */

import { openCurtains } from './curtains3d.js';

export function initSplash(onDismiss) {
    const splash = document.getElementById('splash');
    const main   = document.getElementById('main');

    let dismissed = false;

    function dismiss() {
        if (dismissed) return;
        dismissed = true;

        splash.classList.add('dismissed');
        main.classList.remove('hidden');

        // Draw as the splash fades — no dead hold on a closed house
        const hold = window.matchMedia('(prefers-reduced-motion: reduce)').matches
            ? 0
            : 60;
        setTimeout(() => { openCurtains(); }, hold);

        onDismiss();
    }

    splash.addEventListener('click',      dismiss);
    splash.addEventListener('touchstart', dismiss, { passive: true });

    if (new URLSearchParams(location.search).has('curtain')) {
        dismiss();
    }
}
