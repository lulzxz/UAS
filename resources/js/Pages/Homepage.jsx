import React from "react";
import { Link, Head } from '@inertiajs/react';
import Navbar from "@/Components/Navbar";
import ProductList from "@/Components/Homepage/Product";
import Card from "@/Components/Card";
import About from "@/Components/About";

export default function Homepage(){
    return (
        <>
            <Navbar />
            <div className="relative block w-full bg-white">
                <img className="max-h-screen w-screen" src="./img/bg.jpg" />
                <div className="relative h-1/2 p-5 px-8 bg-white">
                    <h1 className="text-black font-medium text-2xl">Category</h1>
                    <hr className="top-3 border-2 border-solid border-black mb-3"/>
                    <div className="flex min-h-[6rem] min-w-[18rem] flex-wrap items-center justify-center gap-36 ">
                    </div>
                </div>
                <div className="relative h-1/2 p-5 px-8 bg-white">
                    <h1 className="text-black font-medium text-2xl">Featured Products</h1>
                    <hr className="top-3 border-2 border-solid border-black mb-3"/>
                    <Card/>
                </div>
            </div>

            <About/>
        </>
    )
}
