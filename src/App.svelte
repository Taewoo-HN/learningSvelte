<script lang="ts">
  import { data } from "./lib/movies";
  import Modal from "./components/Modal.svelte";
  import Navbar from "./components/Navbar.svelte";
  import Movies from "./components/Movies.svelte";
  import Events from "./components/Events.svelte";
  let selected = 0;
  let likeCnt = 0;
  let isEvent = true;
  let isModal = false;
  const handleLike = (i: number) => {
    data.update((items) => {
      items[i].likeCnt += 1;
      return items;
    });
  };
  const handleModal = () => {
    isModal = false;
  };

  const handleSelected = (i: number) => {
    selected = i;
  };
  const handleEvent = () => {
    isEvent = false;
  };
</script>

<Navbar />
<Events bind:isEvent {handleEvent} />
<Movies {data} {handleLike} {handleSelected} bind:isModal />
{#if isModal}
  <Modal {data} {selected} {handleModal} />
{/if}
