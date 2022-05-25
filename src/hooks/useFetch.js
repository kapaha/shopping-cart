import { useEffect, useState } from 'react';

const useFetch = (url = '') => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        let controller = new AbortController();

        const getData = async () => {
            setLoading(true);

            try {
                const response = await fetch(url, {
                    signal: controller.signal,
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! status ${response.status}`);
                }
                const data = await response.json();
                setData(data);
            } catch (error) {
                if (!controller.signal.aborted) setError(error);
            }

            if (!controller.signal.aborted) setLoading(false);

            controller = null;
        };

        getData(url);

        return () => controller?.abort();
    }, [url]);

    return {
        data,
        loading,
        error,
    };
};

export default useFetch;
