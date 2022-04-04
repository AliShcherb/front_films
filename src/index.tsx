import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Data from './App';
import Single from './Single';
import reportWebVitals from './reportWebVitals';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

ReactDOM.render(
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<Data />} />
                    <Route path="film">
                        <Route index element={<Data />} />
                        <Route path=":id" element={<Single />} />
                    </Route>
                    <Route
                        path="*"
                        element={
                            <main style={{ padding: "1rem" }}>
                                <p>There's nothing here!</p>
                            </main>
                        }
                    />
                </Route>
            </Routes>
        </BrowserRouter>,
        document.getElementById("root")
    );

reportWebVitals();
