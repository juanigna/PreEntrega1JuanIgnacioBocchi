import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import './index.css';

const Form = () => {
    const [userData, setUserData] = useState({});

    const handleChange = (e) => {
        setUserData({
            ...userData,
            id: Date.now(),
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userData);
    };

    return (
        <Container>
            <div className="form-container">
                <form action="" onSubmit={handleSubmit} className="main-form">
                    <input
                        type="text"
                        name="nombre"
                        placeholder="Nombre"
                        onChange={handleChange}
                    ></input>
                    <input
                        type="text"
                        name="apellido"
                        placeholder="Apellido"
                        onChange={handleChange}
                    ></input>
                    <Button variant="primary" type="submit">
                        Enviar
                    </Button>
                </form>
            </div>
        </Container>
    );
};

export default Form;
