/**
 * @author WMXPY
 * @namespace TitleReact
 * @description Consumer
 */

import { LOCALE } from "@sudoo/internationalization";
import { InternationalizationContext, InternationalizationContextValue } from "@sudoo/internationalization-react";
import { Title } from "@sudoo/title";
import * as React from "react";

export type WithInternationalizedTitleProps = {

    readonly title: Title;
};

export const withInternationalizedTitle = <P extends WithInternationalizedTitleProps>(
    Component: React.ComponentType<P>,
    titleRecord: Partial<Record<LOCALE, Title>>,
    defaultLocale: LOCALE = LOCALE.ENGLISH_UNITED_STATES,
): React.ComponentType<Omit<P, keyof WithInternationalizedTitleProps>> & {
    WrappedComponent: React.ComponentType<P>;
} => {

    const component: React.ComponentType<Omit<P, keyof WithInternationalizedTitleProps>> & {
        WrappedComponent: React.ComponentType<P>;
    } = (originalProps: any) => {

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

    component.WrappedComponent = Component;
    return component;
};
