import Keycloak from 'keycloak-js';

const KeycloakAuth = Keycloak({
      url: process.env.KEYCLOAK_URL,
      realm: process.env.KEYCLOAK_REALM || "myrealm",
      clientId: process.env.KEYCLOAK_CLIENT || "myapp",
    });

export default KeycloakAuth;
