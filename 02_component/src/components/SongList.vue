<template>
    <div>
        <ul>
            <SongListItem v-for="song in songs" :key="song.id" :song="song"/>
        </ul>
    </div>
</template>

<script>
import SongListItem from './SongListItem.vue';

    export default {
        name: 'SongList',
        components:{
            SongListItem
        },
        props:['songs']
    }
</script>
