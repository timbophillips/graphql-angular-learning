import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NamesGQL, NamesSubscriptionGQL, AddNameGQL, DelNameGQL } from '../generated/graphql';

@Component({
  selector: 'app-names',
  template: `
    <h3>apollo-hasura-learning</h3>
    <p>
      <input #newName (keydown)="onKeydown($event)" />
      <button (click)="addName(newName.value)">Add new name</button>
    </p>
    <ul *ngFor="let item of namesSub$ | async | select: 'names'">
      ID:{{
        item.id
      }}
      Name:
      {{
        item.name
      }}
      <button (click)="delName(item.id)">delete</button>
    </ul>
  `,
  styles: [
    `
      h3 {
        font-family: monospace;
        color: blue;
        margin-left: 40px;
      }
      p {
        font-family: monospace;
        margin-left: 40px;
      }
      ul,
      button,
      input {
        font-family: monospace;
        margin-right: 5px;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NamesComponent implements OnInit {

  names$: Observable<string[]>;
  namesSub$: Observable<{}>;

  title = 'graphql-angular-learning';

  constructor(
    private namesGQL: NamesGQL,
    private namesSubscriptionGQL: NamesSubscriptionGQL,
    private addNameGQL: AddNameGQL,
    private delNameGQL: DelNameGQL) {
  }

  ngOnInit() {
    this.names$ = this.namesGQL.fetch({}).pipe(
      map(result => result.data.names.map(x => x.name))
    )
    this.namesSub$ = this.namesSubscriptionGQL.subscribe();
  }

  addName(newName: string) {
    this.addNameGQL.mutate({ name: newName }).subscribe(x => console.log(JSON.stringify(x)));
  }

  delName(id: number | string) {
    this.delNameGQL.mutate({ id: id as number }).subscribe(x => console.log(JSON.stringify(x)));
  }

  onKeydown(event) {
    if (event.key === "Enter") {
      this.addName(event.target.value)
    }
  }

}
