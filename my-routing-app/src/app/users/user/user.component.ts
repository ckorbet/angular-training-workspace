import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'] ?? '';
    const name = this.route.snapshot.params['name'] ?? '';
    this.user = { id, name };
    this.route.params.subscribe((params: Params) => {
      const id = params['id'] ?? '';
      const name = params['name'] ?? '';
      this.user = { id, name };
    });
  }

}
