import React from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos'
import 'aos/dist/aos.css';

import Unisexitems from './Unisexitems.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

AOS.init();

function searchFor(term) {
    return function(x) {

        return x.itemType.toLowerCase().includes(term.toLowerCase())
        
    }
    
}
 class BunnyUnisex extends React.Component {
   
    constructor(props) {
        super(props);
            this.state = {

               
                Unisexitems: Unisexitems,
                
                term:'',
            }
    this.searchHandler =this.searchHandler.bind(this);
        
    }
    searchHandler(event){
        this.setState({term: event.target.value})
    }
    render(){

  return(
      <div>

    <div className="template">
     
     {/* ==============container===================== */}

    <div className="container " style = {{fontSize: 16}}>
        
        <input
        placeholder='search' 
                type='text'
                onChange={this.searchHandler}
                
                    >
                        
                    </input>
                    {/* <FontAwesomeIcon icon={faSearch} /> */}
        


{/* =========================================================================================================================================== */}
    

 {/* ==============row for unisex item============================ */}

 <div className="row">

{/* ==============mapItems============================ */}
{this.state.Unisexitems.filter(searchFor(this.state.term)).map((getItems, index)=>{
         return (
            

            <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-duration="1500">
            <div className="card h-100">
            <Link To="#" ><img className="card-img-top" style = {{height: '20vh'}}  alt=""/></Link>
            <div className="card-body">
            <h4 className="card-title">
            {/* ==============itemName============================ */}

            <Link To="#" style = {{color: 'green'}}>{getItems.itemName}{getItems.itemType}</Link>
            </h4>
            {/* ==============itemPrice============================ */}
            <h5 className='price'>{getItems.price}</h5>

            {/* ==============itemIntro============================ */}
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
            {/* ==============itemDescription============================ */}
                <p className="card-text">ITEM DESCRIPTION</p>
                </div>
                <div className="card-footer">

            {/* ==============glyphicons============================ */}

                <span className="glyphicon glyphicon-heart-empty" >2</span>

            {/* ==============btn============================ */}

            <button className='ItemBtn' id='BtnItem'>BUY</button>
            </div>
            </div>
            </div>
 

         )
         
         
         

    })}



</div>
    </div>
    
    </div>

    </div>
)};
}
export default BunnyUnisex;
