import { useState, useEffect } from "react";

export function useFetch<T = unknown>(url: string, options?: RequestInit) {
    const [res, setRes] = useState<T>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url, options)
                if (!response.ok) {
                    throw new Error(response.statusText)
                }

                const data = (await response.json()) as T
                setRes(data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, [])

    return res;
}