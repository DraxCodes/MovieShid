<script context="module">
	export const prerender = true;
</script>

<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import Loader from '$lib/components/Loader.svelte';
	import SmallMovieCard from '$lib/components/SmallMovieCard.svelte';

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
		class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 auto-rows-max sm:grid-cols-1"
	>
		{#each data as item}
			<div class="mr-5 ml-5 mt-10">
				<SmallMovieCard movie={item} />
			</div>
		{/each}
	</div>
{/if}
