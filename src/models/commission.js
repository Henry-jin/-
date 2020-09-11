export default {
  namespace: 'commission',
  state: [
      { commission: 'xxxx', id: 1 },
      { commission: 'cccc', id: 2 },
  ],
  effects: {

  },
  reducers: {
    'delete'(state, { payload }) {
      return state.filter(item => item.id !== payload.id);
    },
    'edit'(state,{payload}){
      const data = [...state];
      data.map((item)=>{
        if(item.id == payload.id){
          item.commission = payload.commission
        }
      })
      state = [...data];
      return state
    },
    'add'(state, { payload }) {
      const data = [...state]
      data.push(payload);
      state = [...data];
      return state
    }
  },
};