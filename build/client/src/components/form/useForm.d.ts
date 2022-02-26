import React, { ReactElement } from "react";
export declare function useForm(initialValues: any): {
    values: any;
    setValues: React.Dispatch<any>;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
interface Props {
    className?: string;
    children: ReactElement | ReactElement[];
}
export declare function Form({ className, children }: Props): ReactElement;
export {};
