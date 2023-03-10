import { useState } from "react";

interface IsrPageProps {
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

const Isr = ({ parsedData }: IsrPageProps) => {
    const [data, setData] = useState<IsrPageProps["parsedData"]>(parsedData);

    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <ul>
                {Object.keys(data).map((key, keyIndex) => {
                    const value = data[key as keyof IsrPageProps["parsedData"]];
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

export async function getStaticProps() {
    const data = await fetch("https://www.boredapi.com/api/activity");
    const parsedData = await data.json();

    return {
        props: {
            parsedData,
            revalidate: 20,
        },
    };
}

export default Isr;
