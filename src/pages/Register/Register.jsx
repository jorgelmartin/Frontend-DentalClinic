import React from "react";
import "./Register.css";
import { InputText } from "../../common/InputText/InputText";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from 'react-bootstrap';


export const Register = () => {
    const inputFields = [
        { label: 'Nombre completo:', type: 'text', placeholder: 'Escribe tu nombre...', name: 'fullname' },
        { label: 'Email:', type: 'email', placeholder: 'Escribe tu email...', name: 'email' },
        // Agrega el resto de los inputs aquí
      ];

    return (
        <div className="registerDesign">
            <Container>
            <h2>Registro</h2>
                <Row>
                    <Col>
                
                <div className="dataRegister">
                <span className="label">Nombre completo:</span>
                <InputText
                    type="text"
                    placeholder="Escribe tu nombre..."
                    name="fullname"
                    className="input-inline"
                />
                </div>
                <div className="dataRegister">
                <span className="label">Email:</span>
                <InputText
                    type="email"
                    placeholder="Escribe tu email..."
                    name="email"
                    className="input-inline"
                />
                </div>
                <div className="dataRegister">
                <span className="label">Contraseña:</span>
                <InputText
                    type="password"
                    placeholder="Escribe tu password..."
                    name="password"
                />
                </div>
                <div className="dataRegister">
                <span className="label">NIF:</span>
                <InputText
                    type="text"
                    placeholder="Escribe tu nif..."
                    name="nif"
                />
                </div>
                <div className="dataRegister">
                <span className="label">Dirección:</span>
                <InputText
                    type="text"
                    placeholder="Escribe tu nif..."
                    name="nif"
                />
                </div>
                <div className="dataRegister">
                <span className="label">Edad:</span>
                <InputText
                    type="text"
                    placeholder="Escribe tu edad..."
                    name="age"
                />
                </div>
                <div className="dataRegister">
                <span className="label">Teléfono:</span>
                <InputText
                    type="text"
                    placeholder="Escribe tu teléfono..."
                    name="age"
                />
                </div></Col>
                </Row>
            </Container>
        </div>
    );
};



// import React from 'react';

// const RegisterForm = () => {
//   const inputFields = [
//     { label: 'Nombre completo:', type: 'text', placeholder: 'Escribe tu nombre...', name: 'fullname' },
//     { label: 'Email:', type: 'email', placeholder: 'Escribe tu email...', name: 'email' },
//     // Agrega el resto de los inputs aquí
//   ];

//   return (
//     <div className="registerDesign">
//       <div className="container">
//         <h2>Registro</h2>
//         {inputFields.map((input, index) => (
//           <div className="dataRegister" key={index}>
//             <span className="label">{input.label}</span>
//             <input
//               type={input.type}
//               placeholder={input.placeholder}
//               name={input.name}
//               className="input-inline"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RegisterForm;