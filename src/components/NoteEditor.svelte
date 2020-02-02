<script>
  export let title;
  export let content;
</script>

<div class="editor">
  <input class="title" placeholder="タイトル" bind:value={title}>
  <textarea class="content" placeholder="本文" bind:value={content}></textarea>
</div>

<style>
  .editor {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .title {
    display: block;
    background-color: transparent;
    border: none;
    border-left: 2px solid rgb(200, 86, 20);
    font-size: 2em;
    padding: 0.5rem 1rem;
    margin-bottom: 0.3em;
    width: 100%;
  }

  .content {
    flex: 1;
    display: block;
    background-color: transparent;
    border: none;
    border-left: 2px solid rgb(200, 86, 20);
    font-size: 1.1em;
    padding: 1rem 1rem;
    margin-bottom: 0.3em;
    width: 100%;
    resize: none;
  }
</style>