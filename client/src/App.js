import Header from "./components/Header/header";
import "./reset.css"
import "./app.css"
import Preview from "./components/Preview/preview";
import {BrowserRouter} from "react-router-dom";
import Auction from "./components/Auction/auction";
import OtherAuctions from "./components/OtherAuctions/OtherAuctions";
const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Preview/>
            <Auction/>
            <OtherAuctions/>
        </BrowserRouter>
    )
}

export default App;
