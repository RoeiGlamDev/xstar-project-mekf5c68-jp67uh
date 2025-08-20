import { useState, useEffect } from 'react';

// Function to format currency
export const formatCurrency = (amount: number): string => {
    return `$${amount.toFixed(2)}`; // Format to two decimal places
};

// Custom hook for fetching data
export const useFetch = (url: string) => {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) throw new Error('Network response was not ok');
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error }; // Return fetched data, loading state, and error
};

// Function to validate email format
export const isValidEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
    return regex.test(email);
};

// Function to generate a unique ID
export const generateUniqueId = (): string => {
    return 'id-' + Math.random().toString(36).substr(2, 16); // Generate a random ID
};

export default { formatCurrency, useFetch, isValidEmail, generateUniqueId }; // Default export for utility functions