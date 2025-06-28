
import { useAuth } from '@/hooks/useAuth';
import LandingPage from './LandingPage';
import EasyTeachApp from './EasyTeachApp';

const Index = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center">
        <div className="text-center animate-fade-in">
          <div className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading EasyTeach...</p>
        </div>
      </div>
    );
  }

  if (user) {
    return <EasyTeachApp />;
  }

  // For non-authenticated users, show the EasyTeach landing page
  return <LandingPage />;
};

export default Index;
