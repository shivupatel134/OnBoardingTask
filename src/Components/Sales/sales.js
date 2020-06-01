import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { Button, ButtonToolbar } from "react-bootstrap";
import { AddSalesModal } from "./AddSalesModal";
import { EditSalesModal } from "./EditSalesModal";
import { DeleteSalesModal } from "./DeleteSalesModal";
import Pagination from 'react-bootstrap/Pagination';

export class Sales extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sles: [],
      addModalShow: false,
      editModalShow: false,
      deleteModalShow: false,
    };
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList() {
    fetch("https://localhost:44358/api/sales")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ sles: data });
      });
  }

  componentDidUpdate() {}
  openEditDialog(sles) {
    this.setState({
      editModalShow: true,
      salesid: sles.SalesID,
      salesdatesold: sles.DateSold,
      customername: sles.CustomerID,
      productname: sles.ProductID,
      storename: sles.StoreID,
    });
  }
  render() {
    const {
      sles,
      salesid,
      salesdatesold,
      customername,
      productname,
      storename,
    } = this.state;
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
            Add Sales{" "}
          </Button>

          <AddSalesModal
            show={this.state.addModalShow}
            onHide={this.refreshList(),
                addModalClose}
          ></AddSalesModal>
        </ButtonToolbar>
        <Table className="mt-4">
          <thead>
            <tr>
              {/* <th>SalesID</th> */}
              <th>Customer</th>
              <th>Product</th>
              <th> Store </th>
              <th>Date Sold</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {sles.map((sles, index) => (
              <tr key={index}>
                {/* <td>{sles.SalesID}</td> */}
                <td>{sles.CustomerName}</td>
                <td>{sles.ProductName}</td>
                <td>{sles.StoreName}</td>
                <td>{sles.DateSold}</td>
                
                <td>
                  <ButtonToolbar>
                    <Button
                      className="mr-2"
                      variant="info"
                      onClick={() => this.openEditDialog(sles)}
                    >
                      Edit
                    </Button>

                    {/* <Button className="mr-2" variant="info" 
                                    onClick={()=> this.setState({editModalShow:true, 
                                    salesid:sles.SalesID, salesdatesold:sles.DateSold,
                                    customername:sles.CustomerName,productname:sles.ProductName,
                                    storename:sles.StoreName})}> Edit </Button> */}

                    <Button
                      className="mr-2"
                      variant="danger"
                      onClick={() =>
                        this.setState({
                          deleteModalShow: true,
                          salesid: sles.SalesID,
                        })
                      }
                    >
                      {" "}
                      Delete{" "}
                    </Button>

                    <EditSalesModal
                      show={this.state.editModalShow}
                      onHide={editModalClose}
                      salesid={salesid}
                      salesdatesold={salesdatesold}
                      customername={customername}
                      productname={productname}
                      storename={storename}
                    ></EditSalesModal>

                    <DeleteSalesModal
                      show={this.state.deleteModalShow}
                      onHide={deleteModalClose}
                      salesid={salesid}
                    ></DeleteSalesModal>
                  </ButtonToolbar>
                </td>
              </tr>
            ))}
            <Pagination>
                    <Pagination.First />
                    <Pagination.Prev />
                    <Pagination.Next />
                    <Pagination.Last />
                </Pagination>
          </tbody>
        </Table>
      </div>
    );
  }
}

