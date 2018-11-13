import React, { Component } from 'react';
import {
    Card,
    CardImg,
    CardHeader,
    CardBody,
    Button,
    Popover,
    PopoverBody
} from 'reactstrap';

class CardItem extends Component {
    state = {
        popoverOpen: false
    };

    toggle = () => {
        this.setState({ popoverOpen: !this.state.popoverOpen });
    };

    render() {
        const { item } = this.props;

        return (
            <Card className="mb-5 bg-dark border-0">
                <CardHeader tag="h3" className="card-title bg-dark rounded-top">
                    {item.name}
                </CardHeader>
                <CardImg
                    top
                    width="100%"
                    className="rounded-bottom card-image"
                    src={item.thumbnail_url}
                    alt={item.name}
                />
                <CardBody className="clearfix">
                    <Button
                        className="float-right"
                        color="secondary"
                        id={`Popover-${item._id}`}
                        onClick={() =>
                            this.setState({
                                popoverOpen: !this.state.popoverOpen
                            })
                        }
                    >
                        Learn more...
                    </Button>
                    \{' '}
                    <Popover
                        placement="bottom"
                        isOpen={this.state.popoverOpen}
                        target={`Popover-${item._id}`}
                        toggle={this.toggle}
                    >
                        <PopoverBody>
                            {item.extract}
                            <Button
                                className="remove-btn clearfix float-right"
                                color="danger"
                                size="sm"
                                onClick={this.props.deleteItem.bind(
                                    this,
                                    item._id
                                )}
                            >
                                Delete
                            </Button>
                        </PopoverBody>
                    </Popover>
                </CardBody>
            </Card>
        );
    }
}

export default CardItem;
