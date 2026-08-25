# Design tokens: Figma ↔ code

How a change made to the **Figma design system** ("❖ Untitled UI x Fa") maps to a change in
**this repo**. The goal: a designer says *"I changed X"* and an engineer can find exactly one
place named `X`.

---

## 1. The principle — names match on purpose

Untitled UI keeps **1:1 naming between Figma variables and code tokens** (for colors). The
_leaf_ name is identical at every layer; only Figma's **group path** becomes the code **prefix**.

| Layer | Example |
|---|---|
| Figma variable | `Colors/Background/` **`bg-brand-solid`** |
| CSS token (`styles/theme.css`) | `--color-` **`bg-brand-solid`** |
| Tailwind utility | **`bg-brand-solid`** |
| Component usage (`button.tsx`) | `className="… `**`bg-brand-solid`**` hover:`**`bg-brand-solid_hover`**`"` |

Modifiers carry through too: `_hover`, `_alt`, `_on-brand`, `_subtle`.

### Figma group → code prefix

| Figma path | Code prefix | Example |
|---|---|---|
| `Colors/Background/…` | `--color-bg-…` | `bg-brand-solid` |
| `Colors/Text/…` | `--color-text-…` | `text-primary` |
| `Colors/Foreground/…` | `--color-fg-…` | `fg-brand-secondary` |
| `Colors/Border/…` | `--color-border-…` | `border-primary` |
| `Colors/Effects/Shadows/…` | `--shadow-…` | `shadow-xs-skeuomorphic` |

---

## 2. Where tokens live

| Kind | File | Notes |
|---|---|---|
| Primitives (ramps) | `styles/theme.css` `@theme {}` | `--color-brand-25 … 950`; gray/red/green/yellow come from Tailwind defaults (`--color-neutral-*`, etc.) |
| Semantic aliases | `styles/theme.css` `@theme {}` | e.g. `--color-bg-brand-solid: var(--color-brand-500)` |
| Dark-mode overrides | `styles/theme.css` `.dark-mode {}` | each mode has its **own** binding — edit the mode you changed in Figma |
| Type scale | `styles/theme.css` (`--text-*`) | `text-xs … text-display-2xl` |
| Component geometry | the component's `sortCx` styles | radius / padding / size, e.g. `components/base/buttons/button.tsx` |

---

## 3. The three layers — decide where a change goes

When a Figma change lands, classify it, then edit the matching layer:

| # | Change is… | Goes in | Scope |
|---|---|---|---|
| **Primitive** | a ramp step's hex value (e.g. `brand-600 = #035CB5`) | `--color-brand-N` in `theme.css` | cascades to **everything** brand |
| **Semantic alias** | what a role points to (e.g. `bg-brand-solid → brand-500`) | `--color-<name>` in `theme.css` | cascades to **that role** |
| **Component** | geometry or a component-specific class (radius, padding, a one-off color) | the component's `styles` map (e.g. `button.tsx`) | **that component only** |

Rule of thumb: change the **token** when the whole system should follow; change the
**component** when only that component should.

---

## 4. Colors vs. dimensions caveat

The perfect 1:1 naming holds for **colors** (primitives *and* semantics). For **radius / spacing**,
the *value* matches Figma but the *name* follows **Tailwind's** utility convention:

| Figma variable | Code | Match |
|---|---|---|
| `bg-brand-solid` | `bg-brand-solid` | name identical ✅ |
| `brand-600` | `--color-brand-600` | name identical ✅ |
| `radius-full` (9999) | `rounded-full` | value matches, Tailwind name |
| `spacing-md` (8) | `p-2` / `gap-2` | value matches, Tailwind scale |

So colors you can nearly **grep by their Figma name**; dimensions you **translate to Tailwind**.

---

## 5. Worked examples (from this pilot)

Three real edits, one per layer:

**Radius → pill** *(component layer)*
Figma: rebound the button's corner radius `radius-sm → radius-full`.
Code: `components/base/buttons/button.tsx`, `sizes` map — `rounded-lg → rounded-full`
(and the inner border `before:rounded-[7px] → before:rounded-full`), across all sizes.

**Brand → FA blue** *(primitive layer)*
Figma: brand ramp `25 … 950` hex values.
Code: `--color-brand-25 … 950` in `styles/theme.css`. One edit reskinned every brand token
(button fill, focus ring, brand text/borders, subtle brand backgrounds).

**BG Brand Solid → brand-500** *(semantic layer)*
Figma: alias `bg-brand-solid` rebound `brand-600 → brand-500` (hover `brand-700 → brand-600`).
Code: `--color-bg-brand-solid: var(--color-brand-500)` and `…_hover: var(--color-brand-600)`
in `styles/theme.css`. Light mode only — dark mode keeps its own binding.

---

## 6. Reading Figma values (tooling notes)

- The Figma MCP `get_variable_defs` resolves **values**, but only for variables a **selected
  node/layer actually uses** — point it at the button, you get the ~4 shades the button uses.
- `search_design_system` lists variable **names** across libraries, but **not their values**.
- No available tool dumps a whole collection's values. For a **full ramp**, get it from the
  designer (paste the hexes, or share a "Copy link to selection" URL of a frame that displays
  the swatches, since that frame *uses* every step).

---

## 7. Verify a change

```bash
npm install --legacy-peer-deps   # first time only (eslint peer conflict)
npm run storybook                # → http://localhost:6006
```

- **Foundations → Colors / Typography / Effects** — auto-generated from `theme.css` (Vite `?raw`),
  so it reflects token edits immediately.
- **Base components / Buttons / Primary** — the pilot button (sizes + states).
