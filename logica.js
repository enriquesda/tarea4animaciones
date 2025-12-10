gsap.registerPlugin(ScrollTrigger);

// --------------------------------------------------------
//portada
// --------------------------------------------------------
const lineaTiempoPortada = gsap.timeline({ defaults: { ease: "power3.out" } });

lineaTiempoPortada.to(".titulo-portada", { y: 0, opacity: 1, duration: 1, delay: 0.2 })
      .to(".subtitulo-portada", { y: 0, opacity: 1, duration: 1 }, "-=0.5")
      .to(".btn-principal", { y: 0, opacity: 1, duration: 0.8 }, "-=0.8")
      .to(".imagen-portada", { x: 0, opacity: 1, duration: 1.2 }, "-=1");

// --------------------------------------------------------
//animacion buscada
// Efecto: La imagen de portada se mueve siguiendo el raton
// --------------------------------------------------------
document.querySelector(".seccion-portada").addEventListener("mousemove", (e) => {
    // Calculamos la posición relativa del ratón
    const posicionX = (e.clientX / window.innerWidth - 0.5) * 30; 
    const posicionY = (e.clientY / window.innerHeight - 0.5) * 30; 

    gsap.to(".imagen-portada", {
        x: posicionX,
        y: posicionY,
        duration: 1,
        ease: "power1.out"
    });
});

// --------------------------------------------------------
// tarjetas que se meueven 
// --------------------------------------------------------

const tarjetasIzquierda = gsap.utils.toArray(".tarjeta-izquierda");
const tarjetasDerecha = gsap.utils.toArray(".tarjeta-derecha");

tarjetasIzquierda.forEach(tarjeta => {
    gsap.from(tarjeta, {
        scrollTrigger: {
            trigger: tarjeta,
            start: "top 80%", 
            toggleActions: "play none none reverse"
        },
        x: -200,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    });
});

tarjetasDerecha.forEach(tarjeta => {
    gsap.from(tarjeta, {
        scrollTrigger: {
            trigger: tarjeta,
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        x: 200,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    });
});

// --------------------------------------------------------
//parte fija
// --------------------------------------------------------

ScrollTrigger.create({
    trigger: ".seccion-fija",
    start: "top top",
    end: "bottom bottom",
    pin: ".contenedor-imagen-fija",
    markers: false
});

gsap.utils.toArray(".bloque-texto").forEach(bloque => {
    gsap.from(bloque, {
        scrollTrigger: {
            trigger: bloque,
            start: "top 70%",
            end: "top 30%",
            scrub: true
        },
        opacity: 0.2,
        scale: 0.9,
        ease: "none"
    });
});

// --------------------------------------------------------
// boton contacto
// --------------------------------------------------------
gsap.to(".btn-latido", {
    scale: 1.1,
    boxShadow: "0 0 40px rgba(230, 57, 70, 0.8)",
    duration: 0.8,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
});

// --------------------------------------------------------
// footer
// --------------------------------------------------------
gsap.to(".pie-pagina", {
    scrollTrigger: {
        trigger: ".pie-pagina",
        start: "top 95%",
        toggleActions: "play none none none"
    },
    opacity: 1,
    duration: 1.5
});