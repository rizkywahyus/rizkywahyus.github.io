import { useState, useCallback, useRef } from "react";

/**
 * Sanitize a string by stripping HTML tags and trimming whitespace.
 * Prevents XSS when processing user input.
 */
function sanitize(str) {
  return str.replace(/<[^>]*>/g, "").trim();
}

/**
 * Validate email format with a safe, non-backtracking regex.
 */
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const RATE_LIMIT_MS = 3000;

/**
 * Custom hook for contact form logic:
 * - Input sanitization
 * - Client-side validation
 * - Simple rate limiting
 */
export default function useContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const lastSubmitTime = useRef(0);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    setErrors((prev) => {
      if (prev[name]) {
        const next = { ...prev };
        delete next[name];
        return next;
      }
      return prev;
    });
  }, []);

  const validate = useCallback(() => {
    const newErrors = {};
    const cleanName = sanitize(formData.name);
    const cleanEmail = sanitize(formData.email);
    const cleanMessage = sanitize(formData.message);

    if (!cleanName || cleanName.length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }
    if (cleanName.length > 100) {
      newErrors.name = "Name must be under 100 characters.";
    }

    if (!cleanEmail) {
      newErrors.email = "Email is required.";
    } else if (!isValidEmail(cleanEmail)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!cleanMessage || cleanMessage.length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }
    if (cleanMessage.length > 2000) {
      newErrors.message = "Message must be under 2000 characters.";
    }

    return newErrors;
  }, [formData]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      // Rate limiting
      const now = Date.now();
      if (now - lastSubmitTime.current < RATE_LIMIT_MS) {
        setErrors({ form: "Please wait a moment before submitting again." });
        return;
      }

      const validationErrors = validate();
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }

      setIsSubmitting(true);
      lastSubmitTime.current = now;

      // Sanitize data before "sending"
      const sanitizedData = {
        name: sanitize(formData.name),
        email: sanitize(formData.email),
        message: sanitize(formData.message),
      };

      // Simulate async submission (replace with real API call)
      setTimeout(() => {
        console.log("Form submitted:", sanitizedData);
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        setErrors({});

        // Hide success message after 5s
        setTimeout(() => setSubmitSuccess(false), 5000);
      }, 800);
    },
    [formData, validate]
  );

  return {
    formData,
    errors,
    isSubmitting,
    submitSuccess,
    handleChange,
    handleSubmit,
  };
}
