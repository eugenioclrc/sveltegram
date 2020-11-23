<script>
export let post = {};

function like() {
	post.hasBeenLiked ? post.likes-- : post.likes++;
  post.hasBeenLiked = !post.hasBeenLiked;
}
</script>
<div class="vuegram-post">
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
.vuegram-post {
	 padding-top: 50px;
   border-bottom: 1px solid #eee;
}
 .vuegram-post ~ .vuegram-post {
	 padding-top: 0;
}
 .vuegram-post {
	 padding: 5px 0;
}
 .vuegram-post .header {
	 height: 30px;
	 border-bottom: 1px solid #fff;
	 margin: 7.5px 10px;
}
 .vuegram-post .header .image {
	 display: inline-block;
}
 .vuegram-post .header img {
	 border-radius: 99px;
}
 .vuegram-post .header .username {
	 position: relative;
	 top: 3px;
	 padding-left: 5px;
	 font-size: 0.9rem;
	 font-weight: bold;
}
 .vuegram-post .level {
	 margin-bottom: 0.5rem !important;
}
 .vuegram-post .image-container {
	 height: 330px;
	 background-repeat: no-repeat;
	 background-position: center center;
	 background-size: cover;
}
 .vuegram-post .content {
	 margin: 7.5px 10px;
}
 .vuegram-post .far.fa-heart, .vuegram-post .fas.fa-heart {
	 cursor: pointer;
}
 .vuegram-post .fas.fa-heart {
	 color: #f06595;
}
 .vuegram-post .likes {
	 margin: 5px 0;
	 margin-bottom: 5px !important;
	 font-size: 0.85rem;
	 font-weight: bold;
}
 .vuegram-post .caption {
	 font-size: 0.85rem;
}
 .vuegram-post .caption span {
	 font-weight: bold;
}
 .vuegram-post:last-child {
	 margin-bottom: 80px;
}
 </style>
