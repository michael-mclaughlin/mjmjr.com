// import {uiWork} from './utils/objects/links/ui-video-data';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import deleteRenameTabPerViz from "../../../video/delete-rename-tab-per-viz-final.mp4";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import tabPerVizFinal from "../../../video/tab-per-viz-final.mp4";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import statePersistanceTabPerViz from "../../../video/state-persistance-t-per-v-final.mp4";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import renamingQueries from "../../../video/renaming-queries-final.mp4";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import horizontalDragbar from "../../../video/horizontal-drag-bar-final.mp4";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import searchFinal from "../../../video/search-final.mp4";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import toast from "../../../video/toast.mp4";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import walkthrough from "../../../video/walkthrough.mp4";

export const uiLinks = [
    {
        video: tabPerVizFinal,
        text: "Individual Tabs per Visualization",
        explanation: "Users wanted a way to keep track of their tabs and visualizations immediate usable from the UI. I used React Router v5 and NavLinks to map out the visualization names and map them to the correct visualization."
    },
    {
        video: deleteRenameTabPerViz,
        text: 'Rename and Delete tabs per visualization component',
        explanation: "Users wanted to be able to see several data visualizations in a tabbed format. The also wanted to be able to rename and delete tabs that could be saved to the database for data persistance.",
    },
    {
        video: statePersistanceTabPerViz,
        text: 'State Management for Tab Per Viz',
        explanation: "There are several different functional and classical component structure for this feature.  I had to manage the state of different interactions using a manufactured queryStore (Redux was not being used) and browser state management.",
    },
    {
        video: renamingQueries,
        text: "Renaming Queries",
        explanation: "Renaming the queries for a singular query was a bit of a challenge there were several developed features for the queries list on the upper left. There was dragging a dropping a query to a different position in the list index and renaming a query from a menu button. In order for me to satisfy the double click to name a query within the input. There were several events that needed to stop from being bubbled up which prevents the double click of the renaming.  The final result ended up looking like this in production. ",
    },
    {
        video: horizontalDragbar,
        text: "Horizontal Drag Bar using reactSplitPane2",
        explanation: "Users suggested that they should be able to see more of the query in the typed query box.  I implemented a new layout structure using flex box with changing html5 structure of the react pages. The outcome was the horizontal drag bar in this video.",
    },
    {
        video: searchFinal,
        text: "Search and filter feature using react table",
        explanation: "Users wanted to be able to search and filter through all of the data within the react table.  I used the react table configuration objects to add a filter and search with debouncing for larger sets of data.",
    },
    {
        video: toast,
        text: "Toast component",
        explanation: "This was a Toast component that a UX designer designed and I implemented with typescript and react.  The Toast shows whenever there is feedback that user needs on the save feature. Different errors had different toasts.  The different toasts were developed as one single component with error props so a dev can configure then for states like 'onError and warning.'"
    },
    {
        video: walkthrough,
        text: "Walkthrough component using walkMe",
        explanation: "Product had an idea about creating a walkthrough component that will articulate certain features of the app on load.  Using the walkMe open sourced repo I created a walkthrough component that worked with every interaction that we needed by mapping classNames to the different target spots to illustrate the feature."
    }
]