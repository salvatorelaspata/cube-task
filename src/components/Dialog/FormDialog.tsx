import React, { Dispatch, SetStateAction, useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import { EventProp } from "../hook/types";
import "./FormDialog.css";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import { Grid, useMediaQuery, useTheme } from "@material-ui/core";
import clsx from "clsx";
import { useStyles } from "../hook/useStyles";
import InputOutlined from "../layout/Input/InputOutlined";
import SelectOutlined from "../layout/Input/SelectOutlined";

interface FormProps {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    title: string;
    isNew: boolean;
    currentEvent: EventProp;
    setCurrentEvent: Dispatch<SetStateAction<EventProp>>;

    saveEvent: () => void;
    editEvent: () => void;
    // newEvent: newEventProp;
    // modificaEvent: newEventProp;
}
const mockOptions = [
    {
        key: "acea",
        value: "Acea",
    },
    {
        key: "erg",
        value: "Erg",
    },
    {
        key: "superlinda",
        value: "Superlinda",
    },
];
const FormDialog: React.FC<FormProps> = ({
    open,
    setOpen,
    title,
    isNew,
    currentEvent,
    setCurrentEvent,
    saveEvent,
    editEvent,
}) => {
    const [isEdit, setIsEdit] = useState<boolean>(isNew);
    let currentData = currentEvent.info.toLocaleString();

    const theme = useTheme();
    const classes = useStyles(theme);
    const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (e: any) => {
        setCurrentEvent({ ...currentEvent, [e.target.name]: e.target.value });
    };

    return (
        <Dialog
            fullScreen={fullScreen}
            fullWidth={true}
            open={open}
            maxWidth={"sm"}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
        >
            <DialogTitle
                id="form-dialog-title"
                style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                {title}
            </DialogTitle>

            <DialogContent>
                <DialogContentText>
                    Data selezionata: {currentData}
                </DialogContentText>
                <Grid justify="space-around">
                    <SelectOutlined
                        value={currentEvent.event}
                        label="Commessa"
                        name="event"
                        handleChange={handleChange}
                        options={mockOptions}
                        fullWidth={false}
                    />
                    <InputOutlined
                        handleChange={handleChange}
                        label="Ore"
                        name="ore"
                        type="number"
                        value={currentEvent.ore}
                        fullWidth={false}
                    />
                </Grid>
            </DialogContent>
            <DialogActions
                style={{
                    justifyContent: !isNew ? "space-between" : "flex-end",
                }}
            >
                {!isNew && (
                    <div>
                        <Button onClick={() => setIsEdit(!isEdit)}>
                            <CreateIcon />
                        </Button>

                        <Button>
                            <DeleteIcon />
                        </Button>
                    </div>
                )}
                <div>
                    <Button
                        onClick={isNew ? saveEvent : editEvent}
                        color="primary"
                        className={clsx(!isEdit && classes.none)}
                    >
                        {isNew ? "Salva evento" : "Modifica Evento"}
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Chiudi
                    </Button>
                </div>
            </DialogActions>
        </Dialog>
    );
};
export default FormDialog;
