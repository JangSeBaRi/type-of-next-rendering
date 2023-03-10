import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
    const router = useRouter();

    const typeOfNextRendering = ["SSG", "SSR", "CSR", "ISR"];

    return (
        <div className="flex flex-col w-screen h-screen justify-center items-center gap-3">
            <div className=" text-stone-50 text-6xl">Types of Next Rendering</div>
            <ul className="flex flex-col gap-1 cursor-pointer">
                {typeOfNextRendering.map((type) => {
                    return (
                        <li key={type}>
                            <Link
                                href={{
                                    pathname: `./rendering/${type}`,
                                }}
                            >
                                {type}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
