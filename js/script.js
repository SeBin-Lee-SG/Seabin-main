// Future custom scripts can go here.
document.addEventListener('DOMContentLoaded', function () {
    // Example: Activate bootstrap scrollspy
    const mainNav = document.body.querySelector('#navbar-main');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#navbar-main',
            offset: 100,
        });
    }
});
