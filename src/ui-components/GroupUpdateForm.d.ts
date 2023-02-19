/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Group } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type GroupUpdateFormInputValues = {
    Name?: string;
};
export declare type GroupUpdateFormValidationValues = {
    Name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GroupUpdateFormOverridesProps = {
    GroupUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type GroupUpdateFormProps = React.PropsWithChildren<{
    overrides?: GroupUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    group?: Group;
    onSubmit?: (fields: GroupUpdateFormInputValues) => GroupUpdateFormInputValues;
    onSuccess?: (fields: GroupUpdateFormInputValues) => void;
    onError?: (fields: GroupUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: GroupUpdateFormInputValues) => GroupUpdateFormInputValues;
    onValidate?: GroupUpdateFormValidationValues;
} & React.CSSProperties>;
export default function GroupUpdateForm(props: GroupUpdateFormProps): React.ReactElement;