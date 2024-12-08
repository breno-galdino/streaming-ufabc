<script setup lang="ts">
import type { MediaType } from "~/types";
import { QUERY_LIST } from "~/constants/lists";
import { useAuth0 } from "@auth0/auth0-vue";

// const { loginWithRedirect } = useAuth0();
const auth0 = useAuth0();
const authenticated = computed(() => {
  return auth0.isAuthenticated.value ?? false;
});

const route = useRoute();
const type = computed(() => (route.params.type as MediaType) || "movie");

const queries = computed(() => [QUERY_LIST.movie[0], QUERY_LIST.tv[0]]);

const AsyncWrapper = defineComponent({
  name: "AsyncWrapper",
  async setup(_, ctx) {
    const list = await listMedia(type.value, queries.value[0].query, 1);
    const item = await getMedia(type.value, list.results[0].id);
    return () => ctx.slots?.default?.({ item });
  },
});

const login = () => {
  auth0.loginWithRedirect();
};
</script>

<template>
  <div>
    <div v-if="authenticated">
      <AsyncWrapper v-slot="{ item }">
        <NuxtLink :to="`/${type}/${item.id}`">
          <MediaHero :item="item" />
        </NuxtLink>
      </AsyncWrapper>
      <CarouselAutoQuery
        v-for="query of queries"
        :key="query.type + query.query"
        :query="query"
      />
      <TheFooter />
    </div>
    <div
      flex="~ lg:col"
      style="height: 100vh"
      justify-center
      items-center
      my2
      v-else
    >
      <img src="/logo.png" width="450" alt="Logo" />
      <button type="button" class="stylish-button" @click="login()">
        <slot>Login</slot>
      </button>
    </div>
  </div>
</template>

<style scoped>
.stylish-button {
  background: linear-gradient(135deg, #10691c, #0fd13c);
  border: none;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.75rem 1.5rem;
  border-radius: 0.2rem;
  width: 120px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow:
    0 4px 6px rgba(0, 0, 0, 0.1),
    0 1px 3px rgba(0, 0, 0, 0.06);
}

/* Efeito hover */
.stylish-button:hover {
  background: linear-gradient(135deg, #0fd13c, #10691c);
}
</style>
