export class InMemoryDatastore {
    users = [];
    posts = [];
    comments = [];
    likes = [];

    // & users
    createUser(user) {
        this.users.push(user);
    }

    getUserByEmail(email) {
        return this.users.find((user) => user.email === email);
    }

    getUserByUsername(username) {
        return this.users.find((user) => user.username === username);
    }

    // & posts:
    listPosts() {
        return this.posts;
    }

    createPost(post) {
        this.posts.push(post);
    }

    getPost(id) {
        return this.posts.find((post) => post.id === id);
    }

    deletePost(id) {
        const index = this.posts.findIndex((post) => post.id === id);
        if (index === -1) return;
        this.posts.splice(index, 1);
    }

    // & likes
    createLike(like) {
        this.likes.push(like);
    }

    // & comments
    createComment(comment) {
        this.comments.push(comment);
    }

    listComments(postId) {
        return this.comments.filter((comment) => comment.postId === postId);
    }

    deletePost(id) {
        const index = this.comments.findIndex((comment) => comment.id === id);
        if (index === -1) return;
        this.comments.splice(index, 1);
    }
}

export const db = new InMemoryDatastore();