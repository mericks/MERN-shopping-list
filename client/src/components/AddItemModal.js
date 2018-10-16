import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form } from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';
import DisplaySearch from './DisplaySearch';
import axios from 'axios';


class AddItemModal extends Component {
    state = {
        modal: false,

        // Selected Item
        name: '',
        description: '',
        extract: '',
        desktop_url: '',
        mobile_url: '',
        thumbnail_src: '',
        pageid: 0
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal,
            searchResults: []
        });
    }
     
    addSelectedItem = result => {
        axios
            .get(`https://en.wikipedia.org/api/rest_v1/page/summary/${result}`)
            .then(res => this.setState({ 
                name: res.data.title,
                description: res.data.description,
                extract: res.data.extract,
                desktop_url: res.data.content_urls.desktop.page,
                mobile_url: res.data.content_urls.mobile.page,
                thumbnail_src: res.data.thumbnail.source,
                pageid: res.data.pageid
            }));
    }

    onSubmit = e => {
        e.preventDefault();

        const selectedItemPayload = {
            name: this.state.name,
            description: this.state.description,
            extract: this.state.extract,
            desktop_url: this.state.desktop_url,
            mobile_url: this.state.mobile_url,
            thumbnail_src: this.state.thumbnail_src,
            pageid: this.state.pageid
        };

        // Add item to redux state via addItem action
        this.props.addItem(selectedItemPayload);

        // Close modal
        this.toggle();
    }

    render() {

        const DisplayOptions = () => {
            if (this.state.name.length === 0) {
                return (
                    <DisplaySearch 
                        {...this.props}
                        addSelectedItem={this.addSelectedItem} />
                );
            } else {
                return (
                    <div>
                        <h3>{this.state.name}</h3>
                        <p>{this.state.description}</p>
                    </div>
                );
            }
        }

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
                            <DisplayOptions />
                            <Button
                                color="dark"
                                style={{marginTop: '2rem'}}
                                block
                            >Too much cheese? Pffft. Add it!</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    item: state.item
});

export default connect(mapStateToProps, { addItem })(AddItemModal)
