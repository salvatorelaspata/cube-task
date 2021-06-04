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
import './FormDialog.css'
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';

interface FormProps {
    title: string,
    isNew: boolean,
    isEdit: boolean,
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>,
    saveEvent: () => void,
    saveEditEvent: () => void,
    enabledEdit: () => void,
    newEvent: newEventProp,
    modificaEvent: newEventProp,
    setNewEvent: Dispatch<SetStateAction<newEventProp>>
}

const FormDialog: React.FC<FormProps> = ({
    title,
    isNew,
    open,
    setOpen,
    saveEvent,
    saveEditEvent,
    newEvent,
    setNewEvent,
    modificaEvent,
    enabledEdit,
    isEdit
}) => {

    let data_string = newEvent.info.toLocaleString();
    let data_edit = modificaEvent.info.toLocaleString();

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

                <DialogTitle id="form-dialog-title" >
                    {title}
                    {!isNew && <Button onClick={enabledEdit} className="button-pen" variant="outlined" ><CreateIcon /></Button>}
                    {!isNew && <Button className="button-delete" variant="outlined"><DeleteIcon /></Button>}
                </DialogTitle>
                < DialogContent >
                    <DialogContentText>
                        Data selezionata:{!data_string ? data_edit : data_string}
                    </DialogContentText>
                    <InputLabel id="demo-simple-select-label">Commessa:</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        displayEmpty

                        value={newEvent.event}
                        onChange={handleChange}
                        fullWidth
                    >
                        {!isNew && <MenuItem value="">
                            <em>{modificaEvent.event}</em>
                        </MenuItem>}
                        <MenuItem disabled={isNew && !isEdit ? false : !isNew && isEdit ? false : true} value={"ERG"}>Erg</MenuItem>
                        <MenuItem disabled={isNew && !isEdit ? false : !isNew && isEdit ? false : true} value={"ACEA"}>Acea</MenuItem>
                        <MenuItem disabled={isNew && !isEdit ? false : !isNew && isEdit ? false : true} value={"SUPERLIND"}>Superlind</MenuItem>
                    </Select>
                    < TextField
                        autoFocus
                        placeholder={!isNew ? modificaEvent.ore : ""}
                        margin="dense"
                        id="name"
                        value={newEvent.ore}
                        onChange={handleChangeOre}
                        label="Enter hours:"
                        type="number"
                        disabled={isNew && !isEdit ? false : !isNew && isEdit ? false : true}
                        fullWidth
                    />
                </DialogContent>
                < DialogActions >
                    <Button onClick={handleClose} color="primary" >
                        Chiudi
                    </Button>
                    < Button onClick={isNew ? saveEvent : saveEditEvent} color="primary" >
                        {isNew ? "Salva evento" : "Modifica Evento"}
                    </Button>
                </DialogActions>
            </Dialog>
        </div >
    );
};
export default FormDialog;