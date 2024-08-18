import React, { useEffect, useRef } from 'react';
import './App.css';
import Typewriter from './Typewriter';

function App() {
  const textRefs = useRef([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!entry.target.classList.contains('visible')) {
            entry.target.classList.add('visible');
          }
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    const texts = textRefs.current;

    texts.forEach((text) => {
      if (text) observer.observe(text);
    });

    return () => {
      texts.forEach((text) => {
        if (text) observer.unobserve(text);
      });
    };
  }, []);

  

  return (
    <div className="App">
      <section className="main-container">
      <h1 className="heading">
      <span className="constant-text">Jesus </span>
        <Typewriter />
      </h1>
        <div className="bibelvers-container" ref={(el) => textRefs.current[0] = el}>
          <p className="bibelvers">
            „Denn ich weiß, was für Gedanken ich über euch habe, spricht der HERR: Gedanken des Friedens und nicht des Leides, dass ich euch gebe Zukunft und Hoffnung.“ – Jeremia 29:11
          </p>
        </div>
        <p className="fade-text">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod        </p>

        <div className="bibelvers-container" ref={(el) => textRefs.current[1] = el}>
          <p className="bibelvers">
            „Vertraue auf den HERRN von ganzem Herzen und verlasse dich nicht auf deinen Verstand, sondern gedenke an ihn in allen deinen Wegen, so wird er dich recht führen.“ – Sprüche 3:5-6
          </p>
        </div>
        <p className="fade-text">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod        </p>

        <div className="bibelvers-container" ref={(el) => textRefs.current[2] = el}>
          <p className="bibelvers">
            „Die Liebe hört niemals auf, doch seien es Prophezeiungen, sie werden aufhören; seien es Sprachen, sie werden verstummen; sei es Erkenntnis, sie wird vergehen.“ – 1. Korinther 13:8
          </p>
        </div>
        <p className="fade-text">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod        </p>

        <div className="bibelvers-container" ref={(el) => textRefs.current[3] = el}>
          <p className="bibelvers">
            „Aber die auf den HERRN harren, kriegen neue Kraft, dass sie auffahren mit Flügeln wie Adler, dass sie laufen und nicht matt werden, dass sie wandeln und nicht müde werden.“ – Jesaja 40:31
          </p>
        </div>
        <p className="fade-text">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod        </p>
      </section>
    </div>
  );
}

export default App;
