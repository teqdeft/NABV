"use client";

import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  Mail,
  User,
  Users,
  Loader2,
  Copy,
  Check,
  ArrowRight,
} from "lucide-react";

type FormData = {
  name: string;
  email: string;
  plan: "individual" | "family";
};

type FormErrors = Partial<FormData>;

const PROMO_CODE = "NABV000";
const SIGNUP_URL = "https://app.iwilltilimwell.com/register";
const LEAD_ENDPOINT = "[INSERT_LEAD_ENDPOINT]";

export function UnlockForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    plan: "family",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  const validate = (data: FormData): FormErrors => {
    const newErrors: FormErrors = {};
    if (!data.name.trim()) newErrors.name = "Name is required";
    if (!data.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      newErrors.email = "Enter a valid email";
    return newErrors;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors = validate(formData);

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitting(true);
    setErrors({});

    try {
      const web3FormData = new FormData();

      web3FormData.append("access_key", "e9e3af0d-2ab2-4240-ab6c-e25827223624");

      // Email subject
      web3FormData.append("subject", "New NABV Landing Page Lead");

      // Form fields
      web3FormData.append("name", formData.name);
      web3FormData.append("email", formData.email);
      web3FormData.append("plan", formData.plan);

      // Additional information
      web3FormData.append("signup_code", "NABV000");
      web3FormData.append("promo_code", "NABV000");
      web3FormData.append("source", "nabv-landing");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: web3FormData,
      });

      const result = await response.json();

      if (!result.success) {
        console.error("Web3Forms Error:", result);
        return;
      }

      setLeadSubmitted(true);
      setSubmitted(true);
    } catch (err) {
      console.error("Lead submission failed:", err);
    } finally {
      setSubmitting(false);
    }
  };

  const copyPromoCode = () => {
    navigator.clipboard.writeText(PROMO_CODE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (submitted) {
    return (
      <section
        id="unlock-form"
        className="section-padding bg-primary-50/50"
        aria-labelledby="success-heading"
      >
        <div className="container-main">
          <div className="max-w-md mx-auto text-center" role="status">
            <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle
                className="w-10 h-10 text-green-600"
                aria-hidden="true"
              />
            </div>

            <h2
              id="success-heading"
              className="text-3xl font-bold text-foreground mb-3"
            >
              You&apos;re confirmed, {formData.name}
            </h2>

            <p className="text-gray-600 mb-8">
              Your NABV member eligibility is verified. Here&apos;s your
              exclusive promo code:
            </p>

            <div className="bg-white border-2 border-primary rounded-xl p-6 mb-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Your Promo Code</p>
                  <p
                    className="text-3xl font-bold text-primary font-mono tracking-wider"
                    id="promo-code"
                  >
                    {PROMO_CODE}
                  </p>
                </div>
                <button
                  onClick={copyPromoCode}
                  className="flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary rounded-lg hover:bg-primary-200 transition-colors font-medium"
                  aria-label={copied ? "Copied!" : "Copy promo code"}
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4" aria-hidden="true" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" aria-hidden="true" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* <div className="mb-8 p-4 bg-white border border-primary-100 rounded-xl text-left">
              <p className="text-sm text-gray-600 mb-3 flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" aria-hidden="true" />
                This code has also been emailed to{" "}
                <strong>{formData.email}</strong> for recovery.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Next step:</strong> Click below to continue to sign up.
                The promo code will be pre-filled at checkout.
              </p>
            </div> */}

            <Button
              variant="accent"
              size="lg"
              className="w-full mb-4"
              onClick={() =>
                window.open(
                  `${SIGNUP_URL}?promo=${encodeURIComponent(PROMO_CODE)}`,
                  "_blank",
                )
              }
            >
              Continue to Sign Up
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Button>

            <p className="text-xs text-gray-500">
              By continuing, you&apos;ll be redirected to
              app.iwilltilimwell.com/register to complete your enrollment.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="unlock-form"
      className="section-padding bg-primary-50/50"
      aria-labelledby="form-heading"
    >
      <div className="container-main">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8" data-animate="fade-up">
            <h2
              id="form-heading"
              className="text-3xl lg:text-4xl font-bold leading-tight text-foreground mb-3"
            >
              Unlock your NABV member rate
            </h2>
            <p className="text-gray-600">
              Takes 30 seconds. No payment. No password. Just your member code.
            </p>
            {/* <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full text-sm font-bold mt-4">
              Promo Code: {PROMO_CODE}
            </div> */}
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-8 shadow-lg border border-primary-100"
            noValidate
          >
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Full Name{" "}
                  <span className="text-primary" aria-hidden="true">
                    *
                  </span>
                </label>
                <div className="relative">
                  <User
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    onBlur={() =>
                      setErrors({
                        ...errors,
                        name: validate({ ...formData, name: formData.name })
                          .name,
                      })
                    }
                    className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                      errors.name
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-300 focus:ring-primary"
                    } focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors`}
                    placeholder="Jane Smith"
                    aria-invalid={errors.name ? "true" : "false"}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    disabled={submitting}
                  />
                </div>
                {errors.name && (
                  <p
                    id="name-error"
                    className="mt-1 text-sm text-red-600"
                    role="alert"
                  >
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email Address{" "}
                  <span className="text-primary" aria-hidden="true">
                    *
                  </span>
                </label>
                <div className="relative">
                  <Mail
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    onBlur={() =>
                      setErrors({
                        ...errors,
                        email: validate({ ...formData, email: formData.email })
                          .email,
                      })
                    }
                    className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                      errors.email
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-300 focus:ring-primary"
                    } focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors`}
                    placeholder="jane@email.com"
                    autoComplete="email"
                    aria-invalid={errors.email ? "true" : "false"}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    disabled={submitting}
                  />
                </div>
                {errors.email && (
                  <p
                    id="email-error"
                    className="mt-1 text-sm text-red-600"
                    role="alert"
                  >
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Plan{" "}
                  <span className="text-primary" aria-hidden="true">
                    *
                  </span>
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    {
                      value: "individual",
                      label: "Individual",
                      price: "$35/mo",
                      desc: "1 person",
                    },
                    {
                      value: "family",
                      label: "Family",
                      price: "$50/mo",
                      desc: "Up to 8 people",
                    },
                  ].map((option) => (
                    <label
                      key={option.value}
                      className={`relative cursor-pointer p-4 rounded-lg border-2 transition-all ${
                        formData.plan === option.value
                          ? "border-primary bg-primary-50"
                          : "border-gray-200 hover:border-primary-200"
                      }`}
                    >
                      <input
                        type="radio"
                        name="plan"
                        value={option.value}
                        checked={formData.plan === option.value}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            plan: e.target.value as "individual" | "family",
                          })
                        }
                        className="sr-only"
                        aria-describedby={`${option.value}-desc`}
                      />
                      <div className="text-center">
                        <p className="font-semibold text-foreground">
                          {option.label}
                        </p>
                        <p className="text-2xl font-bold text-primary">
                          {option.price}
                        </p>
                        <p
                          id={`${option.value}-desc`}
                          className="text-sm text-gray-500"
                        >
                          {option.desc}
                        </p>
                      </div>
                      {formData.plan === option.value && (
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center">
                          <CheckCircle className="w-4 h-4" aria-hidden="true" />
                        </div>
                      )}
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <Button
              type="submit"
              variant="accent"
              size="lg"
              className="w-full mt-8"
              disabled={submitting}
            >
              {submitting ? (
                <>
                  <Loader2
                    className="w-5 h-5 animate-spin"
                    aria-hidden="true"
                  />
                  <span>Verifying...</span>
                </>
              ) : (
                "Confirm My NABV Rate"
              )}
            </Button>

            <p className="text-xs text-gray-500 text-center mt-4">
              By submitting, you confirm you&apos;re a current NABV member.
              We&apos;ll verify eligibility and email your promo code. No
              payment or password required.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
