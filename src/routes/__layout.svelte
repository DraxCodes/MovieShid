<script>
	// @ts-nocheck

	import Nav from '$lib/components/Nav.svelte';
	import '../app.css';
</script>

<div class="bg-gray-900 h-auto min-h-screen">
	<Nav />
	<slot />
</div>
