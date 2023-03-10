import { useRouter } from "next/router";
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
    const router = useRouter();

    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center gap-5">
            <div className="text-4xl font-bold">ISR5</div>
            <p className="text-sm text-neutral-400">If you visit after the revalidate time (5s), your next full refresh visit will trigger fetch.</p>
            <ul className="text-base">
                {Object.keys(parsedData).map((key, keyIndex) => {
                    const value = parsedData[key as keyof IsrPageProps["parsedData"]];
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

export async function getStaticProps() {
    const data = await fetch("https://www.boredapi.com/api/activity");
    const parsedData = await data.json();

    return {
        props: { parsedData },
        revalidate: 5,
    };
}

export default Isr;
