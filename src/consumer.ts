/**
 * @author WMXPY
 * @namespace TitleReact
 * @description Consumer
 */

import { LOCALE } from "@sudoo/internationalization";
import { InternationalizationContext, InternationalizationContextValue } from "@sudoo/internationalization-react";
import { Title } from "@sudoo/title";
import * as React from "react";

export const withInternationalizedTitle = (
    Component: React.ComponentType,
    titleRecord: Partial<Record<LOCALE, Title>>,
    defaultLocale: LOCALE = LOCALE.ENGLISH_UNITED_STATES,
): React.FC => {

    return (originalProps: any) => {

        return React.createElement(
            InternationalizationContext.Consumer,
            undefined,
            (value: InternationalizationContextValue) => {

                let title: Title | undefined = titleRecord[value.locale];
                if (!title) {

                    title = titleRecord[defaultLocale] as Title;
                }

                return React.createElement(Component, {

                    ...originalProps,
                    title,
                });
            },
        );
    };
};
