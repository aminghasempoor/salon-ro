"use client";
import { useState, useEffect, useRef } from "react";

export default function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const resizeObserverRef = useRef(null);

    useEffect(() => {
        const resizeObserver = new ResizeObserver((entries) => {
            setWindowSize({
                width: entries[0].contentRect.width,
                height: entries[0].contentRect.height,
            });
        });

        resizeObserverRef.current = resizeObserver;
        resizeObserver.observe(document.body);

        return () => {
            resizeObserver.disconnect();
        };
    }, []);

    return windowSize;
}
