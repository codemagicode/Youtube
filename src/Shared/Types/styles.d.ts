import { CSSProperties } from "react";

type Styles = Record<string, CSSProperties>

type FullStyles = Record<string, Styles>

type SceneStyles<T> = Record<keyof T, Record<string, CSSProperties>>