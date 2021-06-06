import React, { Dispatch, SetStateAction, useState } from "react";
import clsx from "clsx";
import { Grid, useMediaQuery, useTheme } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import { initialToDo, mockOptions, ToDoProp } from "../hook/types";
import { useStyles } from "../hook/useStyles";
import InputOutlined from "../layout/Input/InputOutlined";
import SelectOutlined from "../layout/Input/SelectOutlined";

import "./AddToDoDialog.css";

interface FormProps {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    isNew: boolean;
    saveToDo: (obj: ToDoProp) => void;
    editToDo: (obj: ToDoProp) => void;
}

const AddToDoDialog: React.FC<FormProps> = ({
    open,
    setOpen,
    isNew,
    saveToDo,
    editToDo,
}) => {
    const [isEdit, setIsEdit] = useState<boolean>(isNew);
    const [currentToDo, setCurrentToDo] = useState<ToDoProp>(initialToDo);

    const theme = useTheme();
    const classes = useStyles(theme);
    const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (e: any) => {
        setCurrentToDo({ ...currentToDo, [e.target.name]: e.target.value });
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
                style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                {currentToDo.title || "Creazione"}
            </DialogTitle>

            <DialogContent>
                <Grid container justify="space-around">
                    <SelectOutlined
                        value={currentToDo.state || ""}
                        label="Stato"
                        name="state"
                        handleChange={handleChange}
                        options={mockOptions}
                        disabled={!isEdit}
                    />
                    <InputOutlined
                        handleChange={handleChange}
                        label="Title"
                        name="title"
                        type="title"
                        value={currentToDo.title || ""}
                        disabled={!isEdit}
                    />
                    <InputOutlined
                        handleChange={handleChange}
                        label="Text"
                        name="text"
                        type="text"
                        value={currentToDo.text || ""}
                        disabled={!isEdit}
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
                        onClick={() => {
                            isNew
                                ? saveToDo(currentToDo)
                                : editToDo(currentToDo);
                        }}
                        color="primary"
                        className={clsx(!isEdit && classes.none)}
                    >
                        Salva
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Chiudi
                    </Button>
                </div>
            </DialogActions>
        </Dialog>
    );
};
export default AddToDoDialog;
