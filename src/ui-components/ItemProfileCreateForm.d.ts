/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ItemProfileCreateFormInputValues = {
    Name?: string;
};
export declare type ItemProfileCreateFormValidationValues = {
    Name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ItemProfileCreateFormOverridesProps = {
    ItemProfileCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ItemProfileCreateFormProps = React.PropsWithChildren<{
    overrides?: ItemProfileCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ItemProfileCreateFormInputValues) => ItemProfileCreateFormInputValues;
    onSuccess?: (fields: ItemProfileCreateFormInputValues) => void;
    onError?: (fields: ItemProfileCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ItemProfileCreateFormInputValues) => ItemProfileCreateFormInputValues;
    onValidate?: ItemProfileCreateFormValidationValues;
} & React.CSSProperties>;
export default function ItemProfileCreateForm(props: ItemProfileCreateFormProps): React.ReactElement;
