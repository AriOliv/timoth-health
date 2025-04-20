# i18n System

This folder contains the internationalization (i18n) files for the Timoth landing page.

- `en.ts`: English translations
- `pt-BR.ts`: Brazilian Portuguese translations
- `I18nContext.tsx`: React context/provider for i18n

## Adding/Editing Translations

1. Add new keys to both `en.ts` and `pt-BR.ts` for consistency.
2. Use the same key structure in both files.
3. For new languages, copy `en.ts` and translate.

## Usage

Use the `useI18n()` hook to access the current language and translation function.

```
import { useI18n } from '../i18n/I18nContext'

const { t, lang, setLang } = useI18n()
```

## Brand Name

The company name is **Timoth**. Always use the `t.brand` key for the brand in UI.
