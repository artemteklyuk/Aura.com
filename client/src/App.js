import Header from "./components/Header/header";
import "./reset.css"
import "./app.css"
import Preview from "./components/Preview/preview";
import {BrowserRouter} from "react-router-dom";
import Auction from "./components/Auction/auction";
const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Preview/>
            <Auction/>
        </BrowserRouter>
    )
}

export default App;
