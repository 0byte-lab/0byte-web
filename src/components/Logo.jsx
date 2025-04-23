import Link from "next/link";
import logoDefault from "../../public/logos/logo-default.png";
import logoDark from "../../public/logos/logo-dark.png";
import Image from "next/image";

export default function Logo({ className }) {
    return (
        <div className={`${className}`}>
            <Link href={"/"} >
                <div className='text-black flex items-center text-3xl dark:text-white font-medium tracking-tighter'>
                    <Image src={logoDefault} alt="ZeroByte Logo" className='h-12 w-12 dark:hidden' />
                    <Image src={logoDark} alt="ZeroByte Logo" className='h-12 w-12 hidden dark:block' />
                    <span className='ml-[-12px]'>byte</span>
                </div>
            </Link>
        </div>
    );
}