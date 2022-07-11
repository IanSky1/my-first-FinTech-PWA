let db;

const request = indexedDB.open('budget_tracker', 1);

request.onupgradeneeded = function(event) {

    const db = event.target.result;

    db.CreateObjectStore('new_transaction', { autoIncrement: true });
};

