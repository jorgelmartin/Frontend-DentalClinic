import Modal from 'react-bootstrap/Modal';
import { ClinicButton } from '../ClinicButton/ClinicButton';

export const WarningModal = ({ show, onHide }) => {
    return (
        <Modal show={show} onHide={onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>Campos Incompletos</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Por favor, complete todos los campos antes de continuar.
                </Modal.Body>
                <Modal.Footer>
                    <ClinicButton
                        onClick={onHide}
                        text={'Cerrar'}
                    />
                </Modal.Footer>
            </Modal>
    );
};