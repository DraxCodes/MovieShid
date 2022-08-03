<script>
	export let movie;
</script>

<div class="sm:max-w-xl">
	<div class="bg-white shadow-lg border-gray-100 max-h-80 h-96 border sm:rounded-3xl p-8 flex space-x-8">
		<div class="w-60">
			<img
				class="rounded-3xl shadow-lg shadow-black"
				src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2{movie.poster_path}"
				alt=""
			/>
		</div>
		<div class="flex flex-col w-1/2 space-y-2">
			<div class="flex justify-between items-start">
				<h2 class="text-3xl font-bold">{movie.title}</h2>
				<div class="bg-yellow-400 font-bold rounded-xl p-2">{(movie.vote_average === 0) ? "0.0" : movie.vote_average}</div>
			</div>
			<div>
				<div class="text-sm text-gray-400">Release</div>
				<div class="text-lg text-gray-800">{movie.release_date}</div>
			</div>
			<p class=" text-gray-400 max-h-40 overflow-y-scroll scrollbar-hide">
				{movie.overview}
			</p>
		</div>
	</div>
</div>
