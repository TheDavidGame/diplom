import { useRef, useState } from 'react';
import MainPage from "../MainPage/MainPage";
import UnderMainPage from "../UnderMainPage/UnderMainPage";
import AboutUsPage from "../AboutUsPage/AboutUsPage";
import EventsPage from "../EventsPage/EventsPage";

const App = () => {
    const mainPageRef = useRef<HTMLDivElement>(null);
    const [isMainPageVisible, setIsMainPageVisible] = useState(true);

    return (
        <div className="App">
            <MainPage ref={mainPageRef} />
            <UnderMainPage
                mainPageRef={mainPageRef}
                isMainPageVisible={isMainPageVisible}
                setIsMainPageVisible={setIsMainPageVisible}
            />
            <AboutUsPage />
            <EventsPage />
        </div>
    );
}

export default App;
