document.addEventListener('DOMContentLoaded', () => {
    const introScreen = document.getElementById('intro-screen');
    const rundownScreen = document.getElementById('rundown-screen');
    const btnMasuk = document.getElementById('btn-masuk');

    // Elemen Modal Video Full
    const btnFullVideo = document.getElementById('btn-full-video');
    const videoModal = document.getElementById('video-modal');
    const closeModal = document.getElementById('close-modal');
    const modalVideo = document.getElementById('modal-video');

    // Elemen Interaktif Rundown
    const btnSmartGame = document.getElementById('btn-smart-game');
    const ideModal = document.getElementById('ide-modal');
    const closeIdeModal = document.getElementById('close-ide-modal');
    const btnAdultFilms = document.getElementById('btn-adult-films');

    // 1. Transisi Tombol Masuk (Intro -> Rundown)
    if (btnMasuk && introScreen && rundownScreen) {
        btnMasuk.addEventListener('click', () => {
            introScreen.classList.add('fade-out');
            setTimeout(() => {
                introScreen.classList.add('hidden');
                introScreen.classList.remove('fade-out');
                rundownScreen.classList.remove('hidden');
            }, 600);
        });
    }

    // 2. Membuka & Menutup Modal Video Full
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

    // 3. Klik Smart Game / Deep Talk -> Buka Modal Rekomendasi
    if (btnSmartGame && ideModal) {
        btnSmartGame.addEventListener('click', () => {
            ideModal.classList.remove('hidden');
        });
    }

    if (closeIdeModal && ideModal) {
        closeIdeModal.addEventListener('click', () => {
            ideModal.classList.add('hidden');
        });
    }

    if (ideModal) {
        ideModal.addEventListener('click', (e) => {
            if (e.target === ideModal) {
                ideModal.classList.add('hidden');
            }
        });
    }

    // 4. Klik Watching Adult Films -> Buka CroxyProxy di tab baru
    if (btnAdultFilms) {
        btnAdultFilms.addEventListener('click', () => {
            window.open('https://www.croxyproxy.com/', '_blank', 'noopener,noreferrer');
        });
    }
});
