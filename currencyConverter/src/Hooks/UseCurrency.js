import React, { useEffect, useState } from 'react'

function UseCurrency(currency) {
    const [data, setData] = useState(null);

    const money = async () => {
        try {
            const response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2025.2.2/v1/currencies/${currency}.json`);
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.error("Error fetching currency data:", error);
        }
    }

    useEffect(() => {
        money();
    }, [currency]);

    return data;
}

export default UseCurrency
