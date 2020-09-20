// REO
// 20 Eylul Pazar, 2020

import React from 'react';
import '../App.css';
import {
    Button,
    Form,
    Modal,
} from 'react-bootstrap';


export default class VucutKitleEndeks extends React.Component {
    state = {
        
        kilo: null,
        boy: null,
        
        modalShow: false,
        vucutKitle: null,
    }
    render() {
        const handleClose = () => this.setState({modalShow: false});

        return (
            <React.Fragment>
                <Form>
                    <Form.Group>
                        <Form.Label>Kilonuz</Form.Label>
                        <Form.Control type='number' placeholder='Kilonuz' name='kilo' value={this.state.kilo} onChange={this.handleChange}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Boyunuz</Form.Label>
                        <Form.Control type='number' placeholder='Boyunuz' name='boy' value={this.state.boy} onChange={this.handleChange}/>
                    </Form.Group>

                    <Button variant='primary' onClick={this.handleSubmit}>Hesapla</Button>
                </Form>

            <Modal
                show={this.state.modalShow}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                <Modal.Title>Vucut Kitle Endeksi Sonuclari</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Vucut Kitle Endeksiniz: {this.state.vucutKitle}
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose} type='submit'>
                    Kapat
                </Button>
                </Modal.Footer>
            </Modal>
      </React.Fragment>
        )
    }

    handleChange(event) {
        var data = this.state;
        data[event.target.name] = event.target.value;
        this.setState({
            data,
        });
    }

    handleSubmit(event) {
        var vucutKitle = (this.state.kilo / Math.pow(this.state.kilo, 2));

        this.setState(
            {
                vucutKitle: vucutKitle,
                modalShow: true,
            }
        );
    } 

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
}
