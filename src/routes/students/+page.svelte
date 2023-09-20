<script lang="ts">
  import StudentCard from '$lib/components/student/student-card.svelte';
  import Icon from '@iconify/svelte';
  import type {PageData} from './$types';
  import type {Student} from '$lib/types/student';

  export let data: { items: PageData['items'] }


  let queryableData: PageData['items'] = []

  $: {
    queryableData = data.items
    let nameMatches = queryableData.filter((student: Student) => student.fullName.toLowerCase().includes(search.toLowerCase()))
    let courseMatches = queryableData.filter((student: Student) => student.course.toLowerCase().includes(search.toLowerCase()))
    let statusMatches = queryableData.filter((student: Student) => student.status.toLowerCase().includes(search.toLowerCase()))
    let idMatches = queryableData.filter((student: Student) => student.id.toLowerCase().includes(search.toLowerCase()))

    let allMatches = [...nameMatches, ...courseMatches, ...statusMatches, ...idMatches]

    queryableData = [...new Set(allMatches)]
  }

  let search = ''
</script>


<div>
  <div class="flex justify-between items-center">
    <div>
      <h1 class="h1">Students</h1>
      <p class="text-gray-500">Manage and find students in this page</p>
    </div>
    <div class="flex gap-5">
      <a href="/students/add" type="button" class="btn variant-filled">
        <span><Icon icon="ic:baseline-add" class="icon-sm"/></span>
        <span>Add Student</span>
      </a>
    </div>
  </div>

  <div class="flex flex-col gap-6 mt-4">
    <div class="input-group grid-cols-[auto_1fr_auto]">
      <div class="">
        <Icon icon="ic:baseline-search" class="icon-sm"/>
      </div>
      <input type="search" placeholder="Search by ID, name or course" class="p-2" bind:value={search}/>
      <div class="">
        <button on:click={() => search = ''}>
          <Icon icon="ic:baseline-close" class="icon-sm cursor-pointer"/>
        </button>
      </div>
    </div>

    <div class="grid grid-cols-5 gap-6">
      {#each queryableData as student}
        <StudentCard props={student}/>
      {/each}
    </div>
  </div>
</div>