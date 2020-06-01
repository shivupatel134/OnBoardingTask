import React, { Component, options } from "react";
import { Modal, Button, Row, Col, Form, FormControl } from "react-bootstrap";

export class EditSalesModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customerId: this.props.customername,
      productId: "",
      storeId: "",
      customerList: [],
      ProductList: [],
      StoreList: [],
    };
    this.refreshList();
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(event.target.SalesID.value);
    fetch("https://localhost:44358/api/sales", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        SalesID: event.target.SalesID.value,
        CustomerID: event.target.customerId.value,
         ProductID: event.target.productId.value,
         StoreID: event.target.storeId.value,
        DateSold: event.target.DateSold.value,
      })
    }).then((res) => {
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
              Edit sales
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Row>
              <Col sm={6}>
                <Form onSubmit={(e) => this.handleSubmit(e)}>
                  {/* <Form onSubmit={this.handleSubmit}> */}

                  <Form.Group controlId="SalesID" disabled>
                    <Form.Control
                      type="text"
                      name="SalesID"
                      required
                      placeholder="SalesID"
                      disabled
                      defaultValue={this.props.salesid}
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group controlId="exampleForm.SelectCustom">
                    <Form.Label>Customer Name</Form.Label>
                    <Form.Control
                      as="select"
                      name="customerId"
                      required
                      defaultValue={this.props.customername}
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

                  <Form.Group controlId="exampleForm.SelectCustom">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control
                      as="select"
                      required
                      name="productId"
                      defaultValue={this.props.productname}
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

                  <Form.Group controlId="exampleForm.SelectCustom">
                    <Form.Label>Store Name</Form.Label>
                    <Form.Control
                      required
                      as="select"
                      name="storeId"
                      defaultValue={this.props.storename}
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
                      defaultValue={this.props.salesdatesold}
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group>
                    <Button variant="primary" type="Submit" onClick={this.props.onHide}> Edit Sales
                    </Button>
                    <Button variant="danger" onClick={this.props.onHide}>
                      Close
                    </Button>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Modal.Body>

          <Modal.Footer></Modal.Footer>
        </Modal>
      </div>
    );
  }
}
