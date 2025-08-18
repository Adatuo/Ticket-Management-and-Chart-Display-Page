<template>
  <div class="w-screen h-screen flex justify-center items-center ">
    <div class="max-w-md w-full p-6 bg-white rounded-lg shadow-md border border-black">
      <a-form :model="formState" name="basic" :label-col="{ span: 6 }" :wrapper-col="{ span: 12 , offset: 6}" autocomplete="off"
        @finish="onFinish" @finishFailed="onFinishFailed">

        <a-form-item name="username" :rules="[{ required: true, message: 'Please input your username!' }]">
          <a-input v-model:value="formState.username" placeholder="Username" />
        </a-form-item>

        <a-form-item name="password" :rules="[{ required: true, message: 'Please input your password!' }]">
          <a-input-password v-model:value="formState.password" placeholder="Password" />
        </a-form-item>


        <a-form-item :wrapper-col="{ offset: 10, span: 16 }">
          <a-button type="primary" html-type="submit">Login in</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>
<script setup>
import { reactive } from 'vue';
const formState = reactive({
  username: '',
  password: '',
});
import { useRouter } from 'vue-router';
import { useMainStore } from '../../store/index';

const router = useRouter();
const store = useMainStore();

const onFinish = values => {
  if (values.password) {
    // 设置权限，模拟登录成功
    store.setPermissionAndLogin(values.username === 'admin' ? 'admin' : null);
    router.push('/');
    console.log('登录参数:', values);
  } else {
    alert('密码错误');
  }
};
const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};
</script>