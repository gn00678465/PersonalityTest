<template>
  <div :class="`radios-${radioSetting.direction}`">
    <div
      class="form-control"
      :class="`radio-${radioSetting.size}`"
      v-for="option in radioSetting.options"
      :key="option[radioSetting['optionValName']]"
    >
      <input
        :id="`option${option[radioSetting['optionValName']]}`"
        type="radio"
        name="1111"
        :value="option[radioSetting['optionValName']]"
        v-model="value"
        @change="change"
      >
      <label :for="`option${option[radioSetting['optionValName']]}`">
        <span>{{option[radioSetting['optionKeyName']]}}</span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'radios',
  props: {
    radioSetting: {
      size: {
        type: String,
        required: true
      },
      direction: {
        type: String,
        required: true
      },
      options: {
        type: Array,
        required: true
      },
      optionKeyName: {
        type: String,
        required: true
      },
      optionValName: {
        type: String,
        required: true
      }
    }
  },
  data () {
    return {
      value: 0
    }
  },
  methods: {
    change () {
      this.$emit('input', this.value)
    }
  }
}
</script>

<style lang="scss" scoped>
// variable
$size: 32px, 24px, 16px;
$md-radio-checked-color: rgb(51, 122, 183);
$md-radio-border-color: rgba(0, 0, 0, 0.54);
$md-radio-xl-size: nth($size, 1);
$md-radio-xl-checked-size: $md-radio-xl-size / 2;
$md-radio-size: nth($size, 2);
$md-radio-checked-size: $md-radio-size / 2;
$md-radio-sm-size: nth($size, 3);
$md-radio-sm-checked-size: $md-radio-sm-size / 2;
$md-radio-ripple-size: 15px;

//
.radios-vertical {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .form-control {
    margin-bottom: $md-radio-size / 2;
  }
}

//
.form-control {
  input[type="radio"] {
    display: none;
    &:checked + label:before {
      border-color: $md-radio-checked-color;
      animation: ripple 0.2s linear forwards;
    }
    &:checked + label:after {
      transform: scale(1);
    }
    &:checked + label > span {
      font-weight: border;
      color: $md-radio-checked-color;
    }
    &:not(:checked) + label > span {
      color: $md-radio-border-color;
    }
  }
  label {
    display: inline-block;
    position: relative;
    margin-bottom: 0;
    span {
      display: inline-block;
      height: auto;
      vertical-align: middle;
    }
    cursor: pointer;
    &:before,
    &:after {
      position: absolute;
      content: "";
      border-radius: 50%;
      transition: all 0.3s ease;
      transition-property: transform, border-color;
    }
    &:before {
      left: 0;
      top: 0;
      border: 2px solid $md-radio-border-color;
    }
    &:after {
      transform: scale(0);
      background: $md-radio-checked-color;
    }
  }
}

.form-control.radio {
  label {
    min-height: $md-radio-size;
    padding: 0 ($md-radio-size + 8px);
    line-height: $md-radio-size;
    &:before {
      width: $md-radio-size;
      height: $md-radio-size;
    }
    &:after {
      top: $md-radio-size / 2 - $md-radio-checked-size / 2;
      left: $md-radio-size / 2 - $md-radio-checked-size / 2;
      width: $md-radio-checked-size;
      height: $md-radio-checked-size;
    }
  }
  &-xl {
    label {
      min-height: $md-radio-xl-size;
      padding: 0 ($md-radio-xl-size + 10px);
      line-height: $md-radio-xl-size;
      &:before {
        width: $md-radio-xl-size;
        height: $md-radio-xl-size;
      }
      &:after {
        top: $md-radio-xl-size / 2 - $md-radio-xl-checked-size / 2;
        left: $md-radio-xl-size / 2 - $md-radio-xl-checked-size / 2;
        width: $md-radio-xl-checked-size;
        height: $md-radio-xl-checked-size;
      }
    }
  }
  &-sm {
    label {
      min-height: $md-radio-sm-size;
      padding: 0 ($md-radio-sm-size + 6px);
      line-height: $md-radio-sm-size;
      &:before {
        width: $md-radio-sm-size;
        height: $md-radio-sm-size;
      }
      &:after {
        top: $md-radio-sm-size / 2 - $md-radio-sm-checked-size / 2;
        left: $md-radio-sm-size / 2 - $md-radio-sm-checked-size / 2;
        width: $md-radio-sm-checked-size;
        height: $md-radio-sm-checked-size;
      }
    }
  }
}
</style>
