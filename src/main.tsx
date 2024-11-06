import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import {Provider} from "react-redux";
import {store} from "./app/store.ts";

createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
        <BrowserRouter>
            <CssBaseline />
            <App />
        </BrowserRouter>
    </Provider>,
);
