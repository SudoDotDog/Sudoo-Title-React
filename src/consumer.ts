/**
 * @author WMXPY
 * @namespace TitleReact
 * @description Consumer
 */

import { InternationalizationContext, InternationalizationContextValue } from "@sudoo/internationalization-react";
import * as React from "react";

export const withInternationalizationUseTitle = (Component: React.ComponentType): React.FC => {

    return (originalProps: any) => {

        return React.createElement(
            InternationalizationContext.Consumer,
            undefined,
            (value: InternationalizationContextValue) => {

                return React.createElement(Component, {
                    ...originalProps,
                    locale: value.locale,
                });
            },
        );
    };
};
