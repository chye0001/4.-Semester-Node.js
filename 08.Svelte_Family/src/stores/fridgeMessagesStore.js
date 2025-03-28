import { writable } from "svelte/store";

// Standard Store
// export const fridgeMessages = writable([{ message: "Svelte Family Fridge" }]);

// Costume Store
function fridgeMessagesStore() {
    const { set, update, subscribe} = writable([{ message: "Svelte Family Fridge" }]);

    return {
        subscribe,
        set,
        update,
        wipe: () => { set([{ message: "Svelte Family Fridge" }])}
    }
}

export const fridgeMessages = fridgeMessagesStore();