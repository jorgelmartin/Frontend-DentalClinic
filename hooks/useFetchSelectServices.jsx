import { useEffect, useState } from "react";

//SELECTING SERVICES FOR THE APPOINTMENT
export const SelectServices = ({handleChange, value}) => {

    //USER SELECTED SERVICE FROM THE FATHER COMPONENT
    const [selectedService, setSelectedService] = useState(value);
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/service/getAll")
            .then((res) => res.json())
            .then((res) => {
                setServices(res.data);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <>
            <select className="inputAppointment" value={selectedService} onChange={(e) => {
                handleChange(e.target.value); 
                setSelectedService(e.target.value)}}>
                <option value="">Select Service</option>
                {services.map((service) => (
                    <option key={service.id} value={service.id}>
                        {service.name}
                    </option>
                ))}
            </select>
            {/* <div>{selectedService && `Selected service: ${selectedService}`}</div> */}
        </>
    );
};