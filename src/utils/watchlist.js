/**
 * RealEstateIQ Watchlist Utility
 * Manages institutional tracking of areas and builders using LocalStorage
 */

const STORAGE_KEY = 'reiq_watchlist';

export const getWatchlist = () => {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : { areas: [], builders: [] };
    } catch (e) {
        console.error("Watchlist retrieval failed:", e);
        return { areas: [], builders: [] };
    }
};

export const toggleWatchlist = (type, id) => {
    const list = getWatchlist();
    const collection = list[type] || [];
    
    if (collection.includes(id)) {
        list[type] = collection.filter(itemId => itemId !== id);
    } else {
        list[type] = [...collection, id];
    }
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    return list;
};

export const isInWatchlist = (type, id) => {
    const list = getWatchlist();
    return (list[type] || []).includes(id);
};
