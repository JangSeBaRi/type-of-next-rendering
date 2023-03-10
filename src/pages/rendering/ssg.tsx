import { useState } from "react";

interface SsgPageProps {
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

const Ssg = ({ parsedData }: SsgPageProps) => {
    const [data, setData] = useState<SsgPageProps["parsedData"]>(parsedData);

    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center gap-5">
            <div className="text-6xl">SSG</div>
            <ul>
                {Object.keys(data).map((key, keyIndex) => {
                    const value = data[key as keyof SsgPageProps["parsedData"]];
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
        },
    };
}

export default Ssg;
