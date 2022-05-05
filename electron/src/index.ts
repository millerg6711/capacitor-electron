import { PluginListenerHandle } from '@capacitor/core';
import { BrowserWindow, BrowserWindowConstructorOptions } from 'electron';
// import EventEmitter from 'events';
// import type { CapacitorElectronMetacodiEventsType, CapacitorElectronMetacodiPlugin } from '../../src/definitions';
import type { CapacitorElectronMetacodiPlugin } from '../../src/definitions';

export class CapacitorElectronMetacodi implements CapacitorElectronMetacodiPlugin {

  win: BrowserWindow;
  isClosed: boolean = true;
  // remote = new CapacitorElectronMetacodiEvents();

  constructor() { }
  addListener(
    eventName: 'ping',
    listenerFunc: () => void
  ): Promise<PluginListenerHandle> & PluginListenerHandle {
    console.log(eventName, listenerFunc);
    throw new Error('Method not implemented.');
  }

  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO - Electron', options);
    return { value: 'que tal' };
  }

  async openWindow(options: { url: string, optionsWindow: BrowserWindowConstructorOptions }): Promise<any> {
    this.isClosed = false;
    this.win = new BrowserWindow(options.optionsWindow)
    await this.win.loadURL(options.url);
    this.win.on('close', () => { this.isClosed = true; });

    return null;
  }

  async closeWindow(): Promise<void> {
    this.win.close();
    return;
  }

  async getUrl(): Promise<{ url: string, isClosed: boolean }> {
    if(this.isClosed) { return { url: '', isClosed: true}; } 
    const contents = this.win.webContents;
    return { url: contents.getURL(), isClosed: false };
  }
}

// export class CapacitorElectronMetacodiEvents extends EventEmitter implements CapacitorElectronMetacodiEventsType {
//   ping(): any {
//     return 'PING';
//   }
// }
