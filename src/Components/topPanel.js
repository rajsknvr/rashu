import React from 'react';
import HighFluctuation from './HighFluctuation';
import HighMargin from './HighMargin';
import LowMargin from './LowMargin';
class TopPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        console.log(this.props.Recipe)
    }
    render() {
        return (
            <>
                <div className="col-4 ">
                    <HighMargin highMargin={this.props.Recipe.highMargin} />
                </div>
                <div className="col-4 ">
                    <LowMargin lowMargin={this.props.Recipe.lowMargin} />
                </div>
                <div className="col-4">
                    <HighFluctuation highFluctuation={this.props.Recipe.highFluctuation} />
                </div>
            </>
        );
    }
}




export default TopPanel;