const schema = {
    type: "object",
    properties: {
      login: {
        type: "string",
        minLength: 5,
        maxLength: 15,
        pattern: "^[a-zA-Z][a-zA-Z0-9-]+$"
      },
      quantity: {
        type: "string",
        pattern: "^[0-9]+$"
      },
      email: {
        type: "string",
        pattern: "^[a-z]+@([a-z-]+).+[a-z-]{2,4}$"
      }
    },
    required: ["login", "quantity", "email"]
  }
  

  module.exports = schema;