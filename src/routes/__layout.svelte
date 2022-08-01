<script>
   import Nav from '../components/Nav.svelte';
   import "../app.css";
   import { Film } from "svelte-heros";
   
</script>
<div class="bg-slate-200 h-screen">
    <Nav />
    <div class="mx-auto py-20 max-w-lg">
        <slot></slot>
    </div>
</div>

