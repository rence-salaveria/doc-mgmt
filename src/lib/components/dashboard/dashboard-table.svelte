<script lang="ts">
	import { Status } from '$lib/types/enums';
	import { Table, tableMapperValues } from '@skeletonlabs/skeleton';
	import type { TableSource } from '@skeletonlabs/skeleton';

	const sourceData = [
		{requestor: 'Rence', requestedDocument: 'Form 137', status: Status.ON_PROCESS, latestStatusUpdate: '2 days ago'},
		{requestor: 'Rence', requestedDocument: 'Form 137', status: Status.ON_PROCESS, latestStatusUpdate: '2 days ago'},
		{requestor: 'Rence', requestedDocument: 'Form 137', status: Status.ON_PROCESS, latestStatusUpdate: '2 days ago'},
		{requestor: 'Rence', requestedDocument: 'Form 137', status: Status.ON_PROCESS, latestStatusUpdate: '2 days ago'}, 
	];

  const tableData: TableSource = {
    head: ['Requestor', 'Requested Document', 'Status', 'Latest Status Update'],
    body: tableMapperValues(sourceData, ['requestor', 'requestedDocument', 'status', 'latestStatusUpdate']),
    meta: tableMapperValues(sourceData, ['requestor', 'requestedDocument', 'status', 'latestStatusUpdate']),
  }
</script>

<Table source={tableData}/>
