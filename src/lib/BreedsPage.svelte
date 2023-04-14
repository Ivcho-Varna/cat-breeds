<script lang="ts">
    import { onMount } from 'svelte';
    import debounce from "./debounce";
    import CatsAPI from "../api";

    import BreedsList from "./BreedsList.svelte";
    import FiltersList from "./FiltersList.svelte";
    import FiltersItem from "./FiltersItem.svelte";

    let breeds = [];
    let breedsFiltered = [];
    let hasActiveFilters = false;
    let searchQuery = '';
    let isLoading = false;
    let showFilters = false;

    const fetchBreeds = async () => {
        try {
            const api = new CatsAPI();
            isLoading = true;

            breeds = await api.breeds();

            isLoading = false;
        } catch (e) {
            isLoading = false;
        }
    };

    const handleSearchInput = debounce((event) => {
        searchQuery = event.target.value;
    }, 250);

    const filterByRating = (group, value) => {
        if (group === 'low') {
            return value <= 2;
        } else if (group === 'medium') {
            return value === 3;
        } else if (group === 'high') {
            return value >= 4;
        } else {
            return true;
        }
    };

    const filterByAttribute = (filter, value) => {
        if (filter === 'yes') {
            return !!value;
        } else if (filter === 'no') {
            return !value;
        } else {
            return true;
        }
    };

    const resetAllFilters = () => {
        filters.forEach((filter, index) => resetFilter(filter, index));
    }

    const resetFilter = (type, index) => {
        filters[index]['model'] = null;
    }

    const resetSearch = () => {
        searchQuery = '';
    }

    const isActiveFilter = (filter) => {
        return !Object.is(null, filter.model);
    }

    const filters = [
        {
            type: 'rating',
            label: 'Dog-friendly',
            key: 'dog_friendly',
            model: null,
        },
        {
            type: 'rating',
            label: 'Stranger friendly',
            key: 'stranger_friendly',
            model: null,
        },
        {
            type: 'rating',
            label: 'Affection level',
            key: 'affection_level',
            model: null,
        },
        {
            type: 'rating',
            label: 'Child friendly',
            key: 'child_friendly',
            model: null,
        },
        {
            type: 'rating',
            label: 'Energy level',
            key: 'energy_level',
            model: null,
        },
        {
            type: 'rating',
            label: 'Intelligence',
            key: 'intelligence',
            model: null,
        },
        {
            type: 'rating',
            label: 'Health issues',
            key: 'health_issues',
            model: null,
        },
        {
            type: 'rating',
            label: 'Vocalisation',
            key: 'vocalisation',
            model: null,
        },
        {
            type: 'rating',
            label: 'Shedding level',
            key: 'shedding_level',
            model: null,
        },
        {
            type: 'rating',
            label: 'Social needs',
            key: 'social_needs',
            model: null,
        },
        {
            type: 'rating',
            label: 'Adaptability',
            key: 'adaptability',
            model: null,
        },
        {
            type: 'attribute',
            label: 'Grooming',
            key: 'grooming',
            model: null,
        },
        {
            type: 'attribute',
            label: 'Experimental',
            key: 'experimental',
            model: null,
        },
        {
            type: 'attribute',
            label: 'Hairless',
            key: 'hairless',
            model: null,
        },
        {
            type: 'attribute',
            label: 'Hypoallergenic',
            key: 'hypoallergenic',
            model: null,
        },
        {
            type: 'attribute',
            label: 'Indoor',
            key: 'indoor',
            model: null,
        },
        {
            type: 'attribute',
            label: 'Lap',
            key: 'lap',
            model: null,
        },
        {
            type: 'attribute',
            label: 'Natural',
            key: 'natural',
            model: null,
        },
        {
            type: 'attribute',
            label: 'Rare',
            key: 'rare',
            model: null,
        },
        {
            type: 'attribute',
            label: 'Rex',
            key: 'rex',
            model: null,
        },
        {
            type: 'attribute',
            label: 'Short legs',
            key: 'short_legs',
            model: null,
        },
        {
            type: 'attribute',
            label: 'Suppressed tail',
            key: 'supressed_tail',
            model: null,
        },
    ];

    $: {
        hasActiveFilters = filters.reduce((prev, current) => {
            if (prev) {
                return prev;
            }

            return isActiveFilter(current);
        }, false)

        breedsFiltered = breeds.filter(breed => {
            return filters.reduce((prev, current) => {
                if (!prev) {
                    return prev;
                }

                if (searchQuery !== '') {
                    return `${breed.name}${breed.alt_names ? breed.alt_names : ''}${breed.description}`.match(new RegExp(`${searchQuery}`, 'gi'));
                }

                if (isActiveFilter(current)) {
                    if (current.type === 'rating') {
                        return filterByRating(current.model, breed[current.key]);
                    }

                    if (current.type === 'attribute') {
                        return filterByAttribute(current.model, breed[current.key]);
                    }
                }

                return prev;
            }, true);
        });
    }

    onMount(async () => { await fetchBreeds(); });
