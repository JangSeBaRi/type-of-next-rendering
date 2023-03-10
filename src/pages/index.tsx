import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
    const router = useRouter();

    const typeOfNextRendering = ["SSG", "SSR", "CSR", "ISR"];

    return (
        <div className=" relative flex flex-col w-screen h-screen justify-center items-center gap-3 pb-32">
            <p className=" text-neutral-50 text-4xl font-bold">Types of Next Rendering</p>
            <p className="text-base text-neutral-400">Demo of Next.js rendring type using API</p>
            <ul className="flex flex-col gap-1 cursor-pointer">
                {typeOfNextRendering.map((type) => {
                    return (
                        <li key={type} className="relative hover:text-blue-300 after:content-[''] after:w-0 after:bg-blue-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 hover:after:w-full after:transition-all">
                            <Link
                                href={{
                                    pathname: `./rendering/${type.toLowerCase()}`,
                                }}
                            >
                                {type}
                            </Link>
                        </li>
                    );
                })}
            </ul>
            <p className=" absolute text-sm text-neutral-400 bottom-20">©mobiliverse 2023 By JangSeBaRi</p>
        </div>
    );
}
