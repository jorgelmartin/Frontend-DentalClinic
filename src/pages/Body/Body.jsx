
import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "../Login/Login";
import { Register } from "../Register/Register";
import { Admin } from "../Admin/Admin";
import { Profile } from "../Profile/Profile";
import { PatientMenu } from "../PatientMenu/PatientMenu";
import { Users } from "../Users/Users";
import { Appointments } from "../Appointments/Appointments";
import { CreateAppointment } from "../CreateAppointment/CreateAppointment";
import { ServiceDetail } from "../ServiceDetail/ServiceDetail";
import { AppointmentDetail } from "../AppointmentDetail/AppointmentDetail";
import { Home } from "../Home/Home";
import { UserDetail } from "../UserDetail/UserDetail";

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
                <Route path="/patientMenu" element={<PatientMenu />} />
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