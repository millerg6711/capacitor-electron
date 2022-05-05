import { registerPlugin } from '@capacitor/core';

import type { CapacitorElectronMetacodiPlugin } from './definitions';

const CapacitorElectronMetacodi = registerPlugin<CapacitorElectronMetacodiPlugin>(
  'CapacitorElectronMetacodi',
  {
    web: () => import('./web').then(m => new m.CapacitorElectronMetacodiWeb()),
    electron: () => (window as any).CapacitorCustomPlatform.plugins.CapacitorElectronMetacodi,
  },
);

export * from './definitions';
export { CapacitorElectronMetacodi };
