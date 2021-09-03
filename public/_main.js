!(function () {
    const t = window,
        e = document.documentElement;
    if (
        (e.classList.remove('no-js'),
        e.classList.add('js'),
        document.body.classList.contains('has-animations'))
    ) {
        (window.sr = ScrollReveal()).reveal('.hero-title, .hero-paragraph, .hero-form', {
            duration: 1e3,
            distance: '40px',
            easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
            origin: 'bottom',
            interval: 150,
        });
    }
    const s = document.querySelectorAll('.is-moving-object');
    let n = 0,
        i = 0,
        a = 0,
        o = 0,
        r = 0,
        l = e.clientWidth,
        c = e.clientHeight;
    s &&
        t.addEventListener(
            'mousemove',
            (function (t, e) {
                let s = null,
                    n = e;
                return (...e) => {
                    let i = Date.now();
                    (!s || i - s >= n) && ((s = i), t.apply(this, e));
                };
            })(function (e) {
                !(function (e, s) {
                    (n = e.pageX),
                        (i = e.pageY),
                        (a = t.scrollY),
                        (o = l / 2 - n),
                        (r = c / 2 - (i - a));
                    for (let t = 0; t < s.length; t++) {
                        const e = s[t].getAttribute('data-translating-factor') || 20,
                            n = s[t].getAttribute('data-rotating-factor') || 20,
                            i = s[t].getAttribute('data-perspective') || 500;
                        let a = [];
                        s[t].classList.contains('is-translating') &&
                            a.push('translate(' + o / e + 'px, ' + r / e + 'px)'),
                            s[t].classList.contains('is-rotating') &&
                                a.push(
                                    'perspective(' +
                                        i +
                                        'px) rotateY(' +
                                        -o / n +
                                        'deg) rotateX(' +
                                        r / n +
                                        'deg)'
                                ),
                            (s[t].classList.contains('is-translating') ||
                                s[t].classList.contains('is-rotating')) &&
                                ((a = a.join(' ')),
                                (s[t].style.transform = a),
                                (s[t].style.transition = 'transform 1s ease-out'),
                                (s[t].style.transformStyle = 'preserve-3d'),
                                (s[t].style.backfaceVisibility = 'hidden'));
                    }
                })(e, s);
            }, 150)
        );
})();
