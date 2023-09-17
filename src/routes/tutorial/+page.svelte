<script lang="ts">
    import type { PageData } from './$types';
    import { ProgressBar } from '@skeletonlabs/skeleton';
	import Caesar from './caesar.svelte';
    
    export let data: PageData;

    //const scrollbarHeight = document.documentElement.scrollHeight - window.innerHeight
    let y = 0;

</script>

<div class="mx-50">
    <Caesar />
</div>
<!--
<svelte:window bind:scrollY={y} />
<ProgressBar label="Progress Bar" value={y} max={scrollbarHeight} />
-->