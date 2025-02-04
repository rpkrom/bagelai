import './dashboardLayout.css';
import { useAuth } from '@clerk/clerk-react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import ChatList from '../../components/chatList/chatList';

const DashboardLayout = () => {

  const { userId, isLoaded } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded && !userId) {
      navigate('/sign-in');
    }
  }, [isLoaded, userId, navigate]);

  if (!isLoaded) {
    return "Loading...";
  }

  return (
    <div className="dashboardLayout">
        <div className='menu'><ChatList /></div>
        <div className='content'>
            <Outlet />
        </div>
    </div>
  )
}

export default DashboardLayout;