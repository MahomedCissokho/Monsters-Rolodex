import { Component } from "react";
import './card-list.style.css';
import CardContainer from "../card-container/card-container";

class CardList extends Component {
    render(){
        const {monsters} = this.props;
        return(
            <div className='CardList'>
                {
                    monsters.map((monster)=>
                    {
                        return(<CardContainer monsters={monster} />)
                    }
                )}
            </div>
        )
    }
}
export default CardList;