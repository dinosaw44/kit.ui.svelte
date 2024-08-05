<script lang="ts">
  export let label: string
  export let color: number | string = 'white'
  export let text = color

  $: base = typeof color === 'string' ? color : `hsl(${color}, 100, 50)`
</script>

<style lang="scss">
  span {
    border: solid 0.05em;
    border-radius: 1em;
    display: inline-block;
    font-family: 'Roboto', Arial, sans-serif;
    isolation: isolate;
    overflow: hidden;
    padding: 0 0.5em;
    position: relative;
    text-wrap: nowrap;
    width: fit-content;

    &::before {
      content: '\00A0';
      background-color: black;
      opacity: 0.75;
      position: absolute;
      left: 0;
      width: 100%;
      z-index: -1;
    }
  }
</style>

<span
  style:background={base}
  style:border-color={base}
  style:color={text}>{label}</span
>
