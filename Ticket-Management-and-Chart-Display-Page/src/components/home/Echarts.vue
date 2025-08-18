<template>
  <div ref="chartRef" style="width: 100%; height: 400px;"></div>
</template>

<script setup>
import * as echarts from 'echarts';
import { onMounted, onBeforeUnmount, watch, ref } from 'vue';
import { useMainStore } from '../../store/index';

const store = useMainStore();
const chartRef = ref(null);
let chartInstance = null;

// 监听 tableData 变化更新图表数据
function updateChart() {
  if (!chartInstance) return;

  // 统计每个项目的总工时 hours
  const hoursMap = store.tableData.reduce((acc, cur) => {
    acc[cur.project] = (acc[cur.project] || 0) + cur.hours;
    return acc;
  }, {});

  const projects = Object.keys(hoursMap);
  const hours = Object.values(hoursMap);

  chartInstance.setOption({
    title: {
      text: 'Project Hours Distribution',
      left: 'center',
    },
    tooltip: {},
    xAxis: {
      type: 'category',
      data: projects,
      axisLabel: {
        interval: 0,
      },
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: 'Hours',
        type: 'bar',
        data: hours,
        itemStyle: {
          color: '#1890ff', // Ant Design 蓝色调
        },
      },
    ],
  });
}

onMounted(() => {
  chartInstance = echarts.init(chartRef.value);
  updateChart();
});

// 组件卸载时销毁实例防止内存泄漏
onBeforeUnmount(() => {
  chartInstance && chartInstance.dispose();
});

// 监听 store.tableData 变化
watch(
  () => store.tableData,
  () => {
    updateChart();
  },
  { deep: true },
);
</script>

<style scoped>
/* 可根据需要调整图表容器大小 */
</style>