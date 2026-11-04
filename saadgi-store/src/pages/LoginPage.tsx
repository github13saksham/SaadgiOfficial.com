import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import type { FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth, isFirebaseConfigured } from '../firebase/config'

export default function LoginPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError('')
    setMessage('')

    if (!isFirebaseConfigured || !auth) {
      setError('Login is not configured yet. Add your Firebase values to .env.')
      return
    }

    setSubmitting(true)
    try {
      await signInWithEmailAndPassword(auth, email.trim(), password)
      navigate('/account')
    } catch (loginError) {
      const errorMessage =
        loginError instanceof Error
          ? loginError.message
          : 'Unable to sign in. Please try again.'
      setError(errorMessage)
    } finally {
      setSubmitting(false)
    }
  }

  const handlePasswordReset = async () => {
    setError('')
    setMessage('')

    if (!email.trim()) {
      setError('Enter your email address first to request a password reset.')
      return
    }
    if (!isFirebaseConfigured || !auth) {
      setError('Password reset is not configured yet. Add your Firebase values to .env.')
      return
    }

    try {
      await sendPasswordResetEmail(auth, email.trim())
      setMessage('Password reset instructions have been sent to your email.')
    } catch (resetError) {
      const errorMessage =
        resetError instanceof Error
          ? resetError.message
          : 'Unable to send a password reset email.'
      setError(errorMessage)
    }
  }

  return (
    <section className="mx-auto max-w-[1100px] px-4 py-16 md:px-8 lg:py-24">
      <div className="mx-auto grid max-w-4xl overflow-hidden rounded-[28px] border border-[#e7dacb] bg-[#fffdfb] shadow-[0_24px_70px_rgba(52,36,28,0.08)] md:grid-cols-[0.85fr_1.15fr]">
        <div className="flex flex-col justify-end bg-[#34241c] p-8 text-white md:p-10">
          <p className="text-[10px] uppercase tracking-[0.24em] text-[#d9c39d]">Welcome back</p>
          <h1 className="mt-4 font-display text-5xl leading-[0.95]">Your SAADGI, saved.</h1>
          <p className="mt-4 text-sm leading-7 text-white/75">
            Sign in to revisit your orders, saved styles, and account details.
          </p>
        </div>
        <div className="p-7 sm:p-10">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8a725f]">Account access</p>
          <h2 className="mt-2 font-display text-4xl text-[#34241c]">Sign in</h2>
          <form onSubmit={handleLogin} className="mt-7 space-y-5">
            <label className="block text-xs font-medium text-[#5b4337]">
              Email address
              <input
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="mt-2 h-12 w-full rounded-xl border border-[#e2d4c3] bg-[#fcfaf7] px-4 text-sm text-[#34241c] outline-none transition focus:border-[#b69a69]"
              />
            </label>
            <label className="block text-xs font-medium text-[#5b4337]">
              Password
              <input
                type="password"
                required
                autoComplete="current-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="mt-2 h-12 w-full rounded-xl border border-[#e2d4c3] bg-[#fcfaf7] px-4 text-sm text-[#34241c] outline-none transition focus:border-[#b69a69]"
              />
            </label>
            {error && (
              <p role="alert" className="rounded-lg bg-[#fbefed] px-3 py-2 text-xs leading-5 text-[#8b3e38]">
                {error}
              </p>
            )}
            {message && (
              <p role="status" className="rounded-lg bg-[#eef4eb] px-3 py-2 text-xs leading-5 text-[#49643f]">
                {message}
              </p>
            )}
            <button
              type="submit"
              disabled={submitting}
              className="flex h-12 w-full items-center justify-center rounded-full bg-[#34241c] text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#72523e] disabled:cursor-wait disabled:opacity-60"
            >
              {submitting ? 'Signing in…' : 'Sign in'}
            </button>
          </form>
          <button
            type="button"
            onClick={handlePasswordReset}
            className="mt-4 text-xs text-[#72523e] underline decoration-[#cdb99f] underline-offset-4 hover:text-[#34241c]"
          >
            Forgot password?
          </button>
          <p className="mt-7 border-t border-[#eee4d9] pt-5 text-sm text-[#725b4d]">
            New to SAADGI?{' '}
            <Link to="/register" className="font-semibold text-[#34241c] underline decoration-[#cdb99f] underline-offset-4">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
