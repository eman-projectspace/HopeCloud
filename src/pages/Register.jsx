import { useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  ArrowLeft,
  Check,
  CheckCircle2,
  Cloud,
  Eye,
  EyeOff,
  Heart,
  LockKeyhole,
  Mail,
  User,
} from 'lucide-react'

export default function Register() {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const [errors, setErrors] = useState({})
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [acceptTerms, setAcceptTerms] = useState(false)
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

    if (
      name === 'password' &&
      errors.confirmPassword &&
      value === form.confirmPassword
    ) {
      setErrors((previous) => ({
        ...previous,
        confirmPassword: '',
      }))
    }

    if (
      name === 'confirmPassword' &&
      errors.confirmPassword &&
      value === form.password
    ) {
      setErrors((previous) => ({
        ...previous,
        confirmPassword: '',
      }))
    }
  }

  /*
    Password requirements
  */
  const passwordRules = useMemo(() => {
    return {
      length: form.password.length >= 8,
      uppercase: /[A-Z]/.test(form.password),
      number: /\d/.test(form.password),
      special: /[^A-Za-z0-9]/.test(form.password),
    }
  }, [form.password])

  const strengthScore = Object.values(passwordRules).filter(Boolean).length

  const passwordStrength = useMemo(() => {
    if (!form.password) {
      return {
        label: '',
        width: '0%',
      }
    }

    if (strengthScore <= 1) {
      return {
        label: 'Weak',
        width: '25%',
      }
    }

    if (strengthScore === 2) {
      return {
        label: 'Fair',
        width: '50%',
      }
    }

    if (strengthScore === 3) {
      return {
        label: 'Good',
        width: '75%',
      }
    }

    return {
      label: 'Strong',
      width: '100%',
    }
  }, [form.password, strengthScore])

  const validate = () => {
    const newErrors = {}

    const name = form.name.trim()
    const email = form.email.trim()
    const password = form.password
    const confirmPassword = form.confirmPassword

    if (!name) {
      newErrors.name = 'Please enter your full name.'
    } else if (name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters.'
    }

    if (!email) {
      newErrors.email = 'Please enter your email address.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address.'
    }

    if (!password) {
      newErrors.password = 'Please create a password.'
    } else if (strengthScore < 3) {
      newErrors.password =
        'Please choose a stronger password using the requirements below.'
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password.'
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.'
    }

    if (!acceptTerms) {
      newErrors.terms =
        'Please accept the Terms & Conditions to continue.'
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

    /*
      Frontend demo only.

      Later this section will be replaced with
      your backend registration API call.
    */
    await new Promise((resolve) => setTimeout(resolve, 1700))

    setIsLoading(false)
    setIsSuccess(true)
  }

  const handleContinue = () => {
    navigate('/login')
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-mist">

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Gradient blobs */}
        <div
          className="absolute -right-40 -top-40 h-96 w-96
          rounded-full bg-sky-100/80 blur-3xl
          animate-drift"
        />

        <div
          className="absolute -bottom-32 -left-32 h-96 w-96
          rounded-full bg-sky-100/70 blur-3xl
          animate-driftSlow"
        />

        <div
          className="absolute left-1/4 top-1/3 h-48 w-48
          rounded-full bg-white/80 blur-3xl"
        />


        {/* Clouds */}
        <Cloud
          className="absolute left-[6%] top-[15%]
          h-14 w-14 text-sky-200/70
          animate-driftSlow"
        />

        <Cloud
          className="absolute right-[9%] top-[20%]
          h-12 w-12 text-sky-200/70
          animate-drift"
        />

        <Cloud
          className="absolute bottom-[13%] right-[15%]
          h-16 w-16 text-sky-200/60
          animate-driftSlow"
        />


        {/* Decorative dots */}
        <span
          className="absolute left-[14%] top-[40%]
          h-3 w-3 rounded-full bg-sky-300/60
          animate-pulseNode"
        />

        <span
          className="absolute right-[19%] top-[38%]
          h-2.5 w-2.5 rounded-full bg-meadow/50
          animate-pulseNode"
        />

        <span
          className="absolute bottom-[22%] left-[20%]
          h-3 w-3 rounded-full bg-amber/50
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
          MAIN
      ====================================================== */}

      <main className="relative z-10 flex min-h-[calc(100vh-80px)]
        items-center justify-center px-6 pb-12 pt-2
        sm:px-10 lg:px-16">

        <div className="container-max w-full">

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">


            {/* =================================================
                LEFT SIDE
            ================================================== */}

            <section className="hidden lg:block">

              <div className="max-w-xl">

                <div className="eyebrow">
                  <Heart className="h-3.5 w-3.5 fill-sky-500 text-sky-500" />
                  Join the HopeCloud community
                </div>


                <h1 className="mt-5 text-5xl font-bold leading-[1.08]
                  text-deepsea xl:text-6xl">

                  Start your journey

                  <span className="mt-2 block text-sky-500">
                    of giving.
                  </span>

                </h1>


                <p className="mt-6 max-w-lg text-lg leading-8 text-slate-muted">
                  Create your HopeCloud account and turn things
                  you no longer need into something meaningful
                  for someone else.
                </p>


                {/* Donation icons */}
                <div className="relative mt-12 h-40">

                  <div
                    className="absolute left-8 top-5 flex h-20 w-20
                    items-center justify-center rounded-3xl
                    bg-white text-3xl shadow-card
                    animate-drift"
                  >
                    👕
                  </div>

                  <div
                    className="absolute left-32 top-0 flex h-20 w-20
                    items-center justify-center rounded-3xl
                    bg-white text-3xl shadow-card
                    animate-driftSlow"
                  >
                    📚
                  </div>

                  <div
                    className="absolute left-56 top-8 flex h-20 w-20
                    items-center justify-center rounded-3xl
                    bg-white text-3xl shadow-card
                    animate-drift"
                  >
                    🧸
                  </div>

                  <div
                    className="absolute left-80 top-0 flex h-16 w-16
                    items-center justify-center rounded-2xl
                    bg-white text-3xl shadow-card
                    animate-driftSlow"
                  >
                    ❤️
                  </div>

                </div>


                {/* Simple message */}
                <div
                  className="mt-3 flex max-w-md items-start gap-3
                  rounded-2xl border border-white/80
                  bg-white/60 p-4 backdrop-blur-sm"
                >

                  <div
                    className="flex h-9 w-9 shrink-0 items-center
                    justify-center rounded-xl bg-sky-50"
                  >
                    <Heart
                      className="h-4 w-4 fill-sky-500 text-sky-500"
                    />
                  </div>

                  <p className="text-sm leading-6 text-slate-muted">
                    <span className="font-semibold text-deepsea">
                      Every item can create an impact.
                    </span>{' '}
                    Give something a second life and help
                    someone who needs it.
                  </p>

                </div>

              </div>

            </section>


            {/* =================================================
                REGISTER CARD
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
                <div className="mb-6 flex items-center justify-center lg:hidden">

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
                <div className="mb-6 text-center lg:text-left">

                  <h2 className="font-display text-3xl font-bold text-deepsea">
                    Create account
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-slate-muted">
                    Join HopeCloud and start spreading hope.
                  </p>

                </div>


                {/* =================================================
                    SUCCESS STATE
                ================================================== */}

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
                      Welcome to HopeCloud!
                    </h3>

                    <p className="mt-3 max-w-xs text-sm leading-6 text-slate-muted">
                      Your account has been created successfully.
                      Your journey of giving starts today.
                    </p>

                    <button
                      type="button"
                      onClick={handleContinue}
                      className="mt-7 inline-flex items-center
                      justify-center gap-2 rounded-2xl
                      bg-deepsea px-6 py-3.5
                      font-display text-sm font-bold text-white
                      shadow-soft
                      transition-all duration-300
                      hover:-translate-y-0.5
                      hover:bg-sky-600
                      hover:shadow-glow
                      active:scale-[0.98]"
                    >
                      Continue to Sign In
                      <ArrowLeft className="h-4 w-4 rotate-180" />
                    </button>

                  </div>

                ) : (

                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    className="space-y-4"
                  >

                    {/* =================================================
                        FULL NAME
                    ================================================== */}

                    <div>

                      <label
                        htmlFor="register-name"
                        className="mb-2 block text-sm font-semibold text-deepsea"
                      >
                        Full name
                      </label>

                      <div className="relative">

                        <User
                          className="pointer-events-none absolute left-4
                          top-1/2 h-4 w-4 -translate-y-1/2
                          text-slate-400"
                        />

                        <input
                          id="register-name"
                          name="name"
                          type="text"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          autoComplete="name"
                          aria-invalid={Boolean(errors.name)}
                          aria-describedby={
                            errors.name ? 'register-name-error' : undefined
                          }
                          className={`w-full rounded-2xl border
                          bg-white/80 py-3.5 pl-11 pr-4
                          text-sm text-ink outline-none
                          transition-all duration-300
                          placeholder:text-slate-400
                          focus:ring-4 ${
                            errors.name
                              ? 'border-red-300 focus:border-red-400 focus:ring-red-50'
                              : 'border-slate-200 focus:border-sky-400 focus:ring-sky-100 hover:border-sky-300'
                          }`}
                        />

                      </div>

                      {errors.name && (
                        <p
                          id="register-name-error"
                          className="mt-2 text-xs font-medium text-red-500"
                        >
                          {errors.name}
                        </p>
                      )}

                    </div>


                    {/* =================================================
                        EMAIL
                    ================================================== */}

                    <div>

                      <label
                        htmlFor="register-email"
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
                          id="register-email"
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          autoComplete="email"
                          aria-invalid={Boolean(errors.email)}
                          aria-describedby={
                            errors.email ? 'register-email-error' : undefined
                          }
                          className={`w-full rounded-2xl border
                          bg-white/80 py-3.5 pl-11 pr-4
                          text-sm text-ink outline-none
                          transition-all duration-300
                          placeholder:text-slate-400
                          focus:ring-4 ${
                            errors.email
                              ? 'border-red-300 focus:border-red-400 focus:ring-red-50'
                              : 'border-slate-200 focus:border-sky-400 focus:ring-sky-100 hover:border-sky-300'
                          }`}
                        />

                      </div>

                      {errors.email && (
                        <p
                          id="register-email-error"
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
                        htmlFor="register-password"
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
                          id="register-password"
                          name="password"
                          type={showPassword ? 'text' : 'password'}
                          value={form.password}
                          onChange={handleChange}
                          placeholder="Create a strong password"
                          autoComplete="new-password"
                          aria-invalid={Boolean(errors.password)}
                          aria-describedby="password-requirements"
                          className={`w-full rounded-2xl border
                          bg-white/80 py-3.5 pl-11 pr-12
                          text-sm text-ink outline-none
                          transition-all duration-300
                          placeholder:text-slate-400
                          focus:ring-4 ${
                            errors.password
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


                      {/* Password strength */}
                      {form.password && (
                        <div className="mt-3">

                          <div className="flex items-center justify-between">

                            <span className="text-xs font-medium text-slate-muted">
                              Password strength
                            </span>

                            <span
                              className={`text-xs font-bold ${
                                passwordStrength.label === 'Strong'
                                  ? 'text-meadow-600'
                                  : passwordStrength.label === 'Good'
                                    ? 'text-sky-600'
                                    : passwordStrength.label === 'Fair'
                                      ? 'text-amber-600'
                                      : 'text-red-500'
                              }`}
                            >
                              {passwordStrength.label}
                            </span>

                          </div>


                          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100">

                            <div
                              className={`h-full rounded-full transition-all duration-500 ${
                                passwordStrength.label === 'Strong'
                                  ? 'bg-meadow-500'
                                  : passwordStrength.label === 'Good'
                                    ? 'bg-sky-500'
                                    : passwordStrength.label === 'Fair'
                                      ? 'bg-amber-500'
                                      : 'bg-red-400'
                              }`}
                              style={{
                                width: passwordStrength.width,
                              }}
                            />

                          </div>

                        </div>
                      )}


                      {/* Password requirements */}
                      <div
                        id="password-requirements"
                        className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2"
                      >

                        <PasswordRequirement
                          valid={passwordRules.length}
                          text="8+ characters"
                        />

                        <PasswordRequirement
                          valid={passwordRules.uppercase}
                          text="Uppercase letter"
                        />

                        <PasswordRequirement
                          valid={passwordRules.number}
                          text="One number"
                        />

                        <PasswordRequirement
                          valid={passwordRules.special}
                          text="Special character"
                        />

                      </div>

                      {errors.password && (
                        <p className="mt-2 text-xs font-medium text-red-500">
                          {errors.password}
                        </p>
                      )}

                    </div>


                    {/* =================================================
                        CONFIRM PASSWORD
                    ================================================== */}

                    <div>

                      <label
                        htmlFor="register-confirm-password"
                        className="mb-2 block text-sm font-semibold text-deepsea"
                      >
                        Confirm password
                      </label>

                      <div className="relative">

                        <LockKeyhole
                          className="pointer-events-none absolute left-4
                          top-1/2 h-4 w-4 -translate-y-1/2
                          text-slate-400"
                        />

                        <input
                          id="register-confirm-password"
                          name="confirmPassword"
                          type={
                            showConfirmPassword ? 'text' : 'password'
                          }
                          value={form.confirmPassword}
                          onChange={handleChange}
                          placeholder="Confirm your password"
                          autoComplete="new-password"
                          aria-invalid={Boolean(errors.confirmPassword)}
                          aria-describedby={
                            errors.confirmPassword
                              ? 'register-confirm-password-error'
                              : undefined
                          }
                          className={`w-full rounded-2xl border
                          bg-white/80 py-3.5 pl-11 pr-12
                          text-sm text-ink outline-none
                          transition-all duration-300
                          placeholder:text-slate-400
                          focus:ring-4 ${
                            errors.confirmPassword
                              ? 'border-red-300 focus:border-red-400 focus:ring-red-50'
                              : 'border-slate-200 focus:border-sky-400 focus:ring-sky-100 hover:border-sky-300'
                          }`}
                        />

                        <button
                          type="button"
                          onClick={() =>
                            setShowConfirmPassword((value) => !value)
                          }
                          className="absolute right-3 top-1/2
                          flex h-9 w-9 -translate-y-1/2
                          items-center justify-center rounded-xl
                          text-slate-400
                          transition-all duration-300
                          hover:bg-sky-50 hover:text-sky-600"
                          aria-label={
                            showConfirmPassword
                              ? 'Hide confirm password'
                              : 'Show confirm password'
                          }
                        >
                          {showConfirmPassword ? (
                            <EyeOff className="h-4.5 w-4.5" />
                          ) : (
                            <Eye className="h-4.5 w-4.5" />
                          )}
                        </button>

                      </div>

                      {form.confirmPassword &&
                        form.password === form.confirmPassword && (
                          <div className="mt-2 flex items-center gap-1.5 text-xs font-medium text-meadow-600">
                            <Check className="h-3.5 w-3.5" />
                            Passwords match
                          </div>
                        )}

                      {errors.confirmPassword && (
                        <p
                          id="register-confirm-password-error"
                          className="mt-2 text-xs font-medium text-red-500"
                        >
                          {errors.confirmPassword}
                        </p>
                      )}

                    </div>


                    {/* =================================================
                        TERMS
                    ================================================== */}

                    <div>

                      <label
                        htmlFor="terms"
                        className="flex cursor-pointer items-start gap-2.5"
                      >

                        <input
                          id="terms"
                          type="checkbox"
                          checked={acceptTerms}
                          onChange={(e) => {
                            setAcceptTerms(e.target.checked)

                            if (e.target.checked) {
                              setErrors((previous) => ({
                                ...previous,
                                terms: '',
                              }))
                            }
                          }}
                          className="mt-0.5 h-4 w-4 shrink-0
                          rounded accent-sky-500"
                          aria-invalid={Boolean(errors.terms)}
                        />

                        <span className="text-xs leading-5 text-slate-muted">

                          I agree to the{' '}

                          <button
                            type="button"
                            className="font-semibold text-sky-600
                            hover:text-deepsea"
                          >
                            Terms & Conditions
                          </button>

                          {' '}and{' '}

                          <button
                            type="button"
                            className="font-semibold text-sky-600
                            hover:text-deepsea"
                          >
                            Privacy Policy
                          </button>

                        </span>

                      </label>

                      {errors.terms && (
                        <p className="mt-2 text-xs font-medium text-red-500">
                          {errors.terms}
                        </p>
                      )}

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

                          Creating account...
                        </>
                      ) : (
                        <>
                          Create Account

                          <ArrowLeft
                            className="h-4 w-4 rotate-180
                            transition-transform duration-300
                            group-hover:translate-x-1"
                          />
                        </>
                      )}

                    </button>


                    {/* =================================================
                        LOGIN LINK
                    ================================================== */}

                    <div className="pt-2 text-center">

                      <p className="text-sm text-slate-muted">

                        Already have an account?{' '}

                        <Link
                          to="/login"
                          className="font-bold text-sky-600
                          transition-colors duration-300
                          hover:text-deepsea"
                        >
                          Sign in
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


/* =========================================================
   PASSWORD REQUIREMENT COMPONENT
========================================================= */

function PasswordRequirement({ valid, text }) {
  return (
    <div
      className={`flex items-center gap-1.5 text-[11px] transition-colors duration-300 ${
        valid
          ? 'text-meadow-600'
          : 'text-slate-400'
      }`}
    >
      <span
        className={`flex h-4 w-4 items-center justify-center
        rounded-full transition-all duration-300 ${
          valid
            ? 'bg-meadow/15'
            : 'bg-slate-100'
        }`}
      >
        <Check className="h-2.5 w-2.5" />
      </span>

      {text}
    </div>
  )
}