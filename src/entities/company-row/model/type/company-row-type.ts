export type Company = {
  id: number;
  name: string;
  address: string;
  isSelected: boolean;
};

export interface CompaniesState {
  companies: Company[];
  allSelected: boolean;
}
export type PropsType = {
  company: Company;
};
