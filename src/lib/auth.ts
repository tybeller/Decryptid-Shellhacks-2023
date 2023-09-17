async function login() {
    const client = await createAuth0Client({
      domain: "<your domain>", // e.g. "klee-test.au.auth0.com"
      clientId: "<your client id>", // e.g. "GGOFsf1eiSGvYOBkeDHAAJopE5qRpzN7"
      authorizationParams: {
        redirect_uri: window.location.href,
      },
    });
    client.loginWithRedirect();
  }
  
  async function logout() {
    const client = await createAuth0Client({
      domain: "<your domain>", // e.g. "klee-test.au.auth0.com"
      clientId: "<your client id>", // e.g. "GGOFsf1eiSGvYOBkeDHAAJopE5qRpzN7"
      authorizationParams: {
        redirect_uri: window.location.href,
      },
    });
    client.logout();
  }
  
  export function withAuth(): {
    login: () => Promise<void>;
  } {
   return { login }
  }
  