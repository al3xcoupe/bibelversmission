document.addEventListener('DOMContentLoaded', function () {
    const typewriterText = document.querySelector('.typewriter-text');
    const phrases = [
      'rettet',
      'erlöst dich',
      'heilt dich',
      'gibt dir Frieden',
      'macht dich frei',
      'liebt dich'
    ];
    
    let index = 0;
    const typingSpeed = 100; // Geschwindigkeit des Tippens
    const deletingSpeed = 50; // Geschwindigkeit des Löschens
    const pauseBetweenPhrases = 2000; // Pause zwischen den Phrasen
  
    function typePhrase() {
      let phrase = phrases[index];
      let charIndex = 0;
      
      function type() {
        if (charIndex < phrase.length) {
          typewriterText.textContent += phrase[charIndex];
          charIndex++;
          setTimeout(type, typingSpeed);
        } else {
          setTimeout(deletePhrase, pauseBetweenPhrases);
        }
      }
  
      function deletePhrase() {
        if (charIndex > 0) {
          typewriterText.textContent = phrase.substring(0, charIndex - 1);
          charIndex--;
          setTimeout(deletePhrase, deletingSpeed);
        } else {
          index = (index + 1) % phrases.length;
          setTimeout(typePhrase, typingSpeed);
        }
      }
  
      type();
    }
  
    typePhrase();
  });