"use client";
import Link from 'next/link'
import Image from "next/image";
import { useState } from "react";

export default function Header() {
    const [isActive, setIsActive] = useState(false);

    return (
        <main className="flex justify-between">
            <div className=" w-screen fixed bg-white  z-20  ">
                <header className="border-b-1 border-b-stone-200 flex items-center justify-between text-xl m-4  font-medium font-stretch-150%">
                    <div className="flex items-center">
                        <div id='profile' className="h-8 mr-1 w-8 rounded-md border-solid" ></div>
                        <h1>Climate Whisperer AI</h1>
                    </div>
                    <div className='extra hidden'>
                        <button className='border-solid border-0.5 bg-blue-100 h-[2.5rem] font-sans font-stretch-150% mr-3 p-3 rounded-lg  text-sm text-black text-center'><Link href="/Dashboard">Dashboard</Link></button>
                        <button id='clear' className=' text-center w-23 h-[2.5rem] font-sans rounded-lg font-stretch-150% ml-3  text-sm text-black-300 '><Link href="/">AI Analytics</Link></button>
                    </div>
                    <div className="flex">
                        <Image
                            className="mr-2 rounded-xl  border-stone-200 p-2"
                            id="theme"
                            src={`${process.env.PAGES_BASE_PATH || ''}/last_quarter.svg`}
                            alt="night_mode"
                            width={50}
                            height={50}
                            unoptimized
                        />
                        <div
                            onClick={() => setIsActive(!isActive)}>
                            <Image
                                className="rounded-xl border-stone-200 p-2 "
                                id="menu"
                                src={`${process.env.PAGES_BASE_PATH || ''}/align_justify.svg`}
                                alt="A menu icon"
                                width={50}
                                height={50}
                                unoptimized
                            />
                        </div>
                        <div className="flex items-center">
                            <button id='new2' className="hidden h-[2.5rem] w-23 text-sm mr-1 rounded-xl border-blue-200 ">Learn more</button>
                            <button id='dash2' className="hidden text-sm w-20" ><Link href="/">Go to AI</Link></button>
                        </div>
                    </div>
                </header>
            </div>
            <div id='navbar'
                className={`shadow-lg p-3 fixed z-30 right-0 top-0 h-full  bg-white flex flex-col w-xs text-0.7xl font-semibold 
                    transform transition-transform duration-500 ease-in-out
                    ${isActive ? "translate-x-0" : "translate-x-full"}`}>
                <div
                    onClick={() => setIsActive(!isActive)}>
                    <Image
                        className="rounded-4xl ml-auto mt-2"
                        id="menu"
                        src={`${process.env.PAGES_BASE_PATH || ''}/cancel.svg`}
                        alt="A menu icon"
                        width={30}
                        height={30}
                        unoptimized
                    />
                </div>
                <button onClick={() => setIsActive(!isActive)}><Link href="/Dashboard">Dashboard</Link></button>
                <button onClick={() => setIsActive(!isActive)}><Link href="/">AI Analytics</Link></button>
                <button>Learn more</button>
                <button id="dash" className=" border-2 border-solid" onClick={() => setIsActive(!isActive)}><Link href="/Dashboard">Open Dashboard</Link></button>
            </div>

        </main>

    );
}
