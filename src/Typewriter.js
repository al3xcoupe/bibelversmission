// src/Typewriter.js
import React, { useState, useEffect } from 'react';
import './Typewriter.css'; // Optional, für separate CSS-Datei

const phrases = [
  'rettet',
  'erlöst dich',
  'heilt dich',
  'gibt Frieden',
  'macht frei',
  'liebt dich'
];

const Typewriter = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const typingSpeed = 250;
  const deletingSpeed = 50;
  const pauseBetweenPhrases = 2000000;

  useEffect(() => {
    let timer;
    const text = phrases[phraseIndex];
    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayedText(prev => prev.slice(0, -1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setDisplayedText(prev => text.slice(0, prev.length + 1));
        if (displayedText === text) {
          setIsDeleting(true);
        }
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, phraseIndex]);

  useEffect(() => {
    if (displayedText === '' && !isDeleting) {
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseBetweenPhrases);
      return () => clearTimeout(timeout);
    }
  }, [displayedText, isDeleting]);

  return <span className="typewriter-text">{displayedText}</span>;
}

export default Typewriter;