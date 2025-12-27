export type ModifierSelection = {

    groupId: string;
    optionIds: string[];
    priceDeltaTotal: number;
};

export type CartLine = {

    lineId: string;
    itemId: string;
    name: string;
    basePrice: number;
    quantity: number;
    modifiers: ModifierSelection[];
    notes?: string,
};

type CartState = {

    items: CartLine[];
};

const state: CartState = {

    items: [],
};

function uid() {
    return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

export const cartStore = {
    getItems() {
        return state.items;
    },

    addItem(line: Omit<CartLine, "lineId">) {
        state.items = [...state.items, { ...line, lineId: uid() }];
    },

    removeLine(lineId: string) {
        state.items = state.items.filter((x) => x.lineId !== lineId);
    },

    clear() {
        state.items = [];
    },

    subtotal() {

        return state.items.reduce((sum, line) => {
            const modsTotal = (line.modifiers ?? []).reduce(
                (mSum, m) => mSum + (m.priceDeltaTotal ?? 0),
                0
            );
            return sum + (line.basePrice + modsTotal) * (line.quantity ?? 1);
        }, 0);
    },
};