import {
  deleteSelectedCompanies,
  toggleSelectAll,
} from "../../../entities/company-row/model/slice/companiesSlice";

import { useAppDispatch, useAppSelector } from "../../../app/appHooks";
import { CompanyRow } from "../../../entities/company-row/ui/CompanyRow";
import { Button } from "../../../shared/atoms/Button/ui/Button";
import { Checkbox } from "../../../shared/atoms/Checkbox/ui/Checkbox";
import { useCallback } from "react";
import { CompaniesTableStyle } from "../lib/companies-table-style";

const CompaniesTable = () => {
  const companies = useAppSelector((state) => state.companies.companies);
  const allSelected = useAppSelector((state) => state.companies.allSelected);
  const dispatch = useAppDispatch();

  const { CompaniesTableContainer } = CompaniesTableStyle;

  const handleSelectAll = useCallback(() => {
    dispatch(toggleSelectAll());
  }, [dispatch]);

  const handleDeleteCompany = useCallback(() => {
    dispatch(deleteSelectedCompanies());
  }, [dispatch]);
  console.log(companies);

  return (
    <CompaniesTableContainer>
      <Button label={"Delete Company"} onClick={handleDeleteCompany} />
      <table>
        <thead>
          <tr>
            <th>
              <Checkbox checked={allSelected} onChange={handleSelectAll} />
            </th>
            <th>Company Name</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => (
            <CompanyRow key={company.id} company={company} />
          )).reverse()}
        </tbody>
      </table>
    </CompaniesTableContainer>
  );
};

export default CompaniesTable;
