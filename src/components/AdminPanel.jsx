import React, { useState } from 'react';
import { 
  getBusinessInfo, getMetaTags, getServices, getTeamMembers, getReviews,
  saveBusinessInfo, saveMetaTags, saveServices, saveTeamMembers, saveReviews,
  resetAllContentToDefault, getAdminCredentials, saveAdminCredentials, setAdminSession,
  DEFAULT_META_TAGS
} from '../data/salonData';
import { 
  Settings, Globe, FileText, Scissors, Users, Star, 
  Save, RotateCcw, Check, X, ShieldAlert, Sparkles, AlertCircle,
  LogOut, Lock, KeyRound, ShieldCheck
} from 'lucide-react';

export const AdminPanel = ({ isOpen, onClose, onContentSaved, onLogout }) => {
  const [activeTab, setActiveTab] = useState('meta');
  const [businessInfo, setBusinessInfo] = useState(getBusinessInfo());
  const [metaTags, setMetaTags] = useState(getMetaTags() || DEFAULT_META_TAGS || {});
  const [services, setServices] = useState(getServices());
  const [team, setTeam] = useState(getTeamMembers());
  const [reviews, setReviews] = useState(getReviews());
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Security Credentials state
  const [currentCreds, setCurrentCreds] = useState(getAdminCredentials());
  const [newUsername, setNewUsername] = useState(currentCreds.username);
  const [currentPasswordInput, setCurrentPasswordInput] = useState('');
  const [newPasswordInput, setNewPasswordInput] = useState('');
  const [confirmPasswordInput, setConfirmPasswordInput] = useState('');
  const [credMessage, setCredMessage] = useState('');
  const [credError, setCredError] = useState('');

  if (!isOpen) return null;

  const handleUpdateCredentials = (e) => {
    e.preventDefault();
    setCredMessage('');
    setCredError('');

    if (currentPasswordInput !== currentCreds.password) {
      setCredError('Current password does not match.');
      return;
    }
    if (!newPasswordInput || newPasswordInput.length < 6) {
      setCredError('New password must be at least 6 characters long.');
      return;
    }
    if (newPasswordInput !== confirmPasswordInput) {
      setCredError('New password and confirmation do not match.');
      return;
    }

    const updated = {
      username: newUsername.trim() || 'admin',
      password: newPasswordInput,
    };
    saveAdminCredentials(updated);
    setCurrentCreds(updated);
    setCurrentPasswordInput('');
    setNewPasswordInput('');
    setConfirmPasswordInput('');
    setCredMessage('Admin credentials updated successfully!');
    setTimeout(() => setCredMessage(''), 4000);
  };

  const handleLogoutClick = () => {
    setAdminSession(false);
    if (onLogout) {
      onLogout();
    } else {
      onClose();
    }
  };

  const handleSaveAll = () => {
    saveBusinessInfo(businessInfo);
    saveMetaTags(metaTags);
    saveServices(services);
    saveTeamMembers(team);
    saveReviews(reviews);
    
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
    if (onContentSaved) onContentSaved();
  };

  const handleReset = () => {
    if (window.confirm("Are you sure you want to reset all content and meta tags to the original defaults?")) {
      resetAllContentToDefault();
      setBusinessInfo(getBusinessInfo());
      setMetaTags(getMetaTags());
      setServices(getServices());
      setTeam(getTeamMembers());
      setReviews(getReviews());
      if (onContentSaved) onContentSaved();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="bg-[#0f1014] border border-[#2c2f3b] rounded-3xl w-full max-w-5xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-[#22242c] flex items-center justify-between bg-[#14161c]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white">
              <Settings className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                <span>Urban Cuts Admin & Content Management</span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-white text-black">
                  Live CMS
                </span>
              </h2>
              <p className="text-xs text-neutral-400">
                Update SEO meta tags, Google snippet, phone number, hours, and on-page content in real-time.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleLogoutClick}
              className="px-3 py-1.5 rounded-xl bg-red-950/30 border border-red-500/30 text-red-400 hover:text-red-300 hover:bg-red-900/40 text-xs font-semibold flex items-center gap-1.5 transition-colors"
              title="Log out of Admin Session"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Log Out</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
              title="Return to Website"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-[#22242c] bg-[#0b0c0e] px-4 sm:px-6 overflow-x-auto gap-2 py-2.5">
          <button
            onClick={() => setActiveTab('meta')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all whitespace-nowrap ${
              activeTab === 'meta'
                ? 'bg-white text-black font-bold shadow'
                : 'text-neutral-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Globe className="w-4 h-4" />
            <span>SEO Meta Tags & GEO</span>
          </button>

          <button
            onClick={() => setActiveTab('business')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all whitespace-nowrap ${
              activeTab === 'business'
                ? 'bg-white text-black font-bold shadow'
                : 'text-neutral-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Business Info & Copy</span>
          </button>

          <button
            onClick={() => setActiveTab('services')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all whitespace-nowrap ${
              activeTab === 'services'
                ? 'bg-white text-black font-bold shadow'
                : 'text-neutral-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Scissors className="w-4 h-4" />
            <span>Services & Pricing</span>
          </button>

          <button
            onClick={() => setActiveTab('team')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all whitespace-nowrap ${
              activeTab === 'team'
                ? 'bg-white text-black font-bold shadow'
                : 'text-neutral-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Stylists</span>
          </button>

          <button
            onClick={() => setActiveTab('security')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all whitespace-nowrap ${
              activeTab === 'security'
                ? 'bg-white text-black font-bold shadow'
                : 'text-neutral-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Lock className="w-4 h-4" />
            <span>Security & Login</span>
          </button>
        </div>

        {/* Tab Content Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8 space-y-6">

          {/* TAB 1: META TAGS & SEO / GEO */}
          {activeTab === 'meta' && (
            <div className="space-y-6">
              {/* Google Search Result Preview */}
              <div className="p-4 rounded-2xl bg-[#0a0b0d] border border-[#262832] space-y-2">
                <span className="text-[11px] uppercase tracking-wider font-bold text-neutral-400 block">
                  Google Search Snippet Preview (AEO & GEO Ready)
                </span>
                <div className="text-xs text-neutral-400 truncate">https://urbancuts.pk › islamabad › zaraj</div>
                <div className="text-base text-[#8ab4f8] font-medium hover:underline cursor-pointer">
                  {metaTags?.title || ''}
                </div>
                <p className="text-xs text-neutral-300 line-clamp-2">
                  {metaTags?.description || ''}
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1">
                    Browser Page Title (&lt;title&gt;)
                  </label>
                  <input
                    type="text"
                    value={metaTags?.title || ''}
                    onChange={(e) => setMetaTags({ ...metaTags, title: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#171920] border border-[#2c2f3b] text-white text-sm focus:outline-none focus:border-white"
                  />
                  <p className="text-[11px] text-neutral-400 mt-1">Recommended length: 50-60 characters</p>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1">
                    Meta Description (Search Snippet)
                  </label>
                  <textarea
                    rows={3}
                    value={metaTags?.description || ''}
                    onChange={(e) => setMetaTags({ ...metaTags, description: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#171920] border border-[#2c2f3b] text-white text-sm focus:outline-none focus:border-white resize-none"
                  />
                  <p className="text-[11px] text-neutral-400 mt-1">Current: {(metaTags?.description || '').length} characters (Optimal: 150-160)</p>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1">
                    Target SEO Keywords (Comma-separated)
                  </label>
                  <input
                    type="text"
                    value={metaTags?.keywords || ''}
                    onChange={(e) => setMetaTags({ ...metaTags, keywords: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#171920] border border-[#2c2f3b] text-white text-sm focus:outline-none focus:border-white"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1">
                      OpenGraph Title (Social Share)
                    </label>
                    <input
                      type="text"
                      value={metaTags?.ogTitle || ''}
                      onChange={(e) => setMetaTags({ ...metaTags, ogTitle: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#171920] border border-[#2c2f3b] text-white text-sm focus:outline-none focus:border-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1">
                      GEO Placename
                    </label>
                    <input
                      type="text"
                      value={metaTags?.geoPlacename || ''}
                      onChange={(e) => setMetaTags({ ...metaTags, geoPlacename: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#171920] border border-[#2c2f3b] text-white text-sm focus:outline-none focus:border-white"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: BUSINESS INFO & COPY */}
          {activeTab === 'business' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1">
                    Salon Name
                  </label>
                  <input
                    type="text"
                    value={businessInfo.name}
                    onChange={(e) => setBusinessInfo({ ...businessInfo, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#171920] border border-[#2c2f3b] text-white text-sm focus:outline-none focus:border-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1">
                    Tagline
                  </label>
                  <input
                    type="text"
                    value={businessInfo.tagline}
                    onChange={(e) => setBusinessInfo({ ...businessInfo, tagline: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#171920] border border-[#2c2f3b] text-white text-sm focus:outline-none focus:border-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1">
                    Phone Number (Display)
                  </label>
                  <input
                    type="text"
                    value={businessInfo.phone}
                    onChange={(e) => setBusinessInfo({ ...businessInfo, phone: e.target.value, whatsapp: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#171920] border border-[#2c2f3b] text-white text-sm focus:outline-none focus:border-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1">
                    Operating Hours
                  </label>
                  <input
                    type="text"
                    value={businessInfo.hours}
                    onChange={(e) => setBusinessInfo({ ...businessInfo, hours: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#171920] border border-[#2c2f3b] text-white text-sm focus:outline-none focus:border-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1">
                  Full Street Address
                </label>
                <input
                  type="text"
                  value={businessInfo.fullAddress}
                  onChange={(e) => setBusinessInfo({ ...businessInfo, fullAddress: e.target.value, address: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#171920] border border-[#2c2f3b] text-white text-sm focus:outline-none focus:border-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1">
                  Top Announcement Banner
                </label>
                <input
                  type="text"
                  value={businessInfo.announcement}
                  onChange={(e) => setBusinessInfo({ ...businessInfo, announcement: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#171920] border border-[#2c2f3b] text-white text-sm focus:outline-none focus:border-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1">
                  Hero Headline
                </label>
                <input
                  type="text"
                  value={businessInfo.heroHeadline || ''}
                  onChange={(e) => setBusinessInfo({ ...businessInfo, heroHeadline: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#171920] border border-[#2c2f3b] text-white text-sm focus:outline-none focus:border-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1">
                  Hero Sub-heading / Location Highlight (Zaraj Text)
                </label>
                <input
                  type="text"
                  value={businessInfo.heroHighlight || ''}
                  onChange={(e) => setBusinessInfo({ ...businessInfo, heroHighlight: e.target.value })}
                  placeholder="In Zaraj Housing Society, Islamabad."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#171920] border border-[#2c2f3b] text-white text-sm focus:outline-none focus:border-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1">
                  Hero Subheadline
                </label>
                <textarea
                  rows={2}
                  value={businessInfo.heroSubheadline}
                  onChange={(e) => setBusinessInfo({ ...businessInfo, heroSubheadline: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#171920] border border-[#2c2f3b] text-white text-sm focus:outline-none focus:border-white resize-none"
                />
              </div>
            </div>
          )}

          {/* TAB 3: SERVICES */}
          {activeTab === 'services' && (
            <div className="space-y-4">
              <p className="text-xs text-neutral-400">
                Modify your 8 core salon services, pricing notes, and benefit copy.
              </p>
              <div className="space-y-4">
                {services.map((srv, idx) => (
                  <div key={srv.id} className="p-4 rounded-xl bg-[#14161d] border border-[#22242c] space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white text-sm">#{idx + 1} {srv.name}</span>
                      <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-white/10 text-white">
                        {srv.category}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="text-[10px] uppercase font-semibold text-neutral-400 block mb-1">Service Title</label>
                        <input
                          type="text"
                          value={srv.name}
                          onChange={(e) => {
                            const updated = [...services];
                            updated[idx].name = e.target.value;
                            setServices(updated);
                          }}
                          className="w-full px-3 py-1.5 rounded-lg bg-[#1a1c24] border border-[#2c2f3b] text-white text-xs"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] uppercase font-semibold text-neutral-400 block mb-1">Duration & Price Note</label>
                        <input
                          type="text"
                          value={srv.duration}
                          onChange={(e) => {
                            const updated = [...services];
                            updated[idx].duration = e.target.value;
                            setServices(updated);
                          }}
                          className="w-full px-3 py-1.5 rounded-lg bg-[#1a1c24] border border-[#2c2f3b] text-white text-xs"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-[10px] uppercase font-semibold text-neutral-400 block mb-1">Key Benefit Line</label>
                      <input
                        type="text"
                        value={srv.benefit}
                        onChange={(e) => {
                          const updated = [...services];
                          updated[idx].benefit = e.target.value;
                          setServices(updated);
                        }}
                        className="w-full px-3 py-1.5 rounded-lg bg-[#1a1c24] border border-[#2c2f3b] text-white text-xs"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: STYLISTS */}
          {activeTab === 'team' && (
            <div className="space-y-4">
              <p className="text-xs text-neutral-400">
                Update signature master barbers mentioned in client reviews.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {team.map((member, idx) => (
                  <div key={member.id} className="p-4 rounded-xl bg-[#14161d] border border-[#22242c] space-y-3">
                    <h4 className="font-bold text-white text-sm">{member.name} ({member.role})</h4>
                    <div>
                      <label className="text-[10px] uppercase font-semibold text-neutral-400 block mb-1">Role & Title</label>
                      <input
                        type="text"
                        value={member.role}
                        onChange={(e) => {
                          const updated = [...team];
                          updated[idx].role = e.target.value;
                          setTeam(updated);
                        }}
                        className="w-full px-3 py-1.5 rounded-lg bg-[#1a1c24] border border-[#2c2f3b] text-white text-xs"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] uppercase font-semibold text-neutral-400 block mb-1">Signature Specialty</label>
                      <input
                        type="text"
                        value={member.specialty}
                        onChange={(e) => {
                          const updated = [...team];
                          updated[idx].specialty = e.target.value;
                          setTeam(updated);
                        }}
                        className="w-full px-3 py-1.5 rounded-lg bg-[#1a1c24] border border-[#2c2f3b] text-white text-xs"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] uppercase font-semibold text-neutral-400 block mb-1">Bio</label>
                      <textarea
                        rows={2}
                        value={member.bio}
                        onChange={(e) => {
                          const updated = [...team];
                          updated[idx].bio = e.target.value;
                          setTeam(updated);
                        }}
                        className="w-full px-3 py-1.5 rounded-lg bg-[#1a1c24] border border-[#2c2f3b] text-white text-xs resize-none"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: SECURITY & CREDENTIALS MANAGEMENT */}
          {activeTab === 'security' && (
            <div className="space-y-6 max-w-xl mx-auto">
              <div className="p-4 rounded-2xl bg-[#0a0b0d] border border-[#262832] flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Urban Cuts Administrator Credentials</h3>
                  <p className="text-xs text-neutral-400">
                    Change the password required to access the <code className="text-white font-mono bg-white/10 px-1 py-0.5 rounded">/admin</code> URL portal.
                  </p>
                </div>
              </div>

              {credMessage && (
                <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>{credMessage}</span>
                </div>
              )}

              {credError && (
                <div className="p-3.5 rounded-xl bg-red-950/40 border border-red-500/30 text-red-300 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-red-400" />
                  <span>{credError}</span>
                </div>
              )}

              <form onSubmit={handleUpdateCredentials} className="space-y-4 bg-[#14161c] border border-[#22242c] p-6 rounded-2xl">
                <div>
                  <label className="text-xs font-semibold text-neutral-300 block mb-1">
                    Administrator Username
                  </label>
                  <input
                    type="text"
                    value={newUsername}
                    onChange={(e) => setNewUsername(e.target.value)}
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#1a1c24] border border-[#2c2f3b] text-white text-xs"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-neutral-300 block mb-1">
                    Current Password
                  </label>
                  <input
                    type="password"
                    value={currentPasswordInput}
                    onChange={(e) => setCurrentPasswordInput(e.target.value)}
                    placeholder="Enter current password"
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#1a1c24] border border-[#2c2f3b] text-white text-xs"
                  />
                  <span className="text-[10px] text-neutral-500 mt-1 block">Default initial password: <code className="text-neutral-300 font-mono">urbancuts2026</code></span>
                </div>

                <div>
                  <label className="text-xs font-semibold text-neutral-300 block mb-1">
                    New Password
                  </label>
                  <input
                    type="password"
                    value={newPasswordInput}
                    onChange={(e) => setNewPasswordInput(e.target.value)}
                    placeholder="Minimum 6 characters"
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#1a1c24] border border-[#2c2f3b] text-white text-xs"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-neutral-300 block mb-1">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    value={confirmPasswordInput}
                    onChange={(e) => setConfirmPasswordInput(e.target.value)}
                    placeholder="Re-type new password"
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#1a1c24] border border-[#2c2f3b] text-white text-xs"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-neutral-200 transition-all flex items-center gap-2 shadow"
                  >
                    <KeyRound className="w-4 h-4" />
                    <span>Update Password</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleLogoutClick}
                    className="text-xs font-semibold text-red-400 hover:text-red-300 flex items-center gap-1.5"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    <span>Log Out Now</span>
                  </button>
                </div>
              </form>
            </div>
          )}

        </div>

        {/* Modal Footer Controls */}
        <div className="p-4 sm:p-6 border-t border-[#22242c] bg-[#121318] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={handleReset}
              className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-red-950/30 border border-red-500/30 text-red-300 hover:bg-red-900/40 flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset to Defaults</span>
            </button>
            {saveSuccess && (
              <span className="text-xs text-emerald-400 font-bold flex items-center gap-1">
                <Check className="w-4 h-4" />
                Live Content & Meta Tags Updated!
              </span>
            )}
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl text-xs font-semibold bg-white/5 border border-neutral-700 text-neutral-300 hover:text-white"
            >
              Cancel
            </button>
            <button
              onClick={handleSaveAll}
              className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 shadow-lg shadow-white/10"
            >
              <Save className="w-4 h-4" />
              <span>Save & Apply Changes</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdminPanel;
