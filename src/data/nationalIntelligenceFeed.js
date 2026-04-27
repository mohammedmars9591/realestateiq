// ==========================================================
// NATIONAL INTELLIGENCE FEED (Master Aggregator 2026)
// ==========================================================

import { DUBAI_AREAS as DUBAI_DATA } from './dubaiMarketNodes';
import { ABUDHABI_DATA } from './abuDhabiMarketNodes';
import { RAK_DATA } from './rakMarketNodes';
import { SHARJAH_DATA } from './sharjahMarketNodes';
import { AJMAN_DATA } from './ajmanMarketNodes';
import { UAQ_DATA } from './uaqData';
import { FUJAIRAH_DATA } from './fujairahData';

// We keep the export name DUBAI_AREAS for internal app backwards compatibility
// but the underlying architecture is now UAE-wide Strategic Intelligence.
export const DUBAI_AREAS = [
  ...(DUBAI_DATA || []),
  ...(ABUDHABI_DATA || []),
  ...(RAK_DATA || []),
  ...(SHARJAH_DATA || []),
  ...(AJMAN_DATA || []),
  ...(UAQ_DATA || []),
  ...(FUJAIRAH_DATA || [])
];