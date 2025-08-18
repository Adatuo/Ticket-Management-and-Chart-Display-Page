<template>
  <a-table :dataSource="dataSource" :columns="columns" rowKey="id">
    <template #bodyCell="{ column, record }" v-if="store.permission === 'admin'">
      <template v-if="column && column.key === 'action'">
        <a-button type="primary" @click="handleDelete(record.id)" danger>Delete</a-button>
      </template>
    </template>
  </a-table>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useMainStore } from '../../store/index';

const store = useMainStore();

const dataSource = computed(() => store.tableData);

function handleDelete(id) {
  store.deleteRow(id);
}

const columns = ref([
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Project Name',
    dataIndex: 'project',
    key: 'project',
  },
  {
    title: 'Overtime',
    dataIndex: 'overtime',
    key: 'overtime',
    customRender: ({ text }) => (text ? 'Yes' : 'No'),
  },
  {
    title: 'Hours',
    dataIndex: 'hours',
    key: 'hours',
  },
  {
    title: 'Action',
    key: 'action',
  },
]);
</script>