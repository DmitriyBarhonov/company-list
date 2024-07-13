import React, { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../../app";
import { CompaniesTableStyle, useScrollCompaniesTable } from "../lib";
import { CompanyRow, deleteSelectedCompanies, toggleSelectAll } from "../../../entities";
import { Button, Checkbox } from "../../../shared";

export const CompaniesTable = () => {
  const companies = useAppSelector((state) => state.companies.companies);
  const allSelected = useAppSelector((state) => state.companies.allSelected);
  const dispatch = useAppDispatch();

  const { containerRef, currentData } = useScrollCompaniesTable(companies);

  const { CompaniesTableContainer, CompaniesTable } = CompaniesTableStyle;

  const handleSelectAll = useCallback(() => {
    dispatch(toggleSelectAll());
  }, [dispatch]);

  const handleDeleteCompany = useCallback(() => {
    dispatch(deleteSelectedCompanies());
  }, [dispatch]);

  return (
    <CompaniesTableContainer>
      <Button label={"Delete Company"} onClick={handleDeleteCompany} />
      <CompaniesTable ref={containerRef}>
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
            {currentData.map((company) => (
              <CompanyRow key={company.id} company={company} />
            ))}
          </tbody>
        </table>
      </CompaniesTable>
    </CompaniesTableContainer>
  );
};

