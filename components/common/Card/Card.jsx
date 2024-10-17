/* eslint-disable react/prop-types */
import IconButton from '@mui/material/IconButton';
import { Modal } from 'react-bootstrap';
import { useState } from 'react';


export default function CardDetails({punto}) {

    const [isModalVerOpen, setIsModalVerOpen] = useState(false);

    const closeModalEdit = () => {
        setIsModalVerOpen(false);
    };

    return (
        <>
            <div style={{ maxWidth: 200 }}>
                <img src={punto.url_imagen} alt="Municipalidad SMT" className='img-fluid'/>
                <p className='m-0 text-center mt-3' style={{fontWeight: '800'}}>{punto.nombre_ubicacion}</p>
                <div className='d-flex align-items-center justify-content-center pt-4'>
                    <IconButton style={{fontSize: '.8rem', cursor: "pointer"}} onClick={() => setIsModalVerOpen(true)}>
                        <p className='m-0'>Ver Más</p>
                    </IconButton>
                </div>
            </div>
            <Modal
                show={isModalVerOpen}
                onHide={closeModalEdit}
                size="lg"
                backdrop="static"
                centered
                keyboard={false}
                scrollable={true}
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h2>{punto.nombre_ubicacion}</h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="p-3 d-flex flex-column justify-content-around">
                    <div className='row d-flex justify-content-around'>
                        <div className="col-12 col-md-6 p-4 d-flex justify-content-center" style={{ backgroundColor: "#fff" }}>
                            <img src={punto.url_imagen} className='img-fluid'/>
                        </div>
                        <div className='col-12 col-md-5 d-flex flex-column justify-content-center'>
                            <p>{punto.detalle}</p>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}
