
import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "../Login/Login";
import { Register } from "../Register/Register";
import { Admin } from "../Admin/Admin";
import { Profile } from "../Profile/Profile";
import { Appointment } from "../Appointment/Appointment";
import { UserCard } from "../UserCard/UserCard";
import { AppointmentCard } from "../../common/AppointmentCard/AppointmentCard";
import { CreateAppointment } from "../CreateAppointment/CreateAppointment";
import { ServiceDetail } from "../ServiceDetail/ServiceDetail";
import { AppointmentDetail } from "../AppointmentDetail/AppointmentDetail";
import { Home } from "../Home/Home";

export const Body = () => {
    return (
        <>
            <Routes>
                <Route path="*" element={<Navigate to="/"/>} />
                <Route path="*" element={<Navigate to="/" />} />
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/appointment" element={<Appointment />} />
                <Route path="/usercard" element={<UserCard />} />
                <Route path="/appointmentcard" element={<AppointmentCard />} />
                <Route path="/createappointment" element={<CreateAppointment/>} />
                <Route path="/servicedetail/:id" element={<ServiceDetail/>} />
                <Route path="/appointmentdetail/:id" element={<AppointmentDetail/>} />
            </Routes>
        </>
    );
};