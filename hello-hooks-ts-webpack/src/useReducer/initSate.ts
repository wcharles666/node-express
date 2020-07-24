export interface CommonInitState {
  isLoading: boolean;
  leftSide: boolean;
  sideActiveMenu: String;
  headActiveMenu: String;
}

export const commonState: CommonInitState = {
  isLoading: true,
  leftSide: false,
  sideActiveMenu: '',
  headActiveMenu: '/',
};

export interface AInitState {
  abb: boolean;
}

export const aState: AInitState = {
  abb: true,
};
