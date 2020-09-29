import { i18n } from "i18next";
import { TypedTFunction } from "i18next-typescript";
import { Namespace, UseTranslationOptions } from "react-i18next";

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
