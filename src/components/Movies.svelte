<script>
  export let data;
  export let handleLike;
  export let handleSelected;
  export let isModal = false;
  //데이터를 부모 컴포넌트로부터 받아옴
</script>

<main>
  <h1>영화 정보</h1>
  <div>
    {#each $data as movie, i}
      <div class="item">
        <figure>
          <img class="images" src={movie.images} alt={movie.title} />
        </figure>
        <div class="info">
          <h2 class="bg-yellow" style="color:white">{i + 1}: {movie.title}</h2>
          <h3>{movie.title}</h3>
          <p>{movie.genre}</p>
          <p>{movie.releaseDate}</p>
          <p>{movie.actor}</p>
          <button onclick={() => handleLike(i)}>좋아요 {movie.likeCnt}</button>
          <button
            onclick={() => {
              isModal = true;
              handleSelected(i);
            }}
            class="btn btn-primary"
          >
            상세정보</button
          >
        </div>
      </div>
    {/each}
  </div>
</main>

<style>
  .bg-yellow {
    background-color: mediumseagreen;
  }
  .item {
    width: 100%;
    border: 1px solid #b09090;
    display: flex;
    margin-bottom: 20px;
    padding: 1rem;
  }
  .item figure {
    width: 30%;
    margin-right: 1rem;
  }
  .item img {
    width: 100%;
  }
  .item .info {
    width: 100%;
  }
</style>
