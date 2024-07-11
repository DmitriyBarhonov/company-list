import {
  deleteSelectedCompanies,
  toggleSelectAll,
} from "../../../entities/company-row/model/slice/companiesSlice";
import CompanyRow from "../../../entities/company-row/ui/CompanyRow";
import { useAppDispatch, useAppSelector } from "../../../app/appHooks";

const CompaniesTable = () => {
  const companies = useAppSelector((state) => state.companies.companies);
  const allSelected = useAppSelector((state) => state.companies.allSelected);
  const dispatch = useAppDispatch();

  const handleSelectAll = () => {
    dispatch(toggleSelectAll());
  };

  const handleDeleteCompany = () => {
    dispatch(deleteSelectedCompanies());
  };

  return (
    <div>
      <button onClick={handleDeleteCompany}>Delete Company</button>
      <table>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={allSelected}
                onChange={handleSelectAll}
              />
            </th>
            <th>Company Name</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => (
            <CompanyRow key={company.id} company={company} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompaniesTable;
