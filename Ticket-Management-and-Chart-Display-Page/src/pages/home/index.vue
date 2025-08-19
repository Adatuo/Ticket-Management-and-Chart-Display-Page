<template>
  <div class="flex flex-col w-screen h-screen p-4 bg-gray-100">
    <div class="flex justify-end w-full mb-4">
      <a-dropdown :placement="placement" arrow>
        <a-avatar size="large" :style="{ backgroundColor: color, verticalAlign: 'middle' }" :gap="gap">
          {{ avatarValue }}
        </a-avatar>
        <template #overlay>
          <a-menu>
            <a-menu-item>
              <a @click="logOut">Log out</a>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>

    <div class="flex flex-1 justify-center items-center">
      <a-card title="Tasks" class="w-full overflow-hidden border border-black" bordered>
        <a-row :gutter="20">
          <a-col :span="16">
            <div class="border border-black rounded-lg h-full">
              <Table :pagination="false" />
            </div>
          </a-col>
          <a-col :span="8">
            <div class="border border-black rounded-lg h-full overflow-hidden">
              <Echarts />
            </div>
          </a-col>
        </a-row>
      </a-card>
    </div>
  </div>
</template>

<script setup>
import Table from '../../components/home/Table.vue';
import Echarts from '../../components/home/Echarts.vue';
import { useMainStore } from '../../store/index';
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const store = useMainStore();
const router = useRouter();

const avatarValue = computed(() => {
  return store.permission ? 'Admin' : 'User'
})

const logOut = () => {
  store.isLoggedIn = false;
  router.push('/login');
}

</script>