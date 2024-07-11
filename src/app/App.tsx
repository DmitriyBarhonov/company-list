import { Provider } from "react-redux";
import { store } from "./store";
import CompaniesTable from "../widgets/companies-table/ui/CompaniesTable";
import AddCompanyForm from "../features/add-company-form/ui/AddCompanyForm";

function App() {
  return (
    <Provider store={store}>
      <AddCompanyForm />
      <CompaniesTable />
    </Provider>
  );
}

export default App;
