<template>
  <a-card title="Tasks" class="w-screen">
    <a-row>
      <a-col :span="18">
        <Table />
      </a-col>
      <a-col :span="6">
        <Echarts />
      </a-col>
    </a-row>
  </a-card>
</template>

<script setup>
import Table from '../../components/home/Table.vue';
import Echarts from '../../components/home/Echarts.vue';
</script>
