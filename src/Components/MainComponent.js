import React, { Suspense } from 'react';
import TopPanel from './topPanel';
import CircularProgress from '@material-ui/core/CircularProgress';
import TabCompnent from './TabComponent'
const ListComponent = React.lazy(() => import('./ListComponent'));
export class Main extends React.Component {
    componentDidUpdate() {

    }
    render() {
        return (
            <div className="container">
                <div className="row  justify-content-around mt-4">
                    <TopPanel Recipe={this.props.Recipe} />
                </div>
                <div className="row mt-3 ml-2">
                    <TabCompnent fetchData={this.props.fetchData} />
                </div>
                <div className="row mt-1">
                    <Suspense fallback={<div><CircularProgress color="secondary" /></div>}>
                        <ListComponent Recipe={this.props.Recipe} />
                    </Suspense>
                </div>



            </div>
        );
    }
}
