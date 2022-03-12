import React, { FC } from "react";
import AuthLayout from "./AuthLayout";

import DefaultLayout from "./DefaultLayout";
const layouts = {
    DefaultLayout: DefaultLayout,
    AuthLayout: AuthLayout
};

interface LayoutProps {
    layoutType: "DefaultLayout" | "AuthLayout";
}

export const Layout: FC<LayoutProps> = ({ children, layoutType }) => {

    let Component = layouts[layoutType] || React.Fragment;
    return <Component>{children}</Component>;

};
