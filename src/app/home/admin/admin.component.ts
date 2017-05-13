import {Component, OnInit} from '@angular/core';
import {AdminService} from '../../services/admin.service';
import {User} from '../../landing/user.model';
import {Transaction} from '../../models/transaction.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html'
})
export class AdminComponent implements OnInit {

  users: User[];
  transactions: Transaction[];

  constructor(private adminService: AdminService) {
  }

  ngOnInit() {
    this.adminService.getAllUsers().subscribe(
      (response) => this.users = response, (error) => alert('Error occured')
    );
    this.adminService.getAllTransactions().subscribe(
      (response) => this.transactions = response, (error) => alert('Error occured')
    );
  }

}
