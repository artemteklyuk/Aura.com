import Header from "./components/Header/header";
import "./reset.css"
import "./app.css"
import Preview from "./components/Preview/preview";
import {BrowserRouter} from "react-router-dom";
import Auction from "./components/Auction/auction";
import OtherAuctions from "./components/OtherAuctions/OtherAuctions";
import NewStickers from "./components/NewStickers/NewStickers";
import Subscribe from "./components/Subscribe/Subscribe";

const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Preview/>
            <Auction/>
            <OtherAuctions/>
            <NewStickers/>
            <Subscribe/>
        </BrowserRouter>
    )
}

export default App;
