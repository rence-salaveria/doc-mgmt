<script lang="ts">
  import Icon from "@iconify/svelte";
  import {Course, Gender, StudentStatus} from "$lib/types/enums";

  let avatar: any, fileinput: any;

  function onFileSelected(e) {
    let image = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = e => {
      avatar = e.target.result
    };
  }
</script>

<div>
  <div class="flex justify-between items-center">
    <div>
      <h1 class="h1">Add Student</h1>
      <p class="text-gray-500">Create a student account here</p>
    </div>
    <div class="flex gap-5">
      <a href="/students/" type="button" class="btn variant-filled">
        <span><Icon icon="ic:baseline-arrow-back" class="icon-sm"/></span>
        <span>Go Back</span>
      </a>
    </div>
  </div>

  <div class="flex flex-col gap-12 mt-4">
    <div class="flex flex-col items-center justify-center">
      <h1 class="h1">Student Information</h1>
      <form action="" class="flex flex-col gap-2">

        <div class="m-4">
          <div class="relative w-40 h-40 m-auto">
            <input style="display:none" type="file" accept=".jpg, .jpeg, .png" on:change={(e)=>onFileSelected(e)}
                   bind:this={fileinput}>
            <div on:click={()=>{fileinput.click()}}>
              <Icon icon="ic:baseline-add-a-photo" class="icon-sm absolute top-2 right-1 cursor-pointer"/>
            </div>
            <img src={avatar ? avatar : "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"}
                 alt="" class="w-40 h-40 rounded-full object-cover"/>
          </div>
        </div>

        <label class="label">
          <span class="text-lg font-public font-bold">Full Name of Student</span>
          <input class="input" title="Full Name of Student" type="text" placeholder="Student Name"/>
        </label>

        <label class="label">
          <span class="text-lg font-public font-bold">Birthday</span>
          <input class="input" title="Input (date)" type="date"/>
        </label>

        <label class="label">
          <span class="text-lg font-public font-bold">Student Status</span>
          <select class="select font-manrope">
            <option value={StudentStatus.FIRST_YEAR}>1st Year</option>
            <option value={StudentStatus.SECOND_YEAR}>2nd Year</option>
            <option value={StudentStatus.THIRD_YEAR}>3rd Year</option>
            <option value={StudentStatus.FOURTH_YEAR}>4th Year</option>
            <option value={StudentStatus.FIFTH_YEAR}>5th Year</option>
            <option value={StudentStatus.IRREGULAR}>Irregular</option>
            <option value={StudentStatus.SHIFTEE}>Shiftee</option>
          </select>
        </label>

        <label class="label">
          <span class="text-lg font-public font-bold">Student Course</span>
          <select class="select font-manrope">
            <option value={Course.ACCOUNTANCY}>Accountancy</option>
            <option value={Course.BUSINESS_ADMINISTRATION}>Business Administration</option>
            <option value={Course.CIVIL_ENGINEERING}>Civil Engineering</option>
            <option value={Course.COMPUTER_SCIENCE}>Computer Science</option>
            <option value={Course.EDUCATION}>Education</option>
            <option value={Course.ELECTRICAL_ENGINEERING}>Electrical Engineering</option>
            <option value={Course.INFORMATION_TECHNOLOGY}>Information Technology</option>
          </select>
        </label>

        <label class="label">
          <span class="text-lg font-public font-bold">Gender</span>
          <select class="select font-manrope">
            <option value={Gender.MALE}>Male</option>
            <option value={Gender.FEMALE}>Female</option>
          </select>
        </label>

        <button class="btn variant-filled">
          <span><Icon icon="ic:outline-add-circle-outline" class="icon-sm"/></span>
          <span>Add Student</span>
        </button>
      </form>

    </div>
  </div>
</div>