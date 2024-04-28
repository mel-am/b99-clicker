import { useState, useEffect } from "react";

export default function Timer(casesPerSecond) {
    const [cases, setCases] = useState(0);
    console.log(updatedCases);

    useEffect(() => {
        const myInterval = setInterval(() => {
            addCase();
        }, 10000 / cps);

        return () => {
            clearInterval(myInterval);
            console.log(updatedCases);
        };
    },)
}