<template>
	<div>
    main
		 	<el-button type="primary" @click="mu" >获取</el-button>
			<br>
      <el-button type="button" v-show="extent > 0 ? true: false"> 我是二级权限</el-button>
			<br>
			<img src="https://wpimg.wallstcn.com/0e03b7da-db9e-4819-ba10-9016ddfdaed3" alt="">
			<img src="https://wpimg.wallstcn.com/007ef517-bafd-4066-aae4-6883632d9646" alt="">


	</div>
</template>

<script>
   import { msgData } from '../api/api';

export default {
	data() {
		return {
			extent: ''
		}
	},
	components: {
	},
	methods: {
    mu(){
			msgData().then(function (response) {
				console.log(response);
			 }).catch(function (error) {
				console.log(error);
			 })
		},
		getExtent() {
			this.extent = sessionStorage.getItem('extent')
		}
	},
	mounted() {
		this.getExtent();
	}
}

</script>

<style>

</style>
