import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Media, ModalFooter , Button } from 'reactstrap';

const DisplaySearchResult = props => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Container>
                <Row>
                    <Col xs="3">
                        <img className="thumbnail" src={props.thumbnail_src} alt={props.name}/>
                    </Col>
                    <Col xs="auto">
                        <Media body>
                            <Media heading>
                                {props.name}
                            </Media>
                            {props.description}
                        </Media>
                    </Col>
                </Row>
                <ModalFooter>
                    <Button color="secondary" onClick={this.toggle}>No thanks</Button>{' '}
                    <Button color="warning" onClick={props.handleSubmit}>Cheese me!</Button>
                </ModalFooter>
            </Container>
        </form>

  );

};

export default DisplaySearchResult;