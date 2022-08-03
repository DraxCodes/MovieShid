<script>
	// @ts-nocheck

	import Nav from '../components/Nav.svelte';
	import '../app.css';
</script>

<div class="bg-slate-200 h-auto min-h-screen">
	<Nav />
	<div class="mx-auto py-20 max-w-screen-2xl">
		<slot />
	</div>
</div>
