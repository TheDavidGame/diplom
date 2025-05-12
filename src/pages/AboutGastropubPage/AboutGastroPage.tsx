import React, {useRef, useState} from 'react';
import MainPage from "./MainPage/MainPage";
import UnderHeader from "./UnderHeader/UnderHeader";
import MissionPage from "./MissionPage/MissionPage";
import UnderMissionPage from "./UnderMissionPage/UnderMissionPage";
import LiveCulturePage from "./LiveCulturePage/LiveCulturePage";
import TasteEventPage from "./TasteEventPage/TasteEventPage";

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
        </div>
    );
};

export default AboutGastroPage;