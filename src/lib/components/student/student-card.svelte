<script lang="ts">
	import {twJoin} from 'tailwind-merge';
	import Icon from '@iconify/svelte';
	import {Course, Gender, StudentStatus} from '$lib/types/enums';
	import {Avatar} from '@skeletonlabs/skeleton';
	import type {Student} from "$lib/types/student";

	interface Props extends Student {}

	export let props: Props;
</script>

<div class="relative">
	<div class="absolute right-1 top-4">
		<a href="/students/edit/{props.id}" type="button" class="btn" on:click={() => {}}>
			<Icon icon="material-symbols:edit-outline" class="icon-sm hover:text-green-700" />
		</a>
	</div>

	<div
		class={twJoin('card p-6 w-[100%] h-64 max-h-64 flex flex-col justify-evenly gap-3 border-2',
			props.gender === Gender.MALE ? 'border-blue-500' : Gender.FEMALE ? 'border-pink-500' : 'border-gray-500'
		)}
	>
		<Avatar src={props.image} width="w-20" rounded="rounded-md" />

		<div>
			<h3 class="h4 font-bold font-manrope">{props.fullName}</h3>
			<p class="text-gray-700">ID: {props.id}</p>
		</div>

		<div>
			<p class="flex gap-3">
				<span><Icon icon="ic:baseline-book" class="icon-sm" /></span>
				<span class="text-gray-600">
					{#if props.course === Course.ACCOUNTANCY}
						Accountancy
					{:else if props.course === Course.BUSINESS_ADMINISTRATION}
						Business Administration
					{:else if props.course === Course.COMPUTER_SCIENCE}
						Computer Science
					{:else if props.course === Course.CIVIL_ENGINEERING}
						Civil Engineering
					{:else if props.course === Course.ELECTRICAL_ENGINEERING}
						Electrical Engineering
					{:else if props.course === Course.PSYCHOLOGY}
						Psychology
					{:else if props.course === Course.EDUCATION}
						Education
					{:else if props.course === Course.INFORMATION_TECHNOLOGY}
						Information Technology
					{/if}
				</span>
			</p>
			<p class="flex gap-3">
				<span><Icon icon="ic:baseline-people" class="icon-sm" /></span>
				<span class="text-gray-600">
					{#if props.status === StudentStatus.FIRST_YEAR}
						1st Year
					{:else if props.status === StudentStatus.SECOND_YEAR}
						2nd Year
					{:else if props.status === StudentStatus.THIRD_YEAR}
						3rd Year
					{:else if props.status === StudentStatus.FOURTH_YEAR}
						4th Year
					{:else if props.status === StudentStatus.FIFTH_YEAR}
						5th Year
					{:else if props.status === StudentStatus.IRREGULAR}
						Irregular
					{:else if props.status === StudentStatus.SHIFTEE}
						Shiftee
					{/if}
				</span>
			</p>
		</div>
	</div>
</div>
