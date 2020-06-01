import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { Button, ButtonToolbar } from "react-bootstrap";
import { AddCustomerModal } from "./AddCustomerModal";
import { EditCustomerModal } from "./EditCustomerModal";
import { DeleteCustomerModal } from "./DeleteCustomerModal";

export class Customer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cust: [],
      addModalShow: false,
      editModalShow: false,
      deleteModalShow: false,
    };
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList() {
    fetch("https://localhost:44358/api/customer")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ cust: data });
      });
  }

  componentDidUpdate() {}

  
  render() {
    const { cust, custid, custname, custaddress } = this.state;
    let addModalClose = () => {
        this.refreshList();
        this.setState({ addModalShow: false });
    };
    let editModalClose = () => {
        this.refreshList();
        this.setState({ editModalShow: false });
    };
    let deleteModalClose = () => {
      this.refreshList();
      this.setState({ deleteModalShow: false });
    };
    return (
      <div>
        <ButtonToolbar>
          <Button
            variant="primary"
            onClick={() => this.setState({ addModalShow: true })}
          >
            Add Customer{" "}
          </Button>

          <AddCustomerModal
            show={this.state.addModalShow}
            onHide={this.refreshList(),
              addModalClose}
          ></AddCustomerModal>
        </ButtonToolbar>
        <Table className="mt-4">
          <thead>
            <tr>
              {/* <th>CustomerID</th> */}
              <th>Name</th>
              <th>Address</th>
              <th> Actions </th>
            </tr>
          </thead>
          <tbody>
            {cust.map((cust) => (
              <tr key={cust.CustomerID}>
                {/* <td>{cust.CustomerID}</td> */}
                <td>{cust.Name}</td>
                <td>{cust.Address}</td>
                <td>
                  <ButtonToolbar>
                    <Button
                      className="mr-2"
                      variant="info"
                      onClick={() =>
                        this.setState({
                          editModalShow: true,
                          custid: cust.CustomerID,
                          custname: cust.Name,
                          custaddress: cust.Address,
                        })
                      }
                    >
                      {" "}
                      Edit{" "}
                    </Button>

                    <Button
                      className="mr-2"
                      variant="danger"
                      onClick={() =>
                        this.setState({
                          deleteModalShow: true,
                          custid: cust.CustomerID,
                        })
                      }
                    >
                      {" "}
                      Delete{" "}
                    </Button>

                    <EditCustomerModal
                      show={this.state.editModalShow}
                      onHide={editModalClose}
                      custid={custid}
                      custname={custname}
                      custaddress={custaddress}
                    ></EditCustomerModal>

                    <DeleteCustomerModal
                      show={this.state.deleteModalShow}
                      onHide={deleteModalClose}
                      custid={custid}
                    ></DeleteCustomerModal>
                  </ButtonToolbar>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
