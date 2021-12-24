import { useMemo } from "react";

export const usePages = (totalPages) => {
    const pagesArray = useMemo(() => {
        console.log("Use MEMEO Pages")
        const result = [];

        for (let i = 0; i < totalPages; i++) {
            result.push(i + 1)
        }

        return result;
    }, [totalPages])
    
    return pagesArray;
}