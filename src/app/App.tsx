import { Provider } from "react-redux";
import { store } from "./store";
import { CompaniesPageWrapper } from "../pages";
import { AddCompanyForm } from "../features";
import { CompaniesTable } from "../widgets";


function App() {
  return (
    <Provider store={store}>
      <CompaniesPageWrapper>
        <AddCompanyForm />
        <CompaniesTable />
      </CompaniesPageWrapper>
    </Provider>
  );
}

export default App;
