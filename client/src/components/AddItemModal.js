import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';
import DisplaySearchResults from './DisplaySearchResults';
import axios from 'axios';


class ItemModal extends Component {
    state = {
        modal: false,
        name: '',
        searchResults: [],
        selectedItem: {
            title: '',
            description: '',
            extract: '',
            content_urls: {
                desktop: '',
                mobile: ''
            },
            thumbnail_src: '',
            pageid: 0
        }
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal,
            searchResults: []
        });
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
        if (this.state.name.length >= 2) {
            this.getSearchResults();
        };
    }
 
    getSearchResults = () => {
        axios
            // TODO: limit search response to 5 titles
            // TODO: Limit search responses to items in cheese types category
            .get(`https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&format=json&search=${this.state.name}`)
            .then(res => this.setState({ searchResults: res.data[1]}));
    }
    
    addSelectedItem = result => {
        axios
            .get(`https://en.wikipedia.org/api/rest_v1/page/summary/${result}`)
            .then(res => this.setState({ selectedItem: {
                title: res.data.title,
                description: res.data.description,
                extract: res.data.extract,
                content_url: {
                    desktop: res.data.content_urls.desktop.page,
                    mobile: res.data.content_urls.mobile.page
                },
                thumbnail_src: res.data.thumbnail.source,
                pageid: res.data.pageid
            }}));
            
        // Add item to redux state via addItem action
        this.props.addItem(this.state.selectedItem)

        // Close modal
        this.toggle();

    }

    // onSubmit = e => {
    //     e.preventDefault();

    //     const newItem = {
    //         name: this.state.name
    //     }

    //     // Add item via addItem action
    //     this.props.addItem(newItem);

    //     // Close modal
    //     this.toggle();
    // }

    render() {
        return (
            <div>
                <Button
                    color="dark"
                    style={{marginTop: '2rem'}}
                    onClick={this.toggle}
                >Increase Your Cheese Force</Button>

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>Increase Your Cheese Force</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="item">Which cheese shall we add?</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="item"
                                    // placeholder=""
                                    onChange={this.onChange}
                                ></Input>
                            {/* <Button
                                color="dark"
                                style={{marginTop: '2rem'}}
                                block
                            >Too much cheese? Pffft. Add it!</Button> */}
                            </FormGroup>
                        </Form>
                        <DisplaySearchResults
                            {...this.props}
                            searchResults={this.state.searchResults}
                            addSelectedItem={this.addSelectedItem} />
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    item: state.item
});

export default connect(mapStateToProps, { addItem })(ItemModal)
