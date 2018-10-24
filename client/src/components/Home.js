import React, { Component }  from 'react';
import { Jumbotron } from 'reactstrap';
import AddItemModal from './AddItemModal';
import Cards from './Cards';

class Home extends Component {

    render() {
        return (
            <div id="home">
                <Jumbotron className="jumbo-image clearfix mb-0">
                    <div className="title clearfix float-right">
                        <h1 className="display-2">CHEESE<br /> IQ</h1>
                    </div>
                </Jumbotron>
                <AddItemModal />
                <Cards />
            </div>
        );
    }

}

export default Home;