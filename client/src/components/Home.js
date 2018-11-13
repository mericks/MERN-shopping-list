import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import AddItemModal from './AddItemModal';
import CardsDisplay from './CardsDisplay';

class Home extends Component {
    render() {
        return (
            <div className="bg-dark">
                <Jumbotron className="jumbo-image clearfix mb-0">
                    <div className="title clearfix float-right">
                        <h1 className="display-2">
                            CHEESE
                            <br /> IQ
                        </h1>
                    </div>
                </Jumbotron>
                <AddItemModal />
                <CardsDisplay />
            </div>
        );
    }
}

export default Home;
