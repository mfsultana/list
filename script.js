document.addEventListener('DOMContentLoaded', () => {
    // Mengambil elemen dari HTML
    const introScreen = document.getElementById('intro-screen');
    const rundownScreen = document.getElementById('rundown-screen');
    const btnMasuk = document.getElementById('btn-masuk');

    const btnFullVideo = document.getElementById('btn-full-video');
    const videoModal = document.getElementById('video-modal');
    const closeModal = document.getElementById('close-modal');
    const modalVideo = document.getElementById('modal-video');

    // Transisi Tombol Masuk (Intro -> Rundown dengan efek halus)
    if (btnMasuk && introScreen && rundownScreen) {
        btnMasuk.addEventListener('click', () => {
            // Berikan kelas animasi keluar
            introScreen.classList.add('fade-out');

            // Tunggu animasi selesai (600ms), lalu sembunyikan intro & tampilkan rundown
            setTimeout(() => {
                introScreen.classList.add('hidden');
                introScreen.classList.remove('fade-out');

                rundownScreen.classList.remove('hidden');
            }, 600);
        });
    }

    // Logika Modal Video Full
    if (btnFullVideo && videoModal && modalVideo) {
        btnFullVideo.addEventListener('click', () => {
            videoModal.classList.remove('hidden');
            modalVideo.play().catch(err => console.log("Autoplay dicegah:", err));
        });
    }

    if (closeModal && videoModal && modalVideo) {
        closeModal.addEventListener('click', () => {
            videoModal.classList.add('hidden');
            modalVideo.pause();
            modalVideo.currentTime = 0;
        });
    }

    // Menutup modal jika area gelap di luar video diklik
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
