import {useRef, useState} from 'react';
import MainPage from "../MainPage/MainPage";
import UnderMainPage from "../UnderMainPage/UnderMainPage";
import AboutUsPage from "../AboutUsPage/AboutUsPage";
import EventsPage from "../EventsPage/EventsPage";
import AwardsPage from "../AwardsPage/AwardsPage";
import MenuPage from "../MenuPage/MenuPage";
import UpperFooterPage from "../UpperFooterPage/UpperFooterPage";
import AppFooter from "../AppFooter/AppFooter";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DoneReservationModalPage from "../ReservationModalPage/DoneReservationModalPage/DoneReservationModalPage";

const App = () => {
    const mainPageRef = useRef<HTMLDivElement>(null);
    const [isMainPageVisible, setIsMainPageVisible] = useState(true);

    return (
        // <div className="App">
        //     {/*<MainPage ref={mainPageRef}/>*/}
        //     {/*<UnderMainPage*/}
        //     {/*    mainPageRef={mainPageRef}*/}
        //     {/*    isMainPageVisible={isMainPageVisible}*/}
        //     {/*    setIsMainPageVisible={setIsMainPageVisible}*/}
        //     {/*/>*/}
        //     {/*<AboutUsPage/>*/}
        //     {/*<EventsPage/>*/}
        //     {/*<AwardsPage/>*/}
        //     {/*<UpperFooterPage/>*/}
        //     {/*<AppFooter/>*/}
        //     <MenuPage />
        // </div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MenuPage/>}/>

                <Route path="/reservationDone" element={<DoneReservationModalPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
