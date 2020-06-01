import React,{Component} from 'react';
import{Modal, Button, Row, Col, Form } from 'react-bootstrap';

export class AddStoreModal extends Component{
    constructor(props)
    {
        super(props);
    }

    // insert into Database

    handleSubmit(event){
        event.preventDefault();

        fetch('https://localhost:44358/api/store',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                StoreID:null,
                Name: event.target.Name.value,
                Address: event.target.Address.value
            })
        })
        .then(res=> res.json())
        
    }

    render(){
        return(

        <div className="container">
            <Modal
      {...this.props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter" centered >
      
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
            Add  
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        
           
           <Row>
               <Col sm={6}>
                   <Form onSubmit={this.handleSubmit}>

                       <Form.Group controlId="Name">
                            <Form.Control type="text" name="Name" required 
                            placeholder="Name"></Form.Control>
                       </Form.Group>

                       <Form.Group controlId="Address">
                           <Form.Control type="text" name="Address" required
                           placeholder="Address"></Form.Control>
                       </Form.Group>

                       <Form.Group>
                           <Button variant="primary" type="Submit" onClick={this.props.onHide} > Add  </Button>
                           <Button variant="danger" onClick={this.props.onHide}>Close</Button>
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
