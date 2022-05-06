import type { PluginListenerHandle } from '@capacitor/core';
import { BrowserWindowConstructorOptions } from 'electron';

export interface CapacitorElectronMetacodiPlugin {
  addListener(
    eventName: 'ping',
    listenerFunc: () => void,
  ): Promise<PluginListenerHandle> & PluginListenerHandle;

  /**
   * Exit electron app
   */
   exitApp(): Promise<void>;

  /**
   * Create and control browser windows.
   * 
   * Window customization
   * (BrowserWindow) <https://www.electronjs.org/docs/latest/api/browser-window>
   */
  openWindow(options: { url: string, optionsWindow: BrowserWindowConstructorOptions | any }): Promise<any>;

  /**
   * Close window if opened
   */
  closeWindow(): Promise<void>;

  /**
   * Get url and if window closed
   */
  getUrl(): Promise<{ url: string, isClosed: boolean }>;

  /** 
   * Set Badge of application 
   * */
  setBadge(options: { value: number | null }): Promise<void>;

  /**
   * Show system notification
   */
   showNotification(options: { package: string, title: string, message: string }): Promise<void>;
}
