import Header from "./components/Header/header";
import "./app.css"
import Preview from "./components/Preview/preview";
import {BrowserRouter} from "react-router-dom";
const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Preview/>
        </BrowserRouter>
    )
}

export default App;
