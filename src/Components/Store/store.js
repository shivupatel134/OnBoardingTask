import React,{Component} from 'react';
import {Table} from 'react-bootstrap';
import {Button, ButtonToolbar} from 'react-bootstrap';
import {AddStoreModal} from './AddStoreModal';
import {EditStoreModal} from './EditStoreModal';
import {DeleteStoreModal} from './DeleteStoreModal';

export class Store extends Component
{
    constructor(props)
    {
        super(props);
        this.state={st:[], addModalShow : false, editModalShow : false, deleteModalShow:false}
    }

    componentDidMount(){
        this.refreshList();
    }

    refreshList(){
        fetch('https://localhost:44358/api/store')
        .then(response=> response.json())
        .then(data => {
            this.setState({st:data});
        })
    }

    componentDidUpdate()
    { }


    render()
    {
       
        const {st, storeid, stname, staddress} = this.state;
        let addModalClose=() => {
            this.refreshList();
            this.setState({addModalShow:false});
        };
        let editModalClose=() => {
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
                         Add Store </Button >

                    <AddStoreModal show={this.state.addModalShow}
                                      onHide={ this.refreshList(),
                                          addModalClose}
                                      
                    ></AddStoreModal>
                </ButtonToolbar>
                <Table className="mt-4" >
                    <thead>
                        <tr>
                            
                            <th>Name</th>
                            <th>Address</th>
                            <th> Actions </th>
                        </tr>
                    </thead>
                    <tbody>
                        {st.map(st=>
                            <tr key ={st.StoreID}>
                            
                            <td>{st.Name}</td>
                            <td>{st.Address}</td>
                            <td>
                                <ButtonToolbar>
                                    <Button className="mr-2" variant="info" 
                                    onClick={()=> this.setState({editModalShow:true, 
                                    storeid:st.StoreID, stname:st.Name,
                                    staddress:st.Address})}> Edit </Button>

                                    <Button className="mr-2" variant="danger" 
                                    onClick={()=>this.setState({deleteModalShow:true,
                                       storeid: st.StoreID})}> Delete </Button>

                                    <EditStoreModal show={this.state.editModalShow}
                                    onHide={editModalClose} storeid={storeid} 
                                    stname={stname} staddress={staddress}>
                                    </EditStoreModal>

                                    <DeleteStoreModal show={this.state.deleteModalShow}
                                    onHide={deleteModalClose} storeid={storeid}>
                                    </DeleteStoreModal>

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

