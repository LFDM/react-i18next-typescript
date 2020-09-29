import { i18n } from "i18next";
import { TypedTFunction, TypedWithT } from "i18next-typescript";
import * as React from "react";
import {
  Namespace,
  UseTranslationOptions,
  WithTranslationProps,
} from "react-i18next";

// ---------- useTranslation ----------

export type TypedUseTranslationResponse<Keys> = [
  TypedTFunction<Keys>,
  i18n,
  boolean
] & {
  t: TypedTFunction<Keys>;
  i18n: i18n;
  ready: boolean;
};

export type TypedUseTranslation<Keys> = (
  ns?: Namespace,
  options?: UseTranslationOptions
) => TypedUseTranslationResponse<Keys>;

// ---------- Trans ----------

export interface TypedTransProps<Keys, E extends Element = HTMLDivElement>
  extends React.HTMLProps<E>,
    Partial<TypedWithT<Keys>> {
  children?: React.ReactNode;
  components?:
    | readonly React.ReactNode[]
    | { [tagName: string]: React.ReactNode };
  count?: number;
  defaults?: string;
  i18n?: i18n;
  i18nKey?: string;
  ns?: Namespace;
  parent?: string | React.ComponentType<any> | null; // used in React.createElement if not null
  tOptions?: {};
  values?: {};
  t?: TypedTFunction<Keys>;
}

export type TypedTrans<Keys, E extends Element = HTMLDivElement> = (
  props: TypedTransProps<Keys, E>
) => React.ReactElement;

// ---------- WithTranslation ----------

export interface TypedWithTranslation<Keys> extends TypedWithT<Keys> {}

export type TypedWithTranslationFn<Keys> = (
  ns?: Namespace,
  options?: {
    withRef?: boolean;
  }
) => <P extends TypedWithTranslation<Keys>>(
  component: React.ComponentType<P>
) => React.ComponentType<
  Omit<P, keyof TypedWithTranslation<Keys>> & WithTranslationProps
>;

// ---------- Translation ----------

export interface TypedTranslationProps<Keys> {
  children: (
    t: TypedTFunction<Keys>,
    options: {
      i18n: i18n;
      lng: string;
    },
    ready: boolean
  ) => React.ReactNode;
  ns?: Namespace;
  i18n?: i18n;
}

export type TypedTranslation<Keys> = (
  props: TypedTranslationProps<Keys>
) => any;
