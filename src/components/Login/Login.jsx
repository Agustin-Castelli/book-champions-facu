import { Button, Card, Col, Form, FormGroup, Row } from "react-bootstrap";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {

    const navigate = useNavigate();
    
    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredPassword, setEnteredPassword] = useState("");
    const [errors, setErrors] = useState({
        email: false,
        password: false
    })

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const emailHandler = (event) => {
        setErrors({...errors, email: false});
        setEnteredEmail(event.target.value);
    }

    const passwordHandler = (event) => {
        setErrors({...errors, password: false});
        setEnteredPassword(event.target.value);
    }

    const submitLogin = (event) => {
        event.preventDefault();
        if (emailRef.current.value.length === 0) {
            emailRef.current.focus();
            setErrors({...errors, email: true});
            return;
            }
        if (passwordRef.current.value.length === 0) {
            passwordRef.current.focus();
            setErrors({...errors, password: true});
            return;
            }
            
        alert("El mail ingresado es: " + enteredEmail + " y la contraseña ingresada es: " + enteredPassword);

        onLogin();
        navigate("/");

        setEnteredEmail("");
        setEnteredPassword("");
    }

    return (
        <div className="d-flex justify-content-center">
        <Card className="mt-5 mx-3 p-3 px-5 shadow w-50">
        <Card.Body>
            <Row>
            <h5>¡Bienvenidos a Books Champion!</h5>
            </Row>
            <Form onSubmit={submitLogin}>
                <FormGroup className="mb-4">
                    <Form.Control
                        className={errors.email && "border border-danger"} 
                        type="email" 
                        ref={emailRef}
                        //required 
                        placeholder="Ingresar email" 
                        onChange={emailHandler}
                        value={enteredEmail}
                    />
                </FormGroup>
                <FormGroup className="mb-4">
                    <Form.Control
                        className={errors.password && "border border-danger"}
                        type="password"
                        ref={passwordRef}
                        //required
                        placeholder="Ingresar contraseña"
                        onChange={passwordHandler}
                        value={enteredPassword}
                    />
                </FormGroup>
                <p className="text-warning">{(errors.email || errors.password)? "Debe completar todos los campos para iniciar sesión." : ""}</p>
                <Row>
                    <Col />
                    <Col md={6} className="d-flex justify-content-end">
                        <Button variant="secondary" type="submit">
                            Iniciar sesión
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Card.Body>
        </Card>
        </div>
    );
    };

    export default Login;
