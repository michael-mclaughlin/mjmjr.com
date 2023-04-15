// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import filterSearchStory from "./../../../images/filterSearch-story.png";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import filterSearchTsx from "./../../../images/filterSearch-tsx.png";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import filterTabsBarStory from "./../../../images/filterTabs-bar-story.png";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import filterTabsBarTsx from "./../../../images/filterTabs-bar-tsx.png";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import tagStory from "./../../../images/tag-story.png";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import tagTsx from "./../../../images/tag-tsx.png";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import toastStory from "./../../../images/toast-story.png";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import toastTsx from "./../../../images/toast-tsx.png";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import vizModalStory from "./../../../images/viz-modal-story.png";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import vizModalTsx from "./../../../images/viz-modal-tsx.png";

export const idsLinks = [
    {
        src: filterSearchStory,
        src2: filterSearchTsx,
        text: "Search Component",
        explanation: "There needed to be a way to Search for data within the application tables using functional programming. The client facing feature was tied to specific api data that wasn't modifiable. So I wrote this component in storybook.",
        alt: "Image of search component code"
    },
    {
        src: filterTabsBarStory,
        src2: filterTabsBarTsx,
        text: "Tabbed Navigation",
        explanation: "Users wanted to be able to filter out data in a card style format within an application called ToolsHub that I wrote while I was working at Indeed. There was no component within the client facing system that did what we wanted for the application so I wrote a tabbed filter functional component.",
        alt: "Image of the Filter Tabs code"
    },
    {
        src: tagStory,
        src2: tagTsx,
        text: "Tag Component",
        explanation: "Users wanted a way to be able to tag different visualizations and data within the data query-ing feature. There wasn't a specific Tag component within the client facing design system at that time.  I wrote this configurable component to satisfy the need.",
        alt: "Image of the Tag component code"
    },
    {
        src: toastStory,
        src2: toastTsx,
        text: "Toast Component",
        explanation: "There was no component within the client facing system to provide feedback with a dismissible feature for success and error for the master save button. I wrote a Toast component to satisfy the need.",
        alt: "Image of the Toast component code"
    },
    {
        src: vizModalStory,
        src2: vizModalTsx,
        text: "Visualization Modal",
        explanation: "There is a feature on the data query-ing application that has multiple dynamic tabs that are dismissible. Product decided there needed to be a way to stop users from deleting the wrong tab. There was no confirmation modal in the client facing design system for our use case. I designed and wrote a dismissible modal component that showed different states dynamically based on error states.",
        alt: "Image of the Visualization Modal code"
    },
]