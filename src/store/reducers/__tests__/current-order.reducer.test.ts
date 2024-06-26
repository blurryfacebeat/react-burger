import reducer, {
  addCurrentOrderStart,
  addCurrentOrderSuccess,
  addCurrentOrderFailure,
  closeCurrentOrderModal,
  TCurrentOrderState,
} from '../current-order.reducer.ts';

describe('currentOrderSlice', () => {
  const initialState: TCurrentOrderState = {
    order: null,
    isLoading: false,
    isModalOpen: false,
  };

  it('should return the initial state', () => {
    expect(reducer(undefined, { type: '' })).toEqual(initialState);
  });

  it('should handle addCurrentOrderStart', () => {
    const expectedState: TCurrentOrderState = {
      ...initialState,
      isLoading: true,
    };

    expect(reducer(initialState, addCurrentOrderStart())).toEqual(
      expectedState,
    );
  });

  it('should handle addCurrentOrderSuccess', () => {
    const order = { name: 'Test Order', number: 123 };
    const action = addCurrentOrderSuccess(order);
    const expectedState: TCurrentOrderState = {
      order,
      isLoading: false,
      isModalOpen: true,
    };

    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle addCurrentOrderFailure', () => {
    const stateWithLoading: TCurrentOrderState = {
      ...initialState,
      isLoading: true,
    };
    const expectedState: TCurrentOrderState = {
      ...initialState,
      isLoading: false,
    };

    expect(reducer(stateWithLoading, addCurrentOrderFailure())).toEqual(
      expectedState,
    );
  });

  it('should handle closeCurrentOrderModal', () => {
    const stateWithModalOpen: TCurrentOrderState = {
      ...initialState,
      isModalOpen: true,
    };
    const expectedState: TCurrentOrderState = {
      ...initialState,
      isModalOpen: false,
    };

    expect(reducer(stateWithModalOpen, closeCurrentOrderModal())).toEqual(
      expectedState,
    );
  });
});
