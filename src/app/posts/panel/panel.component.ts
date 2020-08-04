import { PostService } from './../../services/post.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  statutsPost: boolean = false;
  status: boolean = true;
  posts: any[] = [];
  post = {
    id: 0,
    title: '',
    body: '',
    userId: 0
  };
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPosts();
  }


  /**get all data from api place holder  */
  getPosts() {
    this.postService.getAll()
      .subscribe(
        posts => {
          this.posts = posts;
        })

  }

  //**add post in api place holder */
  createPost() {
    this.postService.create(this.post)
      .subscribe(newPost => {
        this.post.id = newPost.id;
        this.posts.unshift(this.post);

        this.post = {
          id: 0,
          title: '',
          body: '',
          userId: 0
        }
      });


  }

  //***affichier data dans formulaire pour modifier */
  editPost(post) {
    this.post = post;
    this.status = false;
  }

  //**update data  */
  updatePost() {
    this.postService.update(this.post).subscribe(() => {
      this.post = {
        id: 0,
        title: '',
        body: '',
        userId: 0
      }
      this.status = true;
    })
  }

  //**delect data from api place holder and refleach  */
  delectPost(post) {
    this.postService.delete(this.post).subscribe(() => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    });
  }



}
