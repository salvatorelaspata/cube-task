import React from 'react';
import Button from '@material-ui/core/Button';
import { useStyles } from "../hook/useStyles";
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { type } from 'node:os';

interface FormProps {
    title?: string,
    data: string,
    stato: any,
    open: boolean
}

const FormDialog: React.FC<FormProps> = ({ title, data, open, stato }) => {

    const classes = useStyles();

    const handleClose = () => {
        stato(false);
    };
    const handleChange = (e: any) => {
        console.log(e.target.value);
    }
    return (
        <div>
            < Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" >
                <DialogTitle id="form-dialog-title" > {title} </DialogTitle>
                < DialogContent >
                    <DialogContentText>
                        Data selezionata:{data == undefined ? null : data}
                    </DialogContentText>
                    <InputLabel id="demo-simple-select-label">Commessa:</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={''}
                        onChange={handleChange}
                        fullWidth
                    >
                        <MenuItem value={10}>ERG</MenuItem>
                        <MenuItem value={20}>Acea</MenuItem>
                        <MenuItem value={30}>Superlind</MenuItem>
                    </Select>
                    < TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Enter hours:"
                        type="number"
                        fullWidth
                    />
                </DialogContent>
                < DialogActions >
                    <Button onClick={handleClose} color="primary" >
                        Chiudi
            </Button>
                    < Button onClick={handleClose} color="primary" >
                        Subscribe
                </Button>
                </DialogActions>
            </Dialog>
        </div >
    );
};
export default FormDialog;