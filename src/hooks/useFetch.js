import { useEffect, useState } from 'react';

const useFetch = (url = '') => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            setLoading(true);

            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! status ${response.status}`);
                }
                const data = await response.json();
                setData(data);
            } catch (error) {
                setError(error);
            }

            setLoading(false);
        };

        getData(url);
    }, [url]);

    return {
        data,
        loading,
        error,
    };
};

export default useFetch;
