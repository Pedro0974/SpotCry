// services/getTokenData

export const getTokenData = (token) => {
    try {
      const payloadBase64 = token.split(".")[1];
      const payload = JSON.parse(atob(payloadBase64));
      return payload;
    } catch (error) {
      if (error.message.includes("jwt expired")) {
        console.error("Token expired");
      }
      console.error(error.message);
      return null;
    }
  };