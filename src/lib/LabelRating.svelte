<script lang="ts">
    export let stars = null;
</script>

{#if typeof stars === 'number'}
    <div class="flex items-center">
        <span class="text-sm mr-2">
            <slot name="label"></slot>
        </span>

        {#each Array(stars) as star}
            <img class="w-3 h-3" src="{`/star.png`}">
        {/each}
    </div>
{/if}
