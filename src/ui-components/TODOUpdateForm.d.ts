/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { TODO } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TODOUpdateFormInputValues = {
    name?: string;
    description?: string;
    completed?: boolean;
    date?: string;
};
export declare type TODOUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    completed?: ValidationFunction<boolean>;
    date?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TODOUpdateFormOverridesProps = {
    TODOUpdateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    description?: FormProps<TextFieldProps>;
    completed?: FormProps<SwitchFieldProps>;
    date?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TODOUpdateFormProps = React.PropsWithChildren<{
    overrides?: TODOUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    tODO?: TODO;
    onSubmit?: (fields: TODOUpdateFormInputValues) => TODOUpdateFormInputValues;
    onSuccess?: (fields: TODOUpdateFormInputValues) => void;
    onError?: (fields: TODOUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: TODOUpdateFormInputValues) => TODOUpdateFormInputValues;
    onValidate?: TODOUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TODOUpdateForm(props: TODOUpdateFormProps): React.ReactElement;
