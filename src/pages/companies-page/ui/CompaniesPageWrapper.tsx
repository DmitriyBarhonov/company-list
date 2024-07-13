import { CompaniesPageStyle } from "../lib";
import { PropsType } from "../model";

export const CompaniesPageWrapper: React.FC<PropsType> = ({ children }) => {
  const { CompaniesContainer } = CompaniesPageStyle;
  return <CompaniesContainer>{children}</CompaniesContainer>;
};
