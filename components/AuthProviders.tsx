"use client";

import { getProviders, signIn } from 'next-auth/react';
import { useState, useEffect } from 'react';

type Provider = {
  id: string;
  name: string;
  type: string;
  signinUrl: string;
  callbackUrl: string;
  singinUrlParams: Record<string, string> | null;
}

type Providers = Record<string, Provider>;

const AuthProviders = () => {
  const [providers, setProviders] = useState<Providers | null>(null);

  useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders();
      console.log("test" , res);

      setProviders(res);
    };

    fetchProviders();
  }, []);

  if(providers) {
    return (
      <div>
        {Object.values(providers).map((provider, i) => (
            <button key={i} onClick={() => signIn(provider?.id)}>{provider.id}</button>
        ))}
      </div>
    )
  }
}

export default AuthProviders