import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { VerifyOtpPage } from "./pages/VerifyOtp";
import { ForgotPasswordPage } from "./pages/ForgetPass";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import About from "./pages/About";
import DashboardPage from "./components/dashboard/DashboardDetails";
import DashboardLayout from "./layouts/DashboardLayout";
import D2CPage from "./pages/D2CPage";
import MetaAdAgencyPage from "./pages/MetaPage";
import SEOAgencyPage from "./pages/SeoPage";
import CreativePage from "./pages/CreativePage";
import GoogleAdAgencyPage from "./pages/GoogleAdsPage";
import PerformanceMarketingPage from "./pages/PerformancePage";
import Buttons from "./pages/Buttons";
import FAQsPage from "./pages/FAQ";
import FormUrlsPage from "./pages/FormUrls";
import ActivityLogPage from "./pages/ActivityLog";
import CopyPagesManager from "./pages/CopyPage";
import PageMetaManager from "./pages/PageMetaManager";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />

          <Route path="/login" element={<Login />} />
          {/* <Route path="/register" element={<Register />} /> */}
          <Route path="/verify-otp" element={<VerifyOtpPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />

          <Route element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/d2c" element={<D2CPage />} />
            <Route path="/google-ads" element={<GoogleAdAgencyPage />} />
            <Route path="/meta-agency" element={<MetaAdAgencyPage />} />
            <Route path="/seo" element={<SEOAgencyPage />} />
            <Route path="/creative-agency" element={<CreativePage />} />
            <Route path="/performance" element={<PerformanceMarketingPage />} />
            {/* <Route path="/buttons" element={<Buttons />} /> */}
            <Route path="/copy-pages" element={<CopyPagesManager />} />
            <Route path="/cta-urls" element={<FormUrlsPage />} />
            {/* metadata manager  */}
            <Route path="/metadata" element={<PageMetaManager />} />
            <Route path="/faq" element={<FAQsPage />} />
            <Route path="/activity-log" element={<ActivityLogPage />} />
          </Route>

          {/* fallback route */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
        <ToastContainer position="top-right" autoClose={3000} />
      </Router>
    </AuthProvider>
  );
}