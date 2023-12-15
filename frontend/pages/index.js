import { UserContext } from '@/context/UserProvider';
import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const { user } = useContext(UserContext);

  useEffect(() => {
    if(!user){
      router.push("/login");
    };
  }, [user])

  if(!user){
    return null;
  }

  const { logout } = useContext(UserContext);
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between `}
    >
      <div>
        <h1>Welcome Home Page - {user.name}</h1>
        <h2>Email: {user.email}</h2>
        <button className="btn" onClick={logout}>
          logout
        </button>
      </div>
    </main>
  )
}
