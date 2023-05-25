import React from "react";
import { Link, Head } from '@inertiajs/react';
import Navbar from "@/Components/Navbar";
import ProductList from "@/Components/Homepage/Product";

export default function Products(props){
    return (
        <div className="mih-h-screen bg-zinc-800">
            <Head title={props.title}/>
           <Navbar/>
           <div className="pt-16 flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-4 p-4">
           <ProductList products={props.products.data}/>
           </div>
        </div>
    )
}
