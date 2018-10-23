import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';
import SearchDisplay from './SearchDisplay';
import SearchResultDisplay from './SearchResultDisplay';
import axios from 'axios';


class AddItemModal extends Component {
    state = {
        modal: false,

        name: '',
        description: '',
        extract: '',
        desktop_url: '',
        mobile_url: '',
        thumbnail_url: '',
        pageid: 0
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal,
            name: ''
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
                thumbnail_url: res.data.thumbnail.source,
                pageid: res.data.pageid
            }));
    }

    handleSubmit = e => {
        e.preventDefault();

        const selectedItemPayload = {
            name: this.state.name,
            description: this.state.description,
            extract: this.state.extract,
            desktop_url: this.state.desktop_url,
            mobile_url: this.state.mobile_url,
            thumbnail_url: this.state.thumbnail_url,
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
                    <SearchDisplay
                        {...this.props}
                        addSelectedItem={this.addSelectedItem} />
                );
            } else {
                return (
                    <SearchResultDisplay
                        {...this.props}
                        name={this.state.name}
                        description={this.state.description}
                        thumbnail_url={this.state.thumbnail_url}
                        toggle={this.toggle}
                        handleSubmit={this.handleSubmit} />
                );
            }
        }

        return (
            <div className="text-center">
                <Button className="add-btn" size="lg"
                    color="secondary"
                    onClick={this.toggle} >
                    Increase Your Cheese IQ
                </Button>

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>Increase Your Cheese IQ</ModalHeader>
                    <ModalBody>
                        <DisplayOptions />
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