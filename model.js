import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

class AddModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,

            name: "",
            year: "",
            image: "",
            rate:""


        };
    }
    handleShow = () => {
        this.setState({ show: !this.state.show });
    };
    addnewmovie = () => {
        this.props.add({ name: this.state.name, year: this.state.year, image: this.state.image,rate:this.state.rate })
        this.setState({ show: !this.state.show })
    }
    handlechange = (e) => {
        this.setState({
            [e.target.name]: e.target.value

        })
    }

    render() {
        return (
            <div>
                <Button className="btn" variant="primary" onClick={this.handleShow}  >
                    <i class="far fa-plus-square">+</i>
                </Button>

                <Modal show={this.state.show} onHide={this.handleShow}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div>
                                <label>Title:</label>
                                <input type="text" name="name" onChange={this.handlechange} />
                            </div>
                            <div>
                                <label>Image:</label>
                                <input type="text" name="image" onChange={this.handlechange} />
                            </div>
                            <div>
                                <label>Rating:</label>
                                <input type="text" name="rate" onChange={this.handlechange} />
                            </div>
                            <div>
                                <label>Year:</label>
                                <input type="text" name="year" onChange={this.handlechange} />
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleShow}>
                            Close
            </Button>
                        <Button variant="primary" onClick={this.addnewmovie} >Add Movie</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default AddModal;