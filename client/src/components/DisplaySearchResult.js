import React from 'react';
import { Container, Media, ModalFooter , Button } from 'reactstrap';

const DisplaySearchResult = props => {

    return (
        <Container>
            {/* <form onSubmit={props.handleSubmit}> */}
            <Media>
                <Media left middle href="#">
                    <Media object className="thumbnail" src={props.thumbnail_url} alt={props.name} />
                </Media>
                <Media body>
                    <Media heading>
                        {props.name}
                    </Media>
                    {props.description}
                </Media>
            </Media>
            <ModalFooter>
                <Button color="secondary" onClick={props.toggle}>No thanks</Button>{' '}
                <Button color="warning" onClick={props.handleSubmit}>Cheese me!</Button>
            </ModalFooter>
        {/* </form> */}
        </Container>
  );

};

export default DisplaySearchResult;