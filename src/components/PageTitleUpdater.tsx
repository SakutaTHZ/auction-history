import { useEffect } from "react";
import { matchPath, useLocation } from "react-router-dom";

const TITLE_MAP = {
  "/auctionhistory": "Auction History",
  "/papers": "Papers",
};

const PageTitleUpdater = () => {
    const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    let title = "Auction History"; // Default title

    // Check if any predefined route matches
    for (const pattern of Object.keys(TITLE_MAP) as Array<keyof typeof TITLE_MAP>) {
      if (matchPath(pattern, path)) {
        title = TITLE_MAP[pattern];
        break;
      }
    }

    document.title = title;
  }, [location]);

  return null;
};

export default PageTitleUpdater;