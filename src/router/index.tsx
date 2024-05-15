import { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage, LoginPage, NotFoundPage, RegisterPage } from '@/pages';

export const RouterProvider: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<HomePage />} />
        <Route path="/reset-password" element={<HomePage />} />
        <Route path="/profile" element={<HomePage />} />
        <Route path="/ingredients/:id" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};
