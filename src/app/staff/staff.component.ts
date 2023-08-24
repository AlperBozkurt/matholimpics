import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/models/IUser';
import { ExternalApiService } from '../services/external-api.service';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  search = ''
  users:IUser[] = []
  oldUsers:IUser[] = []
  
  @Input()
  userItem?:IUser

  constructor(private externalApiService:ExternalApiService,private seo: SeoService ) { 

    this.seo.setTitle('Kadromuz')
    this.seo.setMeta('Kadromuz')

    const newThis = this
    this.externalApiService.allUsers().subscribe({
      next(value) {
        newThis.users = value
        newThis.oldUsers = value
      },
      error(err) {
        console.log(err.message);
        throw new Error( err )
      },
    })
    
  }

  searchChange() {
    const lower = this.search.toLowerCase()
    this.users = this.oldUsers.filter((item) => 
      item.name.toLowerCase().includes(lower) ||
      item.email.toLocaleLowerCase().includes(lower) ||
      item.phone.toLocaleLowerCase().includes(lower)
    )
  }

  
  fncBtnDetail() {
    alert(this.userItem?.id)
  }

  ngOnInit(): void {
  }

}
