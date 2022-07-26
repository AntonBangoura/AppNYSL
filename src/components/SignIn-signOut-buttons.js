import { SignInWithGoogle, signOut } from '../utilities/firebase';




const SignInButton = () => (
    <button className="bt btn-secondary btn-sm"
      onClick={() => SignInWithGoogle()}>
        Sign In
    </button>
  );

  const SignOutButton = () => (
    <button className="btn btn-secondary btn-sm"
        onClick={() => signOut()}>
      Sign Out
    </button>
  );


export {SignInButton, SignOutButton}