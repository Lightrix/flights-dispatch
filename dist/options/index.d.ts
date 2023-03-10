/// <reference types="node" resolution-mode="require"/>
export type optionDebug = 0 | 1 | 2;
export type optionInfo = string;
export interface commands {
    fulfilled?: boolean | ((plan: optionCommandsPlan) => Promise<false | string>);
    failed?: boolean | ((inputPath: optionCommandsFlight) => Promise<false | string>);
    accomplished?: boolean | ((ongoing: optionCommandsFlight) => Promise<false | string>);
    changed?: (plan: optionCommandsPlan) => Promise<optionCommandsPlan>;
    passed?: (ongoing: optionCommandsFlight) => Promise<boolean>;
}
export type optionExclude = string | RegExp | ((file: string) => boolean);
export type optionPath = string | URL | Map<string | URL, string | URL> | false;
export interface Options {
    [key: string]: unknown;
    path?: optionPath | optionPath[] | Set<optionPath>;
    exclude?: optionExclude | optionExclude[] | Set<optionExclude>;
    dispatch?: commands;
    logger?: optionDebug;
}
export interface optionCommandsPlan {
    debug: optionDebug;
    flights: number;
    info: unknown;
    results: Map<string, string>;
    ongoing: optionCommandsFlight;
}
export interface optionCommandsFlight {
    destination: optionInfo;
}
declare const _default: {
    logger: 2;
    dispatch: {
        passed: () => Promise<true>;
        changed: (plan: optionCommandsPlan) => Promise<optionCommandsPlan>;
    };
};
export default _default;
