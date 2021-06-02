import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

interface FormProps {
    title?: string,
    data: string,
    stato: any,
    open: boolean,
    select: string,
    setSelect: any,
    ore: string,
    setOre: any,
    saveEvent: any
}

const FormDialog: React.FC<FormProps> = ({ title, data, open, stato, select, setSelect, ore, setOre, saveEvent }) => {

    let data_string = data.toLocaleString();

    const handleClose = () => {
        stato(false);
    };
    const handleChange = (e: any) => {
        let value: string = e.target.value;
        setSelect(value)
    }
    const handleChangeOre = (e: any) => {
        let value: string = e.target.value;
        setOre(value);
    }
    return (
        <div>
            < Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" >
                <DialogTitle id="form-dialog-title" > {title} </DialogTitle>
                < DialogContent >
                    <DialogContentText>
                        Data selezionata:{!data_string ? null : data_string}
                    </DialogContentText>
                    <InputLabel id="demo-simple-select-label">Commessa:</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={select}
                        onChange={handleChange}
                        fullWidth
                    >
                        <MenuItem value={"ERG"}>Erg</MenuItem>
                        <MenuItem value={"ACEA"}>Acea</MenuItem>
                        <MenuItem value={"SUPERLIND"}>Superlind</MenuItem>
                    </Select>
                    < TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        value={ore}
                        onChange={handleChangeOre}
                        label="Enter hours:"
                        type="number"
                        fullWidth
                    />
                </DialogContent>
                < DialogActions >
                    <Button onClick={handleClose} color="primary" >
                        Chiudi
            </Button>
                    < Button onClick={saveEvent} color="primary" >
                        Salva evento
                </Button>
                </DialogActions>
            </Dialog>
        </div >
    );
};
export default FormDialog;