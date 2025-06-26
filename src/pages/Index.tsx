
import { useState, useEffect } from 'react';
import LandingPage from './LandingPage';
import EasyTeachApp from './EasyTeachApp';

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is authenticated (you can implement proper auth logic here)
    const urlParams = new URLSearchParams(window.location.search);
    const isApp = urlParams.get('app') === 'true' || window.location.pathname.includes('/app');
    setIsAuthenticated(isApp);
  }, []);

  // For demo purposes, we'll show the app if URL contains 'app'
  if (isAuthenticated || window.location.href.includes('/app')) {
    return <EasyTeachApp />;
  }

  return <LandingPage />;
};

export default Index;
