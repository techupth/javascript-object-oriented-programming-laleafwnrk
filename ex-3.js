//  Start coding here
class User{
    constructor(id,name,email){
        this.id=id;
        this.name=name;
        this.email=email;
    }
}
class PostList{
    constructor(){
        this.posts = [];
    }
    addPost(post) {
        this.posts.push({
          id: this.posts.length + 1,
          title: post.title,
          content: post.content,
          comments: post.comments,
        });
      }
    
      sharePost(postId) {
        console.log(
          `You've shared post "${this.posts[postId - 1].title}" to your friend.`
        );
      }
}
class Post {
    constructor(id, title, content) {
      this.id = id;
      this.title = title;
      this.content = content;
      this.comments = [];
    }
    addComment(comment) {
        this.comments.push(comment);
      }
}
class Comment {
    constructor(id, content, createdBy) {
      this.id = id;
      this.content = content;
      this.createdBy = createdBy;
      this.like = 0;
    }
  
    addLike() {
      this.like = this.like + 1;
    }
  }
class Facebook {
    constructor() {
      this.groupList = [];
      this.pageList = [];
    }
  
    addGroup(group) {
      this.groupList.push(group);
    }
  
    addPage(page) {
      this.pageList.push(page);
    }
  }
class FacebookPage {
    constructor(name) {
      this.name = name;
    }
  }
  
class FacebookGroup {
    constructor(name) {
      this.name = name;
    }
  }
  
class Notification {
    constructor(id) {
      this.id = id;
    }
  
    send(comment, post) {
      console.log(
        `Notification: ${comment.createdBy.name} has just commented on this post—"${post.title}".`
      );
    }
  }
  const john = new User(1, "John", "john@gmail.com");

  const postList = new PostList();

  const firstPost = new Post(1, "My first post", "This is post content");
  
  
  const firstComment = new Comment(1, "My first comment", john);
  
  firstComment.addLike();
  firstComment.addLike();

  console.log(firstComment.like);
  
  postList.addPost(firstPost);
  
  console.log(postList.posts);
  
  firstPost.addComment(firstComment);
  
  postList.sharePost(1);
  
  const facebook = new Facebook();
  
  const firstPage = new FacebookPage("My first page");
  
  const firstGroup = new FacebookGroup("My first group");
  
  facebook.addPage(firstPage);
  facebook.addGroup(firstGroup);
  
  console.log(facebook.pageList);
  console.log(facebook.groupList);
  
  const notification = new Notification(1);

  notification.send(firstComment, firstPost);
  