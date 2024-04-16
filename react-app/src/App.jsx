import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import LoginPage from "./components/Login";
import RegisterPage from "./components/Register";
import LandingPage from "./components/LanndingPage";
import PersonalInfoForm from "./components/formikForm";
// import { ThemeProvider } from "@emotion/react";
// import ThemeConsumer from "./components/ThemeConsumer";
import MultiStepForm from "./components/Index";

function App() {
  
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/formik" element={<PersonalInfoForm />} />
          <Route path="/multi-step" element={<MultiStepForm />} />
        </Routes>

      </Router>
    </React.Fragment>
  );
}

export default App;
