
export const validateForm = (formData) => {
  if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
    return 'Error: All fields are required.';
  }

  if (!/\S+@\S+\.\S+/.test(formData.email)) {
    return 'Error: Please enter a valid email address.';
  }

  return null;
};
