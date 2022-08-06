<script>
	export let movie;
	const bgImage = `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie.backdrop_path}`;
	console.log(movie);

	const formatter = new Intl.NumberFormat('en-us', {
		style: 'currency',
		currency: 'USD',
		maximumSignificantDigits: 5
	});
</script>

<svelte:head>
	<title>{movie.title}</title>
</svelte:head>

<section class="bg-center bg-cover" style="background-image: url({bgImage});">
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
				<div class="hidden xl:inline-grid stats shadow mt-10 bg-black bg-opacity-40">
					<div class="stat">
						<div class="stat-figure text-primary">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="inline-block w-7 h-7 stroke-current"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
								/>
							</svg>
						</div>
						<div class="stat-title">Language</div>
						<div class="stat-value text-primary text-3xl">
							{movie.spoken_languages[0].english_name}
						</div>
						<div class="stat-desc overflow-x-scroll scrollbar-hide">{movie.original_title}</div>
					</div>

					<div class="stat">
						<div class="stat-figure text-secondary">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="inline-block w-8=7 h-7 stroke-current"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
						</div>
						<div class="stat-title">Revenue</div>
						<div class="stat-value text-secondary text-3xl">{formatter.format(movie.revenue)}</div>
						<div class="stat-desc">Since {movie.release_date}</div>
					</div>

					<div class="stat">
						<div class="stat-figure text-secondary">
							<a href="https://www.themoviedb.org/movie/{movie.id}/reviews">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="inline-block w-7 h-7 stroke-current"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="2"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
									/>
								</svg>
							</a>
						</div>
						<div class="stat-title">Rating</div>
						<div class="stat-value text-3xl">{movie.vote_average.toFixed(1)}/10</div>
						<div class="stat-desc text-secondary">{movie.vote_count} votes</div>
					</div>
				</div>
			</div>
			<div class="hidden lg:mt-0 lg:col-span-4 lg:row-span-3 lg:flex">
				<img
					src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2{movie.poster_path}"
					alt="{movie.title} poster"
					class="border-[15px] rounded-2xl border-slate-900 border-opacity-40"
				/>
			</div>
		</div>
	</div>
</section>

<style>
</style>
