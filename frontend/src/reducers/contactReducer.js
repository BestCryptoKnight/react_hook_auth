import {
  CONTACT_CREATE,
  CONTACT_DELETE,
  CONTACT_DELETE_ALL,
  CONTACT_FETCH_ALL,
  CONTACT_UPDATE,
} from '../constants/contactContsant';

export const contactReducer = (contacts = [], action) => {
  switch (action.type) {
    case CONTACT_FETCH_ALL:
      return action.payload;
    case CONTACT_CREATE:
      return [...contacts, action.payload];

    case CONTACT_UPDATE:
      return contacts.map((c) =>
        c._id === action.payload._id ? action.payload : c
      );

    case CONTACT_DELETE:
      return contacts.filter((c) => c._id !== action.payload);

    case CONTACT_DELETE_ALL:
      return contacts.filter(function (c) {
        return action.payload.indexOf(c._id) === -1;
      });

    default:
      return contacts;
  }
};

/**
 *
 *
 *
 *
 */
