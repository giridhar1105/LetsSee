'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { User, Lock, Mail, ArrowRight } from 'lucide-react';

export default function SignUp() {
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Account created successfully!",
      description: "Redirecting you to login...",
    });

    setTimeout(() => {
      router.push('/login');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-zinc-900 to-zinc-950 p-4">
      <div className="w-full max-w-md space-y-8 bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 backdrop-blur-xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">
            Create your account
          </h2>
          <p className="mt-2 text-zinc-400">
            Join us to explore amazing applications
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <div className="relative">
              <User className="absolute left-3 top-3 h-5 w-5 text-zinc-400" />
              <Input
                id="name"
                placeholder="John Doe"
                required
                className="pl-10"
                disabled={isLoading}
              />
            </div>
          </div>

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
            className="w-full gap-2"
            disabled={isLoading}
          >
            {isLoading ? "Creating account..." : "Create Account"} 
            <ArrowRight className="w-4 h-4" />
          </Button>
        </form>

        <p className="text-center text-sm text-zinc-400">
          Already have an account?{' '}
          <Link href="/login" className="text-indigo-400 hover:text-indigo-300">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}