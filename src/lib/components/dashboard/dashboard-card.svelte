<script lang="ts">
	import { twJoin } from 'tailwind-merge';
	import { Status } from '$lib/types/enums';
	import Icon from '@iconify/svelte';

	function getClassColor(type: string, status: Status) {
		switch (status) {
			case Status.ON_PROCESS:
				return `${type}-blue-600`;
			case Status.FOR_SIGNING:
				return `${type}-amber-600`;
			case Status.FOR_RELEASE:
				return `${type}-cyan-600`;
			case Status.CLAIMED:
				return `${type}-green-600`;
			case Status.CANCELLED:
				return `${type}-red-600`;
			default:
				return `${type}-gray-600`;
		}
	}

	interface Props {
		status: Status;
		count: number;
		id: string;
	}

	export let props: Props;
</script>

<div
	class={twJoin(
		'card border-2 card-hover',
		getClassColor('border', props.status)
	)}
>
	<header class="card-header centered">
		{#if props.status === Status.ON_PROCESS}
			<div class="flex items-center gap-2 font-bold text-xl text-blue-600">
				<Icon icon="ic:baseline-document-scanner" class="icon-sm" />
				<span>ON PROCESS</span>
			</div>
		{:else if props.status === Status.FOR_SIGNING}
			<div class="flex items-center gap-2 font-bold text-xl text-amber-600">
				<Icon icon="ph:pen-fill" class="icon-sm" />
				<span>FOR SIGNING</span>
			</div>
		{:else if props.status === Status.FOR_RELEASE}
			<div class="flex items-center gap-2 font-bold text-xl text-cyan-600">
				<Icon icon="material-symbols:release-alert" class="icon-sm" />
				<span>FOR RELEASE</span>
			</div>
		{:else if props.status === Status.CLAIMED}
			<div class="flex items-center gap-2 font-bold text-xl text-green-600">
				<Icon icon="material-symbols:new-releases" class="icon-sm" />
				<span>CLAIMED</span>
			</div>
		{:else if props.status === Status.CANCELLED}
			<div class="flex items-center gap-2 font-bold text-xl text-red-600">
				<Icon icon="tabler:file-x-filled" class="icon-sm" />
				<span>CANCELLED</span>
			</div>
		{/if}
	</header>
	<section
		class={twJoin(
			'flex justify-center items-center my-5 text-5xl font-bold',
			getClassColor('text', props.status)
		)}
	>
		{('000' + props.count).slice(-4)}
	</section>
	<footer class="card-footer centered">
		<div class="flex justify-center items-center gap-2">
			<Icon icon="ic:baseline-edit-calendar" class="icon-sm" />
			<span>Last action by: {props.id}</span>
		</div>
	</footer>
</div>
