import { useNavigate, useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useFetchUserDetails } from "../../../hooks/useFetchUserDetails";
import { AppButton } from "../../common/AppButton/AppButton";
import "./../../App.css";

export const UserDetail = () => {
    const navigate = useNavigate();
    let { id } = useParams();
    const parsedId = parseInt(id);
    const user = useFetchUserDetails(parsedId);

    if (!user) {
        return <div>Cargando detalle...</div>;
    }

    return (
        <Container className="d-flex justify-content-center align-items-center mt-5">
            <div className="dataDetailContainer">

                {/* USER DETAIL TITLE */}
                <div className="d-flex align-items-center justify-content-center">
                    <div className="dataStyleTitle">
                        Detalle usuario
                    </div>
                </div>

                {/* DATA USER */}
                <div className="dataDataDetail">
                    <div className="dataDetailHeader">Nº</div>
                    <strong> <div>{user.id}</div></strong>
                </div>
                <div className="dataDataDetail">
                    <div className="dataDetailHeader">Nombre</div>
                    <strong> <div>{user.name} {user.lastname}</div></strong>
                </div>
                <div className="dataDataDetail">
                    <div className="dataDetailHeader">Email</div>
                    <strong>  <div>{user.email}</div></strong>
                </div>
                <div className="dataDataDetail">
                    <div className="dataDetailHeader">DNI/NIE</div>
                    <strong> <div>{user.dni}</div></strong>
                </div>
                <div className="dataDataDetail">
                    <div className="dataDetailHeader">Teléfono</div>
                    <strong> <div>{user.phone}</div></strong>
                </div>
                <div className="dataDataDetail">
                    <div className="dataDetailHeader">Dirección</div>
                    <strong> <div>{user.address}</div></strong>
                </div>

                {/* GO BACK BUTTTON */}
                <div className="d-flex align-items-center justify-content-center">
                    <AppButton
                        text={'Volver'}
                        onClick={() => navigate("/users")}
                    />
                </div>
            </div>
        </Container >
    );
};