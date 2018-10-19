import React, { Component } from 'react';
import { FormGroup, Label, Input, ButtonGroup, Button } from 'reactstrap';
import axios from 'axios';


class DisplaySearch extends Component {
    state = {
        inputName: '',
        searchResults: []
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
        if (this.state.inputName.length > 2) {
            this.getSearchResults();
        };
    }
    
    getSearchResults = () => {
        axios
            // TODO: limit search response to 5 titles
            // TODO: Check to see if can do verification of cheese field if not category search limitation
            // TODO: Limit search responses to items in cheese types category
            .get(`https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&format=json&search=${this.state.inputName}`)
            .then(res => this.setState({ searchResults: res.data[1]}));
    }
    

    render() {

        const listResults = this.state.searchResults.map((result, index) =>
            <Button key={index} color="warning" onClick={() => this.props.addSelectedItem(result)} block>
                {result}
            </Button>
        );

    
        return (
            <div>
                <FormGroup>
                    <Label for="item">Which cheese shall we add?</Label>
                    <Input
                        type="text"
                        name="inputName"
                        id="item"
                        onChange={this.onChange}
                    ></Input>
                </FormGroup>

                <ButtonGroup vertical>
                    {listResults}
                </ButtonGroup>
            </div>
        )
    }
    
}

export default DisplaySearch;