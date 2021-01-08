import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from './components/homePage_C'
import { Test } from './components/test_C'
import { Contact } from './components/contact'
import { Sidebar }  from './components/sidebar'
import { Basics } from './components/Basics'
import { Details } from './components/Details'
import { AreasServed } from './components/areasServed'
import { Services } from './components/services'
import { Services_Next } from './components/services_next'
import { Accreditation } from './components/Accreditation'
import { Accreditation_Next } from './components/accreditation_next'
import { Required_Documents } from './components/req_documents'
import { FinishApplication } from './components/finishApplication'
import { EfficiencyExpert } from './components/efficiencyExpert'


function App() {
  return (
    <div>
      <Router>
        <Route path="/" exact component={Home}></Route>
        <Route path="/sidebar" exact component={Sidebar}></Route>
        <Route path="/contact" exact component={Contact}></Route>
        <Route path="/basics" exact component={Basics}></Route>
        <Route path="/details" exact component={Details}></Route>
        <Route path="/areas" exact component={AreasServed}></Route>
        <Route path="/services" exact component={Services}></Route>
        <Route path="/services_next" exact component={Services_Next}></Route>
        <Route path="/accreditation" exact component={Accreditation}></Route>
        <Route path="/accreditation_next" exact component={Accreditation_Next}></Route>
        <Route path="/req_documents" exact component={Required_Documents}></Route>
        <Route path="/finishapplication" exact component={FinishApplication}></Route>
        <Route path="/efficiencyexpert" exact component={EfficiencyExpert}></Route>
        <Route path="/test" exact component={Test}></Route>
      </Router>
    </div>
  );
}

export default App;
