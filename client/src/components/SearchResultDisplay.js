import React from 'react';
import { Container, Media, Button } from 'reactstrap';

const SearchResultDisplay = props => {

    return (
        <Container>
            <Media>
                <Media left middle href="#">
                    <Media object className="thumbnail" src={props.thumbnail_url} alt={props.name} />
                </Media>
                <Media body>
                    <Media heading>
                        {props.name}
                    </Media>
                    {props.description}<br /><br />
                    <div>
                        <Button color="secondary" onClick={props.toggle}>No thanks</Button>{' '}
                        <Button color="warning" onClick={props.handleSubmit}>Cheese me!</Button>
                    </div>
                </Media>
            </Media>
        </Container>
  );

};

export default SearchResultDisplay;