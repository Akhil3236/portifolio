import React, { useEffect, useState, useRef } from 'react';
import '../App.css';

function MouseEffects() {
    const cursorRef = useRef(null);
    const trailRef = useRef(null);
    const [clickEffects, setClickEffects] = useState([]);

    const mousePos = useRef({ x: 0, y: 0 });
    const cursorPos = useRef({ x: 0, y: 0 });
    const trailPos = useRef({ x: 0, y: 0 });

    // Smooth cursor tracking with requestAnimationFrame
    useEffect(() => {
        let hasMovedMouse = false;

        const handleMouseMove = (e) => {
            mousePos.current = { x: e.clientX, y: e.clientY };

            // Show cursor after first movement
            if (!hasMovedMouse) {
                hasMovedMouse = true;
                if (cursorRef.current) cursorRef.current.style.opacity = '1';
                if (trailRef.current) trailRef.current.style.opacity = '1';
            }
        };

        const animate = () => {
            // Smooth interpolation for cursor
            cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * 0.3;
            cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * 0.3;

            // Slower trail for smooth effect
            trailPos.current.x += (mousePos.current.x - trailPos.current.x) * 0.15;
            trailPos.current.y += (mousePos.current.y - trailPos.current.y) * 0.15;

            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate(${cursorPos.current.x}px, ${cursorPos.current.y}px)`;
            }

            if (trailRef.current) {
                trailRef.current.style.transform = `translate(${trailPos.current.x}px, ${trailPos.current.y}px)`;
            }

            requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', handleMouseMove);
        const animationId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationId);
        };
    }, []);

    // Handle clicks for ripple effect
    useEffect(() => {
        const handleClick = (e) => {
            const target = e.target;
            const isInteractive = target.tagName === 'BUTTON' ||
                target.tagName === 'A' ||
                target.closest('button') ||
                target.closest('a') ||
                target.classList.contains('bento-card');

            if (!isInteractive) {
                const newEffect = {
                    id: Date.now() + Math.random(),
                    x: e.clientX,
                    y: e.clientY,
                };

                setClickEffects(prev => [...prev, newEffect]);

                setTimeout(() => {
                    setClickEffects(prev => prev.filter(effect => effect.id !== newEffect.id));
                }, 1000);
            }
        };

        window.addEventListener('click', handleClick);
        return () => window.removeEventListener('click', handleClick);
    }, []);

    return (
        <>
            {/* Custom Cursor - no state updates, pure CSS */}
            <div ref={cursorRef} className="custom-cursor" />
            <div ref={trailRef} className="cursor-trail" />

            {/* Click Ripple Effects */}
            {clickEffects.map((effect) => (
                <div
                    key={effect.id}
                    className="click-ripple"
                    style={{
                        left: effect.x,
                        top: effect.y,
                    }}
                >
                    <div className="ripple-wave ripple-1"></div>
                    <div className="ripple-wave ripple-2"></div>
                    <div className="ripple-wave ripple-3"></div>
                </div>
            ))}
        </>
    );
}

export default MouseEffects;
