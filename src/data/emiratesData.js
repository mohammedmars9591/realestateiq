// MASTER FILE: Aggregates all Emirates into one list

// 1. Import Dubai Data (Renaming it to DUBAI_DATA to avoid conflict)
import { DUBAI_AREAS as DUBAI_DATA } from './areaData';

// 2. Import Other Emirates
import { ABU_DHABI_DATA } from './abudhabiData';
import { RAK_DATA } from './rakData';
import { SHARJAH_DATA } from './sharjahData';
import { AJMAN_DATA } from './ajmanData';
import { UAQ_DATA } from './uaqData';
import { FUJAIRAH_DATA } from './fujairahData';

// 3. Combine everything into one Master List
// We export this as "DUBAI_AREAS" so your app components (which expect this variable name) work perfectly.
export const DUBAI_AREAS = [
  ...(DUBAI_DATA || []),       // Safeguard in case file is empty
  ...(ABU_DHABI_DATA || []),
  ...(RAK_DATA || []),
  ...(SHARJAH_DATA || []),
  ...(AJMAN_DATA || []),
  ...(UAQ_DATA || []),
  ...(FUJAIRAH_DATA || [])
];