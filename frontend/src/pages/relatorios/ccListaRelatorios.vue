<template>
  <div v-if="userProfile === 'admin'">
    <q-card class="q-ma-sm q-pa-sm q-card q-ma-md" square style="height: calc(100vh - 280px)">
      <h2 class="text-h6 q-px-sm" :class="{ 'text-green': $q.dark.isActive }">
          Informe general
      </h2>
      <q-card-section class="row wrap justify-start items-center content-center q-pa-sm q-mb-md">
        <q-list v-for="menu in cRelatorios" :key="menu.name" class="q-pa-md items-center">
          <q-item style="min-width: 340px; max-width: 340px; width: 340px;
            min-height: 90px; height: 90px; max-height: 90px;
            border-left: solid #3E72AF 3px
            " class="shadow-1 q-px-sm items-start" clickable v-ripple @click="goTo(menu.name)">
            <q-item-section>
              <q-item-label class="text-primary">{{ menu.titulo }}</q-item-label>
              <q-item-label caption>{{ menu.objetivo }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import relatorios from './relatorios.json'
export default {
  name: 'ccListaRelatorios',
  computed: {
    cRelatorios () {
      return relatorios
    }
  },
  methods: {
    async goTo(route) {
      this.$router.push({ name: route })
    }
  },
  data () {
    return {
      userProfile: 'user'
    }
  },
  mounted() {
    this.userProfile = localStorage.getItem('profile')
  }
}
</script>

<style lang="scss" scoped>
</style>
