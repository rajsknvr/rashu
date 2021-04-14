import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppsIcon from '@material-ui/icons/Apps';
import BlockIcon from '@material-ui/icons/Block';
import ClearIcon from '@material-ui/icons/Clear';
import RestoreFromTrashIcon from '@material-ui/icons/RestoreFromTrash';
const useStyles = makeStyles({
    root: {
        flexGrow: 0,
        maxWidth: 600,

    },
});

export default function IconLabelTabs(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        console.log(newValue)
        setValue(newValue);
        switch (newValue) {
            case 0:
                props.fetchData("");
                return;
            case 1:
                props.fetchData("&is_incorrect=true");
                return;
            case 2:
                props.fetchData("&is_untagged=true");
                return;
            case 3:
                props.fetchData("&is_disabled=true");
                return
            default:
                return;
        }
    };

    return (
        <Paper square className={classes.root}>
            <Tabs
                small
                value={value}
                onChange={handleChange}
                variant="fullWidth"
                indicatorColor="secondary"
                textColor="secondary"
                aria-label="icon label tabs "
            >
                <Tab icon={<AppsIcon />} label="ALL RECIPE" />
                <Tab icon={<ClearIcon />} label="INCORRECT" />
                <Tab icon={<RestoreFromTrashIcon />} label="UNTAGGED" />
                <Tab icon={<BlockIcon />} label="DISABLED" />
            </Tabs>
        </Paper>
    );
}
