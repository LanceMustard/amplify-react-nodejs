/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ItemTagCreateFormInputValues = {};
export declare type ItemTagCreateFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ItemTagCreateFormOverridesProps = {
    ItemTagCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type ItemTagCreateFormProps = React.PropsWithChildren<{
    overrides?: ItemTagCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ItemTagCreateFormInputValues) => ItemTagCreateFormInputValues;
    onSuccess?: (fields: ItemTagCreateFormInputValues) => void;
    onError?: (fields: ItemTagCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ItemTagCreateFormInputValues) => ItemTagCreateFormInputValues;
    onValidate?: ItemTagCreateFormValidationValues;
} & React.CSSProperties>;
export default function ItemTagCreateForm(props: ItemTagCreateFormProps): React.ReactElement;
