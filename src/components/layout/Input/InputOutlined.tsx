import React from "react";
import { FormControl, TextField, useTheme } from "@material-ui/core";
import { useStyles } from "../../hook/useStyles";

interface InputOtlinedProp {
    label: string;
    value: string;
    type: string;
    name: string;
    handleChange: (e: any) => void;
    fullWidth?: boolean;
}

const InputOutlined: React.FC<InputOtlinedProp> = ({
    label,
    value,
    type,
    name,
    handleChange,
    fullWidth = true,
}) => {
    const theme = useTheme();
    const classes = useStyles(theme);
    return (
        <FormControl
            variant="outlined"
            className={classes.formControl}
            fullWidth={fullWidth}
        >
            <TextField
                type={type}
                name={name}
                onChange={handleChange}
                value={value || ""}
                InputLabelProps={{
                    shrink: true,
                }}
                label={label}
                variant="outlined"
            />
        </FormControl>
    );
};

export default InputOutlined;
