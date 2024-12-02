import {BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import LoginScreen from '../../pages/login-screen/login-screen';
import MainScreen from '../../pages/main-screen/main-screen';
import SignupScreen from '../../pages/signup-screen/signup-screen';
import NotFoundScreen from "../../pages/not-fount-screen/not-fount-screen";
import PageHead from "../../pages/page-head/page-heda";
import JobBoardScreen from "../../pages/job-board-screen/job-board-screen";
import ResumeScreen from "../../pages/resume-screen/resume-screen"
import JobScreen from "../../pages/job-screen/job-screen";
import AutoApplyScreen from "../../pages/auto-apply-screen/auto-apply-screen";
import ProfileScreen from "../../pages/profile-screen/profile-screen";
import { AppRouting } from "../../const";
import ReduxProvider from "../ReduxProvider";
import ProtectedRoute from "../ProtectedRoute";
import './app.scss';
import AppliedResultsScreen from "../../pages/applied-results-screen/applied-results-screen";
import PrivatePolicyScreen from "../../pages/private-policy-screen/private-policy-screen";

const queryClient = new QueryClient();

export default function AppRoute() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReduxProvider>
        <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <Routes>
            <Route 
              path={AppRouting.Root}
              element={<SignupScreen />} 
            />
            <Route 
              path={AppRouting.Login}
              element={<LoginScreen />} 
            />
            {/* element={<ProtectedRoute />} */}
            <Route element={<ProtectedRoute />}> 
              <Route element={<PageHead />}>
                <Route 
                  path={AppRouting.Profile}
                  element={<ProfileScreen />} 
                />
                <Route 
                  path={AppRouting.Onboard}
                  element={<MainScreen />} 
                />
                <Route 
                  path={AppRouting.ResumeBuilder}
                  element={<ResumeScreen />} 
                />
                <Route 
                  path={AppRouting.AutoApply}
                  element={<AutoApplyScreen />} 
                />
                <Route 
                  path={AppRouting.AppliedResults}
                  element={<AppliedResultsScreen />} 
                />
                <Route 
                  path={AppRouting.JobBoard} 
                  element={<JobBoardScreen />}
                />
                <Route 
                  path={AppRouting.NotFound}
                  element={<NotFoundScreen />} 
                />
              </Route>
              <Route 
                path={AppRouting.Job} 
                element={<JobScreen />} 
              />
              <Route 
                path={AppRouting.PrivatePolicy} 
                element={<PrivatePolicyScreen />} 
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </ReduxProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
