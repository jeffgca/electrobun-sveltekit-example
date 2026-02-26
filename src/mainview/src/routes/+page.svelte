<script>
	import { onMount } from 'svelte';

	let { data } = $props();

	$inspect(data);
</script>

<div id="content-wrapper">
	<h1>Welcome to SvelteKit :: {data.title}</h1>
</div>

<style>
	#content-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
		text-align: center;
		background-color: aliceblue;
	}
</style>
