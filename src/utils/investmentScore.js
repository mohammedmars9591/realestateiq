// --- INVESTMENT LOGIC UTILS ---

/**
 * Calculates the Gross Rental Yield (ROI)
 * Formula: (Annual Rent / Total Price) * 100
 */
export const calculateROI = (rent, price) => {
  if (!price || !rent) return "0.0";
  return ((rent / price) * 100).toFixed(1);
};

/**
 * Calculates Price per Square Foot
 * Formula: Total Price / Size in SqFt
 */
export const calculatePricePerSqFt = (price, size) => {
  if (!price || !size) return 0;
  return Math.round(price / size);
};

/**
 * Returns the CSS styling for the Yield Badge based on the ROI %
 * - Green: > 7% (High Yield)
 * - Blue: 5-7% (Moderate)
 * - Slate: < 5% (Low/Luxury)
 */
export const getYieldColor = (roi) => {
  const roiNum = parseFloat(roi);
  if (roiNum >= 7.0) return "text-green-700 bg-green-50 border-green-200";
  if (roiNum >= 5.0) return "text-blue-700 bg-blue-50 border-blue-200";
  return "text-slate-700 bg-slate-50 border-slate-200";
};