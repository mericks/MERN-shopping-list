import React, { Component } from 'react';
import {
    Container,
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap';
import {
    CSSTransition,
    TransitionGroup
} from 'react-transition-group';
import uuid from 'uuid';

class ShoppingList extends Component {
    state = {
        items: [
            { id: uuid(), name: 'Brie' },
            { id: uuid(), name: 'Fromage Blanc' },
            { id: uuid(), name: 'Camembert' },
            { id: uuid(), name: 'Bleu' }
        ]
    }

    addItem = () => {
        const name = prompt('Enter Item');
        if (name) {
            this.setState(state => ({
                items: [...state.items, { id:uuid(), name }]
            }));
        }
    }

    render () {
        const { items } = this.state;

        return (
            <Container>
                <Button
                    color="dark"
                    style={{ marginBottom: '2rem' }}
                    onClick={this.addItem}
                >Add Item</Button>

                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {items.map(({ id, name}) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>

                
            </Container>
        );
    }

}

export default ShoppingList;