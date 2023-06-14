import * as React from 'react';
import useExtension from '../../../Hooks/UseExtension';
import { Icon, Panel, Spinner, SpinnerSize, Text, Toggle, Stack, Dropdown, TextField, PanelType } from '@fluentui/react';
import { ExtensionLocation, LocationStrings } from '../../../Models/Location';
import { Locations } from '../../../Models/Location';
import { ListType, ListTypeStrings, ListTypes } from '../../../Models/ListType';

export interface IExtensionManagerProps {
    ExtensionId: number;
    OnSubmit: () => void;
    OnClose: () => void;
}

export const ExtensionManager: React.FunctionComponent<IExtensionManagerProps> = (props: React.PropsWithChildren<IExtensionManagerProps>) => {
    const { ExtensionId, OnClose } = props;
    const { isLoading, extension, update } = useExtension(ExtensionId);

    return (
        <Panel
            isOpen={ExtensionId !== null}
            onDismiss={OnClose}
            type={PanelType.medium}
        >
            {ExtensionId !== null && <>
                {isLoading && <Spinner label='Loading...' size={SpinnerSize.large} />}
                {!isLoading && <>
                    <Stack tokens={{ childrenGap: 10 }}>
                        <span><Icon styles={{ root: { fontSize: "3em" } }} iconName='ProductRelease' /><Text variant='large'>&nbsp;{extension.Title}</Text></span>
                        <Toggle offText='Disabled' onText='Enabled' checked={!extension.TenantWideExtensionDisabled} onChange={(_, val) => update({ TenantWideExtensionDisabled: !val })} />

                        <Dropdown label='Location/type' options={Locations.map(loc => ({ key: loc, text: LocationStrings[loc] }))} selectedKey={extension.TenantWideExtensionLocation} onChange={(_, val) => update({ TenantWideExtensionLocation: val.key as ExtensionLocation })} />
                        <Dropdown label='List type' options={ListTypes.map(listType => ({ key: parseInt(listType as any), text: ListTypeStrings[listType] }))} selectedKey={extension.TenantWideExtensionListTemplate} onChange={(_, val) => update({ TenantWideExtensionListTemplate: val.key as ListType })} />

                        <TextField
                            value={extension.TenantWideExtensionComponentProperties}
                            label='Component properties'
                            multiline
                            rows={10}
                            onChange={(_, val) => update({ TenantWideExtensionComponentProperties: val })}
                        />

                        <TextField type='number' value={extension.TenantWideExtensionSequence + ""} label='Sequence' onChange={(_, val) => update({ TenantWideExtensionSequence: parseInt(val) })} />

                    </Stack>
                </>}

            </>}


        </Panel>
    );
};