// Basic database for storing modal information
export const database = {
  0: {
    title: '200 OK',
    subtitle: 'Successful Response',
    code: `// Example: Sending a 200 OK after succesfully looking up a user.
app.get('/api/user', (req, res) => {
  try {
    // Get the user's id from the request parameters.
    const user = req.query.param;
    // Create a response object to send back (using a database object for clarity, this represents your persistant storage of choice).
    const response = {
      message: 'OK',
      status: 200,
      user: database[user]
    };
    // Send back the response object with the res.json method.
    res.json(response);
  } catch (error) {
    console.error(error);
    // If an error occurs, you can send back your desired HTTP status and error message.
    res.json({
      // message: Your preferred error message,
      // status: Your preferred status code,
    });
  }
});`,
    description: 'The 200 OK status indicates that the request succeeded. The exact meaning of a 200 OK can vary, depending on the HTTP method used to prompt it. One of the most common status codes for successful web API interactions, this response is used when a server successfully processes a request.',
    mdnLink: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200'
  },
  1: {
    title: '201 Created',
    subtitle: 'Successful Response',
    code: `// Example: Sending a 201 Created after successfully creating an account.
app.post('/api/account', (req, res) => {
  try {
    // Destructure request data.
    const { firstName, lastName, email, encryptedPassword } = req.body;
    // Create a new account object.
    const account = {
      firstName,
      lastName,
      email,
      encryptedPassword
    };
    // Add new account to database. For simplicity, we'll push it into an in-memory array called 'accounts'. In a real-world application, insert into a database instead.
    accounts.push(account)
    // Create a response to send back. Be careful to not send back sensitive data.
    const response = {
      message: 'Account created successfully',
      status: 201,
      account: {
        id: accounts.length,
        firstName,
        lastName,
        email,
      },
    };
    // Send back the response object with the res.json method.
    res.json(response);
  } catch (error) {
    console.error(error);
    // If an error occurs, you can send back your desired HTTP status and error message.
    res.json({
      // message: Your preferred error message,
      // status: Your preferred status code,
    });
  }
});`,
    description: 'The 201 Created status indicates that a new resource has been successfully created (such as a user, post, message, etc.). This HTTP method is most commonly used as a response to a POST request.',
    mdnLink: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/201',
  },
  2: {
    title: '204 No Content',
    subtitle: 'Successful Response',
    code: `// Example: Sending a 204 No Content after deleting an account.
app.delete('/api/account/:id', (req, res) => {
  try {
    // Destructure id from the parameters.
    const { id } = req.params;
    // Verify that the account exists. In this example, we'll use an in-memory array called 'accounts.' In a real-world application, you'd query your database instead.
    const accountIdx = accounts.findIndex((account) => account.id === id);
    // If it exists, delete it and send a 204 using the res.status method.
    // You can use res.json, but it would defeat the purpose of using 204 No Content.
    if (accountIdx !== -1) {
      accounts.splice(accountIdx, 1);
      res.status(204).send()
    } else {
      // If the account doesn't exist before it was deleted, an error should be sent back, like 404 Not Found.
      const response = {
        message: 'Not Found',
        status: 404,
      };
      res.json(response);
    }
  } catch (error) {
    console.error(error);
    // If an error occurs, you can send back your desired HTTP status and error message.
    res.json({
      // message: Your preferred error message,
      // status: Your preferred status code,
    });
  }
});`,
    description: 'Despite having the name "No Content," the 204 No Content status is a success response indicating that a request was successful, and nothing needs to be sent back in the body of the response - hence, "No Content." This is commonly used with DELETE and PUT methods.',
    mdnLink: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/204',
  },
  3: {
    title: '301 Moved Permanently',
    subtitle: 'Redirection Response',
    code: `// Example: Sending a 301 after a user navigates to an old, outdated URL.
app.get('/api/old-path', (req, res) => {
  // Specify the new, updated URL.
  const newURL = 'https://example.com/api/new-path';

  // Set the status code to 301 and use the res.redirect method to send them to the new URL.
  res.redirect(301, newURL);
});`,
    description: 'The 301 Moved Permanently status code indicates that the requested resource has been moved to a new location. This is most commonly used when a website has a new URL or domain name. Some websites may also use this to redirect users from HTTP to HTTPS.',
    mdnLink: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/301',
  },
  4: {
    title: '400 Bad Request',
    subtitle: 'Client Error Response',
    code: ``,
    description: 'The 201 Created status indicates that a new resource has been successfully created (such as a user, post, message, etc.). This HTTP method is most commonly used as a response to a POST request.',
    mdnLink: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400',
  },
  5: {
    title: '401 Unauthorized',
    subtitle: 'Client Error Response',
    code: ``,
    description: 'The 201 Created status indicates that a new resource has been successfully created (such as a user, post, message, etc.). This HTTP method is most commonly used as a response to a POST request.',
    mdnLink: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401',
  },
  6: {
    title: '403 Forbidden',
    subtitle: 'Client Error Response',
    code: ``,
    description: 'The 201 Created status indicates that a new resource has been successfully created (such as a user, post, message, etc.). This HTTP method is most commonly used as a response to a POST request.',
    mdnLink: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403',
  },
  7: {
    title: '404 Not Found',
    subtitle: 'Client Error Response',
    code: ``,
    description: 'The 201 Created status indicates that a new resource has been successfully created (such as a user, post, message, etc.). This HTTP method is most commonly used as a response to a POST request.',
    mdnLink: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404',
  },
  8: {
    title: '201 Created',
    subtitle: 'Successful Response',
    code: ``,
    description: 'The 201 Created status indicates that a new resource has been successfully created (such as a user, post, message, etc.). This HTTP method is most commonly used as a response to a POST request.',
    mdnLink: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/201',
  },
}

