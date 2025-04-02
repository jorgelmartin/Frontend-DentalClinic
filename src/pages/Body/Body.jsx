
import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "../Login/Login";
import { Register } from "../Register/Register";
import { Profile } from "../Profile/Profile";
import { Users } from "../Users/Users";
import { Appointments } from "../Appointments/Appointments";
import { CreateAppointment } from "../CreateAppointment/CreateAppointment";
import { ServiceDetail } from "../ServiceDetail/ServiceDetail";
import { AppointmentDetail } from "../AppointmentDetail/AppointmentDetail";
import { Home } from "../Home/Home";
import { UserDetail } from "../UserDetail/UserDetail";
import { Menu } from "../Menu/Menu";

export const Body = () => {
    return (
        <>
            <Routes>
                <Route path="*" element={<Navigate to="/"/>} />
                <Route path="*" element={<Navigate to="/" />} />
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/users" element={<Users />} />
                <Route path="/appointments" element={<Appointments />} />
                <Route path="/createappointment" element={<CreateAppointment/>} />
                <Route path="/servicedetail/:id" element={<ServiceDetail/>} />
                <Route path="/appointmentdetail/:id" element={<AppointmentDetail/>} />
                <Route path="/userdetail/:id" element={<UserDetail/>} />
            </Routes>
        </>
    );
};