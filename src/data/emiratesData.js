// ==========================================================
// MASTER DATA FILE (Combines All Emirates)
// ==========================================================

// 1. Import Dubai Data (We rename it to DUBAI_DATA here to avoid name conflict)
import { DUBAI_AREAS as DUBAI_DATA } from './areaData';

// 2. Import Other Emirates (Names MUST match exactly what is in their files)
import { ABUDHABI_DATA } from './abudhabiData'; // <--- Corrected Spelling (No Underscore!)
import { RAK_DATA } from './rakData';
import { SHARJAH_DATA } from './sharjahData';
import { AJMAN_DATA } from './ajmanData';
import { UAQ_DATA } from './uaqData';
import { FUJAIRAH_DATA } from './fujairahData';

// 3. Combine everything into one Master List
// We export this as "DUBAI_AREAS" because that is what your pages are looking for.
export const DUBAI_AREAS = [
  ...(DUBAI_DATA || []),       
  ...(ABUDHABI_DATA || []),
  ...(RAK_DATA || []),
  ...(SHARJAH_DATA || []),
  ...(AJMAN_DATA || []),
  ...(UAQ_DATA || []),
  ...(FUJAIRAH_DATA || [])
];