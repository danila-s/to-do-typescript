import React from "react";
import { Route, Routes } from 'react-router-dom'


function Main() {
    return (
        <main>
            <Routes>
                <Route path="/"
                    element={<div>day</div>}
                />
                <Route path="/month" 
                    element={<div>month</div>}
                />
                <Route path="/year" 
                    element={<div>year</div>}
                />
            </Routes>
        </main>
    )
}

export default Main