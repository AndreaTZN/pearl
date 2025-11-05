import { lenis } from './smoothScroll';
window.Webflow ||= [];
window.Webflow.push(() => {
  let mm = gsap.matchMedia();

  $('.home-hero_section').each(function () {
    let el = $(this);
    let sphere = el.find('.home-hero_sphere');
    let illu = el.find('.home-hero_illu');
    let title = el.find('.h1');
    let titleText = el.find('.home-hero_title-wrap');
    let button = el.find('.button-group');
    let tl = gsap.timeline({});

    let split = SplitText.create(title, {
      type: 'words, lines', // only split into words and lines (not characters)
      mask: 'lines', // adds extra wrapper element around lines with overflow: clip (v3.13.0+)
    });

    gsap.set('.home-hero_component', { opacity: 1 });
    tl.fromTo(
      split.words,
      {
        yPercent: 100,
        opacity: 0,
      },
      {
        yPercent: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power2.out',
        stagger: 0.05,
        willChange: 'transform,opacity',
      }
    );
    tl.fromTo(
      titleText,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1.5,
        ease: 'power2.out',
        willChange: 'transform,opacity',
      },
      '<0.2'
    );
    tl.fromTo(
      button,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        duration: 1.5,
        y: 0,
        ease: 'power2.out',
        willChange: 'transform,opacity',
      },
      '<0.2'
    );

    tl.fromTo(
      illu,
      {
        opacity: 0,
        yPercent: 10,
      },
      {
        opacity: 1,
        yPercent: 0,
        duration: 1.5,
        ease: 'power2.out',
        willChange: 'transform,opacity',
      },
      '<'
    );
    tl.fromTo(
      sphere,
      {
        opacity: 0,
        yPercent: 10,
      },
      {
        opacity: 1,
        yPercent: 0,
        delay: 0.5,
        duration: 1.5,
        ease: 'power2.out',
        willChange: 'transform,opacity',
      },
      '<0.2'
    );
  });

  gsap.utils.toArray('.wave').forEach((wave, i) => {
    // Chaque vague bouge avec un décalage de temps différent
    const delay = i * 0.25;
    const amplitude = gsap.utils.random(0.8, 1.3);

    gsap.to(wave, {
      yPercent: gsap.utils.random(0, 5),
      duration: gsap.utils.random(4, 6),
      repeat: -1,
      yoyo: true,
      ease: 'power3.inOut',

      delay,
    });
  });
});
