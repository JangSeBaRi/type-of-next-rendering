import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface CsrPageProps {
    parsedData: {
        activity: string;
        type: string;
        participants: number;
        price: number;
        link: string;
        key: string;
        accessibility: number;
    };
}

const initialData = {
    activity: "Loading...",
    type: "Loading...",
    participants: 0,
    price: 0,
    link: "Loading...",
    key: "Loading...",
    accessibility: 0,
}

const Csr = () => {
    const router = useRouter();
    const [data, setData] = useState<CsrPageProps["parsedData"]>(initialData);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch("https://www.boredapi.com/api/activity");
            const parsedData = await data.json();
            setData(parsedData)
        };
        fetchData();
    }, []);

    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center gap-5">
            <div className="text-4xl font-bold">CSR</div>
            <p className="text-sm text-neutral-400">Fetched every render, on client side. Notice the loading.</p>
            <ul className="text-base">
                {Object.keys(data).map((key, keyIndex) => {
                    const value = data[key as keyof CsrPageProps["parsedData"]];
                    return (
                        <li key={keyIndex}>
                            {key} : {value}
                        </li>
                    )
                })}
            </ul>
            <button 
                className="relative text-sm border-neutral-50 border-2 w-32 h-10 rounded-md font-bold after:content-[''] after:w-0 hover:text-blue-300 after:bg-blue-300 after:absolute after:bottom-0.5 after:left-0 after:h-0.5 hover:after:w-full after:transition-all after:rounded-md"
                onClick={() => router.back()}
            >
                Back to Home
            </button>
        </div>
    );
};

export default Csr;
