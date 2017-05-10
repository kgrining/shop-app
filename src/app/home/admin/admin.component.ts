import {Component, OnInit} from '@angular/core';
import {AdminService} from '../../services/admin.service';
import {User} from '../../landing/user.model';
import {Transaction} from '../transactions/transaction.model';
import {Item} from '../items/item/item.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  users: User[];
  transactions: Transaction[];

  constructor(private adminService: AdminService) {
  }

  ngOnInit() {
    this.adminService.getAllUsers().subscribe(
    (response) => this.users = response, (error) => console.log(error)
    );
    this.adminService.getAllTransactions().subscribe(
      (response) => this.transactions = response, (error) => console.log(error)
    );
  }

}
