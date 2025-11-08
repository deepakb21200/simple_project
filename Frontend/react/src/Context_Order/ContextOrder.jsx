import { createContext, useContext, useReducer } from "react";

export const CheckoutContext = createContext();

const initialState = {
  step: 1,
  formData: {
    information: {},
    shipping: {},
    payment: {
         paymentMethod: "",
    },
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "NEXT_STEP":
      return { ...state, step: state.step + 1 };
    case "PREV_STEP":
      return { ...state, step: state.step - 1 };
    case "UPDATE_FORM_DATA":
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.payload.key]: action.payload.data,
        },
      };
    default:
      return state;
  }
}

export const CheckoutProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CheckoutContext.Provider value={{ state, dispatch }}>
      {children}
    </CheckoutContext.Provider>
  );
};

// export const useCheckout = () => useContext(CheckoutContext);
