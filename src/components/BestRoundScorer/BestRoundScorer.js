import React, {Component} from "react";
import "./BestRoundScorer.css"


class BestRoundScorer extends Component {
    render(){
        return (
            <div className={this.props.cssClass + "_best_series"}># Best of series</div>
        );

    }
}

export default BestRoundScorer;