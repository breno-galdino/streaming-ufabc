<template>
  <div v-if="isLoading">Loading ...</div>
  <div v-else class="user-profile">
    <img :src="user?.picture" alt="User Picture" class="profile-picture" />
    <div class="profile-card">
      <h2>{{ user?.nickname.toUpperCase() }}</h2>
      <p class="email">
        <strong>Email:</strong> {{ user?.email }}
        <br />
        <span :class="emailClass">{{ emailStatus }}</span>
      </p>
      <p>
        <strong>Atualizado em:</strong>
        {{ new Date(user?.updated_at).toLocaleString("pt-BR") }}
      </p>
    </div>
  </div>
</template>
<script>
// Composition API
import { useAuth0 } from "@auth0/auth0-vue";

export default {
  setup() {
    const auth0 = useAuth0();

    const emailStatus = computed(() =>
      auth0.user.email_verified ? "Verificado" : "Não Verificado"
    );

    const emailClass = computed(() =>
      auth0.user.email_verified ? "verified" : "not-verified"
    );
    return {
      user: auth0.user,
      isAuthenticated: auth0.isAuthenticated,
      isLoading: auth0.isLoading,
      emailStatus,
      emailClass,
    };
  },
};
</script>
<style scoped>
.user-profile {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: Arial, sans-serif;
}

.profile-card {
  display: flex;
  flex-direction: column;
  text-align: start;
  justify-content: start;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 400px;
}

.profile-picture {
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin-bottom: 15px;
  border: 3px solid #6d5dfc;
}

h2 {
  color: #333;
  font-size: 1.5rem;
  margin-bottom: 5px;
}

p {
  color: #555;
  margin: 5px 0;
}

.email {
  font-size: 0.9rem;
  color: #666;
}

.verified {
  color: green;
  font-weight: bold;
  margin-left: 5px;
}

.not-verified {
  color: red;
  font-weight: bold;
  margin-left: 5px;
}

.button-50 {
  appearance: button;
  background-color: #000;
  background-image: none;
  border: 1px solid #000;
  border-radius: 4px;
  box-shadow: #fff 4px 4px 0 0,#000 4px 4px 0 1px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: ITCAvantGardeStd-Bk,Arial,sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin: 0 5px 10px 0;
  overflow: visible;
  padding: 12px 40px;
  text-align: center;
  text-transform: none;
  touch-action: manipulation;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;
  white-space: nowrap;
}

.button-50:focus {
  text-decoration: none;
}

.button-50:hover {
  text-decoration: none;
}

.button-50:active {
  box-shadow: rgba(0, 0, 0, .125) 0 3px 5px inset;
  outline: 0;
}

.button-50:not([disabled]):active {
  box-shadow: #fff 2px 2px 0 0, #000 2px 2px 0 1px;
  transform: translate(2px, 2px);
}

@media (min-width: 768px) {
  .button-50 {
    padding: 12px 50px;
  }
}
</style>
