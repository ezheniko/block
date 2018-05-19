import React, {Component} from 'react'
import Rating from 'react-rating'
import './style.css'

class ActivityNumbers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: this.props.numbers.rating,
        }
    }

    changeRating( newRating ) {
        this.setState({
            rating: newRating
        });
    }

    render() {
        const {duration, number} = this.props.numbers
        return (
            <div className="Numbers">
                <Rating
                    placeholderRating={this.state.rating}
                    emptySymbol={<img src="images/star_empty.svg" alt="" className="icon" />}
                    placeholderSymbol={<img src="images/star.svg" alt="" className="icon" />}
                    fullSymbol={<img src="images/star.svg" alt="" className="icon" />}
                />
                <span className="Numbers-Reviews">{number} reviews</span>
                <span className="Numbers-Duration">{duration}</span>
            </div>
        
      )
    }
}

export default ActivityNumbers