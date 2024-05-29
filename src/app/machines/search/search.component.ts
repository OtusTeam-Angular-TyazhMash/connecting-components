import { ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable, Subscription, fromEvent } from 'rxjs';
import { map, debounceTime, distinctUntilChanged, tap, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  @ViewChild('inputElement', { static: true })
  inputElement!: ElementRef;
  results: any[] = [];
  loading: boolean = false;
  data$: Observable<any>| undefined;

  constructor(private http: HttpClient, private cd: ChangeDetectorRef) {}

  ngOnInit() {    
    this.data$ = fromEvent(this.inputElement.nativeElement, 'input')
      .pipe(
        map((event: any) => event.target.value),
        debounceTime(500),
        distinctUntilChanged(),
        tap(() => this.setLoading(true)),
        switchMap(query => this.fetchData(query)),
        tap(() => this.setLoading(false))
      )
      //.subscribe(results => this.logToOutput(results));
  }

  setLoading(loading: boolean) {
    this.loading = loading;
    this.cd.detectChanges(); 
  }

  fetchData(query: string) {    
    return this.http.get<any>(`https://api.genderize.io?name=${query}`).pipe(
      map(response => Array.isArray(response) ? response : [response])
    );
  }

  logToOutput(results: any[]) {
    this.results = results;
    this.cd.detectChanges(); 
    console.log(results);
  }

  ngOnDestroy() {
    // if (this.subscription) {
    //   this.subscription.unsubscribe();
    // }
  }
}
