import { useState } from 'react'
import type { FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth'
import { auth, isFirebaseConfigured } from '../firebase/config'
import sMonogram from '../assets/s-monogram-transparent.png'
import { Eye, EyeOff, ArrowRight } from 'lucide-react'

function GoogleIcon() {
  return (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
      />
    </svg>
  )
}

export default function LoginPage() {
  const navigate = useNavigate()
  const [mode, setMode] = useState<'signin' | 'signup'>('signin')
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [googleSubmitting, setGoogleSubmitting] = useState(false)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError('')
    setMessage('')

    if (!isFirebaseConfigured || !auth) {
      setError('Firebase authentication will connect when your Firebase credentials are added.')
      return
    }

    setSubmitting(true)
    try {
      if (mode === 'signin') {
        await signInWithEmailAndPassword(auth, email.trim(), password)
        navigate('/account')
      } else {
        const userCred = await createUserWithEmailAndPassword(auth, email.trim(), password)
        if (fullName.trim() && userCred.user) {
          await updateProfile(userCred.user, { displayName: fullName.trim() })
        }
        setMessage('Your SAADGI account was created successfully!')
        setTimeout(() => navigate('/account'), 1000)
      }
    } catch (authError) {
      const errorMessage =
        authError instanceof Error
          ? authError.message.replace('Firebase: ', '')
          : 'Unable to authenticate. Please check your credentials.'
      setError(errorMessage)
    } finally {
      setSubmitting(false)
    }
  }

  const handleGoogleSignIn = async () => {
    setError('')
    setMessage('')

    if (!isFirebaseConfigured || !auth) {
      setError('Firebase authentication will connect when your Firebase credentials are added.')
      return
    }

    setGoogleSubmitting(true)
    try {
      const provider = new GoogleAuthProvider()
      provider.setCustomParameters({ prompt: 'select_account' })
      await signInWithPopup(auth, provider)
      navigate('/account')
    } catch (googleError) {
      const errorMessage =
        googleError instanceof Error
          ? googleError.message.replace('Firebase: ', '')
          : 'Unable to sign in with Google. Please try again.'
      setError(errorMessage)
    } finally {
      setGoogleSubmitting(false)
    }
  }

  const handlePasswordReset = async () => {
    setError('')
    setMessage('')

    if (!email.trim()) {
      setError('Enter your email address first to receive a password reset link.')
      return
    }
    if (!isFirebaseConfigured || !auth) {
      setError('Firebase authentication will connect when your Firebase credentials are added.')
      return
    }

    try {
      await sendPasswordResetEmail(auth, email.trim())
      setMessage('Password reset instructions have been sent to your email.')
    } catch (resetError) {
      const errorMessage =
        resetError instanceof Error
          ? resetError.message.replace('Firebase: ', '')
          : 'Unable to send password reset email.'
      setError(errorMessage)
    }
  }

  return (
    <div className="flex min-h-[calc(100vh-140px)] items-center justify-center bg-[#faf5ed] px-4 py-12 sm:px-6 sm:py-16">
      
      {/* Luxury Editorial Modal Card - submerged with #fef5ec matching footer and navbar exactly */}
      <div className="relative w-full max-w-[980px] overflow-hidden rounded-[32px] border border-[#e9dcc5] bg-[#fef5ec] shadow-[0_24px_70px_rgba(56,37,20,0.06)] md:grid md:grid-cols-[0.95fr_1.05fr]">
        
        {/* LEFT PANEL: Submerged #fef5ec background matching the logo background and footer */}
        <div className="relative flex flex-col justify-between border-b border-[#e9dcc5] md:border-b-0 md:border-r bg-[#fef5ec] p-8 text-[#382514] sm:p-12">
          
          {/* Top: Uploaded S Logo Monogram floating seamlessly */}
          <div className="relative z-10">
            <Link to="/" className="inline-block transition-transform hover:scale-105 duration-300">
              <div className="flex items-center gap-4">
                <img
                  src={sMonogram}
                  alt="SAADGI Monogram Logo"
                  className="h-24 w-auto max-w-[130px] object-contain drop-shadow-[0_4px_16px_rgba(123,83,57,0.15)]"
                />
                <div>
                  <span className="block font-display text-3xl tracking-wider text-[#382514]">SAADGI</span>
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.3em] text-[#7b5339]">Since 2026</span>
                </div>
              </div>
            </Link>
          </div>

          {/* Middle: Editorial Brand Poetry */}
          <div className="relative z-10 my-8 sm:my-10 space-y-4">
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#7b5339]">
              {mode === 'signin' ? 'Welcome Back' : 'Join Our Circle'}
            </p>

            <h1 className="font-display text-4xl sm:text-5xl leading-[1.08] text-[#382514]">
              {mode === 'signin' ? 'Your SAADGI, saved.' : 'Timeless grace begins here.'}
            </h1>

            <p className="text-sm font-normal leading-relaxed text-[#5b3a26]">
              {mode === 'signin'
                ? 'Sign in to access your saved favorites, view order statuses, and explore personalized handcrafted ethnic collections.'
                : 'Create an account to celebrate elegance and craft. Enjoy express checkout, tailored size recommendations, and special seasonal edits.'}
            </p>

            <div className="pt-2">
              <p className="font-display text-lg italic text-[#7b5339]">
                "Where Simplicity Meets Elegance"
              </p>
            </div>
          </div>

          {/* Bottom Link */}
          <div className="relative z-10 border-t border-[#e9dcc5] pt-4 text-[11px] font-medium text-[#7b5339]">
            <Link to="/" className="hover:text-[#382514] hover:underline transition-colors">
              ← Return to Storefront
            </Link>
          </div>
        </div>

        {/* RIGHT PANEL: Rich Dark Walnut (#2d1e15) for high-contrast luxury appeal */}
        <div className="flex flex-col justify-center bg-[#2d1e15] p-7 sm:p-10 md:p-12 text-[#fef5ec]">
          
          {/* Header & Mode Switcher */}
          <div className="flex items-center justify-between border-b border-[#ebdcc8]/20 pb-4">
            <div>
              <h2 className="font-display text-3xl text-white">
                {mode === 'signin' ? 'Sign In' : 'Sign Up'}
              </h2>
              <p className="mt-0.5 text-xs text-[#d9c39d]">
                {mode === 'signin' ? 'Access your SAADGI account' : 'Join SAADGI with email or Google'}
              </p>
            </div>

            {/* Seamless Toggle */}
            <div className="flex rounded-full border border-[#ebdcc8]/25 bg-[#231710] p-1">
              <button
                type="button"
                onClick={() => {
                  setMode('signin')
                  setError('')
                  setMessage('')
                }}
                className={`rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider transition ${
                  mode === 'signin'
                    ? 'bg-[#c9a97f] text-[#2d1e15] font-bold shadow-sm'
                    : 'text-[#d9c39d] hover:text-white'
                }`}
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => {
                  setMode('signup')
                  setError('')
                  setMessage('')
                }}
                className={`rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider transition ${
                  mode === 'signup'
                    ? 'bg-[#c9a97f] text-[#2d1e15] font-bold shadow-sm'
                    : 'text-[#d9c39d] hover:text-white'
                }`}
              >
                Sign Up
              </button>
            </div>
          </div>

          {/* Google Sign-In Button */}
          <div className="mt-6">
            <button
              type="button"
              onClick={handleGoogleSignIn}
              disabled={googleSubmitting}
              className="flex h-12 w-full items-center justify-center gap-3 rounded-2xl border border-[#ebdcc8]/20 bg-[#fef5ec] px-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#382514] shadow-sm transition hover:bg-white active:scale-[0.99] disabled:opacity-60"
            >
              <GoogleIcon />
              <span>{googleSubmitting ? 'Connecting Google…' : 'Continue with Google'}</span>
            </button>

            {/* Divider */}
            <div className="relative my-6 flex items-center justify-center">
              <div className="w-full border-t border-[#ebdcc8]/20" />
              <span className="absolute bg-[#2d1e15] px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d9c39d]">
                Or with email
              </span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'signup' && (
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#d9c39d]">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="e.g. Aarohi Sharma"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="mt-1.5 h-11 w-full rounded-xl border border-[#ebdcc8]/25 bg-[#231710] px-4 text-sm text-[#fef5ec] placeholder-[#8a725f] outline-none transition focus:border-[#c9a97f] focus:bg-[#1e130c]"
                />
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#d9c39d]">
                Email Address
              </label>
              <input
                type="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1.5 h-11 w-full rounded-xl border border-[#ebdcc8]/25 bg-[#231710] px-4 text-sm text-[#fef5ec] placeholder-[#8a725f] outline-none transition focus:border-[#c9a97f] focus:bg-[#1e130c]"
              />
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#d9c39d]">
                  Password
                </label>
                {mode === 'signin' && (
                  <button
                    type="button"
                    onClick={handlePasswordReset}
                    className="text-xs font-medium text-[#d9c39d] underline decoration-[#c9a97f] underline-offset-4 hover:text-white"
                  >
                    Forgot password?
                  </button>
                )}
              </div>
              <div className="relative mt-1.5">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  autoComplete={mode === 'signin' ? 'current-password' : 'new-password'}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-11 w-full rounded-xl border border-[#ebdcc8]/25 bg-[#231710] pl-4 pr-11 text-sm text-[#fef5ec] placeholder-[#8a725f] outline-none transition focus:border-[#c9a97f] focus:bg-[#1e130c]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#d9c39d] hover:text-white"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {error && (
              <div role="alert" className="rounded-xl border border-[#d66b65]/40 bg-[#421d1b] px-4 py-2.5 text-xs text-[#ffc5c2]">
                {error}
              </div>
            )}
            {message && (
              <div role="status" className="rounded-xl border border-[#7fb072]/40 bg-[#1c3517] px-4 py-2.5 text-xs text-[#c2ecc2]">
                {message}
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="mt-2 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#c9a97f] text-xs font-semibold uppercase tracking-[0.2em] text-[#2d1e15] shadow-sm transition hover:bg-[#e4cfb2] active:scale-[0.99] disabled:opacity-60"
            >
              <span>{submitting ? 'Please wait…' : mode === 'signin' ? 'Sign In' : 'Create Account'}</span>
              <ArrowRight size={14} />
            </button>
          </form>

          {/* Footer toggle */}
          <div className="mt-6 border-t border-[#ebdcc8]/20 pt-4 text-center text-xs text-[#d9c39d]">
            {mode === 'signin' ? (
              <p>
                New to SAADGI?{' '}
                <button
                  type="button"
                  onClick={() => {
                    setMode('signup')
                    setError('')
                    setMessage('')
                  }}
                  className="font-bold text-white underline decoration-[#c9a97f] underline-offset-4 hover:text-[#c9a97f]"
                >
                  Create an account
                </button>
              </p>
            ) : (
              <p>
                Already have an account?{' '}
                <button
                  type="button"
                  onClick={() => {
                    setMode('signin')
                    setError('')
                    setMessage('')
                  }}
                  className="font-bold text-white underline decoration-[#c9a97f] underline-offset-4 hover:text-[#c9a97f]"
                >
                  Sign in here
                </button>
              </p>
            )}
          </div>
        </div>

      </div>
    </div>
  )
}
