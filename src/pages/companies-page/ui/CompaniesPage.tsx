import { CompaniesPageStyle } from "../lib/companies-page-style";
type Props = {
  children?: React.ReactNode;
};

export const CompaniesPage: React.FC<Props> = ({ children }) => {
  const { CompaniesContainer } = CompaniesPageStyle;
  return <CompaniesContainer>{children}</CompaniesContainer>;
};
