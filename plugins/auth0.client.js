import { createAuth0 } from '@auth0/auth0-vue';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(
    createAuth0({
      domain: 'dev-5w88ocmvq5o7mb8e.us.auth0.com',
      clientId: 'NUslh6ycxmvbbmRWYztiLrBGl3T82YOt',
      authorizationParams: {
        redirect_uri: window.location.origin,
      },
    })
  );
});
