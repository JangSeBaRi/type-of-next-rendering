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
        <div className="w-screen h-screen flex flex-col justify-center items-center gap-5">
            <div className="text-6xl">ISR 5Second</div>
            <ul>
                {Object.keys(data).map((key, keyIndex) => {
                    const value = data[key as keyof IsrPageProps["parsedData"]];
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

export async function getStaticProps() {
    const data = await fetch("https://www.boredapi.com/api/activity");
    const parsedData = await data.json();

    return {
        props: { parsedData },
        revalidate: 5,
    };
}

export default Isr;
