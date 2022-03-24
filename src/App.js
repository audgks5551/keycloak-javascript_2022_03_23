import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./component/Welcome";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Welcome/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
