/**
 * @author WMXPY
 * @namespace TitleReact
 * @description Consumer
 */

import { LOCALE } from "@sudoo/internationalization";
import { InternationalizationContext, InternationalizationContextValue } from "@sudoo/internationalization-react";
import { Title } from "@sudoo/title";
import * as React from "react";

export const withInternationalizationUseTitle = (Component: React.ComponentType, titleRecord: Partial<Record<LOCALE, Title>>): React.FC => {

    return (originalProps: any) => {

        return React.createElement(
            InternationalizationContext.Consumer,
            undefined,
            (value: InternationalizationContextValue) => {

                const title: Title = titleRecord[value.locale];

                return React.createElement(Component, {

                    ...originalProps,
                    title,
                });
            },
        );
    };
};
