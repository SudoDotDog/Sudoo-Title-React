/**
 * @author WMXPY
 * @namespace TitleReact
 * @description Title
 */

import { LOCALE } from "@sudoo/internationalization";
import { Title } from "@sudoo/title";
import * as React from "react";

export type ResetTitleFunction = (...newTitleArgs: string[]) => void;

export const buildUseTitle = (title: Title, locale: LOCALE) => {

    return (...titleArgs: string[]): ResetTitleFunction => {

        React.useEffect(() => {

            if (titleArgs.length > 0) {

                title.setTitle(...titleArgs);
            }

            return () => {

                title.restoreTitle();
            };
        }, [
            locale,
        ]);

        return (...newTitleArgs: string[]) => {

            title.setTitle(...newTitleArgs);
        };
    };
};
