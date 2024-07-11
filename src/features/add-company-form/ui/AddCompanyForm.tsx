import { ChangeEvent, useState } from "react";

import { addCompany } from "../../../entities/company-row/model/slice/companiesSlice";
import { useAppDispatch } from "../../../app/appHooks";

const AddCompanyForm = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const dispatch = useAppDispatch();

  const handleAddCompany = () => {
    if (name && address) {
      dispatch(addCompany({ name, address }));
      setName("");
      setAddress("");
    }
  };

  const handle = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    id === "address" && setAddress(value);
    id === "name" && setName(value);
  };

  return (
    <div>
      <input
        id="name"
        type="text"
        placeholder="Company Name"
        value={name}
        onChange={handle}
      />
      <input
        id="address"
        type="text"
        placeholder="Address"
        value={address}
        onChange={handle}
      />
      <button onClick={handleAddCompany}>Add Company</button>
    </div>
  );
};

export default AddCompanyForm;
