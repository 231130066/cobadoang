document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });

    const bannerUploadBtn = document.querySelector('.upload-btn');
    const bannerFileInput = document.getElementById('bannerFileInput');
    const profileImage = document.getElementById('profileImage');
    const passwordInput = document.getElementById('password');

    bannerUploadBtn.addEventListener('click', function() {
        bannerFileInput.click();
    });

    bannerFileInput.addEventListener('change', function(event) {
        loadBannerImage(event);
    });

    function loadBannerImage(event) {
        var image = document.querySelector('.banner-image');
        image.src = URL.createObjectURL(event.target.files[0]);
    }

    const profileFileInput = document.createElement('input');
    profileFileInput.setAttribute('type', 'file');
    profileFileInput.style.display = 'none';
    profileFileInput.addEventListener('change', function(event) {
        loadProfileImage(event);
    });

    function loadProfileImage(event) {
        var image = document.getElementById('profileImage');
        image.src = URL.createObjectURL(event.target.files[0]);
    }

    profileImage.addEventListener('dblclick', function() {
        profileFileInput.click();
    });

    const resetBtn = document.querySelector('.btn-reset');

    resetBtn.addEventListener('click', function() {
        passwordInput.removeAttribute('readonly');
        passwordInput.value = '';
        passwordInput.setAttribute('placeholder', 'Enter new password');
        passwordInput.focus();
    });
});
