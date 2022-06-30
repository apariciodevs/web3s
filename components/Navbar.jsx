import navStyles from "../styles/Navbar.module.css";

import Link from "next/link";



const Navbar = () => {
    
    return ( 
        <header className={navStyles.navbar}>
            <h1 className={navStyles.logo}>Web3S</h1>
         {/*   <nav className={navStyles.navMid}>
            <Link href="/"><a className={navStyles.navItem} >Platform</a></Link>
            <Link href="/"><a className={navStyles.navItem}>Solutions</a></Link>
            <Link href="/"><a className={navStyles.navItem}>About</a></Link>
            </nav>
            */}
            <nav className={navStyles.navRight}>
            <Link href=""><button className={navStyles.navBtnL}>Log In</button></Link>
            <Link href=""><button className={navStyles.navBtn} >Sign Up</button></Link>

            </nav>
        </header>
     );
}
 
export default Navbar;