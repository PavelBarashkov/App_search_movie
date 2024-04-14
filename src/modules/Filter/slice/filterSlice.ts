import { createSlice } from "@reduxjs/toolkit";

interface ICountry {
  value: string;
  label: string;
}

interface IInitialState {
  countries: ICountry[];
}

const initialState: IInitialState = {
  countries: [],
};

export const filterSlice = createSlice({
  name: "filterSlice",
  initialState,
  reducers: {
    setCountries: (state, action) => {
    //   const countries: ICountry[] = [];

    //   if (action.payload) {
    //       action.payload.forEach((item: any) => {
    //         countries.push({ value: item.name, label: item.name });
    //       });
    //   }
    //   const nowDate = new Date();

    //   const localStorageData = JSON.parse(
    //     localStorage.getItem("countriesList") || ""
    //   );

    //   if (
    //     localStorageData &&
    //     nowDate.getTime() - localStorageData.time < 30000
    //   ) {
    //     console.log("Работает")
    //     state.countries = localStorageData.countries;
    //   } else {
    //     localStorage.setItem(
    //       "countriesList",
    //       JSON.stringify({
    //         countries,
    //         time: new Date().getTime(),
    //       })
    //     );
    //     console.log("Не Работает")

    //     state.countries = countries;
    //   }
    },
  },
});

export const { setCountries } = filterSlice.actions;
export default filterSlice.reducer;
