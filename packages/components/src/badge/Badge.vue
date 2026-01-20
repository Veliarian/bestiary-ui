<template>
    <span :class="classes">
        <slot>
            {{value}}
        </slot>
    </span>
</template>

<script setup lang="ts">
import {computed} from "vue";
import {badgeProps} from "./badge.types";
import "./badge.css"

defineOptions({name: 'BBadge'});
const props = defineProps(badgeProps);

const classes = computed(() => {
    return [
        'b-badge',
        props.form ? `b-badge--form-${props.form}` : "",
        props.size ? `b-badge--size-${props.size}` : "",
        props.type ? `b-badge--type-${props.type}` : "",
    ];
});
</script>