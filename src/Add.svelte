<script>
  import { push } from 'svelte-spa-router';
  import NoteEditor from './components/NoteEditor.svelte';
  import { addNote } from './lib/storage';

  let title = '新しいノート';
  let content = '';

  const onSave = () =>  {
    addNote({title, content});
    push('/');
  };
</script>

<div class="add">
  <NoteEditor bind:title={title} bind:content={content}></NoteEditor>
  <div class="button-container">
    <button class="save" on:click={onSave} disabled={!title || !content}>保存</button>
  </div>
</div>

<style>
  .add {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .button-container {
    padding: 1em 0;
    text-align: right;
  }

  .save {
    background-color: rgb(62, 68, 163);
    border: none;
    border-radius: 3px;
    color: white;
    font-size: 1em;
    padding: 0.5em 1em;
    cursor: pointer;
  }

  .save:disabled {
    opacity: 0.3;
    cursor: auto;
  }
</style>