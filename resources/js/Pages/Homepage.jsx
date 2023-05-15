import React from "react";
import { Link, Head } from '@inertiajs/react';
import Navbar from "@/Components/Navbar";
import Product from "@/Components/Homepage/Product";

export default function Homepage(props){
    return (
        <div className="mih-h-screen bg-slate-50">
            <Head title={props.title}/>
           <Navbar/>
            <Product Product={props.product.data} />
        </div>
    )
}
