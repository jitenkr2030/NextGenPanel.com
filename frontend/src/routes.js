import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';

// Import pages
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import UserManagementPage from './pages/UserManagementPage';
import WebServerManagementPage from './pages/WebServerManagementPage';
import DomainManagementPage from './pages/DomainManagementPage';
import FileManagerPage from './pages/FileManagerPage';
import ApplicationManagementPage from './pages/ApplicationManagementPage';
import DatabaseManagementPage from './pages/DatabaseManagementPage';
import SecurityPage from './pages/SecurityPage';
import ResourceManagementPage from './pages/ResourceManagementPage';
import BackupPage from './pages/BackupPage';
import AnalyticsPage from './pages/AnalyticsPage';
import EmailManagementPage from './pages/EmailManagementPage';
import CollaborationPage from './pages/CollaborationPage';
import APIManagementPage from './pages/APIManagementPage';
import ContainerManagementPage from './pages/ContainerManagementPage';
import StagingPage from './pages/StagingPage';
import EcommercePage from './pages/EcommercePage';
import PerformancePage from './pages/PerformancePage';
import BrandingPage from './pages/BrandingPage';
import MigrationPage from './pages/MigrationPage';
import AIPage from './pages/AIPage';
import CloudManagementPage from './pages/CloudManagementPage';
import BillingPage from './pages/BillingPage';
import ResellerPage from './pages/ResellerPage';
import MarketingPage from './pages/MarketingPage';
import NetworkingPage from './pages/NetworkingPage';
import SupportPage from './pages/SupportPage';
import NotFoundPage from './pages/NotFoundPage';

// Protected Route Component
const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useAuth();
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <ProtectedRoute exact path="/dashboard" component={DashboardPage} />
        <ProtectedRoute exact path="/user-management" component={UserManagementPage} />
        <ProtectedRoute exact path="/web-server-management" component={WebServerManagementPage} />
        <ProtectedRoute exact path="/domain-management" component={DomainManagementPage} />
        <ProtectedRoute exact path="/file-manager" component={FileManagerPage} />
        <ProtectedRoute exact path="/application-management" component={ApplicationManagementPage} />
        <ProtectedRoute exact path="/database-management" component={DatabaseManagementPage} />
        <ProtectedRoute exact path="/security" component={SecurityPage} />
        <ProtectedRoute exact path="/resource-management" component={ResourceManagementPage} />
        <ProtectedRoute exact path="/backup" component={BackupPage} />
        <ProtectedRoute exact path="/analytics" component={AnalyticsPage} />
        <ProtectedRoute exact path="/email-management" component={EmailManagementPage} />
        <ProtectedRoute exact path="/collaboration" component={CollaborationPage} />
        <ProtectedRoute exact path="/api-management" component={APIManagementPage} />
        <ProtectedRoute exact path="/container-management" component={ContainerManagementPage} />
        <ProtectedRoute exact path="/staging" component={StagingPage} />
        <ProtectedRoute exact path="/ecommerce" component={EcommercePage} />
        <ProtectedRoute exact path="/performance" component={PerformancePage} />
        <ProtectedRoute exact path="/branding" component={BrandingPage} />
        <ProtectedRoute exact path="/migration" component={MigrationPage} />
        <ProtectedRoute exact path="/ai" component={AIPage} />
        <ProtectedRoute exact path="/cloud-management" component={CloudManagementPage} />
        <ProtectedRoute exact path="/billing" component={BillingPage} />
        <ProtectedRoute exact path="/reseller" component={ResellerPage} />
        <ProtectedRoute exact path="/marketing" component={MarketingPage} />
        <ProtectedRoute exact path="/networking" component={NetworkingPage} />
        <ProtectedRoute exact path="/support" component={SupportPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
