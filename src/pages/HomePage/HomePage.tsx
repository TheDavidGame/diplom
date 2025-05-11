import {useRef, useState} from "react";
import MainPage from "../MainPage/MainPage";
import UnderMainPage from "../UnderMainPage/UnderMainPage";
import AboutUsPage from "../AboutUsPage/AboutUsPage";
import EventsPage from "../EventsPage/EventsPage";
import AwardsPage from "../AwardsPage/AwardsPage";
import UpperFooterPage from "../UpperFooterPage/UpperFooterPage";
import AppFooter from "../AppFooter/AppFooter";

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

export default HomePage;