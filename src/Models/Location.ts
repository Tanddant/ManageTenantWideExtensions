export enum Location {
    ApplicationCustomizer = "ClientSideExtension.ApplicationCustomizer",
    ContextMenu = "ClientSideExtension.ListViewCommandSet.ContextMenu",
    CommandBar = "ClientSideExtension.ListViewCommandSet.CommandBar",
    ListViewCommandSet = "ClientSideExtension.ListViewCommandSet",
}

export const LocationStrings = {
    [Location.ApplicationCustomizer]: "Application Customizer",
    [Location.ContextMenu]: "Context Menu",
    [Location.CommandBar]: "Command Bar",
    [Location.ListViewCommandSet]: "List View Command Set",
}

export const Locations = Object.keys(LocationStrings);