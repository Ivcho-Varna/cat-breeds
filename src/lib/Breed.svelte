<script lang="ts">
    import LabelRating from "./LabelRating.svelte";
    import LabelCheckmark from "./LabelCheckmark.svelte";
    import LabelAttribute from "./LabelAttribute.svelte";

    export let breed;
</script>

<div class="flex shadow-lg rounded h-full overflow-hidden">
    <div class="flex flex-col">
        <img
            src="{`https://cdn2.thecatapi.com/images/${breed.reference_image_id}.jpg`}"
        >

        <div class="p-5">
            <div class="text-3xl mb-4">
                {breed.name}
                {#if (breed.alt_names)}
                        / {breed.alt_names}
                {/if}
            </div>

            <div class="flex flex-col mb-4">
                <LabelAttribute>
                    <svelte:fragment slot="label">
                        Origin
                    </svelte:fragment>

                    <svelte:fragment slot="content">
                        {breed.origin}
                    </svelte:fragment>
                </LabelAttribute>

                <LabelAttribute>
                    <svelte:fragment slot="label">
                        Temperament
                    </svelte:fragment>

                    <svelte:fragment slot="content">
                        {breed.temperament}
                    </svelte:fragment>
                </LabelAttribute>

                <LabelAttribute>
                    <svelte:fragment slot="label">
                        Life span
                    </svelte:fragment>

                    <svelte:fragment slot="content">
                        {breed.life_span}
                    </svelte:fragment>
                </LabelAttribute>

                <LabelAttribute>
                    <svelte:fragment slot="label">
                        Weight
                    </svelte:fragment>

                    <svelte:fragment slot="content">
                        {breed.weight.metric}
                    </svelte:fragment>
                </LabelAttribute>
            </div>

            <div class="grid grid-cols-2 gap-6 mb-4">
                <div class="flex flex-col">
                    <LabelRating bind:stars={breed.dog_friendly}>
                        <svelte:fragment slot="label">
                            Dog friendly
                        </svelte:fragment>
                    </LabelRating>

                    <LabelRating bind:stars={breed.stranger_friendly}>
                        <svelte:fragment slot="label">
                            Stranger friendly
                        </svelte:fragment>
                    </LabelRating>

                    <LabelRating bind:stars={breed.affection_level}>
                        <svelte:fragment slot="label">
                            Affection level
                        </svelte:fragment>
                    </LabelRating>

                    <LabelRating bind:stars={breed.child_friendly}>
                        <svelte:fragment slot="label">
                            Child friendly
                        </svelte:fragment>
                    </LabelRating>

                    <LabelRating bind:stars={breed.energy_level}>
                        <svelte:fragment slot="label">
                            Energy level
                        </svelte:fragment>
                    </LabelRating>

                    <LabelRating bind:stars={breed.intelligence}>
                        <svelte:fragment slot="label">
                            Intelligence
                        </svelte:fragment>
                    </LabelRating>

                    <LabelRating bind:stars={breed.health_issues}>
                        <svelte:fragment slot="label">
                            Health issues
                        </svelte:fragment>
                    </LabelRating>

                    <LabelRating bind:stars={breed.vocalisation}>
                        <svelte:fragment slot="label">
                            Vocalisation
                        </svelte:fragment>
                    </LabelRating>

                    <LabelRating bind:stars={breed.shedding_level}>
                        <svelte:fragment slot="label">
                            Shedding level
                        </svelte:fragment>
                    </LabelRating>

                    <LabelRating bind:stars={breed.social_needs}>
                        <svelte:fragment slot="label">
                            Social needs
                        </svelte:fragment>
                    </LabelRating>

                    <LabelRating bind:stars={breed.adaptability}>
                        <svelte:fragment slot="label">
                            Adaptability
                        </svelte:fragment>
                    </LabelRating>
                </div>

                <div class="flex flex-col">
                    <LabelCheckmark bind:checked={breed.experimental}>
                        <svelte:fragment slot="label">
                            Experimental
                        </svelte:fragment>
                    </LabelCheckmark>

                    <LabelCheckmark bind:checked={breed.grooming}>
                        <svelte:fragment slot="label">
                            Grooming
                        </svelte:fragment>
                    </LabelCheckmark>

                    <LabelCheckmark bind:checked={breed.experimental}>
                        <svelte:fragment slot="label">
                            Experimental
                        </svelte:fragment>
                    </LabelCheckmark>

                    <LabelCheckmark bind:checked={breed.hairless}>
                        <svelte:fragment slot="label">
                            Hairless
                        </svelte:fragment>
                    </LabelCheckmark>

                    <LabelCheckmark bind:checked={breed.hypoallergenic}>
                        <svelte:fragment slot="label">
                            Hypoallergenic
                        </svelte:fragment>
                    </LabelCheckmark>

                    <LabelCheckmark bind:checked={breed.indoor}>
                        <svelte:fragment slot="label">
                            Indoor
                        </svelte:fragment>
                    </LabelCheckmark>

                    <LabelCheckmark bind:checked={breed.lap}>
                        <svelte:fragment slot="label">
                            Lap
                        </svelte:fragment>
                    </LabelCheckmark>

                    <LabelCheckmark bind:checked={breed.natural}>
                        <svelte:fragment slot="label">
                            Natural
                        </svelte:fragment>
                    </LabelCheckmark>

                    <LabelCheckmark bind:checked={breed.rare}>
                        <svelte:fragment slot="label">
                            Rare
                        </svelte:fragment>
                    </LabelCheckmark>

                    <LabelCheckmark bind:checked={breed.rex}>
                        <svelte:fragment slot="label">
                            Rex
                        </svelte:fragment>
                    </LabelCheckmark>

                    <LabelCheckmark bind:checked={breed.short_legs}>
                        <svelte:fragment slot="label">
                            Short legs
                        </svelte:fragment>
                    </LabelCheckmark>

                    <LabelCheckmark bind:checked={breed.suppressed_tail}>
                        <svelte:fragment slot="label">
                            Suppressed tail
                        </svelte:fragment>
                    </LabelCheckmark>
                </div>
            </div>

            <div class="text-md mb-6">
                {breed.description}
            </div>
        </div>
    </div>
</div>
