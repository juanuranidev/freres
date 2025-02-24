import { useEffect } from "react";
import { State } from "@/lib/interfaces/state/state.interfaces";
import { readAllStatesService } from "@/services/state/states.services";
import { useState } from "react";

export interface UseReadStatesReturn {
    states: State[] | [];
    isLoading: boolean;
}

export const useReadStates = (): UseReadStatesReturn => {
    const [states, setStates] = useState<State[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleReadAllStates = async (): Promise<void> => {
        setIsLoading(true);
        try {
            const states = await readAllStatesService();

            setStates(states);
        } catch (error) {
            console.error(error);
        }
        setIsLoading(false);
    }
    useEffect(() => {
        handleReadAllStates();
    }, []);

    return { states, isLoading };
}
