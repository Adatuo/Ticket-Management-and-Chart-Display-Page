import { defineStore } from 'pinia';
import { config } from '../pages/config';

export const useMainStore = defineStore('main', {
  state: () => ({
    username: '',
    password: 123456,
    permission: null,
    isLoggedIn: false,
    tableData: [...config], // 拷贝一份，避免修改原始数据
  }),
  getters: {},
  actions: {
    deleteRow(id) {
      this.tableData = this.tableData.filter(item => item.id !== id);
      // 重新生成 ID，保证连续性（例如从1开始递增字符串）
      this.tableData = this.tableData.map((item, index) => ({
        ...item,
        id: String(index + 1).padStart(3, '0'),
      }));
    },
    setPermissionAndLogin(permission) {
      if(permission === 'admin') {
        this.permission = 'admin';
      } else {
        this.permission = null;
      }
      this.isLoggedIn = permission === 'admin' ? true : false;
    }
  },
});