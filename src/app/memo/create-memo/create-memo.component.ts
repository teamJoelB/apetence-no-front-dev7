import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-memo',
  templateUrl: './create-memo.component.html',
  styleUrls: ['./create-memo.component.css']
})
export class CreateMemoComponent implements OnInit {

  constructor(private http: HttpClient, private dialogRef: MatDialogRef<CreateMemoComponent>) { }

  ngOnInit(): void {
  }

  createMemo(memo: any){
    let user = {id: 1};
    let m = {contenu: memo.contenu, user: user};
    this.http.post('http://localhost:8087/sendPublicMemo', m).subscribe({
      next: (data)=> {console.log(data); this.dialogRef.close()},
      error: (err)=> {console.log(err)}
    });
  }

}
