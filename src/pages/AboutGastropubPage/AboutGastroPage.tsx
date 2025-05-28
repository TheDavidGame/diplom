import React, {useRef, useState} from 'react';
import MainPage from "./MainPage/MainPage";
import UnderHeader from "./UnderHeader/UnderHeader";
import MissionPage from "./MissionPage/MissionPage";
import UnderMissionPage from "./UnderMissionPage/UnderMissionPage";
import LiveCulturePage from "./LiveCulturePage/LiveCulturePage";
import TasteEventPage from "./TasteEventPage/TasteEventPage";
import FrequentQuestions from "./FrequentQuestions/FrequentQuestions";
import UpperFooterPage from "../UpperFooterPage/UpperFooterPage";
import AppFooter from "../AppFooter/AppFooter";

const AboutGastroPage = () => {
    const mainPageRef = useRef<HTMLDivElement>(null);
    const [isMainPageVisible, setIsMainPageVisible] = useState(true);
    return (
        <div>
            <MainPage ref={mainPageRef}/>
            <UnderHeader
                mainPageRef={mainPageRef}
                isMainPageVisible={isMainPageVisible}
                setIsMainPageVisible={setIsMainPageVisible}
            />
            <MissionPage/>
            <UnderMissionPage/>
            <LiveCulturePage />
            <TasteEventPage />
            <FrequentQuestions />
            <UpperFooterPage />
            <AppFooter/>
        </div>
    );
};

export default AboutGastroPage;