import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CompaniesState } from "../type/company-row-type";

const companies = Array.from({ length: 100}, (_, index) => ({
  id: index,
  name: `Company ${index + 1}`,
  address: `Address ${index + 1}`,
  isSelected: false,
})).reverse();


const initialState: CompaniesState = {
  companies,
  allSelected: false,
};

const companiesSlice = createSlice({
  name: "companies",
  initialState,
  reducers: {
    toggleSelect(state, action: PayloadAction<number>) {
      const company = state.companies.find(
        (item) => item.id === action.payload
      );
      if (company) company.isSelected = !company.isSelected;
      state.allSelected = state.companies.every((item) => item.isSelected);
    },
    toggleSelectAll(state) {
      const allSelected = state.companies.every((item) => item.isSelected);
      state.allSelected = !allSelected;
      state.companies.forEach((item) => {
        item.isSelected = !allSelected;
      });
    },
    editCompanyName(
      state,
      action: PayloadAction<{ id: number; name: string }>
    ) {
      const company = state.companies.find(
        (item) => item.id === action.payload.id
      );
      if (company) {
        company.name = action.payload.name;
      }
    },
    editCompanyAddress(
      state,
      action: PayloadAction<{ id: number; address: string }>
    ) {
      const company = state.companies.find(
        (item) => item.id === action.payload.id
      );
      if (company) company.address = action.payload.address;
    },
    addCompany(
      state,
      action: PayloadAction<{ name: string; address: string }>
    ) {
      const id = state.companies.length
        ? state.companies[0].id + 1
        : 0;
      const newCompany = {
        id,
        name: action.payload.name,
        address: action.payload.address,
        isSelected: false,
      };
      state.companies.unshift(newCompany);
    },
    deleteSelectedCompanies(state) {
      state.allSelected = false;
      state.companies = state.companies.filter((item) => !item.isSelected);
    },
  },
});

export const {
  toggleSelect,
  toggleSelectAll,
  editCompanyName,
  editCompanyAddress,
  addCompany,
  deleteSelectedCompanies,
} = companiesSlice.actions;

export const companiesReducer = companiesSlice.reducer;
