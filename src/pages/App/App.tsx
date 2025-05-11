import {BrowserRouter, Route, Routes} from 'react-router-dom';

import MenuPage from "../MenuPage/MenuPage";
import DoneReservationModalPage from "../ReservationModalPage/DoneReservationModalPage/DoneReservationModalPage";
import HomePage from "../HomePage/HomePage";

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
