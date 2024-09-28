// local.js

// Save cookLists to localStorage
export const saveCookListsToLocal = (cookLists) => {
    localStorage.setItem('cookLists', JSON.stringify(cookLists));
  };
  
  // Load cookLists from localStorage
  export const getCookListsFromLocal = () => {
    const storedCookLists = localStorage.getItem('cookLists');
    return storedCookLists ? JSON.parse(storedCookLists) : [];
  };
  
  // Save cookedLists to localStorage
  export const saveCookedListsToLocal = (cookedLists) => {
    localStorage.setItem('cookedLists', JSON.stringify(cookedLists));
  };
  
  // Load cookedLists from localStorage
  export const getCookedListsFromLocal = () => {
    const storedCookedLists = localStorage.getItem('cookedLists');
    return storedCookedLists ? JSON.parse(storedCookedLists) : [];
  };
  
  // Clear localStorage (optional utility function)
  export const clearLocalStorage = () => {
    localStorage.clear();
  };
  