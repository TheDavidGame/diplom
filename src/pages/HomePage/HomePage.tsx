import {useEffect, useRef, useState} from "react";
import MainPage from "../MainPage/MainPage";
import UnderMainPage from "../UnderMainPage/UnderMainPage";
import AboutUsPage from "../AboutUsPage/AboutUsPage";
import EventsPage from "../EventsPage/EventsPage";
import AwardsPage from "../AwardsPage/AwardsPage";
import UpperFooterPage from "../UpperFooterPage/UpperFooterPage";
import AppFooter from "../AppFooter/AppFooter";
import {useLocation} from "react-router-dom";

const HomePage = () => {
    const mainPageRef = useRef<HTMLDivElement>(null);
    const [isMainPageVisible, setIsMainPageVisible] = useState(true);

    const location = useLocation();
    const eventsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (location.state?.scrollToId === 'event' && eventsRef.current) {
            eventsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [location]);

    return (
        <>
            <MainPage ref={mainPageRef} />
            <UnderMainPage
                mainPageRef={mainPageRef}
                isMainPageVisible={isMainPageVisible}
                setIsMainPageVisible={setIsMainPageVisible}
            />
            <AboutUsPage />
            {/*<EventsPage ref={eventsRef}/>*/}
            <AwardsPage />
            <UpperFooterPage />
            {/*<AppFooter />*/}
        </>
    );
};

export default HomePage;