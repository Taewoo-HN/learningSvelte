<script>
  export let isEvent;
  export let handleEvent;
</script>

<div class={isEvent ? "event show" : "event"}>
  <p>DC의 새로운 도전, 슈퍼맨(2025)</p>
  <button onclick={handleEvent}>X</button>
</div>

<style>
  .event {
    background: #f0f0f0;
    padding: 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-radius: 10px;
    margin-bottom: 20px;
    text-align: center;

    /* 창이 보이지 않게 */
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    transition: all 0.5s;
  }
  /* 창이 보이게 */
  .show {
    opacity: 1;
    max-height: 100px;
  }
  .event button {
    padding: 2px;
    align-items: center;
  }
</style>
