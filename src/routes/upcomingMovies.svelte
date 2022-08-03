<script context="module">
	export const prerender = true;
</script>

<script>
	// @ts-nocheck
	import '../app.css';
	import { onMount } from 'svelte';
	import Loader from '../components/Loader.svelte';
	import MovieCard from '../components/MovieCard.svelte';

	let data = [];
	let loading = false;
	let failed = false;

	onMount(async () => {
		loading = true;
		const resp = await fetch('/api/upcomingMovies.json');
		if (resp.ok === false) {
			failed = true;
		} else {
			let json = await resp.json();
			data = json.data.results;
			console.log(data);
			loading = false;
		}
	});
</script>

<svelte:head>
	<title>Upcoming Movies</title>
</svelte:head>

{#if loading}
	<Loader />
{:else if failed}
	<h1>Failed to load data, please report this issue to the owner.</h1>
{:else}
	<div
		class="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 auto-rows-max sm:grid-cols-3"
	>
		{#each data as item}
			<div class="mb-24 mr-5 ml-5 mt-5">
				<MovieCard movie={item} />
			</div>
		{/each}
	</div>
{/if}
