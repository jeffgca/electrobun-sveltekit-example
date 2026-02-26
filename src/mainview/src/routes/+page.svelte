<script>
	// @ts-nocheck

	import { onMount } from 'svelte';
	import { JsonView } from '@zerodevx/svelte-json-view';

	let { data } = $props();

	$inspect('$props.data', data);
</script>

<div id="content-wrapper">
	<h1>Welcome to SvelteKit :: {data.title}</h1>

	{#if data.data.length > 0}
		{#each data.data as item}
			<div class="data-item">
				<JsonView json={item} />
			</div>
			<hr />
		{/each}
	{:else}
		<p>No items found.</p>
	{/if}
</div>

<style>
	#content-wrapper {
		display: flex;
		flex-direction: column;
		align-items: left;
		justify-content: left;
		height: 100vh;
		text-align: left;
		background-color: aliceblue;
	}

	.data-item {
		margin: 2em;
		background-color: bisque;
		padding: 1em;
	}
</style>
