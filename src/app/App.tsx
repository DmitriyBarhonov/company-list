import { Provider } from "react-redux";
import { store } from "./store";
import CompaniesTable from "../widgets/companies-table/ui/CompaniesTable";
import { AddCompanyForm } from "../features/add-company-form/ui/AddCompanyForm";
import { CompaniesPage } from "../pages/companies-page/ui/CompaniesPage";

function App() {
  return (
    <Provider store={store}>
      <CompaniesPage>
        <AddCompanyForm />
        <CompaniesTable />
      </CompaniesPage>
    </Provider>
  );
}

export default App;
