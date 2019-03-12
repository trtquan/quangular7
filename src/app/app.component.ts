import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private logs: string[] = [];
  // tslint:disable-next-line:no-inferrable-types
  private isShowDetail: boolean = false;
  ngOnInit() {}
  onToggle() {
    this.isShowDetail = ! this.isShowDetail;
    const {length} = this.logs;
    this.logs.push(`log ${length}`);
  }
}
