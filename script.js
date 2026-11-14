document.addEventListener('DOMContentLoaded', () => {
    const introScreen = document.getElementById('intro-screen');
    const rundownScreen = document.getElementById('rundown-screen');
    const btnMasuk = document.getElementById('btn-masuk');

    const btnFullVideo = document.getElementById('btn-full-video');
    const videoModal = document.getElementById('video-modal');
    const closeModal = document.getElementById('close-modal');
    const modalVideo = document.getElementById('modal-video');

    // Transisi Tombol Masuk
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

    // Membuka Modal Video Full
    if (btnFullVideo && videoModal && modalVideo) {
        btnFullVideo.addEventListener('click', () => {
            videoModal.classList.remove('hidden');
            modalVideo.play().catch(err => console.log("Autoplay dicegah:", err));
        });
    }

    // Menutup Modal Video (Tombol X)
    if (closeModal && videoModal && modalVideo) {
        closeModal.addEventListener('click', () => {
            videoModal.classList.add('hidden');
            modalVideo.pause();
            modalVideo.currentTime = 0;
        });
    }

    // Menutup Modal jika mengklik area gelap di luar video
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
