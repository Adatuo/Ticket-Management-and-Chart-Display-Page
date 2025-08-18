<template>
  <a-table :dataSource="dataSource" :columns="columns" rowKey="id">
    <template #bodyCell="{ column, record }">
      <template v-if="column && column.key === 'action'">
        <a-button type="primary" @click="handleDelete(record.id)" danger>Delete</a-button>
      </template>
    </template>
  </a-table>
</template>

<script setup>
import { computed } from 'vue';
import { useMainStore } from '../../store/index';

const store = useMainStore();

const dataSource = computed(() => store.tableData);

function handleDelete(id) {
  store.deleteRow(id);
}

// 根据权限动态生成列，只有admin用户显示Action列
const columns = computed(() => {
  const baseColumns = [
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
  ];
  if (store.permission === 'admin') {
    baseColumns.push({
      title: 'Action',
      key: 'action',
    });
  }
  return baseColumns;
});
</script>