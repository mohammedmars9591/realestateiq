// ==========================================================
// MASTER DATA FILE
// ==========================================================

// 1. Import Dubai Data
// We rename it to DUBAI_DATA inside this file to prevent conflict with the export name
import { DUBAI_AREAS as DUBAI_DATA } from './areaData';

// 2. Import Other Emirates
// NOTICE: We are importing ABUDHABI_DATA (No underscores) to match Step 1
import { ABUDHABI_DATA } from './abudhabiData';
import { RAK_DATA } from './rakData';
import { SHARJAH_DATA } from './sharjahData';
import { AJMAN_DATA } from './ajmanData';
import { UAQ_DATA } from './uaqData';
import { FUJAIRAH_DATA } from './fujairahData';

// 3. Export as DUBAI_AREAS (Master List)
// Your app uses this name 'DUBAI_AREAS' in other pages, so we keep it here.
export const DUBAI_AREAS = [
  ...(DUBAI_DATA || []),
  ...(ABUDHABI_DATA || []),
  ...(RAK_DATA || []),
  ...(SHARJAH_DATA || []),
  ...(AJMAN_DATA || []),
  ...(UAQ_DATA || []),
  ...(FUJAIRAH_DATA || [])
];