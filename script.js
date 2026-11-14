document.addEventListener('DOMContentLoaded', () => {
    // Elemen Layar Utama
    const introScreen = document.getElementById('intro-screen');
    const rundownScreen = document.getElementById('rundown-screen');
    const ideScreen = document.getElementById('ide-screen');

    // Tombol Navigasi Layar
    const btnMasuk = document.getElementById('btn-masuk');
    const btnSmartGame = document.getElementById('btn-smart-game');
    const btnBackRundown = document.getElementById('btn-back-rundown');

    // Elemen Modal Video Full
    const btnFullVideo = document.getElementById('btn-full-video');
    const videoModal = document.getElementById('video-modal');
    const closeModal = document.getElementById('close-modal');
    const modalVideo = document.getElementById('modal-video');

    // Fungsi Helper untuk Perpindahan Layar Halus
    function switchScreen(fromScreen, toScreen) {
        if (!fromScreen || !toScreen) return;
        fromScreen.classList.add('fade-out');
        setTimeout(() => {
            fromScreen.classList.add('hidden');
            fromScreen.classList.remove('fade-out');
            toScreen.classList.remove('hidden');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 500);
    }

    // 1. Intro -> Rundown
    if (btnMasuk) {
        btnMasuk.addEventListener('click', () => {
            switchScreen(introScreen, rundownScreen);
        });
    }

    // 2. Rundown -> Halaman Baru Smart Game / Deep Talk
    if (btnSmartGame) {
        btnSmartGame.addEventListener('click', () => {
            switchScreen(rundownScreen, ideScreen);
        });
    }

    // 3. Tombol Kembali: Halaman Smart Game -> Rundown
    if (btnBackRundown) {
        btnBackRundown.addEventListener('click', () => {
            switchScreen(ideScreen, rundownScreen);
        });
    }

    // 4. Modal Video Full
    if (btnFullVideo && videoModal && modalVideo) {
        btnFullVideo.addEventListener('click', () => {
            videoModal.classList.remove('hidden');
            modalVideo.load();
            modalVideo.play().catch(err => {
                console.log("Pemutaran otomatis dibatasi browser:", err);
            });
        });
    }

    if (closeModal && videoModal && modalVideo) {
        closeModal.addEventListener('click', () => {
            videoModal.classList.add('hidden');
            modalVideo.pause();
            modalVideo.currentTime = 0;
        });
    }

    if (videoModal && modalVideo) {
        videoModal.addEventListener('click', (e) => {
            if (e.target === videoModal) {
                videoModal.classList.add('hidden');
                modalVideo.pause();
                modalVideo.currentTime = 0;
            }
        });
    }
});
