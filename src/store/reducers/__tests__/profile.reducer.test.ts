import reducer, {
  setAuthChecked,
  setProfile,
  setProfileIsLoading,
  TProfileState,
  TSetProfilePayload,
  initialState,
} from '../profile.reducer.ts';

describe('profileReducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, { type: '' })).toEqual(initialState);
  });

  it('should handle setAuthChecked', () => {
    const action = setAuthChecked(true);
    const expectedState: TProfileState = {
      ...initialState,
      isAuthChecked: true,
    };

    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle setProfile with a profile', () => {
    const profile: TSetProfilePayload = {
      name: 'John Doe',
      email: 'john.doe@example.com',
    };
    const action = setProfile(profile);
    const expectedState: TProfileState = {
      ...initialState,
      profile,
    };

    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle setProfile with null', () => {
    const action = setProfile(null);
    const expectedState: TProfileState = {
      ...initialState,
      profile: null,
    };

    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle setProfileIsLoading', () => {
    const action = setProfileIsLoading(true);
    const expectedState: TProfileState = {
      ...initialState,
      isLoading: true,
    };

    expect(reducer(initialState, action)).toEqual(expectedState);
  });
});
