<script>
  import Item from './item.svelte';
  import TodoItem from '../models/TodoItem.ts';

  let newItem = new TodoItem();

  let items = [];

  function addItem(e) {
    if(e.key !== 'Enter') return;
    items = [...items, newItem];
    newItem = new TodoItem();
  }

  function deleteItem(item) {
    console.log(items);
    items = items.filter(i => i.id !== item.id);
  }
</script>

<input bind:value={newItem.text} on:keypress={(e) => addItem(e)} />

{#each items as item}
    <Item {item} deleteItem={deleteItem}/>
{/each}
