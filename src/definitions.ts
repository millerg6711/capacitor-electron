import type { PluginListenerHandle } from '@capacitor/core';
import { BrowserWindowConstructorOptions } from 'electron';

export interface CapacitorElectronMetacodiPlugin {
  addListener(
    eventName: 'ping',
    listenerFunc: () => void,
  ): Promise<PluginListenerHandle> & PluginListenerHandle;

  openWindow(options: { url: string, optionsWindow: BrowserWindowConstructorOptions | any }): Promise<any>;
  closeWindow(): Promise<void>;
  getUrl(): Promise<{ url: string, isClosed: boolean }>;
  setBadge(options: { value: number | null }): Promise<void>;
}
