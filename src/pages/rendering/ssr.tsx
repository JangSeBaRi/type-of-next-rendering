import { GetServerSideProps  } from "next/types";
import { useState } from "react";

interface SsrPageProps {
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

const Ssr = ({ parsedData }: SsrPageProps) => {
    const [data, setData] = useState<SsrPageProps["parsedData"]>(parsedData);

    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <ul>
                {Object.keys(data).map((key, keyIndex) => {
                    const value = data[key as keyof SsrPageProps["parsedData"]];
                    return (
                        <div key={keyIndex} className="text-2xl">
                            {key} : {value}
                        </div>
                    )
                })}
            </ul>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    const data = await fetch("https://www.boredapi.com/api/activity");
    const parsedData = await data.json();

    return {
        props: {
            parsedData,
        },
    };
};

export default Ssr;
