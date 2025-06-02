import { useState } from 'react';
import { signup } from '../utils/auth';
import { useRouter } from 'next/router';
export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSignup = () => {
    signup(email, password);
    alert('Signup successful!');
    router.push('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-md w-80">
        <h1 className="text-xl font-bold mb-4">Sign Up</h1>
        <input className="w-full mb-2 p-2 border" placeholder="Email" onChange={e => setEmail(e.target.value)} />
        <input className="w-full mb-4 p-2 border" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
        <button className="bg-green-500 text-white w-full p-2" onClick={handleSignup}>Sign Up</button>
      </div>
    </div>
  );
}