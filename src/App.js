import { useRoutes } from "react-router-dom";
import ThemeRoutes from "./routes/Router";
import { Provider } from "react-redux";
import { store } from "./Store";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const routing = useRoutes(ThemeRoutes);

  return (
    <Provider store={store}>
      <ToastContainer />
      <div className="dark">{routing}</div>
    </Provider>
  );
};

export default App;
