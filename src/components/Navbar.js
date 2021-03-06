import { HeaderContainer, HeaderName, HeaderMenuButton } from "carbon-components-react";
import { Header } from "carbon-components-react";
import { SkipToContent } from "carbon-components-react";
import { SideNav ,SideNavItems, SideNavMenu, SideNavMenuItem, SideNavLink } from "carbon-components-react";
import React from "react";
import { HeaderNavigation, HeaderMenuItem, HeaderGlobalBar, HeaderGlobalAction, HeaderMenu } from "carbon-components-react";
import { AppSwitcher20, Notification20, Search20} from "@carbon/icons-react";

const Fade16 = () => (
    <svg
        width="16"
        height="16"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        aria-hidden="true">
        <path d="M8.24 25.14L7 26.67a14 14 0 0 0 4.18 2.44l.68-1.88a12 12 0 0 1-3.62-2.09zm-4.05-7.07l-2 .35A13.89 13.89 0 0 0 3.86 23l1.73-1a11.9 11.9 0 0 1-1.4-3.93zm7.63-13.31l-.68-1.88A14 14 0 0 0 7 5.33l1.24 1.53a12 12 0 0 1 3.58-2.1zM5.59 10L3.86 9a13.89 13.89 0 0 0-1.64 4.54l2 .35A11.9 11.9 0 0 1 5.59 10zM16 2v2a12 12 0 0 1 0 24v2a14 14 0 0 0 0-28z" />
    </svg>
);

export const NavBar = (props) => (
<HeaderContainer
    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
    <>
        <Header aria-label="">
        <SkipToContent />
        <HeaderMenuButton
            aria-label="Open menu"
            isCollapsible
            onClick={onClickSideNavExpand}
            isActive={isSideNavExpanded}
        />
        <HeaderName href="#" prefix="SWC">
            Teams
        </HeaderName>
        <HeaderNavigation aria-label="navbar">
            <HeaderMenuItem href="#">Link 1</HeaderMenuItem>
            <HeaderMenuItem href="#">Link 2</HeaderMenuItem>
            <HeaderMenuItem href="#">Link 3</HeaderMenuItem>
            <HeaderMenu aria-label="Link 4" menuLinkName="Link 4">
            <HeaderMenuItem href="#">Sub-link 1</HeaderMenuItem>
            <HeaderMenuItem href="#">Sub-link 2</HeaderMenuItem>
            <HeaderMenuItem href="#">Sub-link 3</HeaderMenuItem>
            </HeaderMenu>
        </HeaderNavigation>
        <HeaderGlobalBar>
            <HeaderGlobalAction
            aria-label="Search"
            onClick={()=>{}}>
            <Search20 />
            </HeaderGlobalAction>
        </HeaderGlobalBar>
        <SideNav
            aria-label="Side navigation"
            isRail
            expanded={isSideNavExpanded}
            onOverlayClick={onClickSideNavExpand}>
            <SideNavItems>
            <SideNavMenu renderIcon={Fade16} title="Category title">
                <SideNavMenuItem href="javascript:void(0)">
                Link
                </SideNavMenuItem>
                <SideNavMenuItem aria-current="page" href="javascript:void(0)">
                Link
                </SideNavMenuItem>
                <SideNavMenuItem href="javascript:void(0)">
                Link
                </SideNavMenuItem>
            </SideNavMenu>
            <SideNavMenu renderIcon={Fade16} title="Category title">
                <SideNavMenuItem href="javascript:void(0)">
                Link
                </SideNavMenuItem>
                <SideNavMenuItem aria-current="page" href="javascript:void(0)">
                Link
                </SideNavMenuItem>
                <SideNavMenuItem href="javascript:void(0)">
                Link
                </SideNavMenuItem>
            </SideNavMenu>
            <SideNavMenu renderIcon={Fade16} title="Category title">
                <SideNavMenuItem href="javascript:void(0)">
                Link
                </SideNavMenuItem>
                <SideNavMenuItem aria-current="page" href="javascript:void(0)">
                Link
                </SideNavMenuItem>
                <SideNavMenuItem href="javascript:void(0)">
                Link
                </SideNavMenuItem>
            </SideNavMenu>
            <SideNavLink renderIcon={Fade16} href="javascript:void(0)">
                Link
            </SideNavLink>
            <SideNavLink renderIcon={Fade16} href="javascript:void(0)">
                Link
            </SideNavLink>
            </SideNavItems>
        </SideNav>
        </Header>
        <div>
            {props.children}
        </div>
    </>
    )}
/>
);