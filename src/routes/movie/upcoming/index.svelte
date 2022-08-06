<script>
	import { fade } from 'svelte/transition';
	import SmallMovieCard from '$lib/components/SmallMovieCard.svelte';

	export let movies;
</script>

<svelte:head>
	<title>Upcoming Movies</title>
</svelte:head>

<div
	class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 sm:grid-cols-1"
	transition:fade
>
	{#each movies as movie}
		<div class="mr-5 ml-5 mt-10">
			<SmallMovieCard {movie} />
		</div>
	{/each}
</div>
