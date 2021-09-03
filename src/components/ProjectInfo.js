import React, {useState} from 'react';
import {Grid, Row, Column, Tab, Tabs, BreadcrumbItem} from 'carbon-components-react';
import {PageHeader} from '@carbon/ibm-cloud-cognitive/es/components/PageHeader/index.js';
import {MultiLineCodeSnippet} from './MultiLineCodeSnippet';
import { TextAlignLeft20 } from '@carbon/icons-react';
import SimpleContainer from './Container';

export const ProjectInfo = () => {
    const [selectedTab, setselectedTab] = useState('Tab1');
    const handleChangeTab = () => {
        if (selectedTab == 'Tab1') return <MultiLineCodeSnippet />;
        else if (selectedTab == 'Tab2')
         return(
             <SimpleContainer/>
            // <div style={{marginTop: "1rem"}}>
            //     <div className="example-terminal">
            //     <p>
            //         <h2>Connection successful</h2>
            //     </p>
            //     <p>
            //         DISCLAIMER: This is not a real terminal, you would pass your own terminal component into the children of the WebTerminal component.
            //     </p>
            //     <p>
            //         Please see the docs of this component for more information.
            //     </p>
            //     <p>
            //         joebob:~$
            //     </p>
            //     </div>
            // </div>
         );
        else if (selectedTab == 'Tab3') return null;
    };

    return (
        <div className="page-header-stories__viewport">
            <React.Fragment key=".0">
                <style>{`.bx--modal { opacity: 0; };`}</style>
                <PageHeader
                    pageHeaderOffset={0}
                    preCollapseTitleRow={false}
                    preventBreadcrumbScroll={false}
                    subtitle="Optional subtitle if necessary"
                    availableSpace={
                        <div style={{display: 'flex'}}>
                            <p style={{marginRight: '50px', maxWidth: '400px'}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor{' '}
                                <strong>incididunt ut labore</strong> et dolore magna
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <p>
                                Property: Value
                                <br />
                                Property: Value
                                <br />
                                Property: Value
                            </p>
                        </div>
                    }
                    background
                    breadcrumbItems={
                        <>
                            <BreadcrumbItem href="#">Breadcrumb 1</BreadcrumbItem>
                            <BreadcrumbItem href="#">Breadcrumb 2</BreadcrumbItem>
                            <BreadcrumbItem href="#">Breadcrumb 3</BreadcrumbItem>
                        </>
                    }
                    className="client-class-1 client-class-2"
                    collapseHeaderLabel="Collapse"
                    expandHeaderLabel="Expand"
                    navigation={
                        <Tabs
                            scrollIntoView
                            selected={0}
                            selectionMode="automatic"
                            type="default"
                        >
                            <Tab
                                label="Tab 1"
                                onClick={() => {
                                    setselectedTab('Tab1');
                                }}
                                onKeyDown={function noRefCheck() {}}
                                role="presentation"
                                selected={false}
                            ></Tab>
                            <Tab
                                label="Tab 2"
                                onClick={() => {
                                    setselectedTab('Tab2');
                                }}
                                onKeyDown={function noRefCheck() {}}
                                role="presentation"
                                selected={false}
                            />
                            <Tab
                                label="Tab 3"
                                onClick={() => {
                                    setselectedTab('Tab3');
                                }}
                                onKeyDown={function noRefCheck() {}}
                                role="presentation"
                                selected={false}
                            />
                        </Tabs>
                    }
                    pageActions={[
                        {
                            kind: 'secondary',
                            label: 'Secondary button',
                            onClick: function noRefCheck() {},
                        },
                        {
                            kind: 'primary',
                            label: 'Primary button',
                            onClick: function noRefCheck() {},
                        },
                    ]}
                    title={{
                        loading: false,
                        text: 'Page title',
                    }}
                    tags={[
                        {
                            label: 'A tag',
                            type: 'blue',
                        },
                        {
                            label: 'A tag',
                            type: 'green',
                        },
                        {
                            label: 'A tag',
                            type: 'warm-gray',
                        },
                        {
                            label: 'A tag',
                            type: 'purple',
                        },
                    ]}
                />
                {handleChangeTab()}
            </React.Fragment>
        </div>
    );
};
