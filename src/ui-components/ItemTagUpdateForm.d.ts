/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ItemTag } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ItemTagUpdateFormInputValues = {};
export declare type ItemTagUpdateFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ItemTagUpdateFormOverridesProps = {
    ItemTagUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type ItemTagUpdateFormProps = React.PropsWithChildren<{
    overrides?: ItemTagUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    itemTag?: ItemTag;
    onSubmit?: (fields: ItemTagUpdateFormInputValues) => ItemTagUpdateFormInputValues;
    onSuccess?: (fields: ItemTagUpdateFormInputValues) => void;
    onError?: (fields: ItemTagUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ItemTagUpdateFormInputValues) => ItemTagUpdateFormInputValues;
    onValidate?: ItemTagUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ItemTagUpdateForm(props: ItemTagUpdateFormProps): React.ReactElement;
