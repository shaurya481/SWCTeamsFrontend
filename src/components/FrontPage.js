import React from 'react';
import {CardSectionImages, CardGroup} from '@carbon/ibmdotcom-react';
import {Button} from 'carbon-components-react';
import front_page_background from '../assets/images/front_page_background.png';

const cards = {
    Images: [
        {
            image: {
                defaultSrc: front_page_background,
                alt: 'Image alt text',
            },
            eyebrow: 'Project 1',
            heading: 'Natural language processing.',
            cta: {
                href: 'https://www.example.com',
            },
        },
        {
            image: {
                defaultSrc: front_page_background,
                alt: 'Image alt text',
            },
            eyebrow: 'Project 2',
            heading: 'Natural language processing.',
            cta: {
                href: 'https://www.example.com',
            },
        },
        {
            image: {
                defaultSrc: front_page_background,
                alt: 'Image alt text',
            },
            eyebrow: 'Project 3',
            heading: 'Natural language processing.',
            cta: {
                href: 'https://www.example.com',
            },
        },
        {
            image: {
                defaultSrc: front_page_background,
                alt: 'Image alt text',
            },
            eyebrow: 'Project 4',
            heading: 'Serving society ethically in the age of Artificial Intelligence.',
            cta: {
                href: 'https://www.example.com',
            },
        },
        {
            image: {
                defaultSrc: front_page_background,
                alt: 'Image alt text',
            },
            eyebrow: 'Project 5',
            heading: 'Serving society ethically in the age of Artificial Intelligence.',
            cta: {
                href: 'https://www.example.com',
            },
        },
        {
            image: {
                defaultSrc: front_page_background,
                alt: 'Image alt text',
            },
            eyebrow: 'Project 6',
            heading: 'Serving society ethically in the age of Artificial Intelligence.',
            cta: {
                href: 'https://www.example.com',
            },
        },
        {
            image: {
                defaultSrc: front_page_background,
                alt: 'Image alt text',
            },
            eyebrow: 'Project 7',
            heading: 'Serving society ethically in the age of Artificial Intelligence.',
            cta: {
                href: 'https://www.example.com',
            },
        },
        {
            image: {
                defaultSrc: front_page_background,
                alt: 'Image alt text',
            },
            eyebrow: 'Project 8',
            heading: 'Serving society ethically in the age of Artificial Intelligence.',
            cta: {
                href: 'https://www.example.com',
            },
        },
        {
            image: {
                defaultSrc: front_page_background,
                alt: 'Image alt text',
            },
            eyebrow: 'Project 9',
            heading: 'Serving society ethically in the age of Artificial Intelligence.',
            cta: {
                href: 'https://www.example.com',
            },
        },
    ],
};

function FrontPage() {
    return (
        /*<div className="text">
    <CardSectionImages
      cards={cards.Images}
      heading="All Projects"
      theme={'g100'}
    />
    </div>*/
        <>
            <div>
                <div className="button">
                <div className="heading-text">
                        <h3>Projects</h3>
                    </div>
                    <Button kind="tertiary">Button</Button>
                </div>
                <div className="bx--grid bx--content-group-story">
                    <div className="bx--row cards-bottom">
                        <div className="bx--col-sm-4 bx--col-lg-12 bx--offset-lg-2">
                            <CardGroup cards={cards.Images} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default FrontPage;
