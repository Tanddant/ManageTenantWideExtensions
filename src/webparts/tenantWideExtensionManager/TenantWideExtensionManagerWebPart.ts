import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { TenantWideExtensionManager, ITenantWideExtensionManagerProps } from './components/TenantWideExtensionManager';

export interface ITenantWideExtensionManagerWebPartProps {
}

export default class TenantWideExtensionManagerWebPart extends BaseClientSideWebPart<ITenantWideExtensionManagerWebPartProps> {
  public render(): void {
    const element: React.ReactElement<ITenantWideExtensionManagerProps> = React.createElement(TenantWideExtensionManager, {});

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: []
    };
  }
}
