<template>
    <div class="tabs">
        <ul class="tabs-header">
            <li v-for="tab in tabTitles" 
            :key="tab" 
            :class="{selected: tab == selectedTitle}" 
            @click="selectedTitle = tab"
            >
            {{ tab }}</li>
        </ul>
        <slot></slot>
    </div>
</template>

<script>
import { ref, provide } from 'vue'
    export default {
        props: {
            title: {
                type: String,
                default: "Project",
            }
        },
        setup (props, {slots}){
            console.log(slots.default())
            const tabTitles = ref(slots.default().map((tab) => tab.props ? tab.props.title : "null"))
            const selectedTitle = ref(tabTitles.value[0])

            provide('selectedTitle', selectedTitle)

            const selectTitle = (title) => {
                selectedTitle.value = title
            }

            return {
                selectedTitle,
                tabTitles,
                selectTitle
            }
        }
    }
</script>

<style>
.tabs {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

.tabs-header {
    display: flex;
    gap: 15px;
    list-style: none;
}

.tabs-header li {
    cursor: pointer;
    padding: 10px;
    border-radius: 10px;
    background: rgba(224, 0, 127, 0.1);
    transition: 0.4s all ease-out;
}

.tabs-header li.selected {
    background: rgba(224, 0, 127, 0.5);
    font-weight: bold;
}

</style>