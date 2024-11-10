'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Mail, Lock } from 'lucide-react';

export default function Login() {
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Login successful!",
      description: "Welcome back!",
    });

    setTimeout(() => {
      router.push('/dashboard');
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-zinc-900 to-zinc-950 p-4">
      <div className="w-full max-w-md space-y-8 bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 backdrop-blur-xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">
            Welcome back
          </h2>
          <p className="mt-2 text-zinc-400">
            Sign in to continue to your dashboard
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-5 w-5 text-zinc-400" />
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                required
                className="pl-10"
                disabled={isLoading}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-5 w-5 text-zinc-400" />
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                required
                className="pl-10"
                disabled={isLoading}
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </Button>
        </form>

        <p className="text-center text-sm text-zinc-400">
          Don't have an account?{' '}
          <Link href="/signup" className="text-indigo-400 hover:text-indigo-300">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}