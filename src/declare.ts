/**
 * @author WMXPY
 * @namespace TitleReact
 * @description Declare
 */

export type UseTitleFunction = (...newTitleArgs: string[]) => ResetTitleFunction;

export type ResetTitleFunction = (...newTitleArgs: string[]) => void;
