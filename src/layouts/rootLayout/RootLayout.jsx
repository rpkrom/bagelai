import './rootLayout.css';
import { Link, Outlet } from "react-router-dom";
import { ClerkProvider, SignedIn, UserButton } from '@clerk/clerk-react';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env file')
}

const RootLayout = () => {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <div className="rootLayout">
        <header>
          <Link to="/">
              <img src="/bagels-med-white.png" alt="" />
              <span>Bagel AI</span>
          </Link>
          <div className="user">
          <SignedIn>
            <UserButton />
          </SignedIn>
          </div>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </ClerkProvider>
    );
};

export default RootLayout;