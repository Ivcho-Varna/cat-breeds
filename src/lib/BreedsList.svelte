<script lang="ts">
    import Breed from "./Breed.svelte";

    export let breeds = [];
</script>

<ul class="grid grid-cols-1 lg:grid-cols-2 gap-10">
    {#each breeds as breed}
        <li class="full-width">
            <Breed bind:breed="{breed}" />
        </li>
    {/each}
</ul>
