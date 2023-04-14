<script lang="ts">
</script>

<div class="mb-2">
    <div>
        <h6 class="h-10 flex items-center text-lg mb-2 font-serif font-bold">
            <slot name="label"></slot>
            <slot name="reset"></slot>
        </h6>

        <div class="font-sans text-sm font-medium">
            <slot name="content"></slot>
        </div>
    </div>
</div>
