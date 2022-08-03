<script>
	export let movie;
</script>

<a href="/movie/{movie.id}">
	<div class="relative">
		<section
			class="bg-slate-800 h-64 mb-5 rounded-lg flex overflow-hidden shadow-black shadow-md opacity-95 hover:opacity-100"
		>
			<img
				src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2{movie.poster_path}"
				alt="{movie.title} Poster"
				class="rounded-md m-3 shadow-slate-600 shadow-md"
			/>
			<div class="flex-col overflow-y-scroll scrollbar-hide z-10">
				<div class="text-slate-300 text-2xl m-2">
					{movie.title}
				</div>
				<div class="text-slate-400 m-2">
					{movie.overview}
				</div>
			</div>
		</section>

		<div
			class="absolute top-0 left-0 text-black text-lg font-semibold bg-yellow-300 rounded-full -translate-x-2 -translate-y-2 h-10 w-10	"
		>
			<div class="grid place-content-center translate-y-1.5">
				{movie.vote_average}
			</div>
		</div>
	</div>
</a>
