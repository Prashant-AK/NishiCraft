export const initialState = {
  basket: [],
  user: null,
  admin: false,
  userDetails: {
    userid: "",
    fname: "",
    email: "",
    address: "",
    phno: "",
  },
};
//selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  // console.log("action", action);
  // console.log(state.userDetails);
  switch (action.type) {
    case "ADD_TO_BASKET":
      // console.log("kkk", state);
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "Set_User":
      return {
        ...state,
        user: action.user,
      };
    case "Set_Admin":
      return {
        ...state,
        admin: action.admin,
      };
    case "Set_User_Detail":
      return {
        ...state,
        userDetails: action.userDetails,
      };
    case "Remove_From_Basket":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as its not in basket!`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };
    case "Set_User":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
