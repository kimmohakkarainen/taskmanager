import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar, Container, Nav, Row } from "react-bootstrap";

import { Menubar, Sidebar } from "./mainview";
import { ManagementView } from "./mgmtview";
import DashboardView from "./dashboardview";
import { StatisticsView } from "./statisticsview";
import { NotificationView } from "./notifview";
import { WorkView } from "./workview";

export default function App() {
  return (
    <BrowserRouter>
      <Menubar />
      <Container fluid>
        <Routes>
          <Route exact path="/" element={<DashboardView />} />
          <Route exact path="/employee" element={<DashboardView />} />
          <Route exact path="/wellbeing" element={<DashboardView />} />
          <Route exact path="/absence" element={<DashboardView />} />
          <Route exact path="/recruitment" element={<DashboardView />} />
          <Route exact path="/development" element={<DashboardView />} />
          <Route exact path="/induction" element={<DashboardView />} />
          <Route exact path="/termination" element={<DashboardView />} />
          <Route exact path="/mgmt" element={<ManagementView />} />
          <Route exact path="/mgmt-1" element={<ManagementView />} />
          <Route exact path="/mgmt-2" element={<ManagementView />} />
          <Route exact path="/mgmt-3" element={<ManagementView />} />
          <Route exact path="/mgmt-4" element={<ManagementView />} />
          <Route exact path="/mgmt-5" element={<ManagementView />} />
          <Route exact path="/mgmt-6" element={<ManagementView />} />
          <Route exact path="/mgmt-7" element={<ManagementView />} />
          <Route exact path="/stats" element={<StatisticsView />} />
          <Route exact path="/stats-1" element={<StatisticsView />} />
          <Route exact path="/stats-2" element={<StatisticsView />} />
          <Route exact path="/stats-3" element={<StatisticsView />} />
          <Route exact path="/stats-4" element={<StatisticsView />} />
          <Route exact path="/stats-5" element={<StatisticsView />} />
          <Route exact path="/stats-6" element={<StatisticsView />} />
          <Route exact path="/stats-7" element={<StatisticsView />} />
          <Route exact path="/notif" element={<NotificationView />} />
          <Route exact path="/notif-1" element={<NotificationView />} />
          <Route exact path="/notif-2" element={<NotificationView />} />
          <Route exact path="/notif-3" element={<NotificationView />} />
          <Route exact path="/notif-4" element={<NotificationView />} />
          <Route exact path="/notif-5" element={<NotificationView />} />
          <Route exact path="/notif-6" element={<NotificationView />} />
          <Route exact path="/notif-7" element={<NotificationView />} />
          <Route exact path="/work" element={<WorkView />} />
          <Route exact path="/work-1" element={<WorkView />} />
          <Route exact path="/work-2" element={<WorkView />} />
          <Route exact path="/work-3" element={<WorkView />} />
          <Route exact path="/work-4" element={<WorkView />} />
          <Route exact path="/work-5" element={<WorkView />} />
          <Route exact path="/work-6" element={<WorkView />} />
          <Route exact path="/work-7" element={<WorkView />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}
