import { RenderFunction } from '@storybook/react';
import * as React from 'react';

declare module '@storybook/addon-knobs' {
    export interface IKnobOption<T> {
        value: T;
        type: 'text' | 'boolean' | 'number' | 'color' | 'object' | 'select' | 'date';
    }

    export interface IStoryContext {
        kind: string;
        story: string;
    }

    export interface INumberOptions {
        range: boolean;
        min: number;
        max: number;
        step: number;
    }

    export function knob<T>(name: string, options: IKnobOption<T>): T;

    export function text(name: string, value: string | null): string;

    export function boolean(name: string, value: boolean): boolean;

    export function number(name: string, value: number, options?: INumberOptions): number;

    export function color(name: string, value: string): string;

    export function object<T>(name: string, value: T): T;

    export function select<T extends string>(name: string, options: { [s: string]: string }, value: T): T;
    export function select<T extends number>(name: string, options: { [s: number]: string }, value: T): T;
    export function select<T extends SelectValue>(name: string, options: T[], value: T): T;

    export function date(name: string, value?: Date): Date;

    export function array<T>(name: string, value: T[], separator?: string): T[];

    export function button(name: string, handler: () => any): void;

    export interface IWrapStoryProps {
        context?: object;
        storyFn?: RenderFunction;
        channel?: object;
        knobStore?: object;
        initialContent?: object;
    }

    export function withKnobs(storyFn: RenderFunction, context: IStoryContext): React.ReactElement<IWrapStoryProps>;
    export function withKnobsOptions(options: { debounce: boolean, timestamps: boolean }): (storyFn: RenderFunction, context: IStoryContext) => React.ReactElement<IWrapStoryProps>;
}