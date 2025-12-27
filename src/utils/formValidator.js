
export const validateForm = (formData) => {
  // Provera da li su polja prazna
  if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
    return 'Error: All fields are required.';
  }

  // Provera formata email-a (regular expression)
  if (!/\S+@\S+\.\S+/.test(formData.email)) {
    return 'Error: Please enter a valid email address.';
  }

  // Ako su sve provere prošle, vraćamo 'null', što znači da nema greške
  return null;
};