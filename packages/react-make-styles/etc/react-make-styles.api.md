## API Report File for "@fluentui/react-make-styles"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { ax } from '@fluentui/make-styles';
import { createDOMRenderer } from '@fluentui/make-styles';
import { MakeStaticStyles } from '@fluentui/make-styles';
import { MakeStylesStyleRule } from '@fluentui/make-styles';
import { Theme } from '@fluentui/react-theme';

export { ax }

export { createDOMRenderer }

// @public (undocumented)
export function makeStaticStyles<Selectors>(styles: MakeStaticStyles | MakeStaticStyles[]): () => void;

// @public (undocumented)
export function makeStyles<Slots extends string>(stylesBySlots: Record<Slots, MakeStylesStyleRule<Theme>>): () => Record<Slots, string>;

// @public
export function makeStylesWithCustomTheme<Slots extends string>(stylesBySlots: Record<Slots, MakeStylesStyleRule<Theme>>): (customTheme: Theme) => Record<Slots, string>;


// (No @packageDocumentation comment for this package)

```
