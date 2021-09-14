<script>
    import Song from './Song.svelte';

    export let songs = []; //props fr app //ska man sätta den till tom först, innan den hunnit få data från props?
    $: console.log("songs i Bibliotek:", songs);

    export let setUpdateSong; //props fr app

</script>

<style>

</style>

<div>
    {#each songs as song}
        <Song {song} {setUpdateSong} />
    {:else}
        <div>Hämtar sånger!</div>
    {/each}

</div>

<!-- fetchar data + kör en for each som printar <Song />, importerar Song-->
<!-- Denna komponent printar ut en sånglista och kallar på Song som fyller varje kort med info -->