</script>

<div class="grid grid-cols-1 lg:grid-cols-4 gap-4">
    <div class="col-span-1">
        <FiltersList>
            {#if (hasActiveFilters)}
                <button class="w-full mb-4 text-sm font-medium bg-stone-100 p-2" on:click={resetAllFilters}>Reset all filters</button>
            {/if}

            <FiltersItem>
                <svelte:fragment slot="label">
                    Search by name
                </svelte:fragment>

                <svelte:fragment slot="reset">
                    {#if (searchQuery !== '')}
                        <button class="ml-4 w-16 text-sm font-medium bg-stone-100 p-2" on:click={resetSearch}>Reset</button>
                    {/if}
                </svelte:fragment>

                <svelte:fragment slot="content">
                    <input class="w-full mb-4 text-sm font-medium bg-stone-100 p-2" on:input={handleSearchInput}>
                </svelte:fragment>
            </FiltersItem>

            <FiltersItem>
                <svelte:fragment slot="label">
                    Show filters
                </svelte:fragment>

                <svelte:fragment slot="content">
                    <input id="show_filters" type="checkbox" name="Show filters" bind:checked={showFilters}>
                    <label for="show_filters" class="ml-1 cursor-pointer">Yes</label>
                </svelte:fragment>
            </FiltersItem>

            {#if (showFilters)}
                {#each filters as filter, index}
                    <FiltersItem>
                        <svelte:fragment slot="label">
                            <span>{filter.label}</span>
                        </svelte:fragment>

                        <svelte:fragment slot="reset">
                            {#if (isActiveFilter(filter))}
                                <button class="ml-4 w-16 text-sm font-medium bg-stone-100 p-2" on:click={resetFilter(filter.type, index)}>Reset</button>
                            {/if}
                        </svelte:fragment>

                        <svelte:fragment slot="content">
                            {#if (filter.type === 'rating')}
                                {#each ['high', 'medium', 'low'] as filterOption}
                                    <div class="flex items-center mb-1">
                                        <input type="radio" id="{`${filter.label}-${filterOption}`}" name="{filter.label}" value="{filterOption}" bind:group="{filter.model}">
                                        <label for="{`${filter.label}-${filterOption}`}" class="ml-1 cursor-pointer">{`${filterOption[0].toUpperCase()}${filterOption.slice(1)}`}</label>
                                    </div>
                                {/each}
                            {/if}

                            {#if (filter.type === 'attribute')}
                                {#each ['yes', 'no'] as filterOption}
                                    <div class="flex items-center mb-1">
                                        <input type="radio" id="{`${filter.label}-${filterOption}`}" name="{filter.label}" value="{filterOption}" bind:group="{filter.model}">
                                        <label for="{`${filter.label}-${filterOption}`}" class="ml-1 cursor-pointer">{`${filterOption[0].toUpperCase()}${filterOption.slice(1)}`}</label>
                                    </div>
                                {/each}
                            {/if}
                        </svelte:fragment>
                    </FiltersItem>
                {/each}
            {/if}
        </FiltersList>
    </div>

    <div class="col-span-1 lg:col-span-3">
        <BreedsList bind:breeds={breedsFiltered} />

        {#if (isLoading)}
            <div role="status" class="flex justify-center">
                <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                <span class="sr-only">Loading...</span>
            </div>
        {/if}
    </div>
</div>
