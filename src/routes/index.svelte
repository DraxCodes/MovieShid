<script>
	export let data;
	const movie = data.results[0];
	const bgImage = `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie.backdrop_path}`;
</script>

<svelte:head>
	<title>Welcome To MovieShid</title>
</svelte:head>

<section
	class="bg-center bg-cover shadow-2xl drop-shadow-none"
	style="background-image: url({bgImage});"
>
	<div class="bg-black bg-opacity-80">
		<div
			class="grid max-w-screen-xl px-4 py-8 mx-auto lg:ga xl:gap-0 lg:py-16 lg:grid-cols-12 overflow-y-scroll scrollbar-hide"
		>
			<div class="mr-auto place-self-center lg:col-span-7">
				<h1
					class="max-w-2xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"
				>
					{movie.title}
				</h1>
				<p
					class="max-w-2xl mb-6 font-light text-gray-300 lg:mb-8 md:text-md lg:text-md dark:text-gray-400"
				>
					{movie.overview}
				</p>
				<div class="flex items-center">
					<svg
						aria-hidden="true"
						class="w-5 h-5 text-yellow-400"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
						><title>Rating star</title><path
							d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
						/></svg
					>
					<p class="ml-2 text-sm font-bold text-gray-900 dark:text-white">
						{movie.vote_average.toFixed(1)}/10
					</p>
					<span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400" />
					<p class="text-sm font-medium text-gray-900 pr-2 hover:no-underline dark:text-white">
						{movie.vote_count} votes
					</p>
					<a
						href="https://www.themoviedb.org/movie/{movie.id}/reviews"
						class="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
						>Reviews</a
					>
				</div>
			</div>
			<div class="hidden lg:mt-0 lg:col-span-4 lg:row-span-3 lg:flex">
				<img
					src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2{movie.poster_path}"
					alt="{movie.title} poster"
				/>
			</div>
		</div>
	</div>
</section>
