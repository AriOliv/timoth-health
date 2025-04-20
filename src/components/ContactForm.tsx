import { useState } from "react"
import { Send } from "lucide-react"
import { useI18n } from "../i18n/I18nContext"

type FormState = {
  name: string
  email: string
  subject: string
  message: string
}

type Errors = Partial<FormState>

function validate(values: FormState, t: any): Errors {
  const errors: Errors = {}
  if (!values.name.trim()) errors.name = t.contactForm.errors.name
  if (!values.email.trim()) errors.email = t.contactForm.errors.emailRequired
  else if (!/^[\w-.]+@[\w-]+\.[a-zA-Z]{2,}$/.test(values.email))
    errors.email = t.contactForm.errors.emailInvalid
  if (!values.message.trim()) errors.message = t.contactForm.errors.message
  return errors
}

export default function ContactForm() {
  const { t } = useI18n()
  const [values, setValues] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [touched, setTouched] = useState<{ [K in keyof FormState]?: boolean }>({})
  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    setErrors(validate({ ...values, [name]: value }, t))
  }

  function handleBlur(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name } = e.target
    setTouched((tch) => ({ ...tch, [name]: true }))
    setErrors(validate(values, t))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate(values, t)
    setErrors(errs)
    setTouched({ name: true, email: true, subject: true, message: true })
    if (Object.keys(errs).length === 0) {
      setSubmitted(true)
      // Here you would send the form data to your backend or email service
      // For demo, just reset after a short delay
      setTimeout(() => {
        setValues({ name: "", email: "", subject: "", message: "" })
        setTouched({})
        setSubmitted(false)
      }, 2000)
    }
  }

  return (
    <form
      className="w-full max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-5"
      onSubmit={handleSubmit}
      noValidate
      aria-label={t.contactForm.formLabel}
    >
      <div>
        <label htmlFor="name" className="block font-medium text-gray-700 mb-1">
          {t.contactForm.name}
          <span className="text-blue-600 ml-1">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          className={`w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
            errors.name && touched.name ? "border-red-400" : "border-blue-200"
          }`}
          placeholder={t.contactForm.namePlaceholder}
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name && touched.name ? "name-error" : undefined}
          required
        />
        {errors.name && touched.name && (
          <p className="text-red-500 text-sm mt-1" id="name-error">
            {errors.name}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="email" className="block font-medium text-gray-700 mb-1">
          {t.contactForm.email}
          <span className="text-blue-600 ml-1">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          className={`w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
            errors.email && touched.email ? "border-red-400" : "border-blue-200"
          }`}
          placeholder={t.contactForm.emailPlaceholder}
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email && touched.email ? "email-error" : undefined}
          required
        />
        {errors.email && touched.email && (
          <p className="text-red-500 text-sm mt-1" id="email-error">
            {errors.email}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="subject" className="block font-medium text-gray-700 mb-1">
          {t.contactForm.subject}
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          className="w-full rounded border border-blue-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder={t.contactForm.subjectPlaceholder}
          value={values.subject}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>
      <div>
        <label htmlFor="message" className="block font-medium text-gray-700 mb-1">
          {t.contactForm.message}
          <span className="text-blue-600 ml-1">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={`w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-vertical ${
            errors.message && touched.message ? "border-red-400" : "border-blue-200"
          }`}
          placeholder={t.contactForm.messagePlaceholder}
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message && touched.message ? "message-error" : undefined}
          required
        />
        {errors.message && touched.message && (
          <p className="text-red-500 text-sm mt-1" id="message-error">
            {errors.message}
          </p>
        )}
      </div>
      <button
        type="submit"
        className="mt-2 flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold text-lg shadow hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-400"
        disabled={submitted}
        aria-busy={submitted}
      >
        <Send className="w-5 h-5" />
        {submitted ? t.contactForm.sending : t.contactForm.send}
      </button>
      {submitted && (
        <p className="text-green-600 text-center mt-2">{t.contactForm.success}</p>
      )}
    </form>
  )
}
