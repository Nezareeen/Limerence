import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import DashboardLayout from './pages/DashboardLayout';
import DashboardHome from './pages/DashboardHome';
import FindGigs from './pages/FindGigs';
import StudentProfile from './pages/StudentProfile';
import StudentMessages from './pages/StudentMessages';
import Settings from './pages/Settings';
import CompanyLayout from './pages/CompanyLayout';
import CompanyDashboard from './pages/CompanyDashboard';
import PostGig from './pages/PostGig';
import ManageGigs from './pages/ManageGigs';
import CompanyProfile from './pages/CompanyProfile';
import CompanySettings from './pages/CompanySettings';
import FindTalent from './pages/FindTalent';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="profile" element={<StudentProfile />} />
          <Route path="messages" element={<StudentMessages />} />
          <Route path="find-gigs" element={<FindGigs />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* Company Routes */}
        <Route path="/company" element={<CompanyLayout />}>
          <Route index element={<CompanyDashboard />} />
          <Route path="post-gig" element={<PostGig />} />
          <Route path="find-talent" element={<FindTalent />} />
          <Route path="manage-gigs" element={<ManageGigs />} />
          <Route path="messages" element={<StudentMessages />} /> {/* Reusing for demo */}
          <Route path="profile" element={<CompanyProfile />} />
          <Route path="settings" element={<CompanySettings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
