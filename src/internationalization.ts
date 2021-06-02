/**
 * @author WMXPY
 * @namespace TitleReact
 * @description Internationalization
 */

import { LOCALE } from "@sudoo/internationalization";
import { useLocale } from "@sudoo/internationalization-react";
import { Title } from "@sudoo/title";
import { ResetTitleFunction, UseTitleFunction } from "./declare";
import { buildUseTitle } from "./title";

export const buildInternationalizationUseTitle = (
    titleRecord: Partial<Record<LOCALE, Title>>,
    useLocaleFunction: () => LOCALE = useLocale,
    defaultLocale: LOCALE = LOCALE.ENGLISH_UNITED_STATES,
): UseTitleFunction => {

    const cachedUseTitle: Partial<Record<LOCALE, UseTitleFunction>> = {};

    const getUseTitle = (locale: LOCALE): UseTitleFunction => {

        if (cachedUseTitle[locale]) {

            return cachedUseTitle[locale] as UseTitleFunction;
        }

        let title: Title | undefined = titleRecord[locale];
        if (!title) {

            title = titleRecord[defaultLocale] as Title;
        }

        const built: UseTitleFunction = buildUseTitle(title, locale);
        cachedUseTitle[locale] = built;

        return built;
    };

    return (...titleArgs: string[]): ResetTitleFunction => {

        const locale: LOCALE = useLocaleFunction();
        const useTitleFunction = getUseTitle(locale);
        return useTitleFunction(...titleArgs);
    };
};
