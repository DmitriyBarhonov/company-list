import { memo, useCallback } from "react";
import {
  editCompanyAddress,
  editCompanyName,
  PropsType,
  toggleSelect,
} from "../model";
import { useAppDispatch } from "../../../app";
import { companyRowStyle } from "../lib";
import { Checkbox, EditableSpan } from "../../../shared";

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
