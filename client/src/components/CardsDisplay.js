/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Col, Row, Container, CardDeck } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { getItems, deleteItem } from '../actions/itemActions';
import CardItem from './CardItem';

class CardsDisplay extends Component {
    componentDidMount() {
        this.props.getItems();
    }

    deleteItem = id => {
        this.props.deleteItem(id);
    };

    render() {
        const { items } = this.props.item;

        const cards = items.map(item => (
            <CSSTransition key={item._id} timeout={500} classNames="fade">
                <Col sm="4">
                    <CardItem item={item} deleteItem={this.deleteItem} />
                </Col>
            </CSSTransition>
        ));

        return (
            <div>
                <Container>
                    <Row>
                        <CardDeck>
                            <TransitionGroup component={null}>
                                {cards}
                            </TransitionGroup>
                        </CardDeck>
                    </Row>
                </Container>
            </div>
        );
    }
}

CardsDisplay.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    item: state.item
});

export default connect(
    mapStateToProps,
    { getItems, deleteItem }
)(CardsDisplay);
