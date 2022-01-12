import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memo',
  templateUrl: './memo.component.html',
  styleUrls: ['./memo.component.css']
})
export class MemoComponent implements OnInit {

  memos: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getAllMemo();
  }

  getAllMemo() {
    this.http.get('http://localhost:8087/memo').subscribe({
      next: (data) => { this.memos = data },
      error: (err) => { console.log(err) }
    });
  }

}
