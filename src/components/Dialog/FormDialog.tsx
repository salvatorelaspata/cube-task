import React, { Dispatch, SetStateAction } from 'react';
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
import { newEventProp } from '../hook/types';

interface FormProps {
    title: string,
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>,
    saveEvent: () => void,
    newEvent: newEventProp,
    setNewEvent: Dispatch<SetStateAction<newEventProp>>
}

const FormDialog: React.FC<FormProps> = ({
    title,
    open,
    setOpen,
    saveEvent,
    newEvent,
    setNewEvent,
}) => {

    let data_string = newEvent.info.toLocaleString();

    const handleClose = () => {
        setOpen(false);
    };
    const handleChange = (e: any) => {
        let value: string = e.target.value;
        setNewEvent({ ...newEvent, event: value })
    }
    const handleChangeOre = (e: any) => {
        let value: string = e.target.value;
        setNewEvent({ ...newEvent, ore: value })
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
                        value={newEvent.event}
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
                        value={newEvent.ore}
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