// Basic database for storing modal information
export const database = {
  0: {
    title: '200 OK',
    subtitle: 'Successful Response',
    code: `// Example: Sending a 200 after succesfully looking up a user.

app.get('/api/user', (req, res) => {
  try {
    // Get the user's id from the request parameters.
    const user = req.query.id;
    // Send back the response with a 200.
    res.status(200).json({
      message: 'OK',
      user: database[user],
    });

  } catch (error) {
    console.error(error);
    // If an error occurs, you can send back your desired HTTP status and error message. For this example, we'll send a 500.
    // In a real-world application, you'd want to be more specific than this.
    res.status(500).json({
      error: 'Internal Server Error',
      message: // Your preferred message.
    });
  }

});`,
    description: 'The 200 OK status indicates that the request succeeded. The exact meaning of a 200 OK can vary, depending on the HTTP method used to prompt it. One of the most common status codes for successful web API interactions, this response is used when a server successfully processes a request.',
    mdnLink: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200'
  },
  1: {
    title: '201 Created',
    subtitle: 'Successful Response',
    code: `// Example: Sending a 201 after successfully creating an account.

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
    res.status(201).json({
      message: 'Account created successfully',
      account: {
        id: accounts.length,
        firstName,
        lastName,
        email,
      },
    });

  } catch (error) {
    console.error(error);
    // If an error occurs, you can send back your desired HTTP status and error message. For this example, we'll send a 500.
    // In a real-world application, you'd want to be more specific than this.
    res.status(500).json({
      error: 'Internal Server Error',
      message: // Your preferred message.
    });
  }

});`,
    description: 'The 201 Created status indicates that a new resource has been successfully created (such as a user, post, message, etc.). This HTTP method is most commonly used as a response to a POST request.',
    mdnLink: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/201',
  },
  2: {
    title: '204 No Content',
    subtitle: 'Successful Response',
    code: `// Example: Sending a 204 after deleting an account.

app.delete('/api/account/:id', (req, res) => {
  try {
    // Destructure id from the parameters.
    const { id } = req.params;
    // Verify that the account exists. In this example, we'll use an in-memory array called 'accounts.' In a real-world application, you'd query your database instead.
    const accountIdx = accounts.findIndex((account) => account.id === id);
    // If it exists, delete it and send a 204.
    if (accountIdx !== -1) {
      accounts.splice(accountIdx, 1);
      res.status(204).send()
    } else {
      // If the account doesn't exist before it was deleted, an error should be sent back, like 404 Not Found.
      res.status(404).json({
        error: 'Not Found',
        message: 'No matching users found'
      });
    }

  } catch (error) {
    console.error(error);
    // If an error occurs, you can send back your desired HTTP status and error message. For this example, we'll send a 500.
    res.status(500).json({
      error: 'Internal Server Error',
      message: // Your preferred message.
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
    code: `// Example: Sending a 400 if a required query parameter is missing or invalid.

app.get('/api/data', (req, res) => {
  // Check if your query parameter exists and is valid. In this example, we'll use an ID.
  const id = req.query.id;
  if (!id || isNaN(id)) {
    // Sending back status code 400 if the id doesn't exist or isn't a number.
    res.status(400).json({
      error: 'Bad Request',
      message: 'Invalid query parameter. Please check your request and try again.',
    });
  } else {
    // If the query parameter exists and is valid, proceed. For this example, we'll send a success response.
    res.status(200).json({
      message: 'OK',
      data: { id },
    });
  }
});`,
    description: 'The 400 Bad Request status code indicates that the server cannot or will not process a request due to a client error (or something perceived as such). For example, if you have an API that expects certain query parameters and the client sends a request without those parameters, you could send back a 400 Bad Request.',
    mdnLink: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400',
  },
  5: {
    title: '401 Unauthorized',
    subtitle: 'Client Error Response',
    code: `// Example: Using a middleware function to check if a user is logged in.
// This example uses the express-session library to save a user's ID to an Express session when they log in.

const ensureLoggedIn = (req, res, next) => {
  if (!req.session.userId) {
    // When this function fires, it checks to see if an Express session exists with a userId field. If it doesn't, send back a 401.
    res.status(401).json({
      error: 'Unauthorized',
      message: 'Please login before accessing the requested resource.',
    });
  } else {
    // If a session exists with the userId field, then proceed to the next step.
    next();
  }
};

// Use the ensureLoggedIn function within any applicable routes.
app.put('/api/edit-account', ensureLoggedIn, controllerFunction);`,
    description: "A straightforward status code, 401 Unauthorized indicates that the server cannot complete a client's request because the client lacks valid authentication credentials. A common use case for this is when a client tries accessing a resource that would require them to login first.",
    mdnLink: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401',
  },
  6: {
    title: '403 Forbidden',
    subtitle: 'Client Error Response',
    code: `// Example: A non-Admin user tries deleting a resource that requires Admin permissions.
// This example uses the express-session library to save an admin field as truthy or falsey.

app.delete('/api/delete-item/:itemId', (req, res) => {
  const { itemId } = req.params;
  if (!req.session.admin) {
    // If the admin field is falsey, send a 403.
    res.status(403).json({
      error: 'Forbidden',
      message: "You don't have the proper permissions do this. Please contact an administrator instead.",
    });
  } else {
    // If the admin field is truthy, delete the item and send a success response.
    // For simplicity's sake, we'll say the itemId corresponds with an element in an array called 'array.'
    if (itemId > 0 && itemId <= array.length) {
      // Check if the item exists in the array. If it does, delete it and send a 204.
      array.splice(itemId - 1, 1);
      res.status(204).send();
    } else {
      // If it doesn't exist in the array, send a 404.
      res.status(404).json({
        error: 'Not Found',
        message" 'Item not found.',
      });
    }
  }
});`,
    description: 'The 403 Forbidden status code indicates that the server has received and understood the request, but refuses to complete it. Similar to a 401 Unauthorized, the main difference with a 403 Forbidden is that re-authenticating will not matter.',
    mdnLink: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403',
  },
  7: {
    title: '404 Not Found',
    subtitle: 'Client Error Response',
    code: `// Example: A user tries opening a resource that no longer exists.
    
app.get('/api/files', (req, res) => {
  const fileName = req.query.fileName;
  // For simplicity's sake, we'll check if the fileName corresponds to an element in an array called 'array.'
  // In a real-world application, you'd check a database instead.
  if (!array.includes(fileName)) {
    // If it's not in the array, send a 404.
    res.status(404).json({
      error: 'Not Found',
      message: 'No file found with that name.',
    });
  } else {
    // If it is found, send back the file.
    res.status(200).json({
      message: 'OK',
      data: // Return a file or whatever else is relevant.
    });
  }
});`,
    description: 'The 404 Not Found status code indicates that the server cannot find the requested resource. These commonly occur when clients navigate to resources that are missing, have already been removed, or have been moved somewhere else.',
    mdnLink: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404',
  },
  8: {
    title: '500 Internal Server Error',
    subtitle: 'Server Error Response',
    code: `// Example: Sending a 500 if an unexpected error occurs when trying to delete an account.

app.delete('/api/account/:id', (req, res) => {
  try {
    // Destructure id from the parameters.
    const { id } = req.params;
    // Verify that the account exists. In this example, we'll use an in-memory array called 'accounts.' In a real-world application, you'd query your database instead.
    const accountIdx = accounts.findIndex((account) => account.id === id);
    // If it exists, delete it and send a 204.
    if (accountIdx !== -1) {
      accounts.splice(accountIdx, 1);
      res.status(204).send()
    } else {
      // If the account doesn't exist before it was deleted, an error should be sent back, like 404 Not Found.
      res.status(404).json({
        error: 'Not Found',
        message: 'No matching users found'
      });
    }

  } catch (error) {
    console.error(error);
    // Sending a 500 if an unexpected error occurs.
    res.status(500).json({
      error: 'Internal Server Error',
      message: 'Something went wrong when trying to delete the account.'
    });
  }

});`,
    description: 'Acting as a last-resort, "catch-all" response, the 500 Internal Server Error status code indicates that the server encountered an unexpected issue which prevents it from completing the request. This status code is most commonly used when no other 5XX server response is appropriate. Server administrators should avoid using this when possible due to its generic nature.',
    mdnLink: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500',
  },
}

