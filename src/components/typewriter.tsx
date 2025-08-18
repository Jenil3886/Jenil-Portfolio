'use client';

import { useState, useEffect } from 'react';

interface TypewriterProps {
  roles: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delay?: number;
}

export function Typewriter({
  roles,
  typingSpeed = 150,
  deletingSpeed = 100,
  delay = 1000,
}: TypewriterProps) {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[roleIndex];
      if (isDeleting) {
        if (charIndex > 0) {
          setText(currentRole.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      } else {
        if (charIndex < currentRole.length) {
          setText(currentRole.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), delay);
        }
      }
    };

    const typingTimeout = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting, charIndex, roleIndex, roles, typingSpeed, deletingSpeed, delay]);

  return (
    <span>
      {text}
      <span className="animate-ping">|</span>
    </span>
  );
}
