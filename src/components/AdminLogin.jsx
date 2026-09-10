import React, { useState } from 'react';
import { Logo } from './Logo';
import { verifyAdminLogin, setAdminSession } from '../data/salonData';
import { Lock, User, KeyRound, Eye, EyeOff, ArrowLeft, ShieldCheck, AlertCircle } from 'lucide-react';

export const AdminLogin = ({ onLoginSuccess, onBackToSite }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!username.trim() || !password) {
      setError('Please enter both username and password.');
      return;
    }

    setIsLoading(true);

    // Simulate quick authentication check
    setTimeout(() => {
      const isValid = verifyAdminLogin(username, password);
      if (isValid) {
        setAdminSession(true, rememberMe);
        setIsLoading(false);
        onLoginSuccess();
      } else {
        setIsLoading(false);
        setError('Invalid username or password. Please verify credentials.');
      }
    }, 300);
  };

  const handleQuickFill = () => {
    setUsername('admin');
    setPassword('urbancuts2026');
    setError('');
  };

  return (
    <div className="min-h-screen w-full bg-[#08090b] flex flex-col justify-center items-center px-4 py-12 relative overflow-hidden">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-white/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-neutral-800/10 rounded-full blur-2xl pointer-events-none" />

      {/* Back to site button */}
      <div className="w-full max-w-md mb-6 flex items-center justify-between z-10">
        <button
          onClick={onBackToSite}
          className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-400 hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
          <span>Back to Urban Cuts Website</span>
        </button>

        <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider">
          Port 3000 /admin
        </span>
      </div>

      {/* Login Card */}
      <div className="w-full max-w-md leather-surface border border-[#c8a45d]/40 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-black/90 relative z-10">
        {/* Header with Logo */}
        <div className="text-center mb-8 flex flex-col items-center">
          <Logo size="md" variant="gold" showSubtitle={false} className="mb-3" />
          <h1 className="text-xl font-serif font-bold text-white tracking-wide flex items-center gap-2 justify-center">
            <Lock className="w-4 h-4 text-[#dfba73]" />
            <span>Salon Admin Portal</span>
          </h1>
          <p className="text-xs text-neutral-400 mt-1">
            Restricted access for Urban Cuts management & SEO editing.
          </p>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-6 p-3.5 rounded-xl bg-red-950/40 border border-red-500/30 text-red-300 text-xs flex items-center gap-2.5 animate-in fade-in">
            <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
            <span>{error}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-[#dfba73] mb-1.5 font-display">
              Username or Administrator ID
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-500">
                <User className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="admin"
                autoComplete="username"
                required
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#090b10] border border-[#c8a45d]/30 focus:border-[#dfba73] focus:ring-1 focus:ring-[#dfba73]/30 text-white text-sm outline-none transition-all placeholder:text-neutral-600"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-[#dfba73] mb-1.5 font-display">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-500">
                <KeyRound className="w-4 h-4" />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                autoComplete="current-password"
                required
                className="w-full pl-10 pr-11 py-3 rounded-xl bg-[#090b10] border border-[#c8a45d]/30 focus:border-[#dfba73] focus:ring-1 focus:ring-[#dfba73]/30 text-white text-sm outline-none transition-all placeholder:text-neutral-600"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-neutral-400 hover:text-white transition-colors"
                tabIndex={-1}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between pt-1">
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 rounded border-[#c8a45d]/40 bg-[#090b10] text-[#dfba73] focus:ring-0 focus:ring-offset-0"
              />
              <span className="text-xs text-neutral-400">Remember this device</span>
            </label>

            <button
              type="button"
              onClick={handleQuickFill}
              className="text-[11px] text-[#dfba73] hover:underline underline-offset-2 transition-colors"
              title="Autofill default salon credentials"
            >
              Autofill Credentials
            </button>
          </div>

          <div className="pt-3">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#dfba73] via-[#c8a45d] to-[#9a7836] text-black hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#c8a45d]/20 active:scale-[0.99] disabled:opacity-50"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>{isLoading ? 'Authenticating...' : 'Sign In to Admin Panel'}</span>
            </button>
          </div>
        </form>

        {/* Credentials helper note for owner */}
        <div className="mt-8 pt-6 border-t border-[#c8a45d]/20 text-center">
          <div className="p-3 rounded-xl bg-white/[0.03] border border-[#c8a45d]/20 text-[11px] text-neutral-400">
            <p className="font-semibold text-neutral-300 mb-1">
              Default Owner Credentials:
            </p>
            <p className="font-mono text-neutral-300">
              User: <span className="text-[#dfba73] font-bold">admin</span> • Pass: <span className="text-[#dfba73] font-bold">urbancuts2026</span>
            </p>
            <p className="text-[10px] text-neutral-500 mt-1">
              (You can change this password inside the Admin Panel under Security)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
