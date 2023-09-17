<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar, LightSwitch } from '@skeletonlabs/skeleton';
	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl"></strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
			<a
				class="btn btn-sm variant-ghost-primary"
				href="https://github.com/tybeller/Decryptid-Shellhacks-2023/"
				target="_blank"
				rel="noreferrer"
			>
				GitHub
			</a>	
			<LightSwitch />

				<!-- <button type="button" on:click={() => window.location.href='https://github.com/tybeller/Decryptid-Shellhacks-2023/'} class="btn-sm btn-icon variant-filled">
					<img src="/github-mark.svg" alt="GitHub Logo" />
				</button> -->
			</svelte:fragment>		
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
