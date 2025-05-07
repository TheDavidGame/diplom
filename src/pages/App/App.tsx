import {useRef, useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import MainPage from "../MainPage/MainPage";
import UnderMainPage from "../UnderMainPage/UnderMainPage";
import AboutUsPage from "../AboutUsPage/AboutUsPage";
import EventsPage from "../EventsPage/EventsPage";
import AwardsPage from "../AwardsPage/AwardsPage";
import UpperFooterPage from "../UpperFooterPage/UpperFooterPage";
import AppFooter from "../AppFooter/AppFooter";
import MenuPage from "../MenuPage/MenuPage";
import DoneReservationModalPage from "../ReservationModalPage/DoneReservationModalPage/DoneReservationModalPage";

const HomePage = () => {
    const mainPageRef = useRef<HTMLDivElement>(null);
    const [isMainPageVisible, setIsMainPageVisible] = useState(true);

    return (
        <>
            <MainPage ref={mainPageRef} />
            <UnderMainPage
                mainPageRef={mainPageRef}
                isMainPageVisible={isMainPageVisible}
                setIsMainPageVisible={setIsMainPageVisible}
            />
            <AboutUsPage />
            <EventsPage />
            <AwardsPage />
            <UpperFooterPage />
            <AppFooter />
        </>
    );
};

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/menu" element={<MenuPage />} />
                    <Route path="/reservationDone" element={<DoneReservationModalPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;
