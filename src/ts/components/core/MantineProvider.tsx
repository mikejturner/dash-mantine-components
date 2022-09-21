import React from "react";
import { MantineProvider as MantineMantineProvider } from "@mantine/core";

type Props = {
    /** Theme */
    theme?: object;
    /** Normalize CSS */
    withNormalizeCSS?: boolean;
    /** With global styles */
    withGlobalStyles?: boolean;
    /** With css variables */
    withCSSVariables?: boolean;
    /** Children */
    children?: React.ReactNode;
    /** Inherit from one level up MantineProvider */
    inherit?: boolean;
    /** Styles */
    styles?: object;
};

/**
 * Indicate loading state. For more information, see: https://mantine.dev/core/loader/
 */
const MantineProvider = (props: Props) => {
    const { children, ...others } = props;

    return (
        <MantineMantineProvider {...others}>{children} </MantineMantineProvider>
    );
};

MantineProvider.defaultProps = {};

export default MantineProvider;
