
const saveDatabase = (databaseObject, localStorageKey) => {
    const stringifiedDatabase = JSON.stringify(databaseObject);

    localStorage.setItem(localStorageKey, stringifiedDatabase);
};

const loadDatabase = localStorageKey => {
    const databaseString = localStorage.getItem(localStorageKey);

    return JSON.parse(databaseString);
};

let NssDatabase = loadDatabase("Nss-database");

if (!NssDatabase) {
    NssDatabase = {};
    NssDatabase.staff = [];
};