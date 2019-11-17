import { Component } from '@angular/core';

import { NamesGQL, NamesSubscriptionGQL } from '../generated/graphql';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: `<app-names></app-names> `
  ,
  styles: []
})
export class AppComponent {

  names$: Observable<string[]>;
  namesSub$: Observable<{}>;

  title = 'graphql-angular-learning';

  constructor(namesService: NamesGQL, namesSub: NamesSubscriptionGQL) {
    this.names$ = namesService.fetch({}).pipe(
      map(result => result.data.names.map(x => x.name))
    )
    this.namesSub$ = namesSub.subscribe().pipe(map(x => x.data.names)
    );


  }
}
