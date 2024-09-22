import { useState } from 'react';
import { useRouter } from 'next/router';
import { signupUser } from '../services/api';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSignup = async () => {
    const res = await signupUser({ email, password });
    localStorage.setItem('token', res.token);
    router.push('/');
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-8 bg-gray-800 rounded-lg">
        <h2 className="text-white text-2xl mb-4">Signup</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4 p-2 w-full rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4 p-2 w-full rounded"
        />
        <button onClick={handleSignup} className="bg-red-600 text-white w-full p-2 rounded">
          Signup
        </button>
      </div>
    </div>
  );
};

export default Signup;
