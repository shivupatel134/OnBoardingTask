import React, { Component} from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";


export class AddSalesModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customerId: "",
      productId: "",
      storeId: "",
      customerList: [],
      ProductList: [],
      StoreList: [],
    };
    this.refreshList();
  }

  // insert into Database

  handleSubmit(event) {
    event.preventDefault();

    fetch("https://localhost:44358/api/sales", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        SalesID: null,
        CustomerID: this.state.customerId,
        ProductID: this.state.productId,
        StoreID: this.state.storeId,
        DateSold: event.target.DateSold.value,
      }),
    }).then((res) => {
      res.json()
      console.log(res);
    });
  }

  refreshList = () => {
    fetch("https://localhost:44358/api/customer")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ customerList: data });
      });

    fetch("https://localhost:44358/api/product")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ ProductList: data });
      });

    fetch("https://localhost:44358/api/store")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ StoreList: data });
      });
  };

  handleDropdownChange(e, type) {
    this.setState({ [type]: e.target.value });
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
              Add Sales
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Row>
              <Col sm={6}>
                <Form onSubmit={(e) => this.handleSubmit(e)}>
                  <Form.Group controlId="CustomerId">
                    <Form.Label>Customer Name</Form.Label>
                    <Form.Control
                      as="select"
                      required
                      onChange={(event) =>
                        this.handleDropdownChange(event, "customerId")
                      }
                      value={this.state.customerId}
                    >
                      <option value="">-- Select Customer -- </option>
                      {this.state.customerList.map((option, index) => {
                        return (
                          <option key={index} value={option.CustomerID}>
                            {option.Name}
                          </option>
                        );
                      })}
                    </Form.Control>
                  </Form.Group>

                  <Form.Group controlId="ProductId">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control
                      as="select"
                      required
                      onChange={(event) =>
                        this.handleDropdownChange(event, "productId")
                      }
                    >
                      <option value="">-- Select Product --</option>
                      {this.state.ProductList.map((option, index) => {
                        return (
                          <option key={index} value={option.ProductID}>
                            {option.Name}
                          </option>
                        );
                      })}
                    </Form.Control>
                  </Form.Group>

                  <Form.Group controlId="StoreId">
                    <Form.Label>Store Name</Form.Label>
                    <Form.Control
                      required
                      as="select"
                      onChange={(event) =>
                        this.handleDropdownChange(event, "storeId")
                      }
                    >
                      <option value="">-- Select Store --</option>
                      {this.state.StoreList.map((option, index) => {
                        return (
                          <option key={index} value={option.StoreID}>
                            {option.Name}
                          </option>
                        );
                      })}
                    </Form.Control>
                  </Form.Group>

                  <Form.Group controlId="DateSold">
                    <Form.Control
                      type="date"
                      name="DateSold"
                      required
                      placeholder="DateSold"
                      datatype="dd/mm/yyyy"
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group>
                    <Button variant="primary" type="Submit" onClick={this.props.onHide}> Add Sales </Button>
                    <Button variant="danger" onClick={this.props.onHide}>
                      Close
                    </Button>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
