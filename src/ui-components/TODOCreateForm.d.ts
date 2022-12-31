/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TODOCreateFormInputValues = {
    name?: string;
    description?: string;
    completed?: boolean;
    date?: string;
};
export declare type TODOCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    completed?: ValidationFunction<boolean>;
    date?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TODOCreateFormOverridesProps = {
    TODOCreateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    description?: FormProps<TextFieldProps>;
    completed?: FormProps<SwitchFieldProps>;
    date?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TODOCreateFormProps = React.PropsWithChildren<{
    overrides?: TODOCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TODOCreateFormInputValues) => TODOCreateFormInputValues;
    onSuccess?: (fields: TODOCreateFormInputValues) => void;
    onError?: (fields: TODOCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: TODOCreateFormInputValues) => TODOCreateFormInputValues;
    onValidate?: TODOCreateFormValidationValues;
} & React.CSSProperties>;
export default function TODOCreateForm(props: TODOCreateFormProps): React.ReactElement;
