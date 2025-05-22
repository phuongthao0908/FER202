import logo from './logo.svg';
import './App.css';
import EmployeeDetails from './EmployeeDetails';
import EmployeeList from './EmployeeList';
import EmployeeTable from './EmployeeTable';
import AverageAgeDisplay from './AverageAgeDisplay';
import EmployeeDropdown from './EmployeeDropdown';
import ITEmployeeList from './ITEmployeeList';
import SortedEmployeeList from './SortedEmployeeList';
import GroupedEmployeeList from './GroupedEmployeeList';
import CheckTeenager from './CheckTeenager';
import EmployeeSearch from './EmployeeSearch';
function App() {
  return (
    <div className="App">
      <EmployeeDetails />
      <EmployeeList />
      <EmployeeTable />
      <AverageAgeDisplay />
      <EmployeeDropdown />
      <ITEmployeeList />
      <SortedEmployeeList />
      <GroupedEmployeeList />
      <CheckTeenager />
      <EmployeeSearch />
    </div>
  );
}

export default App;
