import React, { ReactElement } from "react";
import TextField from "@material-ui/core/TextField";
import { Controller } from "react-hook-form";

interface Props {
  name: string;
  label: string;
  control: any;
}

export const TextInput = ({ name, control, label }: Props) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          helperText={error ? error.message : null}
          size="small"
          error={!!error}
          onChange={onChange}
          value={value}
          fullWidth
          label={label}
          variant="outlined"
        />
      )}
    />
  );
};
