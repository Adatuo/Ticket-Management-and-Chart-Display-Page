<template>
  <a-table :dataSource="dataSource" :columns="columns" rowKey="id">
    <template #bodyCell="{ column, record }">
      <template v-if="column && column.key === 'action'">
        <a-button type="primary" danger @click="showModal">Delete</a-button>
        <a-modal v-model:open="open" title="Basic Modal" @ok="handleDelete(record.id)">
          <p>确认删除该项目的工时统计吗?</p>
        </a-modal>
      </template>
    </template>
  </a-table>
</template>

<script setup>
import { computed } from 'vue';
import { useMainStore } from '../../store/index';
import { ref } from 'vue';

const store = useMainStore();

const dataSource = computed(() => store.tableData);

function handleDelete(id) {
  store.deleteRow(id);
  open.value = false
}

const open = ref(false);
const showModal = () => {
  open.value = true
};

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
    {
      title: 'created_at',
      dataIndex: 'created_at',
      key: 'created_at',
    }
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