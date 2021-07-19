export const userSelector = (state) => state.user;

export const isAuthorizedSelector = state => !!state.user?.email