import React from 'react'
import navstyle from "./index.module.css"
function Index() {
    return (
        <>
            <div className={navstyle.navbar}>

                <header>
                    <nav className={navstyle.nav}>
                        <div className={navstyle.maindiv}>
                            <div className={navstyle.brandname}>
                                Brandname
                            </div>
                            <div>
                                <ul className={navstyle.ul}>
                                    <li>Home</li>
                                    <li>Product</li>
                                    <li>Pricing</li>
                                    <li>Contact</li>
                                </ul>
                            </div>
                            <div>
                                <ul className={navstyle.ul}>
                                    <li>Login</li>
                                    <li ><button className={navstyle.botton}>Join Us</button></li>
                                </ul>
                            </div>
                        </div>
                        <div>

                        </div>
                    </nav>
                </header>
                <div className={navstyle.blueSection}>
                    <p>For Better Future</p>
                    <h1>25K+ STUDENTS <br></br>TRUST US</h1>
                    <h3>Find the right instructor for you from over 10,000 <br></br>teachers</h3>
                    <button className={navstyle.bottonLeft}>Get Quote Now</button>
                    <button className={navstyle.bottonRight}>Learn More</button>

                </div>
            </div>
            
        </>

    )
}

export default Index