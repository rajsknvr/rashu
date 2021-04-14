import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import nameReducer from '../Utility/nameReducer'
import percentage from '../Utility/percentage'
function LowMargin(props) {
    const highMarginData = props.lowMargin?.results.map((data, index) => {
        return (
            <div key={index} className="col">
                <div className="small">{nameReducer(data.name)}</div>
                <Box position="relative" display="inline-flex">

                    <CircularProgress color="secondary" value={percentage(data.margin)} variant="determinate" {...props} />

                    <Box
                        top={0}
                        left={0}
                        bottom={0}
                        right={0}
                        position="absolute"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Typography variant="caption" component="div" color="secondary">{`${percentage(data.margin)}%`}</Typography>
                    </Box>
                </Box>
            </div>
        )
    })
    return (
        <div className="card table-primary ">
            <div class="card-header bg-dark text-white">
                Low Margin Recipe
            </div>
            <div className="card-body row">
                {highMarginData}
            </div>


        </div>
    );
}

export default LowMargin;