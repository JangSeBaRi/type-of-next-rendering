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
    activity: "",
    type: "",
    participants: 0,
    price: 0,
    link: "",
    key: "",
    accessibility: 0,
}

const Csr = () => {
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
        <div className="w-screen h-screen flex justify-center items-center">
            <ul>
                {Object.keys(data).map((key, keyIndex) => {
                    const value = data[key as keyof CsrPageProps["parsedData"]];
                    return (
                        <div key={keyIndex} className="text-2xl">
                            {key} : {value}
                        </div>
                    );
                })}
            </ul>
        </div>
    );
};

export default Csr;
