import { createSlice } from "@reduxjs/toolkit";


const cartSlice= createSlice({
  name:"cart",
  initialState:{
    items:[]
  },
  reducers:{
    addItems:(state,action)=>{
      state.items.push(action.payload)
    },
    removeItems: (state, action) => {
      const indexToRemove = state.items.indexOf(action.payload);
      if (indexToRemove !== -1) {
        state.items.splice(indexToRemove, 1);
      }
    },
    
    clearItems:(state)=>{
      state.items.length=0
    }
  }
  
})
export const{addItems,removeItems,clearItems}= cartSlice.actions;

export default cartSlice.reducer;