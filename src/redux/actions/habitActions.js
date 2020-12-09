import types from "../actionTypes";
import { v4 as uuidv4 } from "uuid";

const addHabbit = ({ title, comment, color, remind, repeat }) => ({
  type: types.ADD,
  payload: {
    id: uuidv4(),
    title: title,
    comment: comment,
    repeat: repeat,
    color: color,
    remind: remind,
    progress: 0,
  },
});
const updateHabbit = (title, comment, color, remind, repeat) => ({
  type: types.UPDATE,
  payload: {
    title: title,
    comment: comment,
    repeat: repeat,
    color: color,
    remind: remind,
    progress: 0,
  },
});

const removeHabbit = (id) => ({
  type: types.REMOVE,
  payload: {
    id,
  },
});
const addUser = (name = "name", phone = "876543") => ({
  type: types.ADD,
  payload: {
    id: uuidv4(),
    name: name,
    phone: phone,
  },
});
const updateUser = (obj) => ({
  type: types.UPDATE,
  payload: {},
});
export default { addHabbit, updateHabbit, removeHabbit, addUser, updateUser };
