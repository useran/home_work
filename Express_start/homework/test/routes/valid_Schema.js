const schema = {
    type: "object",
    properties: {
      title: {
        type: "string",
        minLength: 5,
        maxLength: 15,
        pattern: "^[a-zA-Z][a-zA-Z0-9-]+"
      },
      author: {
        type: "string",
        minLength: 5,
        maxLength: 15,
        pattern: "^[a-zA-Z][a-zA-Z0-9-]+"
      },
      article: {
        type: "string",
        minLength: 5,
        maxLength: 3000,
      },
      tags: {
        type: "array",
        maxItems: 3,
        uniqueItems: true
      },
    },
    required: ["title", "author", "article"]
  }
  

  module.exports = schema;