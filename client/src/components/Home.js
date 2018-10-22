import React, { Component }  from 'react';
import { Jumbotron } from 'reactstrap';
import AddItemModal from './AddItemModal';
import Cards from './Cards';

class Home extends Component {

    render() {
        return (
            <div>
                <Jumbotron className="jumbo-image clearfix" >
                    <div className="title clearfix float-right">
                        <h1>Cheese</h1>
                        <h1>Force</h1>
                        <p>Life-Embuing Curdled Milk</p>
                    </div>
                </Jumbotron>
                <AddItemModal />
                <Cards />
            </div>
        );
    }

}

export default Home;