import { memo, useCallback } from "react";
import {
  editCompanyAddress,
  editCompanyName,
  toggleSelect,
} from "../model/slice/companiesSlice";
import { EditableSpan } from "../../../shared/atoms/EditableSpan/ui/EditableSpan";
import { Company } from "../model/type/company-row-type";
import { useAppDispatch } from "../../../app/appHooks";
import { companyRowStyle } from "../lib/style/company-row-style";
import { Checkbox } from "../../../shared/atoms/Checkbox/ui/Checkbox";

type PropsType = {
  company: Company;
};

export const CompanyRow = memo(({ company }: PropsType) => {
  const dispatch = useAppDispatch();
  const { Tr, Td } = companyRowStyle;
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
console.log(company.id);

  return (
    <Tr $isActive={company.isSelected}>
      <Td>
        <Checkbox checked={company.isSelected} onChange={handleSelect} />
      </Td>
      <Td>
        <EditableSpan onChange={handleEditName} value={company.name} />
      </Td>
      <Td>
        <EditableSpan onChange={handleEditAddress} value={company.address} />
      </Td>
    </Tr>
  );
});
