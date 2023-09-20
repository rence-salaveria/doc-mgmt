<script lang="ts">
	import DashboardTable from './../lib/components/dashboard/dashboard-table.svelte';
	import { Status } from '$lib/types/enums';
	import DashboardCard from '$lib/components/dashboard/dashboard-card.svelte';
	import Icon from '@iconify/svelte';

	// use store values (take only user id for now)
	let loggedIn = '102943';
</script>

<div>
	<!-- Login Section (when logged out) -->

	<!-- Main Section -->
	<div class="flex flex-col gap-4 pb-8">
		<!-- Header part -->
		<div class="flex items-center justify-between">
			<div>
				<h1 class="h1">Welcome Employee {loggedIn}</h1>
				<p class="text-gray-500">
					Check current statuses of document requests or manually create a new
					request for a student
				</p>
			</div>
			<div class="flex gap-5">
				<button type="button" class="btn variant-filled">
					<span><Icon icon="ic:baseline-add" class="icon-sm" /></span>
					<span>Add Request</span>
				</button>
			</div>
		</div>

		<!-- Status cards and count -->
		<div class="grid grid-cols-5 gap-4">
			<DashboardCard
				props={{
					status: Status.ON_PROCESS,
					count: 10,
					id: 'id-9086'
				}}
			/>
			<DashboardCard
				props={{
					status: Status.FOR_SIGNING,
					count: 4,
					id: 'id-4212'
				}}
			/>
			<DashboardCard
				props={{
					status: Status.FOR_RELEASE,
					count: 7,
					id: 'id-2736'
				}}
			/>
			<DashboardCard
				props={{
					status: Status.CLAIMED,
					count: 12,
					id: 'id-2617'
				}}
			/>
			<DashboardCard
				props={{
					status: Status.CANCELLED,
					count: 9,
					id: 'id-4162'
				}}
			/>
		</div>
	</div>

	<!-- Recent Operations Section -->
	<div>
		<div>
			<h1 class="h1">Recent Operations</h1>
			<p class="text-gray-500">
				Check current statuses of document requests or manually create a new
				request for a student
			</p>
		</div>
		<div class="mt-4">
			<DashboardTable />
		</div>
	</div>
</div>
