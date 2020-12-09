import types from "../actionTypes";

const habbits = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD:
      return [...state, payload];

    case types.UPDATE:
      return state.filter((habbit) => habbit.id !== payload.id);

    case types.REMOVE:
      return state.filter((habbit) => habbit.id !== payload.id);

    default:
      return state;
  }
};

const INITIAL_STATE = [
  {
    email: "dslfjslkfj@gmail.com",
    id: 1,
    name: "Mango",
    phone: 309039994,
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIeS9qhRY8m3uQ5fNWdIKzjj_Cjb2O7JLAmA&usqp=CAU",
    habits: [
      {
        id: 1,
        title: "pol",
        comment: "no",
        repeat: "every day",
        color: "#FF7E00",
        remind: false,
        progress: "10%",
      },
    ],
  },
];
const user = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case types.ADD_USER:
      return [...state, payload];

    case types.UPDATE_USER:
      return state.filter((user) => user.id !== payload.id);

    default:
      return state;
  }
};
export default { habbits, user };
