import { ChangeEvent, useState } from "react";
import { useAppDispatch } from "../../../app";
import { AddCompanyFormStyle } from "../lib";
import { addCompany } from "../../../entities";
import { Button, Input } from "../../../shared";

 

export const AddCompanyForm = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const dispatch = useAppDispatch();

  const { FormContainer, InputInner } = AddCompanyFormStyle;

  const handleAddCompany = () => {
    if (name && address) {
      dispatch(addCompany({ name, address }));
      setName("");
      setAddress("");
    }
  };

  const handle = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    id === "company-address" && setAddress(value);
    id === "company-name" && setName(value);
  };
  
  return (
    <FormContainer>
      <InputInner>
        <Input
          id="company-name"
          type="text"
          placeholder="Company Name"
          value={name}
          onChange={handle}
        />
        <Input
          id="company-address"
          type="text"
          placeholder="Address"
          value={address}
          onChange={handle}
        />
      </InputInner>
      <Button label={"Add company"} onClick={handleAddCompany} />
    </FormContainer>
  );
};
