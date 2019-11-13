import React from 'react';
import 'aos/dist/aos.css';
import items from './Menitems.json';
import Womenitems from './Womenitems.json';
import Childrenitems from './Childrenitems.json';
import Unisexitems from './Unisexitems.json';




function searchFor(term) {
    return function(x) {

        return x.itemType.toLowerCase().includes(term.toLowerCase())
        
    }
    
}

 class Maps extends React.Component {
   
    constructor(props) {
        super(props);
            this.state = {

                items: items,
                Womenitems: Womenitems,
                Unisexitems: Unisexitems,
                Childrenitems: Childrenitems,
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

    
        <input placeholder='search' 
                    type='text'
                    onChange={this.searchHandler}

                    ></input>
</div>

)};
}
export default Maps;

