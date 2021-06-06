import React from "react";
import { FormControl, InputLabel, Select, useTheme } from "@material-ui/core";

import clsx from "clsx";
import { useStyles } from "../../hook/useStyles";
interface Option {
    key: string;
    value: string;
}
interface SelectOtlinedProp {
    label: string;
    value: string;
    name: string;
    handleChange: (e: any) => void;
    options: Option[];
    visible?: boolean;
    fullWidth?: boolean;
    disabled: boolean;
}

const SelectOutlined: React.FC<SelectOtlinedProp> = ({
    label,
    value,
    name,
    handleChange,
    options,
    visible = true,
    fullWidth = true,
    disabled,
}) => {
    const theme = useTheme();
    const classes = useStyles(theme);
    return (
        <FormControl
            variant="outlined"
            className={clsx(!visible && classes.none, classes.formControl)}
        >
            <InputLabel htmlFor="outlined-telaio-native-simple">
                {label}
            </InputLabel>
            <Select
                disabled={disabled}
                native
                value={value}
                onChange={handleChange}
                label={label}
                name={name}
                fullWidth={fullWidth}
            >
                <option aria-label="None" value="" />
                {options &&
                    options.map((o) => {
                        return (
                            <option
                                aria-label={o.value}
                                value={o.key}
                                key={o.key}
                            >
                                {o.value}
                            </option>
                        );
                    })}
            </Select>
        </FormControl>
    );
};

export default SelectOutlined;
