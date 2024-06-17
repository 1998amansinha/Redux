const { createStore } = require("redux");
const produce = require("immer").produce;

const initailState = {
  name: "Aman",
  address: {
    street: "123 Main St",
    city: "Boston",
    state: "MA",
  },
};

const STREET_UPDATED = "STREET_UPDATED";

function updateStreet(street) {
  return {
    type: STREET_UPDATED,
    payload: street,
  };
}

const reducer = (state = initailState, action) => {
  switch (action.type) {
    case STREET_UPDATED: {
      //   return {
      //     ...state,
      //     address: {
      //       ...state.address,
      //       street: action.payload,
      //     },
      //   };
      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });
    }
    default: {
      return state;
    }
  }
};

const store = createStore(reducer);
console.log("Initial State", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("Updated State ", store.getState());
});

store.dispatch(updateStreet("Shanti Tole"));

unsubscribe();
