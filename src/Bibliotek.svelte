<script>
import { onMount } from "svelte";
import Song from './Song.svelte';

export let songs = [];

    onMount(() => {
        setTimeout(() => {
            fetch('http://localhost:3000/songs')
            .then(res => res.json()) 
            .then(data => {
                console.log("data from fetch", data);
                songs = data;
            })
        }, 1000)
        
    })
</script>

<style>

</style>

<div>
    {#each songs as song}
        <Song {song} />
    {:else}
        <div>Hämtar sånger</div>
    {/each}

</div>

<!-- fetchar data + kör en for each som printar <Song />, importerar Song-->