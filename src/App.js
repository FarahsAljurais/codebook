import { AllRoutes } from "./routes/AllRoutes";
import { Header, Footer } from "./components";
import "./App.css";
import { ScrollToTop } from "./components/Other/ScrollToTop";

function App() {
  return (
    <div className="App dark:bg-darkbg">
      <Header />
      <ScrollToTop />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
