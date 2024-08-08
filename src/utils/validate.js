export const validateData = (email, password) => {
    const emailTest = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const passwordTest = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
    if (!emailTest) return "Email is invalid.";
    if (!passwordTest) return "Password is invalid.";

    return null;
  }
  