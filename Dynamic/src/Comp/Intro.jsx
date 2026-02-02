import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Intro() {
    const navigate = useNavigate();
    const [fadeOut, setFadeOut] = useState(false);
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        // Generate random particles
        const particleArray = Array.from({ length: 30 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            top: Math.random() * 100,
            delay: Math.random() * 2,
            duration: 3 + Math.random() * 2,
        }));
        setParticles(particleArray);

        // Start fade out after 2.5 seconds
        const timer1 = setTimeout(() => {
            setFadeOut(true);
        }, 2500);

        // Navigate to /home after animation completes
        const timer2 = setTimeout(() => {
            navigate('/home');
        }, 3000);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, [navigate]);

    return (
        <div className={`intro-screen ${fadeOut ? 'fade-out' : ''}`}>
            {/* Animated Particles */}
            <div className="intro-particles">
                {particles.map((particle) => (
                    <div
                        key={particle.id}
                        className="particle"
                        style={{
                            left: `${particle.left}%`,
                            top: `${particle.top}%`,
                            animationDelay: `${particle.delay}s`,
                            animationDuration: `${particle.duration}s`,
                        }}
                    />
                ))}
            </div>

            {/* Main Content */}
            <div className="intro-content">
                <h1 className="intro-name">
                    <span className="first-name" data-text="Akhil">Akhil</span>
                    <span className="last-name" data-text="Tuluri">Tuluri</span>
                </h1>
                <div className="intro-line"></div>
                <p className="intro-tagline">
                    <span className="tagline-text">Full Stack Developer</span>
                    <span className="tagline-year">Portfolio 2026</span>
                </p>
            </div>

            {/* Corner Accents */}
            <div className="corner-accent top-left"></div>
            <div className="corner-accent top-right"></div>
            <div className="corner-accent bottom-left"></div>
            <div className="corner-accent bottom-right"></div>
        </div>
    );
}

export default Intro;
