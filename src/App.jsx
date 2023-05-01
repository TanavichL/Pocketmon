import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RequireAuth } from "./auth/Authenticated";
import Homepage from "./pages/Homepage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import AddPocket from "./pages/AddPocket";
import Dashboard from "./pages/Dashboard";
import Pocket from "./pages/Pocket";
import Withdraw from "./pages/Withdraw";
import Profile from "./pages/Profile";
import TransferTo from "./pages/TransferTo";
import TransferFrom from "./pages/TransferFrom";
import Notification from "./pages/Notification";
import TransferPocket from "./pages/TransferPocket";
import Achievement from "./pages/Achievement";
import ForgotPassword from "./pages/ForgotPassword"
import TransferAccount from "./pages/TransferAccount"

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/SignIn" element={<SignIn />} />
        <Route exact path="/SignUp" element={<SignUp />} />
        <Route exact path="/forgot" element={<ForgotPassword />} />
        <Route
          exact
          path="/Notification"
          element={
            <RequireAuth>
              <Notification />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/AddPocket"
          element={
            <RequireAuth>
              <AddPocket />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/Dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/Pocket"
          element={
            <RequireAuth>
              <Pocket />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/Withdraw"
          element={
            <RequireAuth>
              <Withdraw />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/Profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/TransferTo"
          element={
            <RequireAuth>
              <TransferTo />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/TransferFrom"
          element={
            <RequireAuth>
              <TransferFrom />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/TransferPocket"
          element={
            <RequireAuth>
              <TransferPocket />
            </RequireAuth>
          }
        />
         <Route
          exact
          path="/Achievement"
          element={
            <RequireAuth>
              <Achievement />
            </RequireAuth>
          }
        />
         <Route
          exact
          path="/TransferAccount"
          element={
            <RequireAuth>
              <TransferAccount />
            </RequireAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
