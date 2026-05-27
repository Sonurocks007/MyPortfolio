"use client";

import { useState, ChangeEvent, FormEvent } from 'react';
import { sendMessage } from '../../services/api';
import { motion, AnimatePresence } from 'framer-motion';
import { ContactFormInput } from '../../types';

interface StatusState {
  loading: boolean;
  success: string | null;
  error: string | null;
}

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormInput>({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<StatusState>({ loading: false, success: null, error: null });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => 
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    try {
      await sendMessage(form);
      setStatus({ loading: false, success: 'Message sent successfully!', error: null });
      setForm({ name: '', email: '', message: '' });
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setStatus({ loading: false, success: null, error: null });
      }, 5000);
    } catch (err: any) {
      // Provide more specific error messages
      let errorMessage = 'Failed to send message. Try again later.';
      
      if (err.response?.status === 404) {
        errorMessage = 'Backend service not found. Please try again later.';
      } else if (err.response?.status >= 500) {
        errorMessage = 'Server error. Please try again later.';
      } else if (err.code === 'NETWORK_ERROR' || !err.response) {
        errorMessage = 'Network error. Please check your connection and try again.';
      } else if (err.response?.status === 400) {
        errorMessage = 'Invalid form data. Please check your inputs.';
      }
      
      setStatus({ loading: false, success: null, error: errorMessage });
      
      // Auto-hide error message after 5 seconds
      setTimeout(() => {
        setStatus({ loading: false, success: null, error: null });
      }, 5000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const inputClasses = `
    w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl
    bg-white/70 dark:bg-gray-800/70
    border-2 border-gray-200/50 dark:border-gray-700/50
    backdrop-blur-sm
    text-gray-900 dark:text-white
    placeholder:text-gray-500 dark:placeholder:text-gray-400
    focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400
    focus:border-blue-500 dark:focus:border-blue-400
    transition-all duration-300
    hover:bg-white/90 dark:hover:bg-gray-800/90
    hover:border-gray-300 dark:hover:border-gray-600
  `;

  return (
    <motion.div
      className="relative w-full"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Decorative Glow Effects */}
      <motion.div 
        className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl opacity-50"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.form
        onSubmit={handleSubmit}
        className="relative space-y-5 sm:space-y-6 bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-2xl border border-white/20 dark:border-700/20"
      >
        {/* Form Title - Mobile Only */}
        <motion.div 
          className="block md:hidden mb-6"
          variants={itemVariants}
        >
          <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 text-transparent bg-clip-text">
            Send a Message
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Fill out the form below and I'll get back to you soon.
          </p>
        </motion.div>

        {/* Form Fields */}
        <motion.div className="space-y-5 sm:space-y-6" variants={containerVariants}>
          {/* Name Field */}
          <motion.div variants={itemVariants}>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 ml-1">
              Your Name
              <span className="text-red-500 ml-1">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                value={form.name}
                onChange={handleChange}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                required
                className={inputClasses}
              />
              <motion.div
                className="absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                initial={{ width: 0 }}
                animate={{ width: focusedField === 'name' ? '100%' : 0 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>

          {/* Email Field */}
          <motion.div variants={itemVariants}>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 ml-1">
              Email Address
              <span className="text-red-500 ml-1">*</span>
            </label>
            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                value={form.email}
                onChange={handleChange}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                required
                className={inputClasses}
              />
              <motion.div
                className="absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
                initial={{ width: 0 }}
                animate={{ width: focusedField === 'email' ? '100%' : 0 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>

          {/* Message Field */}
          <motion.div variants={itemVariants}>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 ml-1">
              Your Message
              <span className="text-red-500 ml-1">*</span>
            </label>
            <div className="relative">
              <textarea
                name="message"
                placeholder="Tell me about your project or idea..."
                value={form.message}
                onChange={handleChange}
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
                rows={5}
                required
                className={`${inputClasses} resize-none min-h-[120px] sm:min-h-[140px]`}
              />
              <motion.div
                className="absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-pink-500 to-blue-500"
                initial={{ width: 0 }}
                animate={{ width: focusedField === 'message' ? '100%' : 0 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>

          {/* Submit Button */}
          <motion.div variants={itemVariants}>
            <motion.button
              type="submit"
              disabled={status.loading}
              className={`
                w-full py-3 sm:py-4 px-6 rounded-xl text-white font-semibold text-sm sm:text-base
                relative overflow-hidden group
                bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
                transition-all duration-300
                disabled:opacity-50 disabled:cursor-not-allowed
                focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2
                shadow-lg hover:shadow-xl
              `}
              whileHover={{ scale: status.loading ? 1 : 1.02, y: status.loading ? 0 : -2 }}
              whileTap={{ scale: status.loading ? 1 : 0.98 }}
            >
              {/* Button Shimmer Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{
                  x: [-200, 200],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              />
              
              {/* Button Content */}
              <span className="relative flex items-center justify-center gap-2">
                {status.loading ? (
                  <>
                    <motion.svg 
                      className="w-5 h-5 text-white" 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </motion.svg>
                    Sending Message...
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <motion.svg 
                      className="w-5 h-5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </motion.svg>
                  </>
                )}
              </span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Status Messages */}
        <AnimatePresence mode="wait">
          {(status.success || status.error) && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              className={`
                p-4 rounded-xl text-sm flex items-start gap-3
                ${status.success
                  ? 'bg-green-50/80 dark:bg-green-900/30 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800'
                  : 'bg-red-50/80 dark:bg-red-900/30 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800'
                }
              `}
            >
              {status.success ? (
                <motion.svg 
                  className="w-5 h-5 flex-shrink-0 mt-0.5" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 15 }}
                >
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </motion.svg>
              ) : (
                <motion.svg 
                  className="w-5 h-5 flex-shrink-0 mt-0.5" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 15 }}
                >
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </motion.svg>
              )}
              <div className="flex-1">
                <p className="font-medium">{status.success || status.error}</p>
                {status.success && (
                  <p className="text-xs mt-1 opacity-80">I'll get back to you as soon as possible!</p>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.form>
    </motion.div>
  );
}
