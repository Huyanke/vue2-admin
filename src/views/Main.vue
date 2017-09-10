<template>
	<div>
    main
		 	<el-button type="primary" @click="mu" title="asios获取数据，查看console">获取</el-button>
			<img src="https://wpimg.wallstcn.com/0e03b7da-db9e-4819-ba10-9016ddfdaed3" alt="">
	</div>
</template>

<script>
   import { msgData } from '../api/api';

export default {
	components: {
	},
	methods: {
    mu(){
			msgData().then(function (response) {
				console.log(response);
			 }).catch(function (error) {
				console.log(error);
			 })
		}
	}
}

</script>

<style>

</style>
