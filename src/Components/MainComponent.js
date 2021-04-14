import React, { Suspense } from 'react';
import TopPanel from './topPanel';
import CircularProgress from '@material-ui/core/CircularProgress';
const TabCompnent = React.lazy(() => import('./TabComponent'));
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
                    <Suspense fallback={<div>Loading Please wait....</div>}>
                        <TabCompnent fetchData={this.props.fetchData} />
                    </Suspense>

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
