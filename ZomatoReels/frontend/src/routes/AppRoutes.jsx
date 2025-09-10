import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import UserRegister from '../pages/auth/UserRegister';
import ChooseRegister from '../pages/auth/ChooseRegister';
import UserLogin from '../pages/auth/UserLogin';
import FoodPartnerRegister from '../pages/auth/FoodPartnerRegister';
import FoodPartnerLogin from '../pages/auth/FoodPartnerLogin';
import Home from '../pages/general/Home';
import Saved from '../pages/general/Saved';
import BottomNav from '../components/BottomNav';
import CreateFood from '../pages/food-partner/CreateFood';
import Profile from '../pages/food-partner/Profile';
import ProtectedRoute from './ProtectedRoute';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Auth routes */}
        <Route path="/register" element={<ChooseRegister />} />
        <Route path="/user/register" element={<UserRegister />} />
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/food-partner/register" element={<FoodPartnerRegister />} />
        <Route path="/food-partner/login" element={<FoodPartnerLogin />} />

        {/* Protected routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
              <BottomNav />
            </ProtectedRoute>
          }
        />
        <Route
          path="/saved"
          element={
            <ProtectedRoute>
              <Saved />
              <BottomNav />
            </ProtectedRoute>
          }
        />
        <Route
          path="/create-food"
          element={
            <ProtectedRoute>
              <CreateFood />
            </ProtectedRoute>
          }
        />
        <Route
          path="/food-partner/:id"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* Catch-all → redirect to register */}
        <Route path="*" element={<Navigate to="/register" />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
