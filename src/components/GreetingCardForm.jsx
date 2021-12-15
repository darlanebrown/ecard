import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

function GreetingCardForm({
    errors,
    setErrors,
    form,
    setForm,
    cardType,
    setCardType,
    setViewCard,
}) {
    const [gif, setGif] = useState('');

    useEffect(() => {
        setGif(
            cardType === 'valentine'
                ? 'https://media.giphy.com/media/7k3ThwwMXnHCE/giphy.gif'
                : 'https://media.giphy.com/media/GepjBlRKsD1uM/giphy.gif'
        );
    }, [cardType]);

    const onChangeInput = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
        if (errors[name] && errors[name].length > 0) {
            setErrors((prevState) => ({ ...prevState, [name]: '' }));
        }
    };

    const validateEmail = (email) => {
        if (!email) {
            setErrors((prevState) => ({
                ...prevState,
                email: 'Email is required',
            }));
            return false;
        }

        if (
            !email.match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )
        ) {
            setErrors((prevState) => ({
                ...prevState,
                email: 'Please enter a valid email address',
            }));
            return false;
        }
        setErrors((prevState) => ({ ...prevState, email: '' }));
        return true;
    };

    const onSubmit = () => {
        const inputs = Object.entries(form);
        const allInputsEntered = inputs.every((input) => input[1].length > 0);
        const isEmailValid = validateEmail(form.email);

        if (!isEmailValid) {
            return;
        }

        if (!allInputsEntered) {
            inputs
                .filter((input) => input[1].length === 0)
                .forEach((input) => {
                    setErrors((prevState) => ({
                        ...prevState,
                        [input[0]]: `${input[0]} is required`,
                    }));
                });
            return;
        }
        setViewCard(true);
    };

    const renderErrorMessage = (message) =>
        message && message.length > 0 ? (
            <p className="text-danger">{message}</p>
        ) : null;

    return (
        <Container className="">
            <Row className="d-flex justify-content-center">
                <Col xs={12} sm={6}>
                    <Container>
                        <Row>
                            <Col xs={12} sm={6}>
                                <img
                                    src={gif}
                                    alt="gif"
                                    style={{
                                        width: 245,
                                        height: 350,
                                        maxWidth: '100%',
                                    }}
                                />
                            </Col>
                            <Col
                                xs={12}
                                sm={6}
                                className="d-flex justify-content-center flex-grow-1 flex-column"
                            >
                                <p className="font-weight-bold">
                                    How to reshare:
                                </p>
                                <p>Write your own custom message below</p>
                            </Col>
                        </Row>
                    </Container>
                    <Form>
                        <Form.Label>Select card type</Form.Label>
                        <Form.Check
                            type="radio"
                            label="Valentine"
                            id="type"
                            checked={cardType === 'valentine'}
                            onChange={() => setCardType('valentine')}
                        />
                        <Form.Check
                            type="radio"
                            label="Christmas"
                            id="christmas"
                            checked={cardType === 'christmas'}
                            onChange={() => setCardType('christmas')}
                        />
                        <Form.Group className="mb-3">
                            <Form.Label>Recepient Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                name="email"
                                onChange={onChangeInput}
                                value={form.email}
                            />
                            {renderErrorMessage(errors.email)}
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Greetings</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Greetings"
                                name="greetings"
                                onChange={onChangeInput}
                                value={form.greetings}
                            />
                            {renderErrorMessage(errors.greetings)}
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Message</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                name="message"
                                onChange={onChangeInput}
                                value={form.message}
                            />
                            {renderErrorMessage(errors.message)}
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Closing</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Closing"
                                name="closing"
                                onChange={onChangeInput}
                                value={form.closing}
                            />
                            {renderErrorMessage(errors.closing)}
                        </Form.Group>
                        <div className="d-grid gap-2">
                            <Button size="lg" onClick={onSubmit}>
                                Preview greeting card
                            </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default GreetingCardForm;
