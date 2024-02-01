<script>
  export let item;
  export let deleteItem = () => {};
</script>
<div style={item.completed ? 'text-decoration: line-through' : ''}>
    <input type="checkbox" bind:checked={item.completed} />
    {item.text} <button on:click={deleteItem(item)}>Delete</button>
</div>
