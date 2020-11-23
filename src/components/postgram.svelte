<script>
export let post = {};

function like() {
	post.hasBeenLiked ? post.likes-- : post.likes++;
  post.hasBeenLiked = !post.hasBeenLiked;
}
</script>
<div class="sveltegram-post">
  <div class="header level">
      <div class="level-left">
        <figure class="image is-32x32">
          <a href={'/profile/'+post.username}>
            <img src={post.userImage} />
          </a>
        </figure>
        <span class="username">{post.username}</span>
      </div>
  </div>
  <div class={"image-container " + post.filter}
    style={'background-image: url(' + post.postImage + ')'}>
  </div>
  <div class="content">
    <div class="heart" on:click={like}>
      <i class={"fa-heart fa-lg " + (post.hasBeenLiked ? 'fas':'far')}></i>
    </div>
    <p class="likes">{post.likes} likes</p>
    <p class="caption"><span>{post.username}</span> {post.caption}</p>
  </div>
</div>

<style>
.sveltegram-post {
	 padding-top: 50px;
   border-bottom: 1px solid #eee;
}
 .sveltegram-post ~ .sveltegram-post {
	 padding-top: 0;
}
 .sveltegram-post {
	 padding: 5px 0;
}
 .sveltegram-post .header {
	 height: 30px;
	 border-bottom: 1px solid #fff;
	 margin: 7.5px 10px;
}
 .sveltegram-post .header .image {
	 display: inline-block;
}
 .sveltegram-post .header img {
	 border-radius: 99px;
}
 .sveltegram-post .header .username {
	 position: relative;
	 top: 3px;
	 padding-left: 5px;
	 font-size: 0.9rem;
	 font-weight: bold;
}
 .sveltegram-post .level {
	 margin-bottom: 0.5rem !important;
}
 .sveltegram-post .image-container {
	 height: 330px;
	 background-repeat: no-repeat;
	 background-position: center center;
	 background-size: cover;
}
 .sveltegram-post .content {
	 margin: 7.5px 10px;
}
 .sveltegram-post .far.fa-heart, .sveltegram-post .fas.fa-heart {
	 cursor: pointer;
}
 .sveltegram-post .fas.fa-heart {
	 color: #f06595;
}
 .sveltegram-post .likes {
	 margin: 5px 0;
	 margin-bottom: 5px !important;
	 font-size: 0.85rem;
	 font-weight: bold;
}
 .sveltegram-post .caption {
	 font-size: 0.85rem;
}
 .sveltegram-post .caption span {
	 font-weight: bold;
}
 .sveltegram-post:last-child {
	 margin-bottom: 80px;
}
 </style>
