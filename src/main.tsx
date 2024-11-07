import { createRoot } from "react-dom/client";
import 'react-toastify/dist/ReactToastify.css';
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./app/store.ts";
import {ToastContainer} from "react-toastify";


createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
        <BrowserRouter>
            <ToastContainer />
            <App />
        </BrowserRouter>
    </Provider>,
);
