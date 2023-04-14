<script lang="ts">
    export let checked = null;
</script>

<div class="flex items-center">
    <span class="text-sm mr-2">
        <slot name="label"></slot>
    </span>

    <img class="w-3 h-3" src="{`/${!!checked ? 'accept' : 'remove'}.png`}">
</div>
