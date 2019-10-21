const storeData = (key, value)=>{
    localStorage.setItem(btoa(key), btoa(value));
}

const getData = (key)=>{
    return localStorage.getItem(btoa(key)) != null ? atob(localStorage.getItem(btoa(key))) : '';
}

const localStorageFunctions = { storeData, getData }

export default localStorageFunctions