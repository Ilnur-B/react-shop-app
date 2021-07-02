import './App.css';

import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import Main from "./components/main/main.component";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Footer/>
        </div>

    );
}

export default App;
