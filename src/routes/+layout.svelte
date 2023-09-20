<script lang="ts">
	import '../app.postcss';
	import { page } from '$app/stores';

	import {
		AppShell,
		AppBar,
		AppRail,
		AppRailAnchor,
		initializeStores,
		Modal
	} from '@skeletonlabs/skeleton';
	import Icon from '@iconify/svelte';
	import { twJoin } from 'tailwind-merge';

	// for modals in skeleton ui
	initializeStores();

	// used by the apprail
	let currentTile: number = 0;

	// flag used by the refresh button to control animations
	let refreshFlag: boolean = false;

	function refresh() {
		refreshFlag = true;
		setTimeout(() => {
			refreshFlag = false;
		}, 1000);
	}

	function getRefreshStatusClass(flag: boolean) {
		return flag ? 'animate-spin' : '';
	}
</script>

<Modal />
<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<div class="flex items-center gap-4">
					<Icon icon="ic:baseline-school" class="w-8 h-8" />
					<span class="h4 font-bold">Document Tracking System</span>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<button
					type="button"
					class="btn-icon variant-filled"
					on:click={refresh}
				>
					<div class="flex items-center gap-2">
						<Icon
							icon="ic:round-refresh"
							class={twJoin('icon-sm', getRefreshStatusClass(refreshFlag))}
						/>
					</div>
				</button>
				<button type="button" class="btn variant-filled">
					<div class="flex items-center gap-2">
						<Icon icon="solar:logout-linear" class="icon-sm" />
						<span>Logout</span>
					</div>
				</button>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<AppRail>
			<svelte:fragment slot="lead">
				<!-- Tile for Students -->
				<AppRailAnchor
					href="/"
					selected={$page.url.pathname === '/'}
					bind:group={currentTile}
					name="requests"
					value={0}
				>
					<svelte:fragment slot="lead">
						<div class="icon-centered">
							<Icon icon="ic:round-file-open" class="w-8 h-8" />
						</div>
					</svelte:fragment>
					<span>Dashboard</span>
				</AppRailAnchor>

				<!-- Tile for Students -->
				<AppRailAnchor
					href="/students"
					selected={$page.url.pathname === '/students'}
					bind:group={currentTile}
					name="students"
					value={1}
				>
					<svelte:fragment slot="lead">
						<div class="icon-centered">
							<Icon icon="ic:baseline-supervised-user-circle" class="w-8 h-8" />
						</div>
					</svelte:fragment>
					<span>Students</span>
				</AppRailAnchor>

				<!-- Tile for Document List (All) -->
				<AppRailAnchor
					href="/docs"
					selected={$page.url.pathname === '/docs'}
					bind:group={currentTile}
					title="Documents"
					value={2}
				>
					<svelte:fragment slot="lead">
						<div class="icon-centered">
							<Icon icon="ic:round-file-present" class="w-8 h-8" />
						</div>
					</svelte:fragment>
					<span>Documents</span>
				</AppRailAnchor>

				<!-- Tile for Logs -->
				<AppRailAnchor
					href="/logs"
					selected={$page.url.pathname === '/logs'}
					bind:group={currentTile}
					title="Logs"
					value={3}
				>
					<svelte:fragment slot="lead">
						<div class="icon-centered">
							<Icon icon="ic:baseline-insert-chart" class="w-8 h-8" />
						</div>
					</svelte:fragment>
					<span>Audit Trails</span>
				</AppRailAnchor>

				<!-- Tile for Settings -->
				<AppRailAnchor
					href="/settings"
					selected={$page.url.pathname === '/settings'}
					bind:group={currentTile}
					title="Settings"
					value={4}
				>
					<svelte:fragment slot="lead">
						<div class="icon-centered">
							<Icon icon="ic:baseline-settings" class="w-8 h-8" />
						</div>
					</svelte:fragment>
					<span>Settings</span>
				</AppRailAnchor>
			</svelte:fragment>

			<svelte:fragment slot="trail">
				<AppRailAnchor href="/" selected title="Home">
					<div class="icon-centered">
						<Icon icon="ic:baseline-school" class="w-8 h-8" />
					</div>
				</AppRailAnchor>
			</svelte:fragment>
		</AppRail>
	</svelte:fragment>

	<div class="mx-10 my-5">
		<slot />
	</div>
</AppShell>
