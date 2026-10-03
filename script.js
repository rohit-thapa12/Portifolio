'use strict';

(function () {

    // Fallback: instantly show all reveals in browsers without IntersectionObserver
    if (!('IntersectionObserver' in window)) {
        document.querySelectorAll('.reveal').forEach(function (el) {
            el.classList.add('is-visible');
        });
        return;
    }

    const observer = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); // animate once, then stop watching
                }
            });
        },
        {
            threshold: 0.08,
            rootMargin: '0px 0px -40px 0px', // trigger slightly before fully in view
        }
    );

    document.querySelectorAll('.reveal').forEach(function (el) {
        observer.observe(el);
    });

}());
