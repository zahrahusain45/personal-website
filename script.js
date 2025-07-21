<script>
const aboutPanel = document.getElementById('aboutPanel');
const openAbout  = document.getElementById('openAbout');
const closeAbout = document.getElementById('closeAbout');

openAbout?.addEventListener('click', () => aboutPanel?.classList.add('open'));
closeAbout?.addEventListener('click', () => aboutPanel?.classList.remove('open'));
</script>

document.addEventListener('mousemove', e => {
    const shapes = document.querySelectorAll('.parallax .shape');
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
  
    shapes.forEach(el => {
      const speed = parseFloat(el.dataset.speed) || 1;
      const x = (cx - e.clientX) * speed / 100;
      const y = (cy - e.clientY) * speed / 100;
      el.style.transform = `translate(${x}px, ${y}px)`;
    });
  });

  function typeWriter(element, text, delay = 100) {
    let i = 0;
    element.innerHTML = ''; // Clear existing text
    function typing() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, delay);
      }
    }
    typing();
  }

  document.addEventListener("DOMContentLoaded", () => {
    const subtitle = document.querySelector(".typed-subtitle");
    if (!subtitle) return;
    const text = "Student at Columbia University";
    let i = 0;
  
    function typeWriter() {
      if (i < text.length) {
        subtitle.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 70); // adjust typing speed here
      }
    }
  
    subtitle.innerHTML = ""; // clear if anything is preloaded
    typeWriter();
  });  
  

  const openResume = document.getElementById('openResume');
  openResume?.addEventListener('click', () => {
    window.open('assets/Zahra_Husain_Resume.pdf', '_blank');
  });
    
  openAbout?.addEventListener('click', () => {
    aboutPanel?.classList.add('open');
    document.body.style.overflow = 'hidden'; // Prevent scroll
  });
  
  closeAbout?.addEventListener('click', () => {
    aboutPanel?.classList.remove('open');
    document.body.style.overflow = ''; // Restore scroll
  });
  
  <script>
  document.addEventListener("scroll", function () {
    const shapes = document.querySelectorAll(".shape");
    const scrollY = window.scrollY;

    shapes.forEach(shape => {
      const speed = parseFloat(shape.getAttribute("data-speed"));
      shape.style.transform = `translateY(${scrollY * speed}px)`;
    });
  });
</script>
