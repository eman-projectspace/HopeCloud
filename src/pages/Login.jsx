import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  ArrowLeft,
  CheckCircle2,
  Cloud,
  Eye,
  EyeOff,
  Heart,
  LockKeyhole,
  Mail,
  ShieldCheck,
} from 'lucide-react'
import { apiUrl } from '../config/api'

export default function Login() {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const [errors, setErrors] = useState({})
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }))

    if (errors[name]) {
      setErrors((previous) => ({
        ...previous,
        [name]: '',
      }))
    }
  }

  const validate = () => {
    const newErrors = {}

    const email = form.email.trim()
    const password = form.password

    if (!email) {
      newErrors.email = 'Please enter your email address.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address.'
    }

    if (!password) {
      newErrors.password = 'Please enter your password.'
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters.'
    }

    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const validationErrors = validate()

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setErrors({})
    setIsLoading(true)

    try {
      const response = await fetch(apiUrl('/login'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          email: form.email.trim(),
          password: form.password,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        if (data.errors) {
          const backendErrors = {}

          if (data.errors.email) {
            backendErrors.email = data.errors.email[0]
          }

          if (data.errors.password) {
            backendErrors.password = data.errors.password[0]
          }

          setErrors(backendErrors)
        } else {
          setErrors({
            email: data.message || 'Login failed. Please try again.',
          })
        }

        return
      }

      // Save login information
      localStorage.setItem('token', data.token)
      localStorage.setItem('user', JSON.stringify(data.user))

      setIsSuccess(true)

      setTimeout(() => {
        navigate('/user-dashboard')
      }, 1800)

    } catch (error) {
      console.error('Login error:', error)

      setErrors({
        email: 'Unable to connect to the server. Please try again.',
      })

    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-mist">

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Soft gradient blobs */}
        <div
          className="absolute -left-32 -top-32 h-80 w-80
          rounded-full bg-sky-100/70 blur-3xl
          animate-driftSlow"
        />

        <div
          className="absolute -bottom-40 -right-32 h-96 w-96
          rounded-full bg-sky-100/80 blur-3xl
          animate-drift"
        />

        <div
          className="absolute left-1/3 top-1/4 h-40 w-40
          rounded-full bg-white/80 blur-3xl"
        />


        {/* Decorative cloud */}
        <Cloud
          className="absolute left-[7%] top-[18%]
          h-12 w-12 text-sky-200/70
          animate-drift"
        />

        <Cloud
          className="absolute right-[8%] top-[14%]
          h-16 w-16 text-sky-200/60
          animate-driftSlow"
        />

        <Cloud
          className="absolute bottom-[12%] left-[12%]
          h-10 w-10 text-sky-200/60
          animate-driftSlow"
        />


        {/* Decorative dots */}
        <span
          className="absolute left-[15%] top-[35%]
          h-3 w-3 rounded-full bg-sky-300/70
          animate-pulseNode"
        />

        <span
          className="absolute right-[17%] top-[42%]
          h-2.5 w-2.5 rounded-full bg-sky-400/50
          animate-pulseNode"
        />

        <span
          className="absolute bottom-[25%] right-[12%]
          h-3 w-3 rounded-full bg-meadow/50
          animate-pulseNode"
        />

      </div>


      {/* =====================================================
          TOP NAVIGATION
      ====================================================== */}

      <div className="relative z-20 px-6 py-5 sm:px-10 lg:px-16">

        <div className="container-max">

          <Link
            to="/"
            className="group inline-flex items-center gap-2
            font-display text-sm font-semibold text-deepsea
            transition-all duration-300
            hover:-translate-x-1 hover:text-sky-600"
          >
            <span
              className="flex h-9 w-9 items-center justify-center
              rounded-xl bg-white shadow-card
              transition-all duration-300
              group-hover:shadow-glow"
            >
              <ArrowLeft className="h-4 w-4" />
            </span>

            Back to Home
          </Link>

        </div>

      </div>


      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <main className="relative z-10 flex min-h-[calc(100vh-80px)]
        items-center justify-center px-6 pb-12 pt-4
        sm:px-10 lg:px-16">

        <div className="container-max w-full">

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">


            {/* =================================================
                LEFT BRANDING / MESSAGE
            ================================================== */}

            <section className="hidden lg:block">

              <div className="max-w-xl">

                {/* Eyebrow */}
                <div className="eyebrow">
                  <Heart className="h-3.5 w-3.5 fill-sky-500 text-sky-500" />
                  Welcome to HopeCloud
                </div>


                {/* Heading */}
                <h1 className="mt-5 text-5xl font-bold leading-[1.08]
                  text-deepsea xl:text-6xl">

                  Welcome back.

                  <span className="mt-2 block text-sky-500">
                    Let's spread hope.
                  </span>

                </h1>


                {/* Description */}
                <p className="mt-6 max-w-lg text-lg leading-8 text-slate-muted">
                  Sign in to continue your journey of giving.
                  Together, small acts of kindness can make a
                  meaningful difference.
                </p>


                {/* Floating visual */}
                <div className="relative mt-12 h-44">

                  {/* Main circle */}
                  <div
                    className="absolute left-12 top-2 flex h-32 w-32
                    items-center justify-center rounded-full
                    bg-white/80 shadow-soft backdrop-blur-xl
                    animate-drift"
                  >

                    <div
                      className="flex h-20 w-20 items-center justify-center
                      rounded-full bg-sky-50"
                    >
                      <Heart
                        className="h-10 w-10 fill-sky-500 text-sky-500"
                      />
                    </div>

                  </div>


                  {/* Small cards */}
                  <div
                    className="absolute left-40 top-12 flex h-16 w-16
                    items-center justify-center rounded-2xl
                    bg-white shadow-card
                    animate-driftSlow"
                  >
                    👕
                  </div>

                  <div
                    className="absolute left-64 top-2 flex h-16 w-16
                    items-center justify-center rounded-2xl
                    bg-white shadow-card
                    animate-drift"
                  >
                    📚
                  </div>

                  <div
                    className="absolute left-72 top-24 flex h-16 w-16
                    items-center justify-center rounded-2xl
                    bg-white shadow-card
                    animate-driftSlow"
                  >
                    🧸
                  </div>

                </div>


                {/* Trust points */}
                <div className="mt-2 flex flex-wrap gap-x-6 gap-y-3">

                  <div className="flex items-center gap-2 text-sm text-slate-muted">
                    <ShieldCheck className="h-4 w-4 text-meadow-500" />
                    Secure experience
                  </div>

                  <div className="flex items-center gap-2 text-sm text-slate-muted">
                    <Heart className="h-4 w-4 fill-sky-500 text-sky-500" />
                    Give with purpose
                  </div>

                </div>

              </div>

            </section>


            {/* =================================================
                LOGIN CARD
            ================================================== */}

            <section className="w-full">

              <div
                className="mx-auto w-full max-w-md
                rounded-[2rem]
                border border-white/80
                bg-white/85
                p-7 shadow-soft
                backdrop-blur-xl
                sm:p-9
                animate-fadeUp"
              >

                {/* Mobile logo */}
                <div className="mb-7 flex items-center justify-center lg:hidden">

                  <Link
                    to="/"
                    className="group flex items-center gap-2
                    font-display text-xl font-extrabold text-deepsea"
                  >
                    <span
                      className="flex h-10 w-10 items-center justify-center
                      rounded-xl bg-deepsea text-white shadow-soft
                      transition-all duration-300
                      group-hover:scale-105 group-hover:shadow-glow"
                    >
                      <Cloud className="h-5 w-5" />
                    </span>

                    HopeCloud
                  </Link>

                </div>


                {/* Heading */}
                <div className="mb-7 text-center lg:text-left">

                  <h2 className="font-display text-3xl font-bold text-deepsea">
                    Sign in
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-slate-muted">
                    Welcome back! Enter your details to continue.
                  </p>

                </div>


                {/* SUCCESS STATE */}
                {isSuccess ? (

                  <div
                    className="flex flex-col items-center py-10 text-center
                    animate-fadeUp"
                  >

                    <div
                      className="flex h-20 w-20 items-center justify-center
                      rounded-full bg-meadow/10"
                    >
                      <CheckCircle2
                        className="h-12 w-12 text-meadow-600"
                      />
                    </div>

                    <h3 className="mt-6 text-2xl font-bold text-deepsea">
                      Welcome back!
                    </h3>

                    <p className="mt-2 max-w-xs text-sm leading-6 text-slate-muted">
                      You have signed in successfully.
                      Taking you to HopeCloud...
                    </p>

                  </div>

                ) : (

                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    className="space-y-5"
                  >

                    {/* =================================================
                        EMAIL
                    ================================================== */}

                    <div>

                      <label
                        htmlFor="login-email"
                        className="mb-2 block text-sm font-semibold text-deepsea"
                      >
                        Email address
                      </label>

                      <div className="relative">

                        <Mail
                          className="pointer-events-none absolute left-4
                          top-1/2 h-4 w-4 -translate-y-1/2
                          text-slate-400"
                        />

                        <input
                          id="login-email"
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          autoComplete="email"
                          aria-invalid={Boolean(errors.email)}
                          aria-describedby={
                            errors.email ? 'login-email-error' : undefined
                          }
                          className={`w-full rounded-2xl border
                          bg-white/80 py-3.5 pl-11 pr-4
                          text-sm text-ink outline-none
                          transition-all duration-300
                          placeholder:text-slate-400
                          focus:ring-4 ${errors.email
                              ? 'border-red-300 focus:border-red-400 focus:ring-red-50'
                              : 'border-slate-200 focus:border-sky-400 focus:ring-sky-100 hover:border-sky-300'
                            }`}
                        />

                      </div>

                      {errors.email && (
                        <p
                          id="login-email-error"
                          className="mt-2 text-xs font-medium text-red-500"
                        >
                          {errors.email}
                        </p>
                      )}

                    </div>


                    {/* =================================================
                        PASSWORD
                    ================================================== */}

                    <div>

                      <label
                        htmlFor="login-password"
                        className="mb-2 block text-sm font-semibold text-deepsea"
                      >
                        Password
                      </label>

                      <div className="relative">

                        <LockKeyhole
                          className="pointer-events-none absolute left-4
                          top-1/2 h-4 w-4 -translate-y-1/2
                          text-slate-400"
                        />

                        <input
                          id="login-password"
                          name="password"
                          type={showPassword ? 'text' : 'password'}
                          value={form.password}
                          onChange={handleChange}
                          placeholder="Enter your password"
                          autoComplete="current-password"
                          aria-invalid={Boolean(errors.password)}
                          aria-describedby={
                            errors.password
                              ? 'login-password-error'
                              : undefined
                          }
                          className={`w-full rounded-2xl border
                          bg-white/80 py-3.5 pl-11 pr-12
                          text-sm text-ink outline-none
                          transition-all duration-300
                          placeholder:text-slate-400
                          focus:ring-4 ${errors.password
                              ? 'border-red-300 focus:border-red-400 focus:ring-red-50'
                              : 'border-slate-200 focus:border-sky-400 focus:ring-sky-100 hover:border-sky-300'
                            }`}
                        />

                        <button
                          type="button"
                          onClick={() => setShowPassword((value) => !value)}
                          className="absolute right-3 top-1/2
                          flex h-9 w-9 -translate-y-1/2
                          items-center justify-center rounded-xl
                          text-slate-400
                          transition-all duration-300
                          hover:bg-sky-50 hover:text-sky-600"
                          aria-label={
                            showPassword
                              ? 'Hide password'
                              : 'Show password'
                          }
                        >
                          {showPassword ? (
                            <EyeOff className="h-4.5 w-4.5" />
                          ) : (
                            <Eye className="h-4.5 w-4.5" />
                          )}
                        </button>

                      </div>

                      {errors.password && (
                        <p
                          id="login-password-error"
                          className="mt-2 text-xs font-medium text-red-500"
                        >
                          {errors.password}
                        </p>
                      )}

                    </div>


                    {/* =================================================
                        REMEMBER / FORGOT
                    ================================================== */}

                    <div className="flex items-center justify-between gap-4">

                      <label
                        htmlFor="remember-me"
                        className="flex cursor-pointer items-center gap-2
                        text-xs font-medium text-slate-muted"
                      >
                        <input
                          id="remember-me"
                          type="checkbox"
                          checked={rememberMe}
                          onChange={(e) => setRememberMe(e.target.checked)}
                          className="h-4 w-4 rounded accent-sky-500"
                        />

                        Remember me
                      </label>

                      <button
                        type="button"
                        className="text-xs font-semibold text-sky-600
                        transition-colors duration-300
                        hover:text-deepsea"
                      >
                        Forgot password?
                      </button>

                    </div>


                    {/* =================================================
                        SUBMIT
                    ================================================== */}

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="group flex w-full items-center
                      justify-center gap-2 rounded-2xl
                      bg-deepsea px-5 py-3.5
                      font-display text-sm font-bold text-white
                      shadow-soft
                      transition-all duration-300
                      hover:-translate-y-0.5
                      hover:bg-sky-600
                      hover:shadow-glow
                      active:scale-[0.98]
                      disabled:cursor-not-allowed
                      disabled:opacity-70
                      disabled:hover:translate-y-0"
                    >

                      {isLoading ? (
                        <>
                          <span
                            className="h-4 w-4 animate-spin rounded-full
                            border-2 border-white/30 border-t-white"
                          />

                          Signing in...
                        </>
                      ) : (
                        <>
                          Sign in
                          <ArrowLeft
                            className="h-4 w-4 rotate-180
                            transition-transform duration-300
                            group-hover:translate-x-1"
                          />
                        </>
                      )}

                    </button>


                    {/* =================================================
                        REGISTER LINK
                    ================================================== */}

                    <div className="pt-2 text-center">

                      <p className="text-sm text-slate-muted">

                        Don't have an account?{' '}

                        <Link
                          to="/register"
                          className="font-bold text-sky-600
                          transition-colors duration-300
                          hover:text-deepsea"
                        >
                          Join HopeCloud
                        </Link>

                      </p>

                    </div>

                  </form>

                )}

              </div>

            </section>

          </div>

        </div>

      </main>

    </div>
  )
}