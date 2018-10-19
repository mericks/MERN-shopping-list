import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Col, Row, Container, CardDeck, Card, CardImg, CardText, CardBody, CardTitle, CardFooter, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { getItems, deleteItem } from '../actions/itemActions';
// import Img from 'react-image';


class ItemList extends Component {

    componentDidMount() {
        this.props.getItems();
    }

    deleteItem = id => {
        this.props.deleteItem(id);
    }

    render () {
        const { items } = this.props.item;

        let cards = items.map(item =>
            <CSSTransition key={item._id} timeout={500} classNames="fade">
                <Col sm="4">
                    <Card>
                        <CardImg top width="100%" className="card-image" src={item.thumbnail_url} alt={item.name} />
                        <CardBody>
                            <CardTitle>{item.name}</CardTitle>
                            <CardText>{item.extract}</CardText>
                            <CardFooter>
                                <Button
                                    className="remove-btn"
                                    color="danger"
                                    size="sm"
                                    onClick={this.deleteItem.bind(this, item._id)}>
                                Delete</Button>
                             </CardFooter>
                        </CardBody>
                    </Card>
                </Col>
            </CSSTransition>
        );
          
        return (
            <Container>
                <Row>
                    <CardDeck>
                        <TransitionGroup component={null}>
                            {cards} 
                        </TransitionGroup>
                    </CardDeck>
                </Row>
            </Container>
        );
    }

}

ItemList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item
});  

export default connect(mapStateToProps, { getItems, deleteItem })(ItemList);