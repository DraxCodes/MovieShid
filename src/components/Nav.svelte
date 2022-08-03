<script>
	import '../app.css';
	import { Film } from 'svelte-heros';
</script>

<nav class="bg-slate-300 p-2 mt-0 fixed w-full z-10 top-0">
	<div class="container mx-auto flex items-center">
		<div class="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
			<a class="text-white no-underline hover:text-white hover:no-underline" href="/">
				<span class="text-2xl pl-6"
					><Film size="40" class="inline-block mb-1.5 text-slate-600" /> Movie Shid</span
				>
			</a>
		</div>
		<div class="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
			<ul class="list-reset flex justify-between flex-1 md:flex-none items-center">
				<li class="mr-3">
					<a class="inline-block py-2 px-4 text-white no-underline" href="/">Home</a>
				</li>
				<li class="mr-3">
					<a
						class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
						href="/upcomingMovies">Upcoming</a
					>
				</li>
			</ul>
		</div>
	</div>
</nav>
