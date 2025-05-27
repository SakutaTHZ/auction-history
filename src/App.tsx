import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import AuctionHistory from "./pages/AuctionHistory/AuctionHistory";
import Papers from "./pages/PapersPage/Papers";
import PageTitleUpdater from "./components/PageTitleUpdater";

function App() {
  return (
    <>
      <PageTitleUpdater/>
      
      <Routes>
        {/* Default route redirecting to /StockFlow/login */}
        <Route path="/" element={<Navigate to="/auctionhistory" replace />} />
        <Route path="/auctionhistory" element={<AuctionHistory />} />
        <Route path="/papers" element={<Papers />} />

        {/* Catch-all route to redirect any invalid URL */}
        <Route path="*" element={<Navigate to="/auctionhistory" replace />} />
      </Routes>
    </>
  );
}

const MainApp: React.FC = () => (
  <ErrorBoundary>
    <Router>
      <App />
    </Router>
  </ErrorBoundary>
);

export default MainApp;
