import React,{Component} from 'react';
import {Table} from 'react-bootstrap';
import {Button, ButtonToolbar} from 'react-bootstrap';
import {AddProductModal} from './AddProductModal';
import {EditProductModal} from './EditProductModal';
import {DeleteProductModal} from './DeleteProductModal';

export class Product extends Component
{
    constructor(props)
    {
        super(props);
        this.state={pro:[], addModalShow : false, editModalShow : false, deleteModalShow:false}
    }

    componentDidMount(){
        this.refreshList();
    }

    refreshList(){
        fetch('https://localhost:44358/api/product')
        .then(response=> response.json())
        .then(data => {
            this.setState({pro:data});
        })
    }

    componentDidUpdate()    {}
    
    render()
    {
       
        const {pro, productid, proname, proprice} = this.state;
        let addModalClose=() => {
            this.refreshList();
            this.setState({addModalShow:false});
        };
        let editModalClose=() =>{ 
            this.refreshList();
            this.setState({editModalShow:false});
        };
        let deleteModalClose=() => {
            this.refreshList();
            this.setState({deleteModalShow:false});
        };
        return(
            <div> 
                <ButtonToolbar>
                    <Button variant='primary' onClick={()=> this.setState({addModalShow:true})}>
                         Add Product </Button >

                    <AddProductModal show={this.state.addModalShow}
                                      onHide={this.refreshList(),
                                          addModalClose}
                    ></AddProductModal>
                </ButtonToolbar>
                <Table className="mt-4" >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th> Actions </th>
                        </tr>
                    </thead>
                    <tbody>
                        {pro.map(pro=>
                            <tr key ={pro.ProductID}>
                            
                            <td>{pro.Name}</td>
                            <td>{pro.Price}</td>
                            <td>
                                <ButtonToolbar>
                                    <Button className="mr-2" variant="info" 
                                    onClick={()=> this.setState({editModalShow:true, 
                                    productid:pro.ProductID, proname:pro.Name,
                                    proprice:pro.Price})}> Edit </Button>

                                    <Button className="mr-2" variant="danger" 
                                    onClick={()=>this.setState({deleteModalShow:true,
                                       productid: pro.ProductID})}> Delete </Button>

                                    <EditProductModal show={this.state.editModalShow}
                                    onHide={editModalClose} productid={productid} 
                                    proname={proname} proprice={proprice}>
                                    </EditProductModal>

                                    <DeleteProductModal show={this.state.deleteModalShow}
                                    onHide={deleteModalClose} productid={productid}></DeleteProductModal>

                                </ButtonToolbar>
                            </td>
                            </tr>
                            )}
                    </tbody>
                </Table>
                
            </div>
            
        )
        
    }
}