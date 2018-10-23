/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Col, Row, Container, CardDeck, Card, CardImg, CardHeader, CardBody, Button, Popover, PopoverBody } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { getItems, deleteItem } from '../actions/itemActions';


class Cards extends Component {

    state = {
        popoverOpen: false
    }

    componentDidMount() {
        this.props.getItems();
    }

    toggle = () => {
        this.setState({ popoverOpen: !this.state.popoverOpen });
    }

    deleteItem = id => {
        console.log('deleteItem called');
        this.props.deleteItem(id);
    }

    render () {
        const { items } = this.props.item;

        const cards = items.map(item =>
            <CSSTransition key={item._id} timeout={500} classNames="fade">
                <Col sm="4"> 
                    <Card className="mb-5 bg-dark border-0">
                        <CardHeader tag="h3" className="card-title bg-secondary rounded-top">{item.name}</CardHeader>
                        <CardImg top width="100%" className="rounded-bottom card-image" src={item.thumbnail_url} alt={item.name} />
                        <CardBody className="clearfix">
                            <Button className="float-left" outline color="danger"
                                onClick={this.props.deleteItem.bind(this, item._id)}>
                                &times;
                            </Button>
                            <Button className="float-right" color="secondary"
                                id={ `Popover-${item._id}` }
                                onClick={this.toggle}>
                                Learn more...
                            </Button>
                            <Popover placement="bottom" isOpen={this.state.popoverOpen} target={ `Popover-${item._id}` } toggle={this.toggle}>
                                <PopoverBody>
                                    {item.extract}
                                    <Button className="remove-btn clearfix float-right" color="danger" size="sm"
                                        onClick={this.props.deleteItem.bind(this, item._id)}>
                                        Delete
                                    </Button>
                                </PopoverBody>
                            </Popover>
                        </CardBody>
                    </Card>
                </Col>
            </CSSTransition>
        );
          
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

Cards.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}


const mapStateToProps = (state) => ({
    item: state.item
});  

export default connect(mapStateToProps, { getItems, deleteItem })(Cards);