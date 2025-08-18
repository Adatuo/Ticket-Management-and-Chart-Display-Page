<template>
  <div class="flex justify-center items-center w-screen h-screen p-4 bg-gray-100">
    <a-card
      title="Tasks"
      class="w-full overflow-hidden border border-black"
      bordered
    >
      <a-row gutter={16}>
        <a-col :span="16">
          <Table class="border border-black w-full" :pagination="false" />
        </a-col>
        <a-col :span="8" class="border border-black overflow-hidden">
          <Echarts />
        </a-col>
      </a-row>
    </a-card>
  </div>
</template>

<script setup>
import Table from '../../components/home/Table.vue';
import Echarts from '../../components/home/Echarts.vue';
</script>