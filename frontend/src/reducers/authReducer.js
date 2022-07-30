import { AUTH, LOGOUT } from '../constants/userConstansts';
export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem('userInfo', JSON.stringify({ ...action?.payload }));
      return { ...state, userInfo: action.payload };

    case LOGOUT:
      return { ...state, userInfo: null };

    default:
      return state;
  }
};
