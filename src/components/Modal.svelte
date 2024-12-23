<script>
  export let data;
  export let selected;
  export let handleModal; // 함수도 전달 가능
  //데이터를 부모 컴포넌트로부터 받아옴
</script>

<div class="modal">
  <div class="inner">
    <h3>{$data[selected].title}</h3>
    <p>{@html $data[selected].story}</p>
    <button class="btn-close" onclick={handleModal}> 닫기 </button>
  </div>
</div>

<style>
  .modal {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal .inner {
    background: #fff;
    width: 80%;
    padding: 20px;
    border-radius: 10px;
  }
</style>
