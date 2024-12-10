<template>
  <div
    flex="~ row lg:col"
    justify-evenly
    items-center
    py5
    lg:px5
    border="t lg:r base"
    bg-black
  >
    <NuxtLink
      v-slot="{ isActive }"
      to="/profile"
      :title="$t('Profile')"
      v-if="authenticated"
    >
      <div
        text-3xl
        :class="
          isActive
            ? 'i-ph-user-circle-thin text-primary'
            : 'i-ph-user-circle-thin'
        "
      />
    </NuxtLink>
    <NuxtLink v-slot="{ isActive }" to="/" :title="$t('Home')">
      <div
        text-2xl
        :class="isActive ? 'i-ph-house-fill text-primary' : 'i-ph-house'"
      />
    </NuxtLink>
    <NuxtLink v-slot="{ isActive }" to="/movie" :title="$t('Movies')">
      <div
        text-2xl
        :class="
          isActive ? 'i-ph-film-strip-fill text-primary' : 'i-ph-film-strip'
        "
      />
    </NuxtLink>
    <NuxtLink v-slot="{ isActive }" to="/tv" :title="$t('TV Shows')">
      <div
        text-2xl
        :class="
          isActive
            ? 'i-ph-television-simple-fill text-primary'
            : 'i-ph-television-simple'
        "
      />
    </NuxtLink>
    <NuxtLink v-slot="{ isActive }" to="/search" :title="$t('Search')">
      <div
        text-2xl
        :class="
          isActive
            ? 'i-ph-magnifying-glass-fill text-primary'
            : 'i-ph-magnifying-glass'
        "
      />
    </NuxtLink>
    <div text-2xl v-if="authenticated">
      <button class="button-50 i-ph-sign-out" role="button" @click="logout">
        Log out
      </button>
    </div>
  </div>
</template>
<script setup>
import { useAuth0 } from "@auth0/auth0-vue";
const auth0 = useAuth0();
const authenticated = computed(() => {
  return auth0?.isAuthenticated.value ?? false;
});
const logout = () => {
  auth0.logout({
    logoutParams: {
      returnTo: window.location.origin,
    },
  });
};
</script>
