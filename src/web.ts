import { WebPlugin } from '@capacitor/core';

import type { CapacitorElectronMetacodiPlugin } from './definitions';

export class CapacitorElectronMetacodiWeb extends WebPlugin implements CapacitorElectronMetacodiPlugin {
  
  constructor() {
    super();
  }

  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO - web', options);
    return options;
  }

  async openWindow(options: { url: string, optionsWindow: any }): Promise<any>{
    return options;
  }

  async closeWindow(): Promise<void>{
    return ;
  };

  async getUrl(): Promise<{ url: string, isClosed: boolean }> { return { url: 'not implemented', isClosed: true };  }
}
