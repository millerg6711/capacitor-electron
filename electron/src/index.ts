import { PluginListenerHandle } from '@capacitor/core';
import { BrowserWindow, BrowserWindowConstructorOptions, app } from 'electron';
import type { CapacitorElectronMetacodiPlugin } from '../../src/definitions';

export class CapacitorElectronMetacodi implements CapacitorElectronMetacodiPlugin {

  win: BrowserWindow;
  isClosed: boolean = true;
  
  constructor() { }
  addListener(
    eventName: 'ping',
    listenerFunc: () => void
  ): Promise<PluginListenerHandle> & PluginListenerHandle {
    console.log(eventName, listenerFunc);
    throw new Error('Method not implemented.');
  }

  async exitApp(): Promise<void>{ app.quit(); };

  async openWindow(options: { url: string, optionsWindow: BrowserWindowConstructorOptions }): Promise<any> {
    this.isClosed = false;
    this.win = new BrowserWindow(options.optionsWindow)
    await this.win.loadURL(options.url);
    this.win.on('close', () => { this.isClosed = true; });

    return null;
  }

  async closeWindow(): Promise<void> {
    if (!this.isClosed) { this.win.close(); }
    return;
  }

  async getUrl(): Promise<{ url: string, isClosed: boolean }> {
    if(this.isClosed) { return { url: '', isClosed: true}; } 
    const contents = this.win.webContents;
    return { url: contents.getURL(), isClosed: false };
  }

  async setBadge(options: { value: number | null }): Promise<void> {
    app.setBadgeCount(options.value);
    return;
  }
}
