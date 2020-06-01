import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";

export class DeleteProductModal extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch("https://localhost:44358/api/product/" + this.props.productid, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((res) => {
        this.props.onHide()
    });
  }

  render() {
    return (
      <div className="container">
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Delete Product
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Row>
              <Col sm={6}>
                <Form >
                  <Form.Group>
                    <label >Are you sure you want to delete?</label>
                  </Form.Group>
                  <Form.Group>
                  <Button onClick={(e) => this.handleSubmit(e)} variant="primary" type="button">
                      Delete 
                    </Button>
            <Button variant="danger" onClick={this.props.onHide}>
              Close
            </Button>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Modal.Body>

          <Modal.Footer>
          
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
