/* ============================================================
   countdown.js — Live countdown to the Barat
   Target is 10 Nov 2026, 7:00 PM Pakistan Standard Time (UTC+5).
   ============================================================ */

const TARGET = new Date('2026-11-10T19:00:00+05:00');

function pad(n) {
    return String(n).padStart(2, '0');
}

export function startCountdown() {
    function tick() {
        const diff = TARGET - Date.now();

        if (diff <= 0) {
            ['cd-days', 'cd-hours', 'cd-min', 'cd-sec'].forEach(id => {
                document.getElementById(id).textContent = '00';
            });
            return;
        }

        document.getElementById('cd-days').textContent  = Math.floor(diff / 86400000);
        document.getElementById('cd-hours').textContent = pad(Math.floor((diff % 86400000) / 3600000));
        document.getElementById('cd-min').textContent   = pad(Math.floor((diff % 3600000)  / 60000));
        document.getElementById('cd-sec').textContent   = pad(Math.floor((diff % 60000)    / 1000));
    }

    tick();
    setInterval(tick, 1000);
}
