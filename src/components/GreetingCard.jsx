import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

function GreetingCard({ form, setViewCard, cardType }) {
    const onSend = () => {
        if (form.email) {
            let mailto = `mailto:${form.email}?subject=E-card&body=You have received a greeting card%0D%0A`;
            const url = `https://darlanebrown.github.io/ecard?greeting=${encodeURIComponent(form.greetings)}&body=${encodeURIComponent(form.message)}&closing=${encodeURIComponent(form.closing)}`;
            mailto += encodeURIComponent(url);
            window.open(mailto);
        }
    };

    return (
        <Container className="">
            <Row>
                <Col className="d-flex flex-column justify-content-center align-items-center ">
                    <img
                        style={{
                            width: 245,
                            height: 350,
                            maxWidth: '100%',
                        }}
                        src={
                            cardType === 'christmas'
                                ? 'https://media.giphy.com/media/GepjBlRKsD1uM/giphy.gif'
                                : 'https://media.giphy.com/media/7k3ThwwMXnHCE/giphy.gif'
                        }
                        alt="card"
                    />
                    <p style={{ fontSize: 20, fontWeight: 'bold' }}>
                        {form.greetings}
                    </p>
                    <p style={{ fontSize: 20, fontWeight: 'bold' }}>
                        {form.message}
                    </p>
                    <p style={{ fontSize: 20, fontWeight: 'bold' }}>
                        {form.closing}
                    </p>
                    <div className="d-grid gap-2 flex-grow-1">
                        <Button
                            size="lg"
                            className="flex-grow-1"
                            onClick={() => setViewCard(false)}
                        >
                            {form.email
                                ? 'Reshare this card'
                                : 'Continue editing'}
                        </Button>
                        {form.email && (
                            <Button size="lg" onClick={onSend}>
                                Send
                            </Button>
                        )}
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default GreetingCard;
