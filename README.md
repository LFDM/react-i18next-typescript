## react-i18next-typescript

Typescript bindings for [i18next-typescript](https://github.com/LFDM/i18next-typescript)

### How to use?

- Check out the documentation for [i18next-typescript](https://github.com/LFDM/i18next-typescript) for a general overview and how to generate types.
- Afterwards re-export the typed version of your React helpers, e.g. `useTranslation`:

```typescript
import { TypedTFunction } from "i18next-typescript";
import { useTranslation as _useTranslation } from "react-i18next";
import { TypedUseTranslation } from "react-i18next-typescript";
import { TranslationKeys } from "./i18next-typescript.keys";

export type TFunction = TypedTFunction<TranslationKey>;
export const useTranslation = _useTranslation as TypedUseTranslation<
  TranslationKeys
>;
```

Import your re-exported `useTranslation` and `t` will be typed, giving you autocompletion and errors for missing keys.
