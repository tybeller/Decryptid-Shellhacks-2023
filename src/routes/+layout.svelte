<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar, Avatar, LightSwitch } from '@skeletonlabs/skeleton';

	import { fade } from 'svelte/transition';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import { goto } from '$app/navigation';
	import { isAuthenticated, user, user_badges, badges } from '../store';
	import App from '../App.svelte';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl">Shellhacks 2023 Authentication Project</strong>
			</svelte:fragment>
			<!--<svelte:fragment slot="trail">
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://github.com/skeletonlabs/skeleton"
					target="_blank"
					rel="noreferrer"
				>
					GitHub
				</a>
			</svelte:fragment> -->
			<svelte:fragment slot="trail">
				
				<LightSwitch />

				<!--<p>Hello Ty!</p>
				<Avatar
					class="avatar w-8 h-8"
					src="https://avatars.githubusercontent.com/u/8199998?v=4"
					alt="User Avatar"
					on:click={() => goto('/profile')}
				/> -->
				
				<div class="navbar-nav mr-auto user-details">
					{#if $isAuthenticated}
					<span class="text">&nbsp;&nbsp;{$user.name} ({$user.email})</span>
						{:else}<span>Not logged in</span>{/if}
				</div>
			</svelte:fragment>		
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
