import React, {useRef, useState} from 'react';
import MainPage from "./MainPage/MainPage";
import UnderHeader from "./UnderHeader/UnderHeader";

const AboutGastroPage = () => {
    const mainPageRef = useRef<HTMLDivElement>(null);
    const [isMainPageVisible, setIsMainPageVisible] = useState(true);
    return (
        <div>
            <MainPage/>
            <UnderHeader
                mainPageRef={mainPageRef}
                isMainPageVisible={isMainPageVisible}
                setIsMainPageVisible={setIsMainPageVisible}
            />
        </div>
    );
};

export default AboutGastroPage;