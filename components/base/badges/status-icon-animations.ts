/**
 * Animated status icons, translated from the Figma motion keyframes (Badges page, "Status icon" frame).
 *
 * Shapes are circles, rings and pill-shaped bars drawn in `currentColor` on a 12px grid. Keyframes
 * animate the individual transform properties (`translate`, `scale`, `rotate`) together with
 * `opacity`, `filter`, `height`, `stroke-width` and `r`, so one shape can run several animations at
 * once. All of an icon's animations share its `duration` and loop forever.
 *
 * Icons are drawn as SVG. Shapes with layer blur (the lens icons) sit in their own full-size SVG layer
 * and the blur is applied to that layer, because Safari does not apply CSS filters to SVG child
 * elements. Blur radii are half the Figma radius, which is how Figma maps layer blur to CSS.
 */

export interface StatusIconShape {
    /** Left, top, width and height in px on the 12px icon grid. */
    box: [number, number, number, number];
    /** A pill-shaped bar instead of a circle. */
    bar?: boolean;
    /** Resting opacity, matching the first keyframe. */
    opacity?: number;
    /** Stroke width of a ring (a Figma inside stroke). Shapes without it are filled. */
    ring?: number;
    /** Resting CSS blur radius in px of the shape's layer. */
    blur?: number;
    /** Names of the keyframes the shape plays. */
    animations?: string[];
    /** Names of the keyframes that animate the blur of the shape's layer. */
    blurAnimations?: string[];
    /** Shapes inside a full-size group that animates as a whole, such as a rotating ring of dots. */
    children?: StatusIconShape[];
}

export interface AnimatedStatusIcon {
    /** Loop duration in seconds. */
    duration: number;
    /** The `@keyframes` rules used by the shapes. */
    keyframes: string;
    shapes: StatusIconShape[];
}

