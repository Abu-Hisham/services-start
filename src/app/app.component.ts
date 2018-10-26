import { Component, OnInit } from '@angular/core';
import { AccountService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountService]
})
export class AppComponent implements OnInit{
  accounts: {name: string, status: string}[] = [];
  constructor(private accountsService: AccountService){}

  ngOnInit(){
    this.accounts = this.accountsService.accounts
  }
  onAccountAdded(newAccount: {name: string, status: string}) {
    this.accountsService.addAccount(newAccount.name, newAccount.status);
  }

  onStatusChanged(updateInfo: {id: number, newStatus: string}) {
    this.accountsService.updateStatus(updateInfo.id, updateInfo.newStatus);   
  }
}
