import React, { useState, useEffect } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
} from 'lucide-react';
import { SERVICES } from '../data/restaurantData';

interface ContactSectionProps {
  selectedService: string;
}

interface FormValues {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  selectedService,
}) => {
  const [values, setValues] = useState<FormValues>({
    name: '',
    email: '',
    phone: '',
    service: selectedService || '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedService) {
      setValues((prev) => ({ ...prev, service: selectedService }));
      setSubmitted(false);
    }
  }, [selectedService]);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!values.name.trim() || values.name.trim().length < 2) {
      nextErrors.name = 'Please enter your full name.';
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(values.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    const digitsOnly = values.phone.replace(/\D/g, '');
    if (digitsOnly.length < 10) {
      nextErrors.phone = 'Please enter a valid 10-digit phone number.';
    }
    if (!values.message.trim() || values.message.trim().length < 10) {
      nextErrors.message = 'Please include a short message (at least 10 characters).';
    }
    return nextErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setValues({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-24 bg-[#FAF9F6] text-[#0B0B0D]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#EA580C]">
            Contact Us
          </p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-[#0B0B0D] tracking-tight text-balance">
            Plan Your Visit or Event Catering
          </h2>
          <p className="mt-3 text-base text-neutral-600 leading-relaxed">
            Reach out for table inquiries, custom wedding or corporate catering proposals, or menu consultations. Our hospitality desk responds promptly.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Validated Contact Form */}
          <div className="lg:col-span-6 rounded-xl bg-white border border-neutral-200 p-6 sm:p-8 flex flex-col justify-between">
            {submitted ? (
              <div
                className="my-auto py-8 text-center"
                role="status"
                aria-live="polite"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="mt-4 font-display text-2xl font-bold text-[#0B0B0D]">
                  Inquiry Received
                </h3>
                <p className="mt-2 text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-[#0B0B0D]">{values.name}</strong>. Our MANOJ FOOD SERVICE hospitality team has noted your inquiry
                  {values.service ? ` for ${values.service}` : ''} and will get back to you at{' '}
                  <strong className="text-[#0B0B0D]">{values.email}</strong> shortly.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-6 px-5 py-2.5 text-sm font-semibold text-white bg-[#0B0B0D] hover:bg-neutral-800 rounded-lg transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <h3 className="font-display text-xl font-semibold text-[#0B0B0D]">
                    Send Us a Message
                  </h3>
                  <p className="mt-1 text-xs text-neutral-500">
                    All fields marked with * are required.
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-[#0B0B0D] mb-1.5"
                  >
                    Full Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={values.name}
                    onChange={(e) =>
                      setValues((prev) => ({ ...prev, name: e.target.value }))
                    }
                    placeholder="e.g. Aarav Sharma"
                    aria-invalid={Boolean(errors.name)}
                    className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-[#FAF9F6] text-[#0B0B0D] placeholder:text-neutral-400 focus:outline-none focus:ring-1 ${
                      errors.name
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                        : 'border-neutral-300 focus:border-[#EA580C] focus:ring-[#EA580C]'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-600">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-sm font-medium text-[#0B0B0D] mb-1.5"
                    >
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={values.email}
                      onChange={(e) =>
                        setValues((prev) => ({ ...prev, email: e.target.value }))
                      }
                      placeholder="name@example.com"
                      aria-invalid={Boolean(errors.email)}
                      className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-[#FAF9F6] text-[#0B0B0D] placeholder:text-neutral-400 focus:outline-none focus:ring-1 ${
                        errors.email
                          ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                          : 'border-neutral-300 focus:border-[#EA580C] focus:ring-[#EA580C]'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-600">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-sm font-medium text-[#0B0B0D] mb-1.5"
                    >
                      Phone Number *
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={values.phone}
                      onChange={(e) =>
                        setValues((prev) => ({ ...prev, phone: e.target.value }))
                      }
                      placeholder="+91 98765 43210"
                      aria-invalid={Boolean(errors.phone)}
                      className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-[#FAF9F6] text-[#0B0B0D] placeholder:text-neutral-400 focus:outline-none focus:ring-1 ${
                        errors.phone
                          ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                          : 'border-neutral-300 focus:border-[#EA580C] focus:ring-[#EA580C]'
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-600">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-service"
                    className="block text-sm font-medium text-[#0B0B0D] mb-1.5"
                  >
                    Service Interest (Optional)
                  </label>
                  <select
                    id="contact-service"
                    value={values.service}
                    onChange={(e) =>
                      setValues((prev) => ({ ...prev, service: e.target.value }))
                    }
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-neutral-300 bg-[#FAF9F6] text-[#0B0B0D] focus:outline-none focus:border-[#EA580C] focus:ring-1 focus:ring-[#EA580C]"
                  >
                    <option value="">General Dining or Menu Inquiry</option>
                    {SERVICES.map((srv) => (
                      <option key={srv.id} value={srv.title}>
                        {srv.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium text-[#0B0B0D] mb-1.5"
                  >
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={values.message}
                    onChange={(e) =>
                      setValues((prev) => ({ ...prev, message: e.target.value }))
                    }
                    placeholder="Share your event date, estimated guest count, or dining question..."
                    aria-invalid={Boolean(errors.message)}
                    className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-[#FAF9F6] text-[#0B0B0D] placeholder:text-neutral-400 focus:outline-none focus:ring-1 resize-y ${
                      errors.message
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                        : 'border-neutral-300 focus:border-[#EA580C] focus:ring-[#EA580C]'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-600">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                <div className="pt-1 flex flex-wrap items-center gap-3">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#EA580C] hover:bg-[#C2410C] rounded-lg transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                  >
                    <Send className="w-4 h-4" />
                    Send Inquiry
                  </button>

                  <a
                    href="https://wa.me/919876543210?text=Hello%20MANOJ%20FOOD%20SERVICE%2C%20I%20would%20like%20to%20inquire%20about%20your%20menu%20and%20catering%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[#0B0B0D] bg-[#D4AF37]/20 hover:bg-[#D4AF37]/35 border border-[#D4AF37] rounded-lg transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B0B0D]"
                  >
                    <MessageCircle className="w-4 h-4 text-[#0B0B0D]" />
                    Chat on WhatsApp
                  </a>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Contact Details + Google Maps Location */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="rounded-xl bg-[#0B0B0D] text-white p-6 sm:p-7 border border-white/10">
              <h3 className="font-display text-xl font-semibold text-white">
                Direct Contact Information
              </h3>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#EA580C] mt-1 shrink-0" />
                  <div>
                    <p className="text-xs text-neutral-400">Phone</p>
                    <a
                      href="tel:+919876543210"
                      className="mt-0.5 font-medium text-white hover:text-[#D4AF37] transition-colors tabular-nums block"
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#EA580C] mt-1 shrink-0" />
                  <div>
                    <p className="text-xs text-neutral-400">Email</p>
                    <a
                      href="mailto:hello@manojfoodservice.com"
                      className="mt-0.5 font-medium text-white hover:text-[#D4AF37] transition-colors block break-all"
                    >
                      hello@manojfoodservice.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#EA580C] mt-1 shrink-0" />
                  <div>
                    <p className="text-xs text-neutral-400">Business Address</p>
                    <p className="mt-0.5 text-neutral-200 leading-relaxed">
                      42 Heritage Courtyard, Block B, Connaught Place, New Delhi 110001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#EA580C] mt-1 shrink-0" />
                  <div>
                    <p className="text-xs text-neutral-400">Dining &amp; Office Hours</p>
                    <p className="mt-0.5 text-neutral-200 leading-relaxed">
                      Mon – Sun: 11:00 AM – 11:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Location Section */}
            <div className="flex-1 rounded-xl overflow-hidden bg-white border border-neutral-200 flex flex-col">
              <div className="px-5 py-3.5 border-b border-neutral-200 flex items-center justify-between gap-4">
                <div>
                  <p className="font-display text-base font-semibold text-[#0B0B0D]">
                    Visit Our Flagship Location
                  </p>
                  <p className="text-xs text-neutral-500">
                    Connaught Place, New Delhi
                  </p>
                </div>
                <a
                  href="https://maps.google.com/?q=Connaught+Place+New+Delhi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#EA580C] hover:text-[#C2410C] whitespace-nowrap"
                >
                  Open in Google Maps
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="relative flex-1 min-h-[250px] bg-neutral-100">
                <iframe
                  title="MANOJ FOOD SERVICE Google Maps Location"
                  src="https://www.google.com/maps?q=Connaught%20Place%2C%20New%20Delhi&output=embed"
                  className="w-full h-full min-h-[250px] border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
