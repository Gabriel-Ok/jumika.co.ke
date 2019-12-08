import React from 'react'
import {Button} from 'react-bootstrap'
import Dialog from 'react-bootstrap-dialog'

 
export default class Cart extends React.Component {

  constructor () {
    super()
    this.onClick = this.onClick.bind(this)
  }
 
  

onClick () {
    
    this.dialog.showAlert( 
    
    <div >
    
  <h2>Bucket</h2>
   
 
    </div>
    
    )
  }
 
  render () {
    return (
      <div>

          
        <Button onClick={this.onClick}><i class="fas fa-shopping-cart"></i></Button>
       
        <Dialog ref={(component) => { this.dialog= component }} />

        
      </div>
    )
  }
}
 