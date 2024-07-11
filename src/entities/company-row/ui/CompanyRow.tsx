import { useCallback } from "react";
import {
  editCompanyAddress,
  editCompanyName,
  toggleSelect,
} from "../model/slice/companiesSlice";
import { EditableSpan } from "../../../shared/ui/EditableSpan";
import { Company } from "../model/type/company-row-type";
import { useAppDispatch } from "../../../app/appHooks";

type PropsType = {
  company: Company;
};

const CompanyRow = ({ company }: PropsType) => {
  const dispatch = useAppDispatch();

  const handleSelect = () => {
    dispatch(toggleSelect(company.id));
  };

  const handleEditName = useCallback(
    (name: string) => {
      dispatch(editCompanyName({ id: company.id, name }));
    },
    [company.id, dispatch]
  );
  const handleEditAddress = useCallback(
    (address: string) => {
      dispatch(editCompanyAddress({ id: company.id, address }));
    },
    [company.id, dispatch]
  );

  return (
    <tr style={{ backgroundColor: company.isSelected ? "lightblue" : "white" }}>
      <td>
        <input
          type="checkbox"
          checked={company.isSelected}
          onChange={handleSelect}
        />
      </td>
      <td>
        <EditableSpan onChange={handleEditName} value={company.name} />
      </td>
      <td>
        <EditableSpan onChange={handleEditAddress} value={company.address} />
      </td>
    </tr>
  );
};

export default CompanyRow;
