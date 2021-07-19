import { TOKEN_SET } from "../types";
const initialState = {
  token: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case TOKEN_SET:
      return payload;
    default:
      return state;
  }
};
