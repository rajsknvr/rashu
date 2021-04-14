import React from 'react';
import nameReducer from '../Utility/nameReducer'

class ListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: [],
            parentbox: false
        }
        this.onClickCheckBox = this.onClickCheckBox.bind(this);
        this.checkAllBoxes = this.checkAllBoxes.bind(this);
    }
    checkAllBoxes() {
        let oldState = !this.state.parentbox
        let newArr = this.state.checked.map(data => oldState);
        this.setState({ parentbox: oldState, checked: newArr })
    }
    onClickCheckBox(index) {
        let newArr = [...this.state.checked];
        newArr[index] = !this.state.checked[index]
        this.setState({ checked: newArr })
    }
    componentDidUpdate() {
        if (this.props.Recipe.allRecipe?.results?.length) {
            const len = this.props.Recipe.allRecipe?.results?.length
            if (this.state.checked?.length !== len) {
                var newArr = [];
                for (var i = 0; i < len; ++i)
                    newArr.push(false);
                this.setState({ checked: newArr })
            }

        }
    }

    render() {
        var tableColor = ["table-primary", "table-danger", "table-success", "table-info", "table-warning"];
        const emptyRecipe = <div>
            <p className="text-center">
                <h3>Currently nothing to Show Here</h3>

            </p>
        </div >
        const allList = this.props.Recipe.allRecipe?.results.map((recipe, index) => {
            return (
                <tr key={index} className={tableColor[index % 5]} data-toggle="tooltip" data-placement="top" title={recipe.name} >
                    <td >
                        <div className="form-check">
                            <input className="form-check-input-xl" type="checkbox" value="" id="flexCheckDefault"
                                onClick={(e) => this.onClickCheckBox(index)}
                                checked={this.state.checked?.length ? this.state.checked[index] : false} />
                        </div>
                    </td>
                    <td>
                        {nameReducer(recipe.name)}
                    </td>
                    <td>
                        {new Date(recipe.last_updated.date).toDateString()}
                    </td>
                    <td>
                        {recipe.cogs}
                    </td>
                    <td>
                        {recipe.cost_price.toFixed(2)}
                    </td>
                    <td>
                        {recipe.sale_price.toFixed(2)}
                    </td>
                    <td>
                        {recipe.gross_margin.toFixed(2)}
                    </td>
                    <td>
                        {"Indian Made"}
                    </td>
                </tr>
            )
        });
        const formChecKbox =
            <div className="form-check">
                <input onClick={(e) => this.checkAllBoxes(e)} className="form-check-input-xl" type="checkbox" value="" id="flexCheckDefault" />
            </div>
        return (
            <div className="col-12 col-md-12 " style={{ zIndex: 2 }}>
                <table className="table table-borderless small rounded ">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col" >{formChecKbox}</th>
                            <th scope="col">NAME</th>
                            <th scope="col">LAST UPDATED</th>
                            <th scope="col">COGS%</th>
                            <th scope="col">COST PRICE</th>
                            <th scope="col">SALE PRICE</th>
                            <th scope="col">GROSS MARGIN</th>
                            <th scope="col">TAGS/ACTIONS</th>

                        </tr>
                    </thead>
                    <tbody>
                        {allList && allList.length ? allList : emptyRecipe}
                    </tbody>
                </table>
            </div>
        );
    }
}
export default ListComponent;