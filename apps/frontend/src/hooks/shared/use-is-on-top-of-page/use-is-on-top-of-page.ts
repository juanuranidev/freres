import { useState } from "react";
import { useEffect } from "react";

interface UseIsOnTopOfPageReturn {
    isOnTopOfPage: boolean;
}

export const useIsOnTopOfPage = (): UseIsOnTopOfPageReturn => {
    const [isOnTopOfPage, setIsOnTopOfPage] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsOnTopOfPage(window.scrollY === 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return { isOnTopOfPage };
}