export const animatedStatusIcons = {
    "grid-center-out": {
        duration: 1.7,
        keyframes: `@keyframes uui-status-grid-center-out-1{0%{opacity:.62;scale:1;animation-timing-function:cubic-bezier(.173,.492,.33,1)}14.23%{opacity:.2;scale:.914}58.22%{opacity:.2;scale:.914;animation-timing-function:cubic-bezier(.66,0,.34,1)}86.23%{opacity:1;scale:1.078;animation-timing-function:cubic-bezier(.649,0,.832,.492)}100%{opacity:.62;scale:1}}
@keyframes uui-status-grid-center-out-2{0%{opacity:.2;scale:1}41.17%{opacity:.2;scale:1;animation-timing-function:cubic-bezier(.66,0,.34,1)}69.18%{opacity:1;scale:1.18;animation-timing-function:cubic-bezier(.66,0,.34,1)}97.19%{opacity:.2;scale:1}100%{opacity:.2;scale:1}}
@keyframes uui-status-grid-center-out-3{0%{opacity:.367;scale:1;animation-timing-function:cubic-bezier(.287,.371,.251,1)}17.42%{opacity:1;scale:1.137;animation-timing-function:cubic-bezier(.66,0,.34,1)}45.4%{opacity:.2;scale:.964}89.42%{opacity:.2;scale:.964;animation-timing-function:cubic-bezier(.514,0,.803,.415)}100%{opacity:.367;scale:1}}`,
        shapes: [
            { box: [8.906, 8.906, 2.189, 2.189], opacity: 0.619, animations: ["uui-status-grid-center-out-1"] },
            { box: [5, 9, 2, 2], opacity: 0.2, animations: ["uui-status-grid-center-out-2"] },
            { box: [0.906, 8.906, 2.189, 2.189], opacity: 0.619, animations: ["uui-status-grid-center-out-1"] },
            { box: [9, 5, 2, 2], opacity: 0.2, animations: ["uui-status-grid-center-out-2"] },
            { box: [4.962, 4.962, 2.075, 2.075], opacity: 0.367, animations: ["uui-status-grid-center-out-3"] },
            { box: [1, 5, 2, 2], opacity: 0.2, animations: ["uui-status-grid-center-out-2"] },
            { box: [8.906, 0.906, 2.189, 2.189], opacity: 0.619, animations: ["uui-status-grid-center-out-1"] },
            { box: [5, 1, 2, 2], opacity: 0.2, animations: ["uui-status-grid-center-out-2"] },
            { box: [0.906, 0.906, 2.189, 2.189], opacity: 0.619, animations: ["uui-status-grid-center-out-1"] },
        ],
    },
    "grid-diagonal": {
        duration: 1.7,
        keyframes: `@keyframes uui-status-grid-diagonal-1{0%{opacity:.431;scale:1;animation-timing-function:cubic-bezier(.235,.415,.266,1)}16.24%{opacity:1;scale:1.122;animation-timing-function:cubic-bezier(.66,0,.34,1)}44.24%{opacity:.2;scale:.951}88.24%{opacity:.2;scale:.951;animation-timing-function:cubic-bezier(.558,0,.822,.437)}100%{opacity:.431;scale:1}}
@keyframes uui-status-grid-diagonal-2{0%{opacity:.965;scale:1;animation-timing-function:cubic-bezier(.488,.202,.272,1)}22.16%{opacity:.2;scale:.853}66.18%{opacity:.2;scale:.853;animation-timing-function:cubic-bezier(.66,0,.34,1)}94.16%{opacity:1;scale:1.007;animation-timing-function:cubic-bezier(.403,0,.73,.364)}100%{opacity:.965;scale:1}}
@keyframes uui-status-grid-diagonal-3{0%{opacity:.2;scale:1;animation-timing-function:cubic-bezier(.332,.666,.666,1)}.11%{opacity:.2;scale:1}44.13%{opacity:.2;scale:1;animation-timing-function:cubic-bezier(.66,0,.34,1)}72.11%{opacity:1;scale:1.18;animation-timing-function:cubic-bezier(.661,0,.343,.996)}100%{opacity:.2;scale:1}}
@keyframes uui-status-grid-diagonal-4{0%{opacity:.2;scale:1}22.05%{opacity:.2;scale:1;animation-timing-function:cubic-bezier(.66,0,.34,1)}50.06%{opacity:1;scale:1.18;animation-timing-function:cubic-bezier(.66,0,.34,1)}78.07%{opacity:.2;scale:1}100%{opacity:.2;scale:1}}
@keyframes uui-status-grid-diagonal-5{0%{opacity:.2;scale:1;animation-timing-function:cubic-bezier(.66,0,.34,1)}28.01%{opacity:1;scale:1.18;animation-timing-function:cubic-bezier(.66,0,.34,1)}55.99%{opacity:.2;scale:1}100%{opacity:.2;scale:1}}`,
        shapes: [
            { box: [8.948, 8.948, 2.104, 2.104], opacity: 0.431, animations: ["uui-status-grid-diagonal-1"] },
            { box: [4.828, 8.828, 2.344, 2.344], opacity: 0.965, animations: ["uui-status-grid-diagonal-2"] },
            { box: [1, 9, 2, 2], opacity: 0.2, animations: ["uui-status-grid-diagonal-3"] },
            { box: [8.828, 4.828, 2.344, 2.344], opacity: 0.965, animations: ["uui-status-grid-diagonal-2"] },
            { box: [5, 5, 2, 2], opacity: 0.2, animations: ["uui-status-grid-diagonal-3"] },
            { box: [1, 5, 2, 2], opacity: 0.2, animations: ["uui-status-grid-diagonal-4"] },
            { box: [9, 1, 2, 2], opacity: 0.2, animations: ["uui-status-grid-diagonal-3"] },
            { box: [5, 1, 2, 2], opacity: 0.2, animations: ["uui-status-grid-diagonal-4"] },
            { box: [1, 1, 2, 2], opacity: 0.2, animations: ["uui-status-grid-diagonal-5"] },
        ],
    },
    "grid-spiral": {
        duration: 1.7,
        keyframes: `@keyframes uui-status-grid-spiral-1{0%{opacity:.2;scale:1}49.98%{opacity:.2;scale:1}50%{opacity:1;scale:1.2}95.01%{opacity:.2;scale:1}100%{opacity:.2;scale:1}}
@keyframes uui-status-grid-spiral-2{0%{opacity:.333;scale:1}7.51%{opacity:.2;scale:.968}62.48%{opacity:.2;scale:.968}62.51%{opacity:1;scale:1.161}100%{opacity:.333;scale:1}}
@keyframes uui-status-grid-spiral-3{0%{opacity:.556;scale:1}19.99%{opacity:.2;scale:.918}74.96%{opacity:.2;scale:.918}74.99%{opacity:1;scale:1.102}100%{opacity:.556;scale:1}}
@keyframes uui-status-grid-spiral-4{0%{opacity:.2;scale:1}37.47%{opacity:.2;scale:1}37.5%{opacity:1;scale:1.2}82.5%{opacity:.2;scale:1}100%{opacity:.2;scale:1}}
@keyframes uui-status-grid-spiral-5{0%{opacity:.778;scale:1}32.5%{opacity:.2;scale:.874}87.47%{opacity:.2;scale:.874}87.5%{opacity:1;scale:1.049}100%{opacity:.778;scale:1}}
@keyframes uui-status-grid-spiral-6{0%{opacity:.2;scale:1}24.96%{opacity:.2;scale:1}24.99%{opacity:1;scale:1.2}70%{opacity:.2;scale:1}100%{opacity:.2;scale:1}}
@keyframes uui-status-grid-spiral-7{0%{opacity:.2;scale:1}12.48%{opacity:.2;scale:1}12.51%{opacity:1;scale:1.2}57.49%{opacity:.2;scale:1}100%{opacity:.2;scale:1}}
@keyframes uui-status-grid-spiral-8{0%{opacity:1;scale:1}45.01%{opacity:.2;scale:.833}100%{opacity:.2;scale:.833}}`,
        shapes: [
            { box: [9, 9, 2, 2], opacity: 0.2, animations: ["uui-status-grid-spiral-1"] },
            { box: [4.967, 8.967, 2.067, 2.067], opacity: 0.333, animations: ["uui-status-grid-spiral-2"] },
            { box: [0.911, 8.911, 2.178, 2.178], opacity: 0.556, animations: ["uui-status-grid-spiral-3"] },
            { box: [9, 5, 2, 2], opacity: 0.2, animations: ["uui-status-grid-spiral-4"] },
            { box: [5, 5, 2, 2], opacity: 0.1 },
            { box: [0.856, 4.856, 2.289, 2.289], opacity: 0.778, animations: ["uui-status-grid-spiral-5"] },
            { box: [9, 1, 2, 2], opacity: 0.2, animations: ["uui-status-grid-spiral-6"] },
            { box: [5, 1, 2, 2], opacity: 0.2, animations: ["uui-status-grid-spiral-7"] },
            { box: [0.8, 0.8, 2.4, 2.4], animations: ["uui-status-grid-spiral-8"] },
        ],
    },
    "grid-vertical": {
        duration: 1.6,
        keyframes: `@keyframes uui-status-grid-vertical-1{0%{opacity:.99;scale:1;animation-timing-function:cubic-bezier(.573,.114,.302,1)}24.75%{opacity:.2;scale:.849}68.76%{opacity:.2;scale:.849;animation-timing-function:cubic-bezier(.66,0,.34,1)}96.75%{opacity:1;scale:1.002;animation-timing-function:cubic-bezier(.367,0,.699,.348)}100%{opacity:.99;scale:1}}
@keyframes uui-status-grid-vertical-2{0%{opacity:.2;scale:1}34.38%{opacity:.2;scale:1;animation-timing-function:cubic-bezier(.66,0,.34,1)}62.37%{opacity:1;scale:1.18;animation-timing-function:cubic-bezier(.66,0,.34,1)}90.39%{opacity:.2;scale:1}100%{opacity:.2;scale:1}}
@keyframes uui-status-grid-vertical-3{0%{opacity:.2;scale:1;animation-timing-function:cubic-bezier(.66,0,.34,1)}27.99%{opacity:1;scale:1.18;animation-timing-function:cubic-bezier(.66,0,.34,1)}56.01%{opacity:.2;scale:1}100%{opacity:.2;scale:1}}`,
        shapes: [
            { box: [8.822, 8.822, 2.356, 2.356], opacity: 0.99, animations: ["uui-status-grid-vertical-1"] },
            { box: [5, 9, 2, 2], opacity: 0.2, animations: ["uui-status-grid-vertical-2"] },
            { box: [1, 9, 2, 2], opacity: 0.2, animations: ["uui-status-grid-vertical-3"] },
            { box: [8.822, 4.822, 2.356, 2.356], opacity: 0.99, animations: ["uui-status-grid-vertical-1"] },
            { box: [5, 5, 2, 2], opacity: 0.2, animations: ["uui-status-grid-vertical-2"] },
            { box: [1, 5, 2, 2], opacity: 0.2, animations: ["uui-status-grid-vertical-3"] },
            { box: [8.822, 0.822, 2.356, 2.356], opacity: 0.99, animations: ["uui-status-grid-vertical-1"] },
            { box: [5, 1, 2, 2], opacity: 0.2, animations: ["uui-status-grid-vertical-2"] },
            { box: [1, 1, 2, 2], opacity: 0.2, animations: ["uui-status-grid-vertical-3"] },
        ],
    },
    "grid-random": {
        duration: 1.7,
        keyframes: `@keyframes uui-status-grid-random-1{0%{opacity:.2;scale:1}49.98%{opacity:.2;scale:1}50%{opacity:1;scale:1.2}95.01%{opacity:.2;scale:1}100%{opacity:.2;scale:1}}
@keyframes uui-status-grid-random-2{0%{opacity:.2;scale:1}12.48%{opacity:.2;scale:1}12.51%{opacity:1;scale:1.2}57.49%{opacity:.2;scale:1}100%{opacity:.2;scale:1}}
@keyframes uui-status-grid-random-3{0%{opacity:.556;scale:1}19.99%{opacity:.2;scale:.918}74.96%{opacity:.2;scale:.918}74.99%{opacity:1;scale:1.102}100%{opacity:.556;scale:1}}
@keyframes uui-status-grid-random-4{0%{opacity:.778;scale:1}32.5%{opacity:.2;scale:.874}87.47%{opacity:.2;scale:.874}87.5%{opacity:1;scale:1.049}100%{opacity:.778;scale:1}}
@keyframes uui-status-grid-random-5{0%{opacity:.2;scale:1}37.47%{opacity:.2;scale:1}37.5%{opacity:1;scale:1.2}82.5%{opacity:.2;scale:1}100%{opacity:.2;scale:1}}
@keyframes uui-status-grid-random-6{0%{opacity:.2;scale:1}24.96%{opacity:.2;scale:1}24.99%{opacity:1;scale:1.2}70%{opacity:.2;scale:1}100%{opacity:.2;scale:1}}
@keyframes uui-status-grid-random-7{0%{opacity:.333;scale:1}7.51%{opacity:.2;scale:.968}62.48%{opacity:.2;scale:.968}62.51%{opacity:1;scale:1.161}100%{opacity:.333;scale:1}}
@keyframes uui-status-grid-random-8{0%{opacity:1;scale:1}45.01%{opacity:.2;scale:.833}100%{opacity:.2;scale:.833}}`,
        shapes: [
            { box: [9, 9, 2, 2], opacity: 0.2, animations: ["uui-status-grid-random-1"] },
            { box: [5, 9, 2, 2], opacity: 0.2, animations: ["uui-status-grid-random-2"] },
            { box: [0.911, 8.911, 2.178, 2.178], opacity: 0.556, animations: ["uui-status-grid-random-3"] },
            { box: [8.856, 4.856, 2.289, 2.289], opacity: 0.778, animations: ["uui-status-grid-random-4"] },
            { box: [5, 5, 2, 2], opacity: 0.1 },
            { box: [1, 5, 2, 2], opacity: 0.2, animations: ["uui-status-grid-random-5"] },
            { box: [9, 1, 2, 2], opacity: 0.2, animations: ["uui-status-grid-random-6"] },
            { box: [4.967, 0.967, 2.067, 2.067], opacity: 0.333, animations: ["uui-status-grid-random-7"] },
            { box: [0.8, 0.8, 2.4, 2.4], animations: ["uui-status-grid-random-8"] },
        ],
    },
    "ring-chase": {
        duration: 1.6,
        keyframes: `@keyframes uui-status-ring-chase-1{0%{opacity:.22}12.48%{opacity:.22}12.51%{opacity:1}23.49%{opacity:1}24.99%{opacity:.22}100%{opacity:.22}}
@keyframes uui-status-ring-chase-2{0%{opacity:.22}24.96%{opacity:.22}24.99%{opacity:1}36%{opacity:1}37.5%{opacity:.22}100%{opacity:.22}}
@keyframes uui-status-ring-chase-3{0%{opacity:.22}37.47%{opacity:.22}37.5%{opacity:1}48.51%{opacity:1}50.01%{opacity:.22}100%{opacity:.22}}
@keyframes uui-status-ring-chase-4{0%{opacity:.22}49.98%{opacity:.22}50.01%{opacity:1}60.99%{opacity:1}62.49%{opacity:.22}100%{opacity:.22}}
@keyframes uui-status-ring-chase-5{0%{opacity:.22}62.46%{opacity:.22}62.49%{opacity:1}73.5%{opacity:1}75%{opacity:.22}100%{opacity:.22}}
@keyframes uui-status-ring-chase-6{0%{opacity:.22}74.97%{opacity:.22}75%{opacity:1}86.01%{opacity:1}87.51%{opacity:.22}100%{opacity:.22}}
@keyframes uui-status-ring-chase-7{0%{opacity:.22}87.48%{opacity:.22}87.51%{opacity:1}98.49%{opacity:1}100%{opacity:.22}}
@keyframes uui-status-ring-chase-8{0%{opacity:1}11.01%{opacity:1}12.51%{opacity:.22}100%{opacity:.22}}`,
        shapes: [
            { box: [5, 1, 2, 2], opacity: 0.22, animations: ["uui-status-ring-chase-1"] },
            { box: [7.828, 2.172, 2, 2], opacity: 0.22, animations: ["uui-status-ring-chase-2"] },
            { box: [9, 5, 2, 2], opacity: 0.22, animations: ["uui-status-ring-chase-3"] },
            { box: [7.828, 7.828, 2, 2], opacity: 0.22, animations: ["uui-status-ring-chase-4"] },
            { box: [5, 9, 2, 2], opacity: 0.22, animations: ["uui-status-ring-chase-5"] },
            { box: [2.172, 7.828, 2, 2], opacity: 0.22, animations: ["uui-status-ring-chase-6"] },
            { box: [1, 5, 2, 2], opacity: 0.22, animations: ["uui-status-ring-chase-7"] },
            { box: [2.172, 2.172, 2, 2], animations: ["uui-status-ring-chase-8"] },
        ],
    },
    "ring-pulse": {
        duration: 2,
        keyframes: `@keyframes uui-status-ring-pulse-1{0%{opacity:.286;scale:1;animation-timing-function:cubic-bezier(.296,.608,.622,1)}12.5%{opacity:.18;scale:.923;animation-timing-function:ease-in-out}62.5%{opacity:1;scale:1.517;animation-timing-function:cubic-bezier(.434,0,.66,.69)}100%{opacity:.286;scale:1}}
@keyframes uui-status-ring-pulse-2{0%{opacity:.59;scale:1;animation-timing-function:cubic-bezier(.29,.5,.58,1)}25.01%{opacity:.18;scale:.757;animation-timing-function:ease-in-out}75%{opacity:1;scale:1.243;animation-timing-function:cubic-bezier(.42,0,.71,.5)}100%{opacity:.59;scale:1}}
@keyframes uui-status-ring-pulse-3{0%{opacity:.894;scale:1;animation-timing-function:cubic-bezier(.34,.31,.566,1)}37.51%{opacity:.18;scale:.641;animation-timing-function:ease-in-out}87.5%{opacity:1;scale:1.053;animation-timing-function:cubic-bezier(.378,0,.704,.392)}100%{opacity:.894;scale:1}}
@keyframes uui-status-ring-pulse-4{0%{opacity:1;scale:1;animation-timing-function:ease-in-out}49.99%{opacity:.18;scale:.609;animation-timing-function:ease-in-out}100%{opacity:1;scale:1}}
@keyframes uui-status-ring-pulse-5{0%{opacity:.894;scale:1;animation-timing-function:cubic-bezier(.296,.608,.622,1)}12.5%{opacity:1;scale:1.053;animation-timing-function:ease-in-out}62.5%{opacity:.18;scale:.641;animation-timing-function:cubic-bezier(.434,0,.66,.69)}100%{opacity:.894;scale:1}}
@keyframes uui-status-ring-pulse-6{0%{opacity:.59;scale:1;animation-timing-function:cubic-bezier(.29,.5,.58,1)}25.01%{opacity:1;scale:1.243;animation-timing-function:ease-in-out}75%{opacity:.18;scale:.757;animation-timing-function:cubic-bezier(.42,0,.71,.5)}100%{opacity:.59;scale:1}}
@keyframes uui-status-ring-pulse-7{0%{opacity:.286;scale:1;animation-timing-function:cubic-bezier(.34,.31,.566,1)}37.51%{opacity:1;scale:1.517;animation-timing-function:ease-in-out}87.5%{opacity:.18;scale:.923;animation-timing-function:cubic-bezier(.378,0,.704,.392)}100%{opacity:.286;scale:1}}
@keyframes uui-status-ring-pulse-8{0%{opacity:.18;scale:1;animation-timing-function:ease-in-out}49.99%{opacity:1;scale:1.643;animation-timing-function:ease-in-out}100%{opacity:.18;scale:1}}`,
        shapes: [
            { box: [5.242, 1.242, 1.516, 1.516], opacity: 0.286, animations: ["uui-status-ring-pulse-1"] },
            { box: [7.903, 2.247, 1.85, 1.85], opacity: 0.59, animations: ["uui-status-ring-pulse-2"] },
            { box: [8.908, 4.908, 2.184, 2.184], opacity: 0.894, animations: ["uui-status-ring-pulse-3"] },
            { box: [7.678, 7.678, 2.3, 2.3], animations: ["uui-status-ring-pulse-4"] },
            { box: [4.908, 8.908, 2.184, 2.184], opacity: 0.894, animations: ["uui-status-ring-pulse-5"] },
            { box: [2.247, 7.903, 1.85, 1.85], opacity: 0.59, animations: ["uui-status-ring-pulse-6"] },
            { box: [1.242, 5.242, 1.516, 1.516], opacity: 0.286, animations: ["uui-status-ring-pulse-7"] },
            { box: [2.472, 2.472, 1.4, 1.4], opacity: 0.18, animations: ["uui-status-ring-pulse-8"] },
        ],
    },
    "ring-comet": {
        duration: 1.8,
        keyframes: `@keyframes uui-status-ring-comet-1{0%{opacity:.088;animation-timing-function:cubic-bezier(.29,.587,.61,1)}12.51%{opacity:.08;animation-timing-function:ease-in-out}24.51%{opacity:1;animation-timing-function:cubic-bezier(.33,1,.68,1)}47.49%{opacity:.5;animation-timing-function:ease-in-out}72.51%{opacity:.12;animation-timing-function:cubic-bezier(.434,0,.677,.633)}100%{opacity:.088}}
@keyframes uui-status-ring-comet-2{0%{opacity:.108;animation-timing-function:cubic-bezier(.309,.417,.569,1)}25.01%{opacity:.08;animation-timing-function:ease-in-out}37.01%{opacity:1;animation-timing-function:cubic-bezier(.33,1,.68,1)}60%{opacity:.5;animation-timing-function:ease-in-out}85.01%{opacity:.12;animation-timing-function:cubic-bezier(.401,0,.713,.438)}100%{opacity:.108}}
@keyframes uui-status-ring-comet-3{0%{opacity:.12;animation-timing-function:cubic-bezier(.4,.093,.575,1)}37.49%{opacity:.08;animation-timing-function:ease-in-out}49.49%{opacity:1;animation-timing-function:cubic-bezier(.33,1,.68,1)}72.51%{opacity:.5;animation-timing-function:ease-in-out}97.49%{opacity:.12;animation-timing-function:cubic-bezier(.344,0,.677,.345)}100%{opacity:.12}}
@keyframes uui-status-ring-comet-4{0%{opacity:.246;animation-timing-function:cubic-bezier(.286,.551,.595,1)}10%{opacity:.12;animation-timing-function:ease-in-out}50%{opacity:.08;animation-timing-function:ease-in-out}62%{opacity:1;animation-timing-function:cubic-bezier(.33,1,.68,1)}85.01%{opacity:.5;animation-timing-function:cubic-bezier(.43,0,.696,.564)}100%{opacity:.246}}
@keyframes uui-status-ring-comet-5{0%{opacity:.492;animation-timing-function:cubic-bezier(.387,.143,.572,1)}22.51%{opacity:.12;animation-timing-function:ease-in-out}62.51%{opacity:.08;animation-timing-function:ease-in-out}74.51%{opacity:1;animation-timing-function:cubic-bezier(.33,1,.68,1)}97.49%{opacity:.5;animation-timing-function:cubic-bezier(.35,0,.683,.353)}100%{opacity:.492}}
@keyframes uui-status-ring-comet-6{0%{opacity:.542;animation-timing-function:cubic-bezier(.34,1,.677,1)}10%{opacity:.5;animation-timing-function:ease-in-out}35.01%{opacity:.12;animation-timing-function:ease-in-out}75.01%{opacity:.08;animation-timing-function:ease-in-out}87.01%{opacity:1;animation-timing-function:cubic-bezier(.327,.613,.666,.882)}100%{opacity:.542}}
@keyframes uui-status-ring-comet-7{0%{opacity:.968;animation-timing-function:cubic-bezier(.331,1,.68,1)}22.51%{opacity:.5;animation-timing-function:ease-in-out}47.49%{opacity:.12;animation-timing-function:ease-in-out}87.49%{opacity:.08;animation-timing-function:ease-in-out}99.49%{opacity:1;animation-timing-function:cubic-bezier(.333,.341,.666,.674)}100%{opacity:.968}}
@keyframes uui-status-ring-comet-8{0%{opacity:.08;animation-timing-function:ease-in-out}12%{opacity:1;animation-timing-function:cubic-bezier(.33,1,.68,1)}35.01%{opacity:.5;animation-timing-function:ease-in-out}60%{opacity:.12;animation-timing-function:ease-in-out}100%{opacity:.08}}`,
        shapes: [
            { box: [5, 1, 2, 2], opacity: 0.088, animations: ["uui-status-ring-comet-1"] },
            { box: [7.828, 2.172, 2, 2], opacity: 0.108, animations: ["uui-status-ring-comet-2"] },
            { box: [9, 5, 2, 2], opacity: 0.12, animations: ["uui-status-ring-comet-3"] },
            { box: [7.828, 7.828, 2, 2], opacity: 0.246, animations: ["uui-status-ring-comet-4"] },
            { box: [5, 9, 2, 2], opacity: 0.493, animations: ["uui-status-ring-comet-5"] },
            { box: [2.172, 7.828, 2, 2], opacity: 0.542, animations: ["uui-status-ring-comet-6"] },
            { box: [1, 5, 2, 2], opacity: 0.968, animations: ["uui-status-ring-comet-7"] },
            { box: [2.172, 2.172, 2, 2], opacity: 0.08, animations: ["uui-status-ring-comet-8"] },
        ],
    },
    "ring-alternate": {
        duration: 1.6,
        keyframes: `@keyframes uui-status-ring-alternate-1{0%{opacity:1;animation-timing-function:ease-in-out}50.01%{opacity:.15;animation-timing-function:ease-in-out}100%{opacity:1}}
@keyframes uui-status-ring-alternate-2{0%{opacity:.15;animation-timing-function:ease-in-out}50.01%{opacity:1;animation-timing-function:ease-in-out}100%{opacity:.15}}`,
        shapes: [
            { box: [5, 1, 2, 2], animations: ["uui-status-ring-alternate-1"] },
            { box: [7.828, 2.172, 2, 2], opacity: 0.15, animations: ["uui-status-ring-alternate-2"] },
            { box: [9, 5, 2, 2], animations: ["uui-status-ring-alternate-1"] },
            { box: [7.828, 7.828, 2, 2], opacity: 0.15, animations: ["uui-status-ring-alternate-2"] },
            { box: [5, 9, 2, 2], animations: ["uui-status-ring-alternate-1"] },
            { box: [2.172, 7.828, 2, 2], opacity: 0.15, animations: ["uui-status-ring-alternate-2"] },
            { box: [1, 5, 2, 2], animations: ["uui-status-ring-alternate-1"] },
            { box: [2.172, 2.172, 2, 2], opacity: 0.15, animations: ["uui-status-ring-alternate-2"] },
        ],
    },
    "ring-scatter": {
        duration: 1.8,
        keyframes: `@keyframes uui-status-ring-scatter-1{0%{opacity:.08;animation-timing-function:ease-in-out}12%{opacity:1;animation-timing-function:cubic-bezier(.33,1,.68,1)}35.01%{opacity:.5;animation-timing-function:ease-in-out}60%{opacity:.12;animation-timing-function:ease-in-out}100%{opacity:.08}}
@keyframes uui-status-ring-scatter-2{0%{opacity:.492;animation-timing-function:cubic-bezier(.387,.143,.572,1)}22.51%{opacity:.12;animation-timing-function:ease-in-out}62.51%{opacity:.08;animation-timing-function:ease-in-out}74.51%{opacity:1;animation-timing-function:cubic-bezier(.33,1,.68,1)}97.49%{opacity:.5;animation-timing-function:cubic-bezier(.35,0,.683,.353)}100%{opacity:.492}}
@keyframes uui-status-ring-scatter-3{0%{opacity:.108;animation-timing-function:cubic-bezier(.309,.417,.569,1)}25.01%{opacity:.08;animation-timing-function:ease-in-out}37.01%{opacity:1;animation-timing-function:cubic-bezier(.33,1,.68,1)}60%{opacity:.5;animation-timing-function:ease-in-out}85.01%{opacity:.12;animation-timing-function:cubic-bezier(.401,0,.713,.438)}100%{opacity:.108}}
@keyframes uui-status-ring-scatter-4{0%{opacity:.968;animation-timing-function:cubic-bezier(.331,1,.68,1)}22.51%{opacity:.5;animation-timing-function:ease-in-out}47.49%{opacity:.12;animation-timing-function:ease-in-out}87.49%{opacity:.08;animation-timing-function:ease-in-out}99.49%{opacity:1;animation-timing-function:cubic-bezier(.333,.341,.666,.674)}100%{opacity:.968}}
@keyframes uui-status-ring-scatter-5{0%{opacity:.246;animation-timing-function:cubic-bezier(.286,.551,.595,1)}10%{opacity:.12;animation-timing-function:ease-in-out}50%{opacity:.08;animation-timing-function:ease-in-out}62%{opacity:1;animation-timing-function:cubic-bezier(.33,1,.68,1)}85.01%{opacity:.5;animation-timing-function:cubic-bezier(.43,0,.696,.564)}100%{opacity:.246}}
@keyframes uui-status-ring-scatter-6{0%{opacity:.088;animation-timing-function:cubic-bezier(.29,.587,.61,1)}12.51%{opacity:.08;animation-timing-function:ease-in-out}24.51%{opacity:1;animation-timing-function:cubic-bezier(.33,1,.68,1)}47.49%{opacity:.5;animation-timing-function:ease-in-out}72.51%{opacity:.12;animation-timing-function:cubic-bezier(.434,0,.677,.633)}100%{opacity:.088}}
@keyframes uui-status-ring-scatter-7{0%{opacity:.542;animation-timing-function:cubic-bezier(.34,1,.677,1)}10%{opacity:.5;animation-timing-function:ease-in-out}35.01%{opacity:.12;animation-timing-function:ease-in-out}75.01%{opacity:.08;animation-timing-function:ease-in-out}87.01%{opacity:1;animation-timing-function:cubic-bezier(.327,.613,.666,.882)}100%{opacity:.542}}
@keyframes uui-status-ring-scatter-8{0%{opacity:.12;animation-timing-function:cubic-bezier(.4,.093,.575,1)}37.49%{opacity:.08;animation-timing-function:ease-in-out}49.49%{opacity:1;animation-timing-function:cubic-bezier(.33,1,.68,1)}72.51%{opacity:.5;animation-timing-function:ease-in-out}97.49%{opacity:.12;animation-timing-function:cubic-bezier(.344,0,.677,.345)}100%{opacity:.12}}`,
        shapes: [
            { box: [5, 1, 2, 2], opacity: 0.08, animations: ["uui-status-ring-scatter-1"] },
            { box: [7.828, 2.172, 2, 2], opacity: 0.493, animations: ["uui-status-ring-scatter-2"] },
            { box: [9, 5, 2, 2], opacity: 0.108, animations: ["uui-status-ring-scatter-3"] },
            { box: [7.828, 7.828, 2, 2], opacity: 0.968, animations: ["uui-status-ring-scatter-4"] },
            { box: [5, 9, 2, 2], opacity: 0.246, animations: ["uui-status-ring-scatter-5"] },
            { box: [2.172, 7.828, 2, 2], opacity: 0.088, animations: ["uui-status-ring-scatter-6"] },
            { box: [1, 5, 2, 2], opacity: 0.542, animations: ["uui-status-ring-scatter-7"] },
            { box: [2.172, 2.172, 2, 2], opacity: 0.12, animations: ["uui-status-ring-scatter-8"] },
        ],
    },
    "morph-shape": {
        duration: 4.8,
        keyframes: `@keyframes uui-status-morph-shape-1{0%{translate:0 0}2.5%{translate:0 0;animation-timing-function:cubic-bezier(.4,0,.2,1)}22.5%{translate:0 -.525px}27.5%{translate:0 -.525px;animation-timing-function:cubic-bezier(.4,0,.2,1)}47.5%{translate:0 0}52.5%{translate:0 0;animation-timing-function:cubic-bezier(.4,0,.2,1)}72.5%{translate:0 -.525px}77.5%{translate:0 -.525px;animation-timing-function:cubic-bezier(.4,0,.2,1)}97.5%{translate:0 0}100%{translate:0 0}}
@keyframes uui-status-morph-shape-2{0%{translate:0 0}2.5%{translate:0 0;animation-timing-function:cubic-bezier(.4,0,.2,1)}22.5%{translate:-1.225px 1.225px}27.5%{translate:-1.225px 1.225px;animation-timing-function:cubic-bezier(.4,0,.2,1)}47.5%{translate:0 0}52.5%{translate:0 0;animation-timing-function:cubic-bezier(.4,0,.2,1)}72.5%{translate:-.5px .5px}77.5%{translate:-.5px .5px;animation-timing-function:cubic-bezier(.4,0,.2,1)}97.5%{translate:0 0}100%{translate:0 0}}
@keyframes uui-status-morph-shape-3{0%{translate:0 0}2.5%{translate:0 0;animation-timing-function:cubic-bezier(.4,0,.2,1)}22.5%{translate:.525px 0}27.5%{translate:.525px 0;animation-timing-function:cubic-bezier(.4,0,.2,1)}47.5%{translate:0 0}52.5%{translate:0 0;animation-timing-function:cubic-bezier(.4,0,.2,1)}72.5%{translate:.525px 0}77.5%{translate:.525px 0;animation-timing-function:cubic-bezier(.4,0,.2,1)}97.5%{translate:0 0}100%{translate:0 0}}
@keyframes uui-status-morph-shape-4{0%{translate:0 0}2.5%{translate:0 0;animation-timing-function:cubic-bezier(.4,0,.2,1)}22.5%{translate:-1.225px -1.225px}27.5%{translate:-1.225px -1.225px;animation-timing-function:cubic-bezier(.4,0,.2,1)}47.5%{translate:0 0}52.5%{translate:0 0;animation-timing-function:cubic-bezier(.4,0,.2,1)}72.5%{translate:-.5px -.5px}77.5%{translate:-.5px -.5px;animation-timing-function:cubic-bezier(.4,0,.2,1)}97.5%{translate:0 0}100%{translate:0 0}}
@keyframes uui-status-morph-shape-5{0%{translate:0 0}2.5%{translate:0 0;animation-timing-function:cubic-bezier(.4,0,.2,1)}22.5%{translate:0 .525px}27.5%{translate:0 .525px;animation-timing-function:cubic-bezier(.4,0,.2,1)}47.5%{translate:0 0}52.5%{translate:0 0;animation-timing-function:cubic-bezier(.4,0,.2,1)}72.5%{translate:0 .525px}77.5%{translate:0 .525px;animation-timing-function:cubic-bezier(.4,0,.2,1)}97.5%{translate:0 0}100%{translate:0 0}}
@keyframes uui-status-morph-shape-6{0%{translate:0 0}2.5%{translate:0 0;animation-timing-function:cubic-bezier(.4,0,.2,1)}22.5%{translate:1.225px -1.225px}27.5%{translate:1.225px -1.225px;animation-timing-function:cubic-bezier(.4,0,.2,1)}47.5%{translate:0 0}52.5%{translate:0 0;animation-timing-function:cubic-bezier(.4,0,.2,1)}72.5%{translate:.5px -.5px}77.5%{translate:.5px -.5px;animation-timing-function:cubic-bezier(.4,0,.2,1)}97.5%{translate:0 0}100%{translate:0 0}}
@keyframes uui-status-morph-shape-7{0%{translate:0 0}2.5%{translate:0 0;animation-timing-function:cubic-bezier(.4,0,.2,1)}22.5%{translate:-.525px 0}27.5%{translate:-.525px 0;animation-timing-function:cubic-bezier(.4,0,.2,1)}47.5%{translate:0 0}52.5%{translate:0 0;animation-timing-function:cubic-bezier(.4,0,.2,1)}72.5%{translate:-.525px 0}77.5%{translate:-.525px 0;animation-timing-function:cubic-bezier(.4,0,.2,1)}97.5%{translate:0 0}100%{translate:0 0}}
@keyframes uui-status-morph-shape-8{0%{translate:0 0}2.5%{translate:0 0;animation-timing-function:cubic-bezier(.4,0,.2,1)}22.5%{translate:1.225px 1.225px}27.5%{translate:1.225px 1.225px;animation-timing-function:cubic-bezier(.4,0,.2,1)}47.5%{translate:0 0}52.5%{translate:0 0;animation-timing-function:cubic-bezier(.4,0,.2,1)}72.5%{translate:.5px .5px}77.5%{translate:.5px .5px;animation-timing-function:cubic-bezier(.4,0,.2,1)}97.5%{translate:0 0}100%{translate:0 0}}`,
        shapes: [
            { box: [5, 2.025, 2, 2], animations: ["uui-status-morph-shape-1"] },
            { box: [7.975, 2.025, 2, 2], animations: ["uui-status-morph-shape-2"] },
            { box: [7.975, 5, 2, 2], animations: ["uui-status-morph-shape-3"] },
            { box: [7.975, 7.975, 2, 2], animations: ["uui-status-morph-shape-4"] },
            { box: [5, 7.975, 2, 2], animations: ["uui-status-morph-shape-5"] },
            { box: [2.025, 7.975, 2, 2], animations: ["uui-status-morph-shape-6"] },
            { box: [2.025, 5, 2, 2], animations: ["uui-status-morph-shape-7"] },
            { box: [2.025, 2.025, 2, 2], animations: ["uui-status-morph-shape-8"] },
        ],
    },
    "morph-expand": {
        duration: 2.4,
        keyframes: `@keyframes uui-status-morph-expand-1{0%{rotate:0deg}100%{rotate:90deg}}
@keyframes uui-status-morph-expand-2{0%{translate:0 0}5%{translate:0 0;animation-timing-function:cubic-bezier(.4,0,.2,1)}45%{translate:0 2.75px}55%{translate:0 2.75px;animation-timing-function:cubic-bezier(.4,0,.2,1)}95%{translate:0 0}100%{translate:0 0}}
@keyframes uui-status-morph-expand-3{0%{translate:0 0}5%{translate:0 0;animation-timing-function:cubic-bezier(.4,0,.2,1)}45%{translate:-1.945px 1.945px}55%{translate:-1.945px 1.945px;animation-timing-function:cubic-bezier(.4,0,.2,1)}95%{translate:0 0}100%{translate:0 0}}
@keyframes uui-status-morph-expand-4{0%{translate:0 0}5%{translate:0 0;animation-timing-function:cubic-bezier(.4,0,.2,1)}45%{translate:-2.75px 0}55%{translate:-2.75px 0;animation-timing-function:cubic-bezier(.4,0,.2,1)}95%{translate:0 0}100%{translate:0 0}}
@keyframes uui-status-morph-expand-5{0%{translate:0 0}5%{translate:0 0;animation-timing-function:cubic-bezier(.4,0,.2,1)}45%{translate:-1.945px -1.945px}55%{translate:-1.945px -1.945px;animation-timing-function:cubic-bezier(.4,0,.2,1)}95%{translate:0 0}100%{translate:0 0}}
@keyframes uui-status-morph-expand-6{0%{translate:0 0}5%{translate:0 0;animation-timing-function:cubic-bezier(.4,0,.2,1)}45%{translate:0 -2.75px}55%{translate:0 -2.75px;animation-timing-function:cubic-bezier(.4,0,.2,1)}95%{translate:0 0}100%{translate:0 0}}
@keyframes uui-status-morph-expand-7{0%{translate:0 0}5%{translate:0 0;animation-timing-function:cubic-bezier(.4,0,.2,1)}45%{translate:1.945px -1.945px}55%{translate:1.945px -1.945px;animation-timing-function:cubic-bezier(.4,0,.2,1)}95%{translate:0 0}100%{translate:0 0}}
@keyframes uui-status-morph-expand-8{0%{translate:0 0}5%{translate:0 0;animation-timing-function:cubic-bezier(.4,0,.2,1)}45%{translate:2.75px 0}55%{translate:2.75px 0;animation-timing-function:cubic-bezier(.4,0,.2,1)}95%{translate:0 0}100%{translate:0 0}}
@keyframes uui-status-morph-expand-9{0%{translate:0 0}5%{translate:0 0;animation-timing-function:cubic-bezier(.4,0,.2,1)}45%{translate:1.945px 1.945px}55%{translate:1.945px 1.945px;animation-timing-function:cubic-bezier(.4,0,.2,1)}95%{translate:0 0}100%{translate:0 0}}`,
        shapes: [
            {
                box: [0, 0, 12, 12],
                animations: ["uui-status-morph-expand-1"],
                children: [
                    { box: [5, 1.5, 2, 2], animations: ["uui-status-morph-expand-2"] },
                    { box: [7.475, 2.525, 2, 2], animations: ["uui-status-morph-expand-3"] },
                    { box: [8.5, 5, 2, 2], animations: ["uui-status-morph-expand-4"] },
                    { box: [7.475, 7.475, 2, 2], animations: ["uui-status-morph-expand-5"] },
                    { box: [5, 8.5, 2, 2], animations: ["uui-status-morph-expand-6"] },
                    { box: [2.525, 7.475, 2, 2], animations: ["uui-status-morph-expand-7"] },
                    { box: [1.5, 5, 2, 2], animations: ["uui-status-morph-expand-8"] },
                    { box: [2.525, 2.525, 2, 2], animations: ["uui-status-morph-expand-9"] },
                ],
            },
        ],
    },
    "morph-unfold": {
        duration: 1.2,
        keyframes: `@keyframes uui-status-morph-unfold-1{0%{translate:0 0;animation-timing-function:cubic-bezier(.207,.581,.509,1)}40%{translate:.786px .786px}60%{translate:.786px .786px;animation-timing-function:cubic-bezier(.555,0,.532,.62)}100%{translate:-1.929px 3.5px}}
@keyframes uui-status-morph-unfold-2{0%{translate:0 0;animation-timing-function:cubic-bezier(.207,.581,.509,1)}40%{translate:0 1.111px}60%{translate:0 1.111px;animation-timing-function:cubic-bezier(.555,0,.532,.62)}100%{translate:-3.839px 1.111px}}
@keyframes uui-status-morph-unfold-3{0%{translate:0 0;animation-timing-function:cubic-bezier(.207,.581,.509,1)}40%{translate:-.786px .786px}60%{translate:-.786px .786px;animation-timing-function:cubic-bezier(.555,0,.532,.62)}100%{translate:-3.5px -1.929px}}
@keyframes uui-status-morph-unfold-4{0%{translate:0 0;animation-timing-function:cubic-bezier(.207,.581,.509,1)}40%{translate:-1.111px 0}60%{translate:-1.111px 0;animation-timing-function:cubic-bezier(.555,0,.532,.62)}100%{translate:-1.111px -3.839px}}
@keyframes uui-status-morph-unfold-5{0%{translate:0 0;animation-timing-function:cubic-bezier(.207,.581,.509,1)}40%{translate:-.786px -.786px}60%{translate:-.786px -.786px;animation-timing-function:cubic-bezier(.555,0,.532,.62)}100%{translate:1.929px -3.5px}}
@keyframes uui-status-morph-unfold-6{0%{translate:0 0;animation-timing-function:cubic-bezier(.207,.581,.509,1)}40%{translate:0 -1.111px}60%{translate:0 -1.111px;animation-timing-function:cubic-bezier(.555,0,.532,.62)}100%{translate:3.839px -1.111px}}
@keyframes uui-status-morph-unfold-7{0%{translate:0 0;animation-timing-function:cubic-bezier(.207,.581,.509,1)}40%{translate:.786px -.786px}60%{translate:.786px -.786px;animation-timing-function:cubic-bezier(.555,0,.532,.62)}100%{translate:3.5px 1.929px}}
@keyframes uui-status-morph-unfold-8{0%{translate:0 0;animation-timing-function:cubic-bezier(.207,.581,.509,1)}40%{translate:1.111px 0}60%{translate:1.111px 0;animation-timing-function:cubic-bezier(.555,0,.532,.62)}100%{translate:1.111px 3.839px}}`,
        shapes: [
            { box: [7.714, 4.214, 2, 2], animations: ["uui-status-morph-unfold-1"] },
            { box: [7.475, 6.364, 2, 2], animations: ["uui-status-morph-unfold-2"] },
            { box: [5.786, 7.714, 2, 2], animations: ["uui-status-morph-unfold-3"] },
            { box: [3.636, 7.475, 2, 2], animations: ["uui-status-morph-unfold-4"] },
            { box: [2.286, 5.786, 2, 2], animations: ["uui-status-morph-unfold-5"] },
            { box: [2.525, 3.636, 2, 2], animations: ["uui-status-morph-unfold-6"] },
            { box: [4.214, 2.286, 2, 2], animations: ["uui-status-morph-unfold-7"] },
            { box: [6.364, 2.525, 2, 2], animations: ["uui-status-morph-unfold-8"] },
        ],
    },
    "morph-transform": {
        duration: 2.4,
        keyframes: `@keyframes uui-status-morph-transform-1{0%{rotate:0deg}100%{rotate:90deg}}
@keyframes uui-status-morph-transform-2{0%{translate:0 0}5%{translate:0 0;animation-timing-function:cubic-bezier(.4,0,.2,1)}45%{translate:.725px -.725px}55%{translate:.725px -.725px;animation-timing-function:cubic-bezier(.4,0,.2,1)}95%{translate:0 0}100%{translate:0 0}}
@keyframes uui-status-morph-transform-3{0%{translate:0 0}5%{translate:0 0;animation-timing-function:cubic-bezier(.4,0,.2,1)}45%{translate:.725px .725px}55%{translate:.725px .725px;animation-timing-function:cubic-bezier(.4,0,.2,1)}95%{translate:0 0}100%{translate:0 0}}
@keyframes uui-status-morph-transform-4{0%{translate:0 0}5%{translate:0 0;animation-timing-function:cubic-bezier(.4,0,.2,1)}45%{translate:-.725px .725px}55%{translate:-.725px .725px;animation-timing-function:cubic-bezier(.4,0,.2,1)}95%{translate:0 0}100%{translate:0 0}}
@keyframes uui-status-morph-transform-5{0%{translate:0 0}5%{translate:0 0;animation-timing-function:cubic-bezier(.4,0,.2,1)}45%{translate:-.725px -.725px}55%{translate:-.725px -.725px;animation-timing-function:cubic-bezier(.4,0,.2,1)}95%{translate:0 0}100%{translate:0 0}}`,
        shapes: [
            {
                box: [0, 0, 12, 12],
                animations: ["uui-status-morph-transform-1"],
                children: [
                    { box: [5, 1.5, 2, 2] },
                    { box: [6.75, 3.25, 2, 2], animations: ["uui-status-morph-transform-2"] },
                    { box: [8.5, 5, 2, 2] },
                    { box: [6.75, 6.75, 2, 2], animations: ["uui-status-morph-transform-3"] },
                    { box: [5, 8.5, 2, 2] },
                    { box: [3.25, 6.75, 2, 2], animations: ["uui-status-morph-transform-4"] },
                    { box: [1.5, 5, 2, 2] },
                    { box: [3.25, 3.25, 2, 2], animations: ["uui-status-morph-transform-5"] },
                ],
            },
        ],
    },
    "morph-disperse": {
        duration: 2.8,
        keyframes: `@keyframes uui-status-morph-disperse-1{0%{opacity:.576;translate:0 0}11.64%{opacity:.576;translate:0 0;animation-timing-function:cubic-bezier(.4,0,.2,1)}37.65%{opacity:1;translate:4.95px 0}61.65%{opacity:1;translate:4.95px 0;animation-timing-function:cubic-bezier(.4,0,.2,1)}87.65%{opacity:.576;translate:0 0}100%{opacity:.576;translate:0 0}}
@keyframes uui-status-morph-disperse-2{0%{opacity:.4;translate:0 0}11.28%{opacity:.4;translate:0 0;animation-timing-function:cubic-bezier(.4,0,.2,1)}37.29%{opacity:1;translate:7px 0}61.29%{opacity:1;translate:7px 0;animation-timing-function:cubic-bezier(.4,0,.2,1)}87.29%{opacity:.4;translate:0 0}100%{opacity:.4;translate:0 0}}
@keyframes uui-status-morph-disperse-3{0%{opacity:.576;translate:0 0}10.94%{opacity:.576;translate:0 0;animation-timing-function:cubic-bezier(.4,0,.2,1)}36.93%{opacity:1;translate:4.95px 0}60.93%{opacity:1;translate:4.95px 0;animation-timing-function:cubic-bezier(.4,0,.2,1)}86.93%{opacity:.576;translate:0 0}100%{opacity:.576;translate:0 0}}
@keyframes uui-status-morph-disperse-4{0%{opacity:.576;translate:0 0}10.22%{opacity:.576;translate:0 0;animation-timing-function:cubic-bezier(.4,0,.2,1)}36.22%{opacity:1;translate:-4.95px 0}60.22%{opacity:1;translate:-4.95px 0;animation-timing-function:cubic-bezier(.4,0,.2,1)}86.21%{opacity:.576;translate:0 0}100%{opacity:.576;translate:0 0}}
@keyframes uui-status-morph-disperse-5{0%{opacity:.4;translate:0 0}9.86%{opacity:.4;translate:0 0;animation-timing-function:cubic-bezier(.4,0,.2,1)}35.86%{opacity:1;translate:-7px 0}59.86%{opacity:1;translate:-7px 0;animation-timing-function:cubic-bezier(.4,0,.2,1)}85.85%{opacity:.4;translate:0 0}100%{opacity:.4;translate:0 0}}
@keyframes uui-status-morph-disperse-6{0%{opacity:.576;translate:0 0}9.5%{opacity:.576;translate:0 0;animation-timing-function:cubic-bezier(.4,0,.2,1)}35.5%{opacity:1;translate:-4.95px 0}59.5%{opacity:1;translate:-4.95px 0;animation-timing-function:cubic-bezier(.4,0,.2,1)}85.51%{opacity:.576;translate:0 0}100%{opacity:.576;translate:0 0}}`,
        shapes: [
            { box: [5, 1.5, 2, 2] },
            { box: [2.525, 2.525, 2, 2], opacity: 0.576, animations: ["uui-status-morph-disperse-1"] },
            { box: [1.5, 5, 2, 2], opacity: 0.4, animations: ["uui-status-morph-disperse-2"] },
            { box: [2.525, 7.475, 2, 2], opacity: 0.576, animations: ["uui-status-morph-disperse-3"] },
            { box: [5, 8.5, 2, 2] },
            { box: [7.475, 7.475, 2, 2], opacity: 0.576, animations: ["uui-status-morph-disperse-4"] },
            { box: [8.5, 5, 2, 2], opacity: 0.4, animations: ["uui-status-morph-disperse-5"] },
            { box: [7.475, 2.525, 2, 2], opacity: 0.576, animations: ["uui-status-morph-disperse-6"] },
        ],
    },
    "lens-focus": {
        duration: 4,
        keyframes: `@keyframes uui-status-lens-focus-1{0%{opacity:.05;scale:1;animation-timing-function:cubic-bezier(.4,0,.2,1)}12%{opacity:1;scale:.893}22%{opacity:1;scale:.893;animation-timing-function:cubic-bezier(.4,0,.2,1)}38%{opacity:.3;scale:.946;animation-timing-function:cubic-bezier(.4,0,.2,1)}58%{opacity:.1;scale:.982}82%{opacity:.05;scale:1}100%{opacity:.05;scale:1}}
@keyframes uui-status-lens-focus-2{0%{opacity:.065;scale:1}7%{opacity:.05;scale:1.005}25%{opacity:.05;scale:1.005;animation-timing-function:cubic-bezier(.4,0,.2,1)}37%{opacity:1;scale:.898}47%{opacity:1;scale:.898;animation-timing-function:cubic-bezier(.4,0,.2,1)}63%{opacity:.3;scale:.951;animation-timing-function:cubic-bezier(.4,0,.2,1)}83%{opacity:.1;scale:.987}100%{opacity:.065;scale:1}}
@keyframes uui-status-lens-focus-3{0%{opacity:.125;scale:1;animation-timing-function:cubic-bezier(.241,.609,.56,1)}8%{opacity:.1;scale:1.005}32%{opacity:.05;scale:1.023}50%{opacity:.05;scale:1.023;animation-timing-function:cubic-bezier(.4,0,.2,1)}62%{opacity:1;scale:.913}72%{opacity:1;scale:.913;animation-timing-function:cubic-bezier(.4,0,.2,1)}88%{opacity:.3;scale:.968;animation-timing-function:cubic-bezier(.52,0,.432,.694)}100%{opacity:.125;scale:1}}
@keyframes uui-status-lens-focus-4{0%{opacity:.92;scale:1;animation-timing-function:cubic-bezier(.212,.296,.222,1)}13%{opacity:.3;scale:1.053;animation-timing-function:cubic-bezier(.4,0,.2,1)}33%{opacity:.1;scale:1.093}57%{opacity:.05;scale:1.112}75%{opacity:.05;scale:1.112;animation-timing-function:cubic-bezier(.4,0,.2,1)}87%{opacity:1;scale:.993}97%{opacity:1;scale:.993;animation-timing-function:cubic-bezier(.448,0,.755,.388)}100%{opacity:.92;scale:1}}`,
        shapes: [
            { box: [2.07, 2.07, 3.36, 3.36], opacity: 0.05, blur: 0.5, animations: ["uui-status-lens-focus-1"] },
            { box: [6.579, 2.079, 3.343, 3.343], opacity: 0.065, blur: 0.4854, animations: ["uui-status-lens-focus-2"] },
            { box: [6.607, 6.607, 3.285, 3.285], opacity: 0.125, blur: 0.4314, animations: ["uui-status-lens-focus-3"] },
            { box: [2.24, 6.74, 3.02, 3.02], opacity: 0.92, animations: ["uui-status-lens-focus-4"] },
        ],
    },
    "lens-revolve": {
        duration: 1.1,
        keyframes: `@keyframes uui-status-lens-revolve-1{0%{filter:blur(0)}7.51%{filter:blur(.033px)}15.01%{filter:blur(.065px)}22.52%{filter:blur(.098px)}30.02%{filter:blur(.13px)}37.48%{filter:blur(.163px)}44.99%{filter:blur(.195px)}52.49%{filter:blur(.228px)}60%{filter:blur(.26px)}67.51%{filter:blur(.292px)}75.01%{filter:blur(.325px)}82.52%{filter:blur(.352px)}90.02%{filter:blur(.38px)}97.48%{filter:blur(.407px)}100%{filter:blur(.416px)}}
@keyframes uui-status-lens-revolve-2{0%{opacity:1;scale:1;translate:0 0}7.51%{opacity:.955;scale:.982;translate:-.508px -.04px}15.01%{opacity:.91;scale:.964;translate:-1.004px -.159px}22.52%{opacity:.865;scale:.946;translate:-1.475px -.354px}30.02%{opacity:.82;scale:.928;translate:-1.91px -.621px}37.48%{opacity:.775;scale:.91;translate:-2.298px -.952px}44.99%{opacity:.73;scale:.892;translate:-2.629px -1.34px}52.49%{opacity:.685;scale:.874;translate:-2.896px -1.775px}60%{opacity:.64;scale:.856;translate:-3.091px -2.246px}67.51%{opacity:.595;scale:.838;translate:-3.21px -2.742px}75.01%{opacity:.55;scale:.82;translate:-3.25px -3.25px}82.52%{opacity:.523;scale:.804;translate:-3.21px -3.758px}90.02%{opacity:.496;scale:.788;translate:-3.091px -4.254px}97.48%{opacity:.469;scale:.772;translate:-2.896px -4.725px}100%{opacity:.46;scale:.767;translate:-2.807px -4.87px}}
@keyframes uui-status-lens-revolve-3{0%{filter:blur(.416px)}5.02%{filter:blur(.435px)}12.48%{filter:blur(.463px)}19.99%{filter:blur(.49px)}27.49%{filter:blur(.517px)}35%{filter:blur(.545px)}42.5%{filter:blur(.573px)}50.01%{filter:blur(.6px)}57.51%{filter:blur(.573px)}65.02%{filter:blur(.545px)}72.48%{filter:blur(.517px)}79.99%{filter:blur(.49px)}87.49%{filter:blur(.463px)}95%{filter:blur(.435px)}100%{filter:blur(.416px)}}
@keyframes uui-status-lens-revolve-4{0%{opacity:.46;scale:1;translate:0 0}5.02%{opacity:.442;scale:.986;translate:.178px -.29px}12.48%{opacity:.415;scale:.965;translate:.509px -.678px}19.99%{opacity:.388;scale:.944;translate:.897px -1.009px}27.49%{opacity:.361;scale:.923;translate:1.331px -1.275px}35%{opacity:.334;scale:.903;translate:1.803px -1.471px}42.5%{opacity:.307;scale:.882;translate:2.299px -1.59px}50.01%{opacity:.28;scale:.861;translate:2.807px -1.63px}57.51%{opacity:.307;scale:.882;translate:3.315px -1.59px}65.02%{opacity:.334;scale:.903;translate:3.811px -1.471px}72.48%{opacity:.361;scale:.923;translate:4.282px -1.275px}79.99%{opacity:.388;scale:.944;translate:4.717px -1.009px}87.49%{opacity:.415;scale:.965;translate:5.105px -.678px}95%{opacity:.442;scale:.986;translate:5.436px -.29px}100%{opacity:.46;scale:1;translate:5.614px 0}}
@keyframes uui-status-lens-revolve-5{0%{filter:blur(.416px)}2.49%{filter:blur(.407px)}9.99%{filter:blur(.38px)}17.5%{filter:blur(.352px)}25%{filter:blur(.325px)}32.51%{filter:blur(.292px)}40.01%{filter:blur(.26px)}47.52%{filter:blur(.228px)}54.98%{filter:blur(.195px)}62.49%{filter:blur(.163px)}69.99%{filter:blur(.13px)}77.5%{filter:blur(.098px)}85%{filter:blur(.065px)}92.51%{filter:blur(.033px)}100%{filter:blur(0)}}
@keyframes uui-status-lens-revolve-6{0%{opacity:.46;scale:1;translate:0 0}2.49%{opacity:.469;scale:1.007;translate:.089px .145px}9.99%{opacity:.496;scale:1.028;translate:.284px .616px}17.5%{opacity:.523;scale:1.049;translate:.403px 1.112px}25%{opacity:.55;scale:1.07;translate:.443px 1.62px}32.51%{opacity:.595;scale:1.093;translate:.403px 2.129px}40.01%{opacity:.64;scale:1.117;translate:.284px 2.625px}47.52%{opacity:.685;scale:1.14;translate:.089px 3.096px}54.98%{opacity:.73;scale:1.163;translate:-.178px 3.531px}62.49%{opacity:.775;scale:1.187;translate:-.509px 3.919px}69.99%{opacity:.82;scale:1.21;translate:-.897px 4.25px}77.5%{opacity:.865;scale:1.234;translate:-1.331px 4.516px}85%{opacity:.91;scale:1.257;translate:-1.803px 4.711px}92.51%{opacity:.955;scale:1.281;translate:-2.299px 4.83px}100%{opacity:1;scale:1.304;translate:-2.807px 4.87px}}`,
        shapes: [
            { box: [4.25, 7.5, 3.5, 3.5], animations: ["uui-status-lens-revolve-2"], blurAnimations: ["uui-status-lens-revolve-1"] },
            {
                box: [1.851, 3.038, 2.683, 2.683],
                opacity: 0.46,
                blur: 0.4167,
                animations: ["uui-status-lens-revolve-4"],
                blurAnimations: ["uui-status-lens-revolve-3"],
            },
            {
                box: [7.465, 3.038, 2.683, 2.683],
                opacity: 0.46,
                blur: 0.4167,
                animations: ["uui-status-lens-revolve-6"],
                blurAnimations: ["uui-status-lens-revolve-5"],
            },
        ],
    },
    "lens-bloom": {
        duration: 1.4,
        keyframes: `@keyframes uui-status-lens-bloom-1{0%{filter:blur(0)}12%{filter:blur(0);animation-timing-function:cubic-bezier(.16,1,.3,1)}66%{filter:blur(.45px)}100%{filter:blur(.592px)}}
@keyframes uui-status-lens-bloom-2{0%{opacity:1;scale:1}12%{opacity:1;scale:1.063;animation-timing-function:cubic-bezier(.16,1,.3,1)}66%{opacity:.1;scale:2.214}100%{opacity:.043;scale:2.967}}
@keyframes uui-status-lens-bloom-3{0%{filter:blur(.592px)}25.99%{filter:blur(.7px)}100%{filter:blur(.7px)}}
@keyframes uui-status-lens-bloom-4{0%{opacity:.043;scale:1}25.99%{opacity:0;scale:1.194}100%{opacity:0;scale:1.194}}
@keyframes uui-status-lens-bloom-5{0%{filter:blur(.7px)}39.98%{filter:blur(.7px)}40.01%{filter:blur(0)}100%{filter:blur(0)}}
@keyframes uui-status-lens-bloom-6{0%{opacity:0}40.01%{opacity:0;animation-timing-function:cubic-bezier(0,0,.2,1)}64.01%{opacity:1}100%{opacity:1}}
@keyframes uui-status-lens-bloom-7{0%{scale:1}39.98%{scale:1}40.01%{scale:.146;animation-timing-function:cubic-bezier(0,0,.2,1)}64.01%{scale:.229}100%{scale:.282}}`,
        shapes: [
            { box: [4.814, 4.814, 2.371, 2.371], animations: ["uui-status-lens-bloom-2"], blurAnimations: ["uui-status-lens-bloom-1"] },
            {
                box: [2.483, 2.483, 7.035, 7.035],
                opacity: 0.043,
                blur: 0.5917,
                animations: ["uui-status-lens-bloom-4"],
                blurAnimations: ["uui-status-lens-bloom-3"],
            },
            {
                box: [1.8, 1.8, 8.4, 8.4],
                opacity: 0,
                blur: 0.7,
                animations: ["uui-status-lens-bloom-6", "uui-status-lens-bloom-7"],
                blurAnimations: ["uui-status-lens-bloom-5"],
            },
        ],
    },
    "lens-converge": {
        duration: 3.6,
        keyframes: `@keyframes uui-status-lens-converge-1{0%{scale:1;translate:0 0}10%{scale:1;translate:0 0;animation-timing-function:cubic-bezier(.55,0,1,.45)}22%{scale:.72;translate:1.075px 1.875px;animation-timing-function:cubic-bezier(.33,1,.68,1)}33%{scale:1;translate:2.15px 3.75px}43%{scale:1;translate:2.15px 3.75px;animation-timing-function:cubic-bezier(.55,0,1,.45)}55%{scale:.72;translate:0 3.75px;animation-timing-function:cubic-bezier(.33,1,.68,1)}66%{scale:1;translate:-2.15px 3.75px}77%{scale:1;translate:-2.15px 3.75px;animation-timing-function:cubic-bezier(.55,0,1,.45)}88%{scale:.72;translate:-1.075px 1.875px;animation-timing-function:cubic-bezier(.33,1,.68,1)}100%{scale:1;translate:0 0}}
@keyframes uui-status-lens-converge-2{0%{opacity:.16;scale:1;animation-timing-function:ease-in-out}50%{opacity:.32;scale:.817;animation-timing-function:ease-in-out}100%{opacity:.16;scale:1}}`,
        shapes: [
            { box: [4.25, 1.75, 3.5, 3.5], animations: ["uui-status-lens-converge-1"] },
            { box: [3.9, 3.9, 4.2, 4.2], opacity: 0.16, blur: 0.6, animations: ["uui-status-lens-converge-2"] },
        ],
    },
    "lens-handoff": {
        duration: 2.8,
        keyframes: `@keyframes uui-status-lens-handoff-1{0%{filter:blur(.6px);animation-timing-function:cubic-bezier(.33,1,.68,1)}21.99%{filter:blur(0)}51.99%{filter:blur(0);animation-timing-function:cubic-bezier(.33,1,.68,1)}69.99%{filter:blur(.6px)}100%{filter:blur(.6px)}}
@keyframes uui-status-lens-handoff-2{0%{opacity:0;scale:1;animation-timing-function:cubic-bezier(.33,1,.68,1)}21.99%{opacity:1;scale:1.818}51.99%{opacity:1;scale:1.818;animation-timing-function:cubic-bezier(.33,1,.68,1)}69.99%{opacity:0;scale:1}100%{opacity:0;scale:1}}
@keyframes uui-status-lens-handoff-3{0%{translate:0 0;animation-timing-function:cubic-bezier(.33,1,.68,1)}21.99%{translate:5px 0}36.99%{translate:5.5px 0}51.99%{translate:6px 0;animation-timing-function:cubic-bezier(.33,1,.68,1)}69.99%{translate:11px 0}100%{translate:11px 0}}
@keyframes uui-status-lens-handoff-4{0%{filter:blur(.6px)}50.01%{filter:blur(.4px)}100%{filter:blur(.6px)}}
@keyframes uui-status-lens-handoff-5{0%{opacity:.16;scale:1}50.01%{opacity:.32;scale:.817}100%{opacity:.16;scale:1}}
@keyframes uui-status-lens-handoff-6{0%{filter:blur(0)}2.01%{filter:blur(0);animation-timing-function:cubic-bezier(.33,1,.68,1)}20.01%{filter:blur(.6px)}50.01%{filter:blur(.6px);animation-timing-function:cubic-bezier(.33,1,.68,1)}72%{filter:blur(0)}100%{filter:blur(0)}}
@keyframes uui-status-lens-handoff-7{0%{opacity:1;scale:1}2.01%{opacity:1;scale:1;animation-timing-function:cubic-bezier(.33,1,.68,1)}20.01%{opacity:0;scale:.55}50.01%{opacity:0;scale:.55;animation-timing-function:cubic-bezier(.33,1,.68,1)}72%{opacity:1;scale:1}100%{opacity:1;scale:1}}
@keyframes uui-status-lens-handoff-8{0%{translate:0 0}2.01%{translate:.067px 0;animation-timing-function:cubic-bezier(.33,1,.68,1)}20.01%{translate:5.067px 0}49.99%{translate:5.067px 0}50.01%{translate:-5.933px 0;animation-timing-function:cubic-bezier(.33,1,.68,1)}72%{translate:-.933px 0}87%{translate:-.433px 0}100%{translate:0 0}}`,
        shapes: [
            {
                box: [-0.463, 5.037, 1.925, 1.925],
                opacity: 0,
                blur: 0.6,
                animations: ["uui-status-lens-handoff-2", "uui-status-lens-handoff-3"],
                blurAnimations: ["uui-status-lens-handoff-1"],
            },
            { box: [3.9, 3.9, 4.2, 4.2], opacity: 0.16, blur: 0.6, animations: ["uui-status-lens-handoff-5"], blurAnimations: ["uui-status-lens-handoff-4"] },
            {
                box: [4.683, 4.25, 3.5, 3.5],
                animations: ["uui-status-lens-handoff-7", "uui-status-lens-handoff-8"],
                blurAnimations: ["uui-status-lens-handoff-6"],
            },
        ],
    },
    typing: {
        duration: 1.2,
        keyframes: `@keyframes uui-status-typing-1{0%{opacity:1;translate:0 0;animation-timing-function:cubic-bezier(.66,0,.34,1)}23%{opacity:.2;translate:0 2px}78%{opacity:.2;translate:0 2px;animation-timing-function:cubic-bezier(.66,0,.34,1)}100%{opacity:1;translate:0 0}}
@keyframes uui-status-typing-2{0%{opacity:.703;translate:0 0;animation-timing-function:cubic-bezier(.168,.54,.4,1)}10%{opacity:1;translate:0 -.743px;animation-timing-function:cubic-bezier(.66,0,.34,1)}33%{opacity:.2;translate:0 1.257px}88%{opacity:.2;translate:0 1.257px;animation-timing-function:cubic-bezier(.71,0,.801,.547)}100%{opacity:.703;translate:0 0}}
@keyframes uui-status-typing-3{0%{opacity:.206;translate:0 0;animation-timing-function:cubic-bezier(.594,.09,.31,1)}20%{opacity:1;translate:0 -1.986px;animation-timing-function:cubic-bezier(.66,0,.34,1)}43%{opacity:.2;translate:0 .014px}98%{opacity:.2;translate:0 .014px;animation-timing-function:cubic-bezier(.359,0,.691,.345)}100%{opacity:.206;translate:0 0}}`,
        shapes: [
            { box: [2, 3, 2, 2], animations: ["uui-status-typing-1"] },
            { box: [5, 3.743, 2, 2], opacity: 0.703, animations: ["uui-status-typing-2"] },
            { box: [8, 4.986, 2, 2], opacity: 0.206, animations: ["uui-status-typing-3"] },
        ],
    },
    waveform: {
        duration: 1.2,
        keyframes: `@keyframes uui-status-waveform-1{0%{height:8.363px;opacity:.996;translate:0 0;animation-timing-function:cubic-bezier(.311,.656,.644,1)}2.52%{height:8.4px;opacity:1;translate:0 -.019px;animation-timing-function:cubic-bezier(.66,0,.34,1)}32.52%{height:2.1px;opacity:.35;translate:0 3.131px}72.52%{height:2.1px;opacity:.35;translate:0 3.131px;animation-timing-function:cubic-bezier(.688,0,.4,.917)}100%{height:8.363px;opacity:.996;translate:0 0}}
@keyframes uui-status-waveform-2{0%{height:6.628px;opacity:.817;translate:0 0;animation-timing-function:cubic-bezier(.18,.565,.446,1)}12.52%{height:8.4px;opacity:1;translate:0 -.886px;animation-timing-function:cubic-bezier(.66,0,.34,1)}42.52%{height:2.1px;opacity:.35;translate:0 2.264px}82.52%{height:2.1px;opacity:.35;translate:0 2.264px;animation-timing-function:cubic-bezier(.736,0,.761,.588)}100%{height:6.628px;opacity:.817;translate:0 0}}
@keyframes uui-status-waveform-3{0%{height:2.534px;opacity:.395;translate:0 0;animation-timing-function:cubic-bezier(.443,.243,.261,1)}22.52%{height:8.4px;opacity:1;translate:0 -2.933px;animation-timing-function:cubic-bezier(.66,0,.34,1)}52.52%{height:2.1px;opacity:.35;translate:0 .217px}92.52%{height:2.1px;opacity:.35;translate:0 .217px;animation-timing-function:cubic-bezier(.423,0,.746,.373)}100%{height:2.534px;opacity:.395;translate:0 0}}
@keyframes uui-status-waveform-4{0%{height:2.1px;opacity:.35;translate:0 0}2.52%{height:2.1px;opacity:.35;translate:0 0;animation-timing-function:cubic-bezier(.66,0,.34,1)}32.52%{height:8.4px;opacity:1;translate:0 -3.15px;animation-timing-function:cubic-bezier(.66,0,.34,1)}62.52%{height:2.1px;opacity:.35;translate:0 0}100%{height:2.1px;opacity:.35;translate:0 0}}`,
        shapes: [
            { box: [1.25, 1.819, 1.5, 8.363], bar: true, opacity: 0.996, animations: ["uui-status-waveform-1"] },
            { box: [4, 2.686, 1.5, 6.628], bar: true, opacity: 0.817, animations: ["uui-status-waveform-2"] },
            { box: [6.75, 4.733, 1.5, 2.534], bar: true, opacity: 0.395, animations: ["uui-status-waveform-3"] },
            { box: [9.5, 4.95, 1.5, 2.1], bar: true, opacity: 0.35, animations: ["uui-status-waveform-4"] },
        ],
    },
    listening: {
        duration: 0.9,
        keyframes: `@keyframes uui-status-listening-1{0%{opacity:1;scale:1;animation-timing-function:cubic-bezier(.66,0,.34,1)}50.03%{opacity:.55;scale:.818;animation-timing-function:cubic-bezier(.66,0,.34,1)}100%{opacity:1;scale:1}}
@keyframes uui-status-listening-2{0%{stroke-width:1px;r:1.5px;opacity:.9;scale:1;animation-timing-function:cubic-bezier(.291,.689,.512,.921)}100%{stroke-width:.423px;r:1.788px;opacity:.035;scale:2.442}}
@keyframes uui-status-listening-3{0%{stroke-width:.423px;r:4.673px;opacity:.035;scale:1;animation-timing-function:cubic-bezier(.22,1,.36,1)}100%{stroke-width:.4px;r:4.684px;opacity:0;scale:1.024}}`,
        shapes: [
            { box: [4.9, 4.9, 2.2, 2.2], animations: ["uui-status-listening-1"] },
            { box: [4, 4, 4, 4], opacity: 0.9, ring: 1, animations: ["uui-status-listening-2"] },
            { box: [1.116, 1.116, 9.768, 9.768], opacity: 0.035, ring: 0.4232, animations: ["uui-status-listening-3"] },
        ],
    },
    idle: {
        duration: 2.4,
        keyframes: `@keyframes uui-status-idle-1{0%{opacity:.14;scale:1;animation-timing-function:cubic-bezier(.66,0,.34,1)}50%{opacity:.3;scale:1.174;animation-timing-function:cubic-bezier(.66,0,.34,1)}100%{opacity:.14;scale:1}}
@keyframes uui-status-idle-2{0%{opacity:1;scale:1;animation-timing-function:cubic-bezier(.66,0,.34,1)}50%{opacity:.45;scale:.708;animation-timing-function:cubic-bezier(.66,0,.34,1)}100%{opacity:1;scale:1}}`,
        shapes: [
            { box: [2.32, 2.32, 7.36, 7.36], opacity: 0.14, ring: 1, animations: ["uui-status-idle-1"] },
            { box: [4.2, 4.2, 3.6, 3.6], animations: ["uui-status-idle-2"] },
        ],
    },
    thinking: {
        duration: 1.8,
        keyframes: `@keyframes uui-status-thinking-1{0%{rotate:0deg}100%{rotate:360deg}}`,
        shapes: [
            {
                box: [0, 0, 12, 12],
                animations: ["uui-status-thinking-1"],
                children: [{ box: [5, 1.8, 2, 2] }, { box: [7.771, 6.6, 2, 2], opacity: 0.55 }, { box: [2.229, 6.6, 2, 2], opacity: 0.28 }],
            },
        ],
    },
    uploading: {
        duration: 1.2,
        keyframes: `@keyframes uui-status-uploading-1{0%{opacity:1;translate:0 0;animation-timing-function:cubic-bezier(.66,0,.34,1)}23%{opacity:.2;translate:0 1.2px}78%{opacity:.2;translate:0 1.2px;animation-timing-function:cubic-bezier(.66,0,.34,1)}100%{opacity:1;translate:0 0}}
@keyframes uui-status-uploading-2{0%{opacity:.452;translate:0 0;animation-timing-function:cubic-bezier(.222,.428,.273,1)}12.52%{opacity:1;translate:0 -.822px;animation-timing-function:cubic-bezier(.66,0,.34,1)}35.52%{opacity:.2;translate:0 .378px}90.52%{opacity:.2;translate:0 .378px;animation-timing-function:cubic-bezier(.572,0,.826,.444)}100%{opacity:.452;translate:0 0}}
@keyframes uui-status-uploading-3{0%{opacity:.2;translate:0 0}3%{opacity:.2;translate:0 0;animation-timing-function:cubic-bezier(.66,0,.34,1)}25%{opacity:1;translate:0 -1.2px;animation-timing-function:cubic-bezier(.66,0,.34,1)}48%{opacity:.2;translate:0 0}100%{opacity:.2;translate:0 0}}`,
        shapes: [
            { box: [5, 7.3, 2, 2], animations: ["uui-status-uploading-1"] },
            { box: [5, 4.622, 2, 2], opacity: 0.452, animations: ["uui-status-uploading-2"] },
            { box: [5, 1.5, 2, 2], opacity: 0.2, animations: ["uui-status-uploading-3"] },
        ],
    },
    downloading: {
        duration: 1.2,
        keyframes: `@keyframes uui-status-downloading-1{0%{opacity:1;translate:0 0;animation-timing-function:cubic-bezier(.66,0,.34,1)}23%{opacity:.2;translate:0 -1.2px}78%{opacity:.2;translate:0 -1.2px;animation-timing-function:cubic-bezier(.66,0,.34,1)}100%{opacity:1;translate:0 0}}
@keyframes uui-status-downloading-2{0%{opacity:.452;translate:0 0;animation-timing-function:cubic-bezier(.222,.428,.273,1)}12.52%{opacity:1;translate:0 .822px;animation-timing-function:cubic-bezier(.66,0,.34,1)}35.52%{opacity:.2;translate:0 -.378px}90.52%{opacity:.2;translate:0 -.378px;animation-timing-function:cubic-bezier(.572,0,.826,.444)}100%{opacity:.452;translate:0 0}}
@keyframes uui-status-downloading-3{0%{opacity:.2;translate:0 0}3%{opacity:.2;translate:0 0;animation-timing-function:cubic-bezier(.66,0,.34,1)}25%{opacity:1;translate:0 1.2px;animation-timing-function:cubic-bezier(.66,0,.34,1)}48%{opacity:.2;translate:0 0}100%{opacity:.2;translate:0 0}}`,
        shapes: [
            { box: [5, 2.7, 2, 2], animations: ["uui-status-downloading-1"] },
            { box: [5, 5.378, 2, 2], opacity: 0.452, animations: ["uui-status-downloading-2"] },
            { box: [5, 8.5, 2, 2], opacity: 0.2, animations: ["uui-status-downloading-3"] },
        ],
    },
    connecting: {
        duration: 1.6,
        keyframes: `@keyframes uui-status-connecting-1{0%{opacity:.299;animation-timing-function:cubic-bezier(.285,.644,.615,1)}5.01%{opacity:.28}50.01%{opacity:.28}75%{opacity:1;animation-timing-function:cubic-bezier(.715,0,.472,.837)}100%{opacity:.299}}
@keyframes uui-status-connecting-2{0%{opacity:.28}24.99%{opacity:1;animation-timing-function:cubic-bezier(.66,0,.34,1)}54.99%{opacity:.28}100%{opacity:.28}}
@keyframes uui-status-connecting-3{0%{opacity:1}20.01%{opacity:1}30%{opacity:0}75%{opacity:0}84.99%{opacity:1}100%{opacity:1}}
@keyframes uui-status-connecting-4{0%{translate:0 0;animation-timing-function:cubic-bezier(.18,.551,.46,1)}20.01%{translate:1.726px 0}30%{translate:1.726px 0}75%{translate:-3.474px 0}84.99%{translate:-3.474px 0;animation-timing-function:cubic-bezier(.573,0,.618,.564)}100%{translate:0 0}}`,
        shapes: [
            { box: [1, 5, 2, 2], opacity: 0.299, animations: ["uui-status-connecting-1"] },
            { box: [9, 5, 2, 2], opacity: 0.28, animations: ["uui-status-connecting-2"] },
            { box: [5.874, 5, 2, 2], animations: ["uui-status-connecting-3", "uui-status-connecting-4"] },
        ],
    },
    embedding: {
        duration: 2,
        keyframes: `@keyframes uui-status-embedding-1{0%{opacity:1;scale:1;translate:0 0}55.01%{opacity:1;scale:.8;translate:0 -2.1px}94.99%{opacity:0;scale:.55;translate:0 -3.8px}100%{opacity:0;scale:.55;translate:0 -3.8px}}
@keyframes uui-status-embedding-2{0%{opacity:1}38.33%{opacity:1}78.34%{opacity:0}83.33%{opacity:1}100%{opacity:1}}
@keyframes uui-status-embedding-3{0%{scale:1;translate:0 0}38.33%{scale:.852;translate:1.268px -.732px}78.34%{scale:.585;translate:2.74px -1.582px}83.33%{scale:1.065;translate:-.551px .318px}100%{scale:1;translate:0 0}}
@keyframes uui-status-embedding-4{0%{opacity:.606}21.67%{opacity:1}61.66%{opacity:0}66.67%{opacity:1}100%{opacity:1}}
@keyframes uui-status-embedding-5{0%{scale:1;translate:0 0}21.67%{scale:1.14;translate:-.58px -.335px}61.66%{scale:.784;translate:.892px .515px}66.67%{scale:1.425;translate:-2.399px -1.385px}100%{scale:1.253;translate:-1.296px -.748px}}
@keyframes uui-status-embedding-6{0%{opacity:1}4.99%{opacity:1}45%{opacity:0}49.99%{opacity:1}100%{opacity:1}}
@keyframes uui-status-embedding-7{0%{scale:1;translate:0 0}4.99%{scale:.978;translate:0 .191px}45%{scale:.672;translate:0 1.891px}49.99%{scale:1.222;translate:0 -1.909px}100%{scale:1;translate:0 0}}
@keyframes uui-status-embedding-8{0%{opacity:.708;scale:1;translate:0 0}28.34%{opacity:0;scale:.756;translate:-1.043px .602px}33.34%{opacity:1;scale:1.375;translate:2.248px -1.298px}88.34%{opacity:1;scale:1.1;translate:.429px -.248px}100%{opacity:.708;scale:1;translate:0 0}}
@keyframes uui-status-embedding-9{0%{opacity:.292;scale:1;translate:0 0}11.66%{opacity:0;scale:.883;translate:-.429px -.248px}16.66%{opacity:1;scale:1.605;translate:2.861px 1.652px}71.66%{opacity:1;scale:1.284;translate:1.043px .602px}100%{opacity:.292;scale:1;translate:0 0}}`,
        shapes: [
            { box: [5, 3.8, 2, 2], animations: ["uui-status-embedding-1"] },
            { box: [6.651, 4.142, 1.879, 1.879], animations: ["uui-status-embedding-2", "uui-status-embedding-3"] },
            { box: [8.736, 7.283, 1.403, 1.403], opacity: 0.606, animations: ["uui-status-embedding-4", "uui-status-embedding-5"] },
            { box: [5.182, 8.291, 1.636, 1.636], animations: ["uui-status-embedding-6", "uui-status-embedding-7"] },
            { box: [1.986, 7.171, 1.454, 1.454], opacity: 0.708, animations: ["uui-status-embedding-8"] },
            { box: [1.476, 3.125, 1.246, 1.246], opacity: 0.292, animations: ["uui-status-embedding-9"] },
        ],
    },
    generating: {
        duration: 1.8,
        keyframes: `@keyframes uui-status-generating-1{0%{opacity:1}25.01%{opacity:1;animation-timing-function:cubic-bezier(.4,0,.2,1)}37.01%{opacity:.15}75.01%{opacity:.15;animation-timing-function:cubic-bezier(.4,0,.2,1)}80%{opacity:1}100%{opacity:1}}
@keyframes uui-status-generating-2{0%{opacity:1}30%{opacity:1;animation-timing-function:cubic-bezier(.4,0,.2,1)}42%{opacity:.15}80%{opacity:.15;animation-timing-function:cubic-bezier(.4,0,.2,1)}85.01%{opacity:1}100%{opacity:1}}
@keyframes uui-status-generating-3{0%{opacity:1}35.01%{opacity:1;animation-timing-function:cubic-bezier(.4,0,.2,1)}47.01%{opacity:.15}85.01%{opacity:.15;animation-timing-function:cubic-bezier(.4,0,.2,1)}90%{opacity:1}100%{opacity:1}}
@keyframes uui-status-generating-4{0%{opacity:1}40%{opacity:1;animation-timing-function:cubic-bezier(.4,0,.2,1)}52%{opacity:.15}90%{opacity:.15;animation-timing-function:cubic-bezier(.4,0,.2,1)}95.01%{opacity:1}100%{opacity:1}}
@keyframes uui-status-generating-5{0%{opacity:1}45.01%{opacity:1;animation-timing-function:cubic-bezier(.4,0,.2,1)}57.01%{opacity:.15}95.01%{opacity:.15;animation-timing-function:cubic-bezier(.4,0,.2,1)}100%{opacity:1}}
@keyframes uui-status-generating-6{0%{opacity:.15;animation-timing-function:cubic-bezier(.4,0,.2,1)}5.01%{opacity:1}50%{opacity:1;animation-timing-function:cubic-bezier(.4,0,.2,1)}62%{opacity:.15}100%{opacity:.15}}
@keyframes uui-status-generating-7{0%{opacity:.15}5.01%{opacity:.15;animation-timing-function:cubic-bezier(.4,0,.2,1)}10%{opacity:1}55.01%{opacity:1;animation-timing-function:cubic-bezier(.4,0,.2,1)}66.99%{opacity:.15}100%{opacity:.15}}
@keyframes uui-status-generating-8{0%{opacity:.15}10%{opacity:.15;animation-timing-function:cubic-bezier(.4,0,.2,1)}15.01%{opacity:1}60%{opacity:1;animation-timing-function:cubic-bezier(.4,0,.2,1)}72%{opacity:.15}100%{opacity:.15}}
@keyframes uui-status-generating-9{0%{opacity:.15}15.01%{opacity:.15;animation-timing-function:cubic-bezier(.4,0,.2,1)}20%{opacity:1}65.01%{opacity:1;animation-timing-function:cubic-bezier(.4,0,.2,1)}77.01%{opacity:.15}100%{opacity:.15}}`,
        shapes: [
            { box: [1, 1, 2, 2], animations: ["uui-status-generating-1"] },
            { box: [5, 1, 2, 2], animations: ["uui-status-generating-2"] },
            { box: [9, 1, 2, 2], animations: ["uui-status-generating-3"] },
            { box: [1, 5, 2, 2], animations: ["uui-status-generating-4"] },
            { box: [5, 5, 2, 2], animations: ["uui-status-generating-5"] },
            { box: [9, 5, 2, 2], opacity: 0.15, animations: ["uui-status-generating-6"] },
            { box: [1, 9, 2, 2], opacity: 0.15, animations: ["uui-status-generating-7"] },
            { box: [5, 9, 2, 2], opacity: 0.15, animations: ["uui-status-generating-8"] },
            { box: [9, 9, 2, 2], opacity: 0.15, animations: ["uui-status-generating-9"] },
        ],
    },
} satisfies Record<string, AnimatedStatusIcon>;
