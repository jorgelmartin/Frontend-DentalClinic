import { useEffect, useState } from "react";

export const SelectServices = ({handleChange}) => {
    const [selectedService, setSelectedService] = useState("");
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/service/getAll")
            .then((res) => res.json())
            .then((res) => {
                console.log("Response from API:", res);
                setServices(res.data);
            })
            .catch((error) => console.log(error));
    }, []);

    // const handleChange = (event) => {
    //     setSelectedService(event.target.value);
    // };

    return (
        <>
            <select className="width:20px" value={selectedService} onChange={(e) => {handleChange(e.target.value); setSelectedService(e.target.value)}}>
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