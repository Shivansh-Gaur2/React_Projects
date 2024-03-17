import Link from 'next/link';
import Image from 'next/image';
import logoImg from '@/assets/logo.png';

import classes from './main-header.module.css';
import MainHeaderBackground from './main-header-background';

export default function MainHeader(){
    return (
    <>
    <MainHeaderBackground/>
    <header className= {classes.header}>
        <Link href= "/" className= {classes.logo}>
            {/* logoImg in next will be an object that has an src property */}
            {/* <img src= {logoImg.src} alt='A plate with food on it'/> */}

            <Image src={logoImg} alt='A plate with food on it' priority/>
            {/* Image Component is given by next and gives additional properties like lazy loading 
            and priority is added to tell next to render as quickly as possible to avoid content flickering */}
            NextLevel Food
        </Link>

        <nav className= {classes.nav}>
            <ul>
                <li>
                    <Link href = "/meals">Browse Meals</Link>
                </li>
                <li>
                    <Link href = "/community">Foodies Community</Link>
                </li>
            </ul>
        </nav>
    </header>
    </> 
    )
}