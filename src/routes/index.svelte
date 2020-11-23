<script>
import posts from '$components/store/posts.js';
import Postgram from '$components/postgram.svelte';

</script>
	<div class="feed">
		{#each $posts as post}
			<Postgram {post} />
		{/each}
	</div>

<style>

.feed {
	width: 100%;
	height: 100%;
	overflow-y: scroll;
	overflow-x: hidden;
	margin-right: -15px;
}

.caption-container {
height: 210px;
display: flex;
align-items: center;
justify-content: center;
}

.caption-container textarea {
border: 0;
font-size: 1rem;
width: 100%;
padding: 10px;
border-bottom: 1px solid #eeeeee;
}

.caption-container textarea:focus {
outline: 0;
}

.selected-image {
background-repeat: no-repeat;
background-size: cover;
background-position: center center;
height: 330px;
}

.filter-container {
height: 220px;
padding: 30px 10px;
white-space: nowrap;
overflow-x: scroll;
}

</style>
