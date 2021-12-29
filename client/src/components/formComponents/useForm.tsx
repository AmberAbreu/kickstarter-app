import React, { ReactElement, useState } from "react";
import { makeStyles } from "@material-ui/core";

export function useForm(initialValues: any) {
  //work around :(
  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  console.log(values);
  return {
    values,
    setValues,
    handleInputChange,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "80%",
      margin: theme.spacing(1),
    },
  },
}));

interface Props {
  className?: string;
  children: ReactElement;
}
export function Form({ className, children }: Props): ReactElement {
  const classes = useStyles();
  return <form className={classes.root}>{children}</form>;
}
