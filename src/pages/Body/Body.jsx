import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../Home/Home";
import { Login } from "../Login/Login";
import { Register } from "../Register/Register";
// import { About } from "../About/About";
import { Admin } from "../Admin/Admin";
import { Profile } from "../Profile/Profile";

export const Body = () => {
    return (
        <>
            <Routes>
                <Route path="*" element={<Navigate to="/"/>} />
                <Route path="*" element={<Admin />} />
                <Route path="/" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                {/* <Route path="/about" element={<About />} /> */}
                <Route path="/admin" element={<Admin />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </>
    );
};