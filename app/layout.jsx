"use client"
import '@styles/globals.css';

import Nav from '@components/Nav';
import Provider from '@components/Provider';
import { useEffect, useState } from 'react';
import { UserLocationContext } from '@context/UserLocationContext';


// export const metadata = {
//     title: "Warehouse Connect",
//     description: "Rent Farming tools"
// }

const RootLayout = ({ children }) => {
    const [userLocation, setUserLocation] = useState([]);
    useEffect(() => {
        getUserLocation();
    }, [])
    const getUserLocation = () => {
        navigator.geolocation.getCurrentPosition(function (pos) {
            console.log(pos)
            setUserLocation({
                lat: pos.coords.latitude,
                lng: pos.coords.longitude
            })
        })
    }
    return (
        <html lang='en'>
            <body>
                <Provider>
                    <UserLocationContext.Provider value={{ userLocation, setUserLocation }}>
                        <main className="app">
                            <Nav />
                            {children}
                        </main>
                        <br />
                        <footer className="footer">
                            <div className="container">
                                <div className="footer-content">
                                    <p>&copy; 2023 Warehouse Connect. All rights reserved.</p>
                                    <ul className="footer-links">
                                        <li><a href="#">Terms of Use</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#">Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>
                        </footer>
                    </UserLocationContext.Provider>
                </Provider>
            </body>
        </html>
    )
}

export default RootLayout