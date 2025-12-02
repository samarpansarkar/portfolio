import React, { useEffect, useRef } from 'react';

const Background = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const x = clientX;
            const y = clientY;

            container.style.setProperty('--x', `${x}px`);
            container.style.setProperty('--y', `${y}px`);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 -z-10 bg-bg-primary overflow-hidden pointer-events-none"
        >
            {/* Grid Pattern */}
            <div
                className="absolute inset-0 opacity-[0.15]"
                style={{
                    backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    maskImage: 'radial-gradient(circle at var(--x, 50%) var(--y, 50%), black 0%, transparent 40%)',
                    WebkitMaskImage: 'radial-gradient(circle at var(--x, 50%) var(--y, 50%), black 0%, transparent 40%)',
                }}
            />

            {/* Spotlight Glow */}
            <div
                className="absolute inset-0 opacity-30"
                style={{
                    background: 'radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), rgba(139, 92, 246, 0.15), transparent 40%)',
                }}
            />

            {/* Ambient Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-bg-primary via-bg-primary to-bg-secondary opacity-90" />
        </div>
    );
};

export default Background;
