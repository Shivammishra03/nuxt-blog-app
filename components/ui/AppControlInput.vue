<script setup>
const props = defineProps({
  controlType: {
    type: String,
    default: 'input'
  },
  value: {
    type: String,
    default: ''
  }
});
</script>

<template>
  <div class="input-control">
    <label><slot /></label>
    <input
      v-if="props.controlType === 'input'"
      v-bind="$attrs"
      :value="props.value"
      @input="$emit('input', $event.target.value)">
    <textarea
      v-if="props.controlType === 'textarea'"
      rows="10"
      :value="value"
      @input="$emit('input', $event.target.value)"></textarea>
  </div>
</template>

<style scoped>
.input-control {
  margin: 10px 0;
}

.input-control label {
  display: block;
  font-weight: bold;
}

.input-control input,
.input-control textarea {
  display: block;
  width: 100%;
  box-sizing: border-box;
  font: inherit;
  border: 1px solid #ccc;
  padding: 5px;
}

.input-control input:focus,
.input-control textarea:focus {
  background-color: #eee;
  outline: none;
}
</style>


