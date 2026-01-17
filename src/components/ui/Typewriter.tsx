'use client';

import { useEffect, useState } from 'react';

interface TypewriterProps {
    words: string[];
    delay?: number;
    className?: string;
}

export const Typewriter = ({ words, delay = 3000, className = '' }: TypewriterProps) => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const [blink, setBlink] = useState(true);

    // Blinking cursor
    useEffect(() => {
        const timeout2 = setTimeout(() => {
            setBlink((prev) => !prev);
        }, 500);
        return () => clearTimeout(timeout2);
    }, [blink]);

    // Typing logic
    useEffect(() => {
        if (index === words.length) return; // Should not happen with modulo logic below

        if (subIndex === words[index].length + 1 && !reverse) {
            setTimeout(() => setReverse(true), delay);
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % words.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, reverse ? 75 : 150);

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse, delay, words]);

    return (
        <span className={`${className}`}>
            {words[index].substring(0, subIndex)}
            <span className={`inline-block w-[2px] h-[1em] bg-primary ml-1 align-middle ${blink ? 'opacity-100' : 'opacity-0'}`}></span>
        </span>
    );
};
