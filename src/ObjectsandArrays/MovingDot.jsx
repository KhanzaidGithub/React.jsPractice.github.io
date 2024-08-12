import { useState } from 'react';


function MovingDot() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    return (
        <div
            onPointerMove={e => {
                setPosition({
                    x: e.clientX,
                    y: e.clientY
                })
            }}
            style={{
                position: 'relative',
                width: '100vw',
                height: '50vh',
                marginTop: '20px'
            }}>
            <div style={{
                position: 'absolute',
                backgroundColor: 'red',
                borderRadius: '50%',
                transform: `translate(${position.x}px, ${position.y}px)`,
                left: -9,
                top: -30,
                width: 20,
                height: 20,
            }} />
        </div>
    );
}
export default MovingDot