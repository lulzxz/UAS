import { Head, Link } from "@inertiajs/react";

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos <= 150) {
        document.querySelector("#navbar").classList.remove('scroll');
    }
    else {
        document.querySelector("#navbar").classList.add('scroll');
    }

    prevScrollpos = currentScrollPos;
}


const Navbar = ({user}) => {


    return (

        <div className="navbar bg-base-100 fixed z-50 bg-transparent" id="navbar">
        <Head title="NaoKids"/>
            <div className="flex-none">
                <div className="dropdown">
                <button className="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </button>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-white rounded-box w-52 text-black hover:text-stone-800">
                    <li><Link href={"/"}>Home</Link></li>
                    <li><Link href={"/products"}>Shop</Link></li>
                    <li><Link href={'/Homepage'}>About</Link></li>
                </ul>
                </div>
            </div>
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Naokids</a>
            </div>
            <div className="flex-none">
            <div className="dropdown dropdown-end">
            <button className="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                </button>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
            {!user ?
                            <>
                                <li><Link href={route('login')} as="button">Login</Link></li>
                                <li><Link href={route('register')} as="button">Register</Link></li>
                            </>
                            :
                            <>
                                <li>
                                    <Link href={route('profile.edit')} as="button" className="justify-between">  Profile</Link>

                                        <Link href={route('logout')} method="post" as="button" className="justify-between">
                                            Logout

                                    </Link>
                                </li>
                            </>
                        }

            </ul>
            </div>
            </div>

        </div>

    );
};


export default Navbar